/*by @hoangnm89 */
var arrKeyCode = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ESCAPE: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_ADD: 107,
    NUMPAD_ENTER: 108,
    NUMPAD_SUBTRACT: 109,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    PERIOD: 190,
    COMMA: 188
};
var sendingAjax=false;
Number.prototype.formatMoney = function(c, d, t){
    //(123456789.12345).formatMoney(2, ',', '.');
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
var delaySomethings = (function () {
    var timeDelay = 0;
    return function (callback, ms) {
        clearTimeout(timeDelay);
        timeDelay = setTimeout(callback, ms);
    }
})();

function VietnameseWithoutAccent(strInput) {
    strInput = strInput.toLowerCase();
    strInput = strInput.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    strInput = strInput.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    strInput = strInput.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    strInput = strInput.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    strInput = strInput.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    strInput = strInput.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    strInput = strInput.replace(/đ/g, "d");
    strInput = strInput.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g, " ");
    strInput = strInput.replace(/^\-+|\-+$/g, "");//cắt bỏ ký tự - ở đầu và cuối chuỗi
    return strInput;
}

$(function () {

    /* xxxDropdown */

    $.fn.subOverString = function (opt) {
        return this.each(function(){
            var opts= $.extend({
                linkMore:""
            },opt);
            var $this = $(this);
            var txtContent = "";
            if($this.data("text-content") == undefined){
                txtContent = $.trim($(this).text());
                $this.data("text-content",txtContent);
            }else{
                txtContent = $this.data("text-content");
            }
            var arrTxtContent = txtContent.split(" ");
            var tmpText = "<span style='position: relative'>" + arrTxtContent.join("</span> <span style='position: relative'>") + "</span>";
            $this.css("position","relative");
            $this.html("<span id='sys_tmp_subOverString'>" + tmpText + "... <a id='sys_linkMore_subOverString' style='position: relative' href='" + opts.linkMore + "'>Xem thêm.</a></span>");
            if($("#sys_tmp_subOverString").height()> $(this).height()){
                var sys_linkMore_subOverString = $("#sys_linkMore_subOverString");
                while((sys_linkMore_subOverString.height() + sys_linkMore_subOverString.position().top) > $this.height()){
                    sys_linkMore_subOverString.prev().remove();
                    arrTxtContent.pop();
                }
                arrTxtContent = arrTxtContent.join(" ");
                $this.css("position", "").html(arrTxtContent + "... <a href='" + opts.linkMore + "'>Xem thêm</a>");
            }else{
                $this.css("position", "").html(txtContent);
            }
        });
    };
    $.fn.xxxDropdown = function (opt) {
        return this.each(function () {
            var opts = $.extend({
                afterSelect: function afSelect(){
                    console.log("Selected");
                }
            }, opt);
            var selectElem = $(this).children("select").first();
            //Bind event change on select tag
            selectElem.on("change", function () {
                selectElem.parents(".xxxDropdown").find(".show-val").children("span").html(selectElem.children(":selected").html());
                if ($.isFunction(opts.afterSelect)) {
                    selectElem.parents(".xxxDropdown").find(".show-val").children("span").addClass('active');
                    opts.afterSelect.call();
                }
            });
        });
    };


    $(".sys_tabbable").on("click",".t-lbl",function(e){
        var getIdx = $(this).index();
        $(this).addClass("active").siblings().removeClass("active").parents(".sys_tabbable").find(".tab-content-item").removeClass("active").eq(getIdx).addClass("active");
        //return false;
    });
});

