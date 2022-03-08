const sFor = document.getElementById('search');
const sGoogle = document.getElementById('google');
const sBing = document.getElementById('bing');
const sGitHub = document.getElementById('github');
const sV2EX = document.getElementById('v2ex');
const sZhiHu = document.getElementById('zhihu');
const sYouTube = document.getElementById('youtube')
const sBiliBili = document.getElementById('bilibili');

//isEmpty;
let isEmpty = function (obj) {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
        return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp('^([ ]+)|([　]+)$');
        if (reg.test(obj)) {
            obj = obj.replace(/(^\s*)/g, '');
        }
        if (obj === '') {
            return true;
        }
    }
    return false;
}

let doAction = function (p, n, s) {
    if (isEmpty(sFor.value)) {
        window.open(s);
    } else {
        window.open(p + sFor.value + n);
    }
}

let p = '';
let n = '';
let s = ''

document.onkeydown = function (e) {
    let theEvent = window.event || e;
    let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code === 13) {
        p = 'https://www.baidu.com/s?wd=';
        doAction(p, '', p);
    }
}

//Google
sGoogle.onclick = function () {
    p = 'https://www.google.com/search?q=';
    n = '';
    s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
    doAction(p, n, s);
}

//Bing
sBing.onclick = function () {
    p = 'https://www.bing.com/search?q=';
    n = '';
    s = 'https://www.bing.com/?mkt=zh-CN';
    doAction(p, n, s);
}

//GitHub
sGitHub.onclick = function () {
    p = 'https://github.com/search?q=';
    n = '';
    s = 'https://github.com'
    doAction(p, n, s);
}

//V2EX
sV2EX.onclick = function () {
    p = 'https://www.google.com/search?q=site:v2ex.com/t%20';
    n = '';
    s = 'https://v2ex.com/'
    doAction(p, n, s);
}

//ZhiHu
sZhiHu.onclick = function () {
    p = 'https://www.zhihu.com/search?q=';
    n = '';
    s = 'https://www.zhihu.com/'
    doAction(p, n, s);
}

//YouTube
sYouTube.onclick = function () {
    p = 'https://www.youtube.com/results?search_query=';
    n = '';
    s = 'https://www.youtube.com/';
    doAction(p, n, s);
}

//BiliBili
sBiliBili.onclick = function () {
    p = 'https://search.bilibili.com/all?keyword=';
    n = '';
    s = 'https://search.bilibili.com'
    doAction(p, n, s);
}