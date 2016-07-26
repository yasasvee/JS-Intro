function callbackfunction(status, resulttable) {
    if (status == 400) {
        if (resulttable["opstatus"] == 0) {
            alert("opstatus is zero");
        }
    }
    kony.print(status)
    kony.print(resulttable)
    frmHttp.lbl1.text += "status = " + status + "\n resulttable = \n" + resulttable
	var stat = null;
    var httpresp = null
    if(resulttable != null)
    httpresp = resulttable.httpresponse;
    if(httpresp != null)
    	stat = httpresp["integrityStatus"];
    frmHttp.lblIntegStatus.text += getIntegritystatusString(stat) +"\n";
}
httppostreqhdrs = {
	"Content-Type" : "application/json"
}
function asyncServiceCall(invokeTwice) {
    try {
    	frmHttp.lblIntegStatus.text = ""
        var myhttpconfig = {
            timeout: 5,
            method: httpmtd
        }
        var inputParamTable = {
            httpconfig: myhttpconfig
        }
		frmHttp.lbl1.text= "";
		if(httpreqmtd == constants.HTTP_METHOD_POST && keyValsTbl != null){
			for(var key in keyValsTbl){
				var val = keyValsTbl[key];
				inputParamTable[key] = val
				frmHttp.lbl1.text += "" + key + "," + val + "\n";
			}
		}
		if( contentType == "json")
			inputParamTable["httpheaders"] = httppostreqhdrs
        frmHttp.lbl1.text = "httpmtd = " + httpmtd + "\n"+"contentType = "+contentType+"\n";
        var url = getURL(frmHttp.tb1.text);
        if(url == null) 
        	return;
	    kony.print("AsyncServiceCall to URL = " + url + " httpmtd = " + httpmtd+ "invokeTwice = "+invokeTwice);
	    var connHandle = kony.net.invokeServiceAsync(url, inputParamTable, callbackfunction);
	    if(invokeTwice == "true")
	    	kony.net.invokeServiceAsync(url, inputParamTable, callbackfunction);
    } catch (err) {
        alert("Error" + err);
    }
}

function syncServiceCall() {
    try {
    	frmHttp.lblIntegStatus.text = ""
        frmHttp.lbl1.text = "httpmtd = " + httpmtd + "\n"+"contentType = "+contentType+"\n";
        var url = getURL(frmHttp.tb1.text);
        if(url == null) 
        	return;
        kony.print("SyncServiceCall to URL = " + url + " httpmtd = " + httpmtd);
        var myhttpconfig = {
            timeout: 5,
            method: httpmtd
        }
        var inputParamTable = {
            httpconfig: myhttpconfig
        }
		frmHttp.lbl1.text= "";
		if(httpreqmtd == constants.HTTP_METHOD_POST && keyValsTbl != null){
			for(var key in keyValsTbl){
				var val = keyValsTbl[key];
				inputParamTable[key] = val
				frmHttp.lbl1.text += "" + key + "," + val + "\n";
			}
		}
		if( contentType == "json")
			inputParamTable["httpheaders"] = httppostreqhdrs
        frmHttp.lbl1.text = "httpmtd = " + httpmtd + "\n";
        var resulttable = kony.net.invokeService(url, inputParamTable, true);
        kony.print(resulttable)
        frmHttp.lbl1.text += "resulttable = \n" + resulttable
		var stat = null;
		var httpresp = null
		if(resulttable != null)
		httpresp = resulttable.httpresponse;
		if(httpresp != null)
		stat = httpresp["integrityStatus"];
		frmHttp.lblIntegStatus.text = getIntegritystatusString(stat);
    } catch (err) {
        alert("Error" + err);
    }
}
function callbackfunctionAsyncHTTP(request) {
		var state = request.readyState
		frmHttp.lbl1.text += "\n"+state
		if(state == constants.HTTP_READY_STATE_DONE){
	        var httpresp = request.response;
	        var respType = request.responseType
	        if((httpresp != null) && (respType == "json"))
		        httpresp = JSON.stringify(httpresp);
	        frmHttp.lbl1.text += "\nresponseType = "+respType+"\n resp = "+httpresp;
		    var stat = request["integrityStatus"];
        frmHttp.lblIntegStatus.text += getIntegritystatusString(stat)+"\n";
	    }
}
function httpRequestSend(isAsync,invokeTwice) {
    try {
    	frmHttp.lblIntegStatus.text = ""
        frmHttp.lbl1.text = "httpreqmtd = " + httpreqmtd + "\n"+"contentType = "+contentType+"\n";
        var url = getURL(frmHttp.tb1.text);
        if(url == null) 
        	return;
        kony.print("httpRequestSend to URL = " + url + "httpreqmtd = " + httpreqmtd);
        var request = new kony.net.HttpRequest();
        var asyncFlag = false;
        if(isAsync == "true"){
        	request.onReadyStateChange  = callbackfunctionAsyncHTTP;
        	asyncFlag = true;
        }
        request.open(httpreqmtd, url, asyncFlag);
        var frmData= new kony.net.FormData();
		if(httpreqmtd == constants.HTTP_METHOD_POST && keyValsTbl != null){
            for (var key in keyValsTbl){
				var val = keyValsTbl[key];
				frmData.append(key, val);
				frmHttp.lbl1.text += "" + key + "," + val + "\n";
			}
		}
		if( contentType == "json")
			request.setRequestHeader("Content-Type", "application/json");
        if (invokeTwice == "true" && isAsync == "true"){
                var request1 = new kony.net.HttpRequest();
                var asyncFlag = false;
                if (isAsync == "true") {
                    request1.onReadyStateChange = callbackfunctionAsyncHTTP;
                    asyncFlag = true;
                }
                request1.open(httpreqmtd, url, asyncFlag);
                var frmData = new kony.net.FormData();
                if (httpreqmtd == constants.HTTP_METHOD_POST && keyValsTbl != null) {
                    for (var key in keyValsTbl) {
                        var val = keyValsTbl[key];
                        frmData.append(key, val);
                    }
                }
                if (contentType == "json") request1.setRequestHeader("Content-Type", "application/json");
                request1.send(frmData);
        }

        request.send(frmData);
        if(isAsync != "true"){
	        var httpresp = request.response;
	        var respType = request.responseType
	        if((httpresp != null) && (respType == "json"))
		        httpresp = JSON.stringify(httpresp);
	        frmHttp.lbl1.text += "\nresponseType = "+respType+"\n resp = "+httpresp;
	    
		    var stat = request["integrityStatus"];
		    frmHttp.lblIntegStatus.text = getIntegritystatusString(stat);
	}
    } catch (err) {
        alert("Error" + err);
    }
}
httpmtd = "get";
httpreqmtd = constants.HTTP_METHOD_GET

