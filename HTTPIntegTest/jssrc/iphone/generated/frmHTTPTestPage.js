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
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmHTTPTestPage.add(button213792175820871, button213792175820872);
};

function frmHTTPTestPageGlobals() {
    frmHTTPTestPage = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHTTPTestPage,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true
    });
    frmHTTPTestPage.info = {
        "kuid": "p2kwiet180672937060"
    };
};