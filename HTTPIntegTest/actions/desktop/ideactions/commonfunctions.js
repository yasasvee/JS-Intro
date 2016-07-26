function getIntegritystatusString( stat ){
	if(stat != null){
		if(stat == constants.HTTP_INTEGRITY_CHECK_NOT_DONE)
			return "HTTP_INTEGRITY_CHECK_NOT_DONE";
		if(stat == constants.HTTP_INTEGRITY_CHECK_SUCCESSFUL)
			return "HTTP_INTEGRITY_CHECK_SUCCESSFUL";
		if( stat == constants.HTTP_INTEGRITY_CHECK_FAILED)
			return "HTTP_INTEGRITY_CHECK_FAILED";
	}else
	return "Property Not Set";
}
function getURL(url) {
        if (url != null && url.trim() != "")
        	return url;
        else
        	alert("URL field Empty");
        return null;
}