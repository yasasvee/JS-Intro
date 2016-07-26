function callbackfunctionAsyncPost(status, resulttable) {
    if (status == 400) {
        if (resulttable["opstatus"] == 0) {
            alert("opstatus is zero");
        }
    }
    kony.print(status)
    kony.print(resulttable)
    frmHttpPostParams.lbl1.text += "status = " + status + "\n resulttable = \n" + resulttable
    var stat = null;
    var httpresp = null
    if(resulttable != null)
    httpresp = resulttable.httpresponse;
    if(httpresp != null)
    	stat = httpresp["integrityStatus"];
    frmHttpPostParams.lblIntegStatus.text = getIntegritystatusString(stat);

}
httpmtdP = "post"
httpreqmtdP = constants.HTTP_METHOD_POST
function asyncServiceCallPostParams() {
    try {
   		frmHttpPostParams.lblIntegStatus.text = ""
        var myhttpconfig = {
            timeout: 5,
            method: httpmtdP
        }
        var inputParamTable = {
            httpconfig: myhttpconfig,
            userId : "test",
            password:"test123"
        }
        if( postContentType == "json")
			inputParamTable["httpheaders"] = postreqhdrs
        frmHttpPostParams.lbl1.text = "httpmtdP = " + httpmtdP + "\n"+"postContentType = "+postContentType+"\n";
        var url = getURL(frmHttpPostParams.tb1.text);
        if(url == null) 
        	return;
	    kony.print("AsyncServiceCall to URL = " + url + " httpmtdP = " + httpmtdP);
	    var connHandle = kony.net.invokeServiceAsync(url, inputParamTable, callbackfunctionAsyncPost);
    } catch (err) {
        alert("Error" + err);
    }
}
postreqhdrs = {
	"Content-Type" : "application/json"
}
function syncServiceCallPostParams() {
    try {
    	frmHttpPostParams.lblIntegStatus.text = ""
        frmHttpPostParams.lbl1.text = "httpmtdP = " + httpmtdP + "\n"+"postContentType = "+postContentType+"\n";
        var url = getURL(frmHttpPostParams.tb1.text);
        if(url == null) 
        	return;
        kony.print("SyncServiceCall to URL = " + url + " httpmtdP = " + httpmtdP);
        var myhttpconfig = {
            timeout: 5,
            method: httpmtdP
        }
        var inputParamTable = {
            httpconfig: myhttpconfig,
            userId : "test",
            password:"test123"
        }
        if( postContentType == "json")
			inputParamTable["httpheaders"] = postreqhdrs
        var resulttable = kony.net.invokeService(url, inputParamTable, true);
        kony.print(resulttable)
        frmHttpPostParams.lbl1.text += "resulttable = \n" + resulttable
        
	    var stat = null;
	    var httpresp = null
	    if(resulttable != null)
	    httpresp = resulttable.httpresponse;
	    if(httpresp != null)
	    	stat = httpresp["integrityStatus"];
	    frmHttpPostParams.lblIntegStatus.text = getIntegritystatusString(stat);
        
    } catch (err) {
        alert("Error" + err);
    }
}
function callbackfunctionAsyncHTTPPost(request) {
		var state = request.readyState
		frmHttpPostParams.lbl1.text += "\n"+state
		if(state == constants.HTTP_READY_STATE_DONE){
	        var httpresp = request.response;
	        var respType = request.responseType
	        if((httpresp != null) && (respType == "json"))
		        httpresp = JSON.stringify(httpresp);
	        frmHttpPostParams.lbl1.text += "\nresponseType = "+respType+"\n resp = "+httpresp;
		    var stat = request["integrityStatus"];
		    frmHttpPostParams.lblIntegStatus.text = getIntegritystatusString(stat);
	    }
}
function getFileWithSmapleContent(){
	var path  = kony.io.FileSystem.getDataDirectoryPath()+"/Samplefile.txt"
	var f1 = kony.io.FileSystem.getFile(path);
	if(!f1.exists()){
		f1.write("Random sample text in file");
	}
	return f1;
}
function httpRequestSendPostParams(isAsync) {
    try {
    	frmHttpPostParams.lblIntegStatus.text = ""
        frmHttpPostParams.lbl1.text = "httpreqmtdP = " + httpreqmtdP + "\n"+"postContentType = "+postContentType+"\n";
        var url = getURL(frmHttpPostParams.tb1.text);
        if(url == null) 
        	return;
        kony.print("httpRequestSend to URL = " + url + "httpreqmtdP = " + httpreqmtdP);
        var request = new kony.net.HttpRequest();
        var asyncFlag = false;
        if(isAsync == "true"){
          request.onReadyStateChange  = callbackfunctionAsyncHTTPPost;
          asyncFlag = true;
        }
        request.open(httpreqmtdP, url, asyncFlag);
		var sendData = {}
	    var postdata = {
		    "userId":"test",
		    "password":"test123"
		};
        if(postContentType == "jsontable"){
			request.setRequestHeader("Content-Type", "application/json");
			sendData = postdata; //Sending LuaTable is not working earlier and is now fixed in fwk code in Android
		}else if(postContentType == "jsonstring"){
			request.setRequestHeader("Content-Type", "application/json");
			sendData = JSON.stringify(postdata); //Sending String is not working earlier and is now fixed in fwk code in IOS
			//sendData = "{\"userId\":\"test\",\"password\":\"test123\"}";
		}else if(postContentType == "fileupload"){
			var f1 = getFileWithSmapleContent();
			var path = f1.fullPath;
			frmHttpPostParams.lbl1.text += "File path = "+path+"\nFile Name = "+f1.name+"\n";
			sendData = new kony.net.FormData();
		    sendData.append(f1.name, f1.read());
		}else if(postContentType == "rawbytes"){
			var f1 = getFileWithSmapleContent();
			frmHttpPostParams.lbl1.text += "sending rawdata\n"
			sendData = f1.read();  
		}else{
	        sendData = new kony.net.FormData();
	        for (var key in postdata){
					var val = postdata[key];
					sendData.append(key, val);
					frmHttpPostParams.lbl1.text += "" + key + "," + val + "\n";
			}
		}
        request.send(sendData);
        if(isAsync != "true"){
	        var httpresp = request.response;
	        var respType = request.responseType
	        if((httpresp != null) && (respType == "json"))
		        httpresp = JSON.stringify(httpresp);
	        frmHttpPostParams.lbl1.text += "\nresponseType = "+respType+"\n resp = "+httpresp;
		    var stat = request["integrityStatus"];
		    frmHttpPostParams.lblIntegStatus.text = getIntegritystatusString(stat);
	    }
    } catch (err) {
        alert("Error" + err);
    }
}
function getCurrentIntegritySettingsPost(){
	frmHttpPostParams.lblIntegStatus.text = integritySettingsTbl
}
postContentType = null
function setfrmHttpPostParamsContentType(type){
	postContentType = type	
	var enablebtnJsonTable = true
	var enablebtnJsonString = true
	var enablebtnFileUpload = true
	var enablebtnRawBytes = true
	var enablebtnReset = true
	if(postContentType == "jsontable"){
		enablebtnJsonTable = false;
	}else if(postContentType == "jsonstring"){
		enablebtnJsonString = false
	}else if(postContentType == "fileupload"){
		enablebtnFileUpload = false
	}else if(postContentType == "rawbytes"){
		enablebtnRawBytes = false
	}else{
		postContentType = null
		enablebtnReset = false
	}
	frmHttpPostParams.btnJsonTable.setEnabled(enablebtnJsonTable);
	frmHttpPostParams.btnJsonString.setEnabled(enablebtnJsonString);
	frmHttpPostParams.btnFileUpload.setEnabled(enablebtnFileUpload);
	frmHttpPostParams.btnRawBytes.setEnabled(enablebtnRawBytes);
	frmHttpPostParams.btnReset.setEnabled(enablebtnReset);
}
function frmHttpPostParamsPreShow(){
	setfrmHttpPostParamsContentType(null)
}