//actions.js file 
function p2kwiet180672937032_btnAddKey_onClick_seq0(eventobject) {
    return addKeyVal.call(this);
}

function p2kwiet180672937032_btnAsync2_onClick_seq0(eventobject) {
    return asyncServiceCall.call(this, "true");
}

function p2kwiet180672937032_btnAsync_onClick_seq0(eventobject) {
    return asyncServiceCall.call(this, "false");
}

function p2kwiet180672937032_btnClearKeys_onClick_seq0(eventobject) {
    return clearAllKeyVals.call(this);
}

function p2kwiet180672937032_btnDisplayKeys_onClick_seq0(eventobject) {
    return displayKeyValsList.call(this);
}

function p2kwiet180672937032_btnGetSettings_onClick_seq0(eventobject) {
    return getCurrentIntegritySettings.call(this);
}

function p2kwiet180672937032_btnHttpAsync2_onClick_seq0(eventobject) {
    return httpRequestSend.call(this, "true", "true");
}

function p2kwiet180672937032_btnHttpAsync_onClick_seq0(eventobject) {
    return httpRequestSend.call(this, "true", "false");
}

function p2kwiet180672937032_btnHttpSync_onClick_seq0(eventobject) {
    return httpRequestSend.call(this, "false", null);
}

function p2kwiet180672937032_btnIntegSetting_onClick_seq0(eventobject) {
    frmInteg.show();
}

function p2kwiet180672937032_btnjson_onClick_seq0(eventobject) {
    return setContentTypeJson.call(this);
}

function p2kwiet180672937032_btnnojson_onClick_seq0(eventobject) {
    return restContentType.call(this);
}

function p2kwiet180672937032_btnRemoveKey_onClick_seq0(eventobject) {
    return removeKeyVal.call(this);
}

function p2kwiet180672937032_btnSync_onClick_seq0(eventobject) {
    return syncServiceCall.call(this);
}

function p2kwiet180672937032_button186678331555733_onClick_seq0(eventobject) {
    return setHTTPMethodPost.call(this);
}

function p2kwiet180672937032_button186678331555734_onClick_seq0(eventobject) {
    return setHTTPMethodGet.call(this);
}

function p2kwiet180672937032_frmHttp_preshow_seq0(eventobject, neworientation) {
    return frmHttpPreShow.call(this);
}

function p2kwiet180672937055_btnAsync_onClick_seq0(eventobject) {
    return asyncServiceCallPostParams.call(this);
}

function p2kwiet180672937055_btnFileUpload_onClick_seq0(eventobject) {
    return setfrmHttpPostParamsContentType.call(this, "fileupload");
}

function p2kwiet180672937055_btnGetSettings_onClick_seq0(eventobject) {
    return getCurrentIntegritySettingsPost.call(this);
}

function p2kwiet180672937055_btnHttpAsync_onClick_seq0(eventobject) {
    return httpRequestSendPostParams.call(this, "true");
}

function p2kwiet180672937055_btnHttpSync_onClick_seq0(eventobject) {
    return httpRequestSendPostParams.call(this, "false");
}

function p2kwiet180672937055_btnIntegSetting_onClick_seq0(eventobject) {
    frmInteg.show();
}

function p2kwiet180672937055_btnJsonString_onClick_seq0(eventobject) {
    return setfrmHttpPostParamsContentType.call(this, "jsonstring");
}

function p2kwiet180672937055_btnJsonTable_onClick_seq0(eventobject) {
    return setfrmHttpPostParamsContentType.call(this, "jsontable");
}

function p2kwiet180672937055_btnRawBytes_onClick_seq0(eventobject) {
    return setfrmHttpPostParamsContentType.call(this, "rawbytes");
}

function p2kwiet180672937055_btnReset_onClick_seq0(eventobject) {
    return setfrmHttpPostParamsContentType.call(this, null);
}

function p2kwiet180672937055_btnSync_onClick_seq0(eventobject) {
    return syncServiceCallPostParams.call(this);
}

function p2kwiet180672937055_frmHttpPostParams_preshow_seq0(eventobject, neworientation) {
    return frmHttpPostParamsPreShow.call(this);
}

function p2kwiet180672937060_button213792175820871_onClick_seq0(eventobject) {
    frmHttp.show();
}

function p2kwiet180672937060_button213792175820872_onClick_seq0(eventobject) {
    frmHttpPostParams.show();
}

function p2kwiet180672937088_btn1_onClick_seq0(eventobject) {
    return addDomain.call(this);
}

function p2kwiet180672937088_btn2_onClick_seq0(eventobject) {
    return removeDomain.call(this);
}

function p2kwiet180672937088_btn3_onClick_seq0(eventobject) {
    return clearAllDomains.call(this);
}

function p2kwiet180672937088_btn4_onClick_seq0(eventobject) {
    return displayDomainsList.call(this);
}

function p2kwiet180672937088_btnAlgo_onClick_seq0(eventobject) {
    return setAlgo.call(this);
}

function p2kwiet180672937088_btnHdr_onClick_seq0(eventobject) {
    return setHdr.call(this);
}

function p2kwiet180672937088_btnRm_onClick_seq0(eventobject) {
    return removeIntegrityCheck.call(this);
}

function p2kwiet180672937088_btnSalt_onClick_seq0(eventobject) {
    return setSalt.call(this);
}

function p2kwiet180672937088_btnSet_onClick_seq0(eventobject) {
    return setIntegrityCheck.call(this);
}

function p2kwiet180672937088_btnTestPage_onClick_seq0(eventobject) {
    frmHTTPTestPage.show();
}

function p2kwiet180672937088_btnValF_onClick_seq0(eventobject) {
    return setvalidateRespFalse.call(this);
}

function p2kwiet180672937088_btnValT_onClick_seq0(eventobject) {
    return setvalidateRespTrue.call(this);
}

function p2kwiet180672937088_frmInteg_preshow_seq0(eventobject, neworientation) {
    return preshowCB.call(this);
}