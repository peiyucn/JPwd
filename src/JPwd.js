/**
 * Copyright (c) 2016 Pei Yu
 * Licensed under the MIT license
 * https://github.com/peiyucn/JPwd
 */
;(function (root, factory) {
    root.JPwd = factory();
}(this, function () {

    function merge(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var arg = arguments[i];
            for (var p in arg) {
                if (obj[p] === undefined) obj[p] = arg[p]
            }
        }
        return obj
    }

    // Built-in defaultConfig
    var defaultConfig = {
        passwordMaxLength: 6,                // The number of password length
        passwordInvisible: true,             // The password whether to hide
        passwordSymbol: "●",                 // The password character
        passwordSymbolColor: "#9b9b9b",      // The password character color
        passwordSymbolSize: "1rem",          // The password character font size
        passwordSpanSideLength: "2rem",      // The password input span side length
        passwordSpanBorderThin: "1px",       // The password input span border thickness
        passwordSpanBorderColor: "#dbdbdb",  // The password input span border color
        passwordSpanBorderStyle: "solid"     // The password input span border style
    };


    /** The constructor */
    function JPwd(conf) {
        this.config = merge(conf || {}, defaultConfig);
        this.privateSetting = {
            placeHolderID: "JPwd_PlaceHolder",
            realInputID: "JPwd_realPwd",
            fakeInputDivID: "JPwd_fakeInput",
            fakeInputSpanID: "JPwd_faceInputSpan"
        }
    }

    function showInput(self, callback) {
        var inputVal = document.getElementById(self.privateSetting.realInputID).value;
        var iptLen = inputVal.length;

        if (iptLen == self.preInputLen) {
            return;
        }
        if (iptLen > self.preInputLen) {
            document.getElementById(self.privateSetting.fakeInputSpanID + iptLen).innerHTML =
                self.config.passwordInvisible ?
                    self.config.passwordSymbol : inputVal.substr(iptLen - 1, 1);
        }
        if (iptLen < self.preInputLen) {
            document.getElementById(self.privateSetting.fakeInputSpanID + self.preInputLen).innerHTML = null;
        }

        self.preInputLen = iptLen;
        callback(inputVal);
    }

    function clickToInput(self) {
        document.getElementById(self.privateSetting.realInputID).focus();
    }

    function buildInput(self, callback) {
        var inputArea = document.getElementById(self.privateSetting.placeHolderID);
        if (inputArea) {
            return;
        }

        // The whole JPwd area
        inputArea = document.createElement("div");
        inputArea.id = self.privateSetting.placeHolderID;

        // The real password input div
        var realInputArea = document.createElement("div");
        realInputArea.style.position = "absolute";
        realInputArea.style.zIndex = "0";

        // The real password input
        var realInput = document.createElement("input");
        realInput.id = self.privateSetting.realInputID;
        realInput.type = "tel";
        realInput.maxLength = self.config.passwordMaxLength;
        // Move the real input out of screen
        realInput.style.marginLeft = -document.documentElement.clientHeight * 2 + "px";

        // Show password fake input div
        var fakeInputArea = document.createElement("div");
        fakeInputArea.id = self.privateSetting.fakeInputDivID;
        fakeInputArea.style.display = "inline-flex";
        fakeInputArea.style.zIndex = "1";

        // Show password fake input instead of spans
        var i;
        for (i = 1; i <= self.config.passwordMaxLength; i++) {
            var fakeInputSpan = document.createElement("span");
            fakeInputSpan.id = self.privateSetting.fakeInputSpanID + i;
            fakeInputSpan.style.textAlign = "center";
            fakeInputSpan.style.width = self.config.passwordSpanSideLength;
            fakeInputSpan.style.height = self.config.passwordSpanSideLength;
            fakeInputSpan.style.borderColor = self.config.passwordSpanBorderColor;
            fakeInputSpan.style.borderStyle = self.config.passwordSpanBorderStyle;
            fakeInputSpan.style.lineHeight = self.config.passwordSpanSideLength;
            fakeInputSpan.style.fontSize = self.config.passwordSymbolSize;
            fakeInputSpan.style.color = self.config.passwordSymbolColor;
            fakeInputSpan.style.borderLeftWidth = self.config.passwordSpanBorderThin;
            fakeInputSpan.style.borderTopWidth = self.config.passwordSpanBorderThin;
            fakeInputSpan.style.borderBottomWidth = self.config.passwordSpanBorderThin;
            if (i == self.config.passwordMaxLength) {
                fakeInputSpan.style.borderRightWidth = self.config.passwordSpanBorderThin;
            } else {
                fakeInputSpan.style.borderRightWidth = 0;
            }

            fakeInputArea.appendChild(fakeInputSpan);
        }

        realInputArea.appendChild(realInput);
        inputArea.appendChild(realInputArea);
        inputArea.appendChild(fakeInputArea);

        return inputArea;
    }

    function buildEvent(self, callback) {
        document.getElementById(self.privateSetting.realInputID).addEventListener(
            'keyup', function () {
                showInput(self, callback)
            }, false);
        document.getElementById(self.privateSetting.fakeInputDivID).addEventListener(
            'click', function () {
                clickToInput(self)
            }, false);
    }

    merge(JPwd.prototype, {
        /**
         * Init JPwd components
         * @param targetID
         * @param callback
         */
        init: function (targetID, callback) {
            var target = document.getElementById(targetID);
            if (!target) {
                return;
            }
            if (typeof callback != "function") {
                return;
            }
            this.preInputLen = 0;
            target.appendChild(buildInput(this));
            buildEvent(this, callback);

        }
    });

    return JPwd;
}));