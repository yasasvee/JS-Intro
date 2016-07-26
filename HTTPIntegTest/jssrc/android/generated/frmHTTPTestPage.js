function addWidgetsfrmHTTPTestPage() {
    var button213792175820871 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button213792175820871",
        "isVisible": true,
        "onClick": p2kwiet180672937060_button213792175820871_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Go to URL Test Page"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var button213792175820872 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button213792175820872",
        "isVisible": true,
        "onClick": p2kwiet180672937060_button213792175820872_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Go To Post with Params"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHTTPTestPage.add(button213792175820871, button213792175820872);
};

function frmHTTPTestPageGlobals() {
    frmHTTPTestPage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHTTPTestPage,
        "enabledForIdleTimeout": false,
        "id": "frmHTTPTestPage",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "showActionBar": true,
        "showActionBarIcon": true,
        "titleBar": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmHTTPTestPage.info = {
        "kuid": "p2kwiet180672937060"
    };
};