function setHTTPMethodPost() {
    httpmtd = "post";
    httpreqmtd = constants.HTTP_METHOD_POST
    frmHttp.lbl2.text = "post";
}

function setHTTPMethodGet() {
    httpmtd = "get";
    httpreqmtd = constants.HTTP_METHOD_GET
    frmHttp.lbl2.text = "get";
}
function getCurrentIntegritySettings(){
	frmHttp.lblIntegStatus.text = integritySettingsTbl
}
keyValsTbl =  null
function addKeyVal() {
	if( keyValsTbl == null)
		keyValsTbl = {}
	var k = frmHttp.tbKey.text
	var v = frmHttp.tbValue.text
	if( k!= null)
		k = k.trim()
	if( v != null)
		v = v.trim()
    if(k != "" && v != "")
    	keyValsTbl[k]=v
	else{
		alert("Enter both key and value parameters to add")
		return;
	}
	
    frmHttp.tbKey.text = ""
	frmHttp.tbValue.text = ""
}
function removeKeyVal() {
	if( keyValsTbl == null)
		return;
	var k = frmHttp.tbKey.text
	if(k != "")
    	delete keyValsTbl[k]
    frmHttp.tbKey.text = ""
	frmHttp.tbValue.text = ""  	
}
function clearAllKeyVals() {
	keyValsTbl = null
    frmHttp.tbKey.text = ""
	frmHttp.tbValue.text = ""
}
function displayKeyValsList() {
    frmHttp.lbl1.text = "";
    if (keyValsTbl != null) {
		for (var key in keyValsTbl){
			var val = keyValsTbl[key];
			frmHttp.lbl1.text += "" + key + "," + val + "\n";
		}
	} else frmHttp.lblKeyVals.text = "List is empty";
}
contentType = null
function setContentTypeJson(){
	contentType = "json"
	frmHttp.btnjson.setEnabled(false);
	frmHttp.btnnojson.setEnabled(true);
}
function restContentType(){
	contentType = null
	frmHttp.btnnojson.setEnabled(false);
	frmHttp.btnjson.setEnabled(true);
}
function frmHttpPreShow(){
	contentType = null
	frmHttp.btnnojson.setEnabled(false);
	frmHttp.btnjson.setEnabled(true);
}