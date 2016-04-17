/*
 * @fileOverview 放大镜
 * @author wufangjian
 * @date 2015-08-06
 * @version 1.0
 */
define(function(require, exports, module) {
    //设置dom
    var doms = {
        $magnifier: $("#J_mod-magnifier")
    };

    //判断
    if (doms.$magnifier.length === 0) {
        return false;
    }

    var Fun = {
        bindEvent: function() {
            var oDiv = $("#J_mod-magnifier")[0];
            var oMark = $(oDiv).find('.J_mod-mark')[0];
            var oFloat = $(oDiv).find('.J_mod-layer')[0]; //放大镜区域
            var oBig = $(oDiv).find('.J_mod-bpic')[0]; //大图区［img父节点］
            var oSmall = $(oDiv).find('.J_mod-spic')[0]; //小图区
            var oImg = $(oBig).find('.J_mod-bimg')[0]; //大图片

            oMark.onmouseover = function() {
                oFloat.style.display = 'block';
                oBig.style.display = 'block';
            };

            oMark.onmouseout = function() {
                oFloat.style.display = 'none';
                oBig.style.display = 'none';
            };

            oMark.onmousemove = function(ev) {
                var oEvent = ev || event;
                var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
                var st = document.body.scrollTop || document.documentElement.scrollTop;
                var l = (oEvent.clientX + sl) - oDiv.offsetLeft - oSmall.offsetLeft - oFloat.offsetWidth / 2;
                var t = (oEvent.clientY + st) - oDiv.offsetTop - oSmall.offsetTop - oFloat.offsetHeight / 2;

                if (l < 0) {
                    l = 0;
                } else if (l > oMark.offsetWidth - oFloat.offsetWidth) {
                    l = oMark.offsetWidth - oFloat.offsetWidth;
                }

                if (t < 0) {
                    t = 0;
                } else if (t > oMark.offsetHeight - oFloat.offsetHeight) {
                    t = oMark.offsetHeight - oFloat.offsetHeight;
                }

                oFloat.style.left = l + 'px';
                oFloat.style.top = t + 'px';

                var percentX = l / (oMark.offsetWidth - oFloat.offsetWidth);
                var percentY = t / (oMark.offsetHeight - oFloat.offsetHeight);

                oImg.style.left = -percentX * (oImg.offsetWidth - oBig.offsetWidth) + 'px';
                oImg.style.top = -percentY * (oImg.offsetHeight - oBig.offsetHeight) + 'px';

                return false;
            };
        }
    };

    (function() {
        Fun.bindEvent();
    })();
});