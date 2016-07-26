function addWidgetsfrmHttpPostParams() {
    var hbox181504105920862 = new kony.ui.Box({
        "id": "hbox181504105920862",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnGetSettings = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnGetSettings",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnGetSettings_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Get Current Integrity Settings"
    }, {
        "containerWeight": 50,
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
    var btnIntegSetting = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnIntegSetting",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnIntegSetting_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Go To Integrity Settings Page"
    }, {
        "containerWeight": 50,
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
    hbox181504105920862.add(btnGetSettings, btnIntegSetting);
    var hbox213792175849437 = new kony.ui.Box({
        "id": "hbox213792175849437",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var label213792175849438 = new kony.ui.Label({
        "id": "label213792175849438",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Enter URL"
    }, {
        "containerWeight": 30,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var tb1 = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "TBWhiteBGBlackFont",
        "id": "tb1",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": "Enter URL",
        "secureTextEntry": false,
        "skin": "TBWhiteBGBlackFont",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 70,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    hbox213792175849437.add(label213792175849438, tb1);
    var label213792175853611 = new kony.ui.Label({
        "id": "label213792175853611",
        "isVisible": true,
        "skin": "lblNormal",
        "text": "Set Content Type  For HTTP Req Testing"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var hbox213792175851536 = new kony.ui.Box({
        "id": "hbox213792175851536",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnJsonTable = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnJsonTable",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnJsonTable_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "JSON Table"
    }, {
        "containerWeight": 21,
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
    var btnJsonString = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnJsonString",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnJsonString_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "JSON String"
    }, {
        "containerWeight": 21,
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
    var btnFileUpload = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnFileUpload",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnFileUpload_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "File Upload"
    }, {
        "containerWeight": 21,
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
    var btnRawBytes = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnRawBytes",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnRawBytes_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "RawBytes"
    }, {
        "containerWeight": 18,
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
    var btnReset = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnReset",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnReset_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Reset"
    }, {
        "containerWeight": 19,
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
    hbox213792175851536.add(btnJsonTable, btnJsonString, btnFileUpload, btnRawBytes, btnReset);
    var hbox213791704755708 = new kony.ui.Box({
        "id": "hbox213791704755708",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var btnAsync = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnAsync",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnAsync_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Async Service "
    }, {
        "containerWeight": 25,
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
    var btnSync = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnSync",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnSync_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "Sync Service "
    }, {
        "containerWeight": 25,
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
    var btnHttpSync = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnHttpSync",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnHttpSync_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "HTTP Req Sync"
    }, {
        "containerWeight": 25,
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
    var btnHttpAsync = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "btnHttpAsync",
        "isVisible": true,
        "onClick": p2kwiet180672937055_btnHttpAsync_onClick_seq0,
        "skin": "BtnGreyBGBlackFont",
        "text": "HTTP Req Asyn"
    }, {
        "containerWeight": 25,
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
    hbox213791704755708.add(btnAsync, btnSync, btnHttpSync, btnHttpAsync);
    var lblIntegStatus = new kony.ui.Label({
        "id": "lblIntegStatus",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var lbl1 = new kony.ui.Label({
        "id": "lbl1",
        "isVisible": true,
        "skin": "lblNormal"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    frmHttpPostParams.add(hbox181504105920862, hbox213792175849437, label213792175853611, hbox213792175851536, hbox213791704755708, lblIntegStatus, lbl1);
};

function frmHttpPostParamsGlobals() {
    frmHttpPostParams = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHttpPostParams,
        "enabledForIdleTimeout": false,
        "id": "frmHttpPostParams",
        "needAppMenu": true,
        "preShow": p2kwiet180672937055_frmHttpPostParams_preshow_seq0,
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
    frmHttpPostParams.info = {
        "kuid": "p2kwiet180672937055"
    };
};