(function($){
    $.popupCommon = function (objSetting) {
        var settings = $.extend({
            wrapHtml:   '' +
                        '<div class="popup-common">' +
                            '<div class="pop-content">' +
                                '<div class="opacity-border"></div>' +
                                '<div class="wrap-content sys_wrap_popup_content">' +
                                    '<div class="main-content">' +
                                        '<div style="height:80px;padding-top: 15px;text-align: center;"><img src="/assets/images/loading.gif" alt="Loading"/></div>' +
                                    '</div>' +
                                '</div>' +
                                '<img class="closePopup" src="/assets/images/close.png?v=1" alt="CLOSE">' +
                            '</div>' +
                        '</div>',
            htmlContent:'<div style="height:80px;padding-top: 15px;text-align: center;"><img src="/assets/images/loading.gif" alt="Loading"/></div>',
            attrId:'sys_popup_common',
            extendClass:'',
            widthPop:'840px',
            isFadeIn:true,
            showEffect:false,
            toParent:null,//ex: #uscer_deposit_wrapper, #id, .class
            mediaType:false,
            disableScroll:false,
            overlayClickHide:true,
            successOpen:function(){},
            preClose:function(){}
        },objSetting || {});

        var _$this = null;
        function initPopup() {
            if(settings.toParent){
                _$this = $(settings.wrapHtml).appendTo($(settings.toParent));
            }else{
                _$this = $(settings.wrapHtml).appendTo("body");
            }
            _$this.attr("id", settings.attrId).addClass(settings.extendClass).before('<div id="' + settings.attrId + '_overlay" class="overlay-bl-bg"></div>');
            if(settings.mediaType) {
                _$this.find(".main-content").first().addClass("view-media");
            }
            _$this.find(".main-content").first().html(settings.htmlContent);
            _$this.css({
                "display":"block",
                "visibility":"hidden"
            });

            $("body").addClass("disable-scroll");

            /*set width and position for popup*/
            var popContent = _$this.find(".pop-content").css("width", settings.widthPop);
            var setTopCSS, setLeftCSS;
            setLeftCSS = Math.abs(($(window).width() - popContent.width()) / 2);
            popContent.css({
                "left":setLeftCSS
            });
            _$this.css({
                "display":"none",
                "visibility":"visible"
            });
            (settings.isFadeIn)? _$this.fadeIn(): _$this.show();
            //_$this.fadeIn();
            onEvents();
            if($.isFunction(settings.successOpen)) {
                settings.successOpen.call(this);
            }
        }
        function onEvents(){
            //var strElemClose = settings.overlayClickHide ? ".closePopup,.overlay-bl-bg" : ".closePopup";
            $("#" + settings.attrId).on("click.closePopup", ".closePopup", function () {
                $("body").removeClass("disable-scroll");
                if($.isFunction(settings.preClose)) {
                    settings.preClose.call(this);
                }
                $("#" + settings.attrId).fadeOut(function(){
                    $(this).prev().remove();
                    $(this).remove();
                    $("body").off("keydown.closePopup").css("overflow","");
                });
            });
            $("#" + settings.attrId).on("click",".pop-content",function(e){
                e.stopPropagation();
            });
            $("body").on("keydown.closePopup",function(e){
                var getCode = e.keyCode ? e.keyCode : e.which;
                if(getCode == arrKeyCode.ESCAPE) {
                    $("#" + settings.attrId).find(".closePopup").trigger("click");
                }
            });
            if(settings.overlayClickHide) {
                $("#" + settings.attrId).on("click",function(){
                    $("#" + settings.attrId).find(".closePopup").trigger("click");
                });
            }
        }
        initPopup();
    };

    $.popupCommon2 = function (objSetting) {
        var settings = $.extend({
            wrapHtml:   '' +
                        '<div class="popup-common">' +
                            '<div class="pop-content">' +
                                '<div class="opacity-border"></div>' +
                                '<div class="wrap-content sys_wrap_popup_content">' +
                                    '<div class="main-content">' +
                                        'html <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> content' +
                                    '</div>' +
                                '</div>' +
                                '<img class="closePopup" src="/assets/images/close.png?v=1" alt="CLOSE">' +
                            '</div>' +
                        '</div>',
            attrId:'sys_popup_common',
            extendClass:'',
            widthPop:'840px',
            toParent:null,//ex: #user_deposit_wrapper, #id, .class
            mediaType:false,
            disableScroll:false,
            overlayClickHide:true,
            successOpen:function(){},
            preClose:function(){}
        },objSetting || {});

        var _$this = null;
        function initPopup() {
            if(settings.toParent){
                _$this = $(settings.wrapHtml).appendTo($(settings.toParent));
            }else{
                _$this = $(settings.wrapHtml).appendTo("body");
            }
            _$this.attr("id", settings.attrId).addClass(settings.extendClass).before('<div class="overlay-bl-bg"></div>');
            _$this.css({
                "display":"block",
                "visibility":"hidden"
            });

            $("body").addClass("disable-scroll");
            _$this.find(".pop-content").css("width", settings.widthPop);
            onEvents();
            if($.isFunction(settings.successOpen)) {
                settings.successOpen.call(this);
            }
        }
        function onEvents(){
            $("#" + settings.attrId).on("click.closePopup",".closePopup",function(){
                $("body").removeClass("disable-scroll");
                if($.isFunction(settings.preClose)) {
                    settings.preClose.call(this);
                }
                $("#" + settings.attrId).fadeOut(function(){
                    $(this).prev().remove();
                    $(this).remove();
                    $("body").off("keydown.closePopup").css("overflow","");
                });
            });
            $("#" + settings.attrId).on("click",".main-content",function(e){
                e.stopPropagation();
            });
            $("body").on("keydown.closePopup",function(e){
                var getCode = e.keyCode ? e.keyCode : e.which;
                if(getCode == arrKeyCode.ESCAPE) {
                    $("#" + settings.attrId).find(".closePopup").trigger("click");
                }
            });
            /*if(settings.overlayClickHide) {
                $("#" + settings.attrId).on("click",function(){
                    $("#" + settings.attrId).find(".closePopup").trigger("click");
                });
            }*/
        }
        initPopup();
    };

})(jQuery);
