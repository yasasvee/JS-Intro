integritySettingsTbl = null
domainsTbl = null

function addDomain() {
    if (domainsTbl == null) domainsTbl = {}
    var d = frmInteg.tbDomain.text
    if (d != "") domainsTbl[d] = true
    frmInteg.tbDomain.text = ""
}

function removeDomain() {
    if (domainsTbl == null) return;
    var d = frmInteg.tbDomain.text
    if (d != "") delete domainsTbl[d]
    frmInteg.tbDomain.text = ""
}

function clearAllDomains() {
    domainsTbl = null
    frmInteg.tbDomain.text = ""
}

function displayDomainsList() {
    if (domainsTbl != null) {
        //frmInteg.lblDomains.text = domainsTbl;
        var domains = getDomainsList();
        frmInteg.lblDomains.text = "\n" + domains;
    } else frmInteg.lblDomains.text = "List is empty";
}

function getDomainsList() {
    var domains = []
    if (domainsTbl != null) {
        for (var domain in domainsTbl) {
            domains.push(domain);
        }
    }
    return domains;
}
//algo = frmInteg.tbAlgo.text
function setAlgo() {
    algo = frmInteg.tbAlgo.text
}
//salt = frmInteg.tbSalt.text
function setSalt() {
    salt = frmInteg.tbSalt.text
}
//hdr = frmInteg.tbHdr.text
function setHdr() {
    hdr = frmInteg.tbHdr.text
}
validateResp = false

function setvalidateRespTrue() {
    validateResp = true
    frmInteg.btnValT.setEnabled(false);
    frmInteg.btnValF.setEnabled(true);
}

function setvalidateRespFalse() {
    validateResp = false
    frmInteg.btnValF.setEnabled(false);
    frmInteg.btnValT.setEnabled(true);
}

function setIntegrityCheck() {
    var domains = getDomainsList();
    integritySettingsTbl = {
        algo: frmInteg.tbAlgo.text,
        salt: frmInteg.tbSalt.text,
        headerName: frmInteg.tbHdr.text,
        validateResp: validateResp,
        hostNamesList: domains
    };
    try {
        kony.net.setIntegrityCheck(integritySettingsTbl);
        frmInteg.lblIntegrityStatus.text = integritySettingsTbl;
    } catch (e) {
        frmInteg.lblIntegrityStatus.text = e;
    }
}

function removeIntegrityCheck() {
    kony.net.removeIntegrityCheck();
    integritySettingsTbl = null
    if (integritySettingsTbl == null) frmInteg.lblIntegrityStatus.text = "Removed Integrity Check";
}

function preshowCB() {
    frmInteg.btnValF.setEnabled(false);
    frmInteg.btnValT.setEnabled(true);
}