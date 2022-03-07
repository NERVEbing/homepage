let IEVersion = function () {
    let userAgent = navigator.userAgent;
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        return parseFloat(RegExp["$1"]);
    }
}
let ie = IEVersion();
if (ie < 11) {
    document.getElementById("killie").innerHTML = "<div class=\"ui main container\">" +
        "<img class=\"center-img\" src=\"img/icon-banana.png\" alt=\"center-img\">" +
        "<div class=\"ui text container\" style='padding-top: 10em;text-align: center'><b>对不起，您的浏览器版本太低，请关闭本页面</b> </div>" +
        "</div>";
}