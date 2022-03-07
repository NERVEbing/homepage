const sInfor = document.getElementById("search");
const sGoogle = document.getElementById("google");
const sBing = document.getElementById("bing");
const sGitHub = document.getElementById("github");
const sV2EX = document.getElementById('v2ex');
const sZhihu = document.getElementById('zhihu');
const sYouTube = document.getElementById('youtube')
const sBilibili = document.getElementById("bilibili");

//isEmpty;
let isEmpty = function (obj) {
    if (obj === null) return true;
    if (typeof obj === 'undefined') {
        return true;
    }
    if (typeof obj === 'string') {
        let reg = new RegExp("^([ ]+)|([　]+)$");
        if (reg.test(obj)) {
            obj = obj.replace(/(^\s*)/g, "");
        }
        if (obj === "") {
            return true;
        }
    }
    return false;
}

let doAction = function (p, n, s) {
    if (isEmpty(sInfor.value)) {
        window.open(s);
    } else {
        window.open(p + sInfor.value + n);
    }

}

let p = '';
let n = '';
let s = ''

document.onkeydown = function (e) {
    let theEvent = window.event || e;
    let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code === 13) {
        p = "https://www.baidu.com/s?wd=";
        doAction(p, '', p);
    }
}

//Google
sGoogle.onclick = function () {
    p = "https://www.google.com/search?q=";
    n = "&gws_rd=cr&nfpr=1&newwindow=1&num=30";
    s = 'https://www.google.com/webhp?gws_rd=cr&nfpr=1&newwindow=1&num=30';
    doAction(p, n, s);
}

//Bing
sBing.onclick = function () {
    p = 'https://cn.bing.com/search?q=';
    n = '&ensearch=1&FORM=BESBTB'
    s = 'https://www4.bing.com/?scope=web&FORM=BESBTB';
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
sZhihu.onclick = function () {
    p = 'https://www.zhihu.com/search?q=';
    n = '&type=content&utm_content=search_hot';
    s = 'https://www.zhihu.com/'
    doAction(p, n, s);
}

//YouTube
sYouTube.onclick = function () {
    p = 'https://www.youtube.com/results?search_query=';
    doAction(p, n, p);
}

//BiliBili
sBilibili.onclick = function () {
    p = 'https://search.bilibili.com/all?keyword=';
    n = '';
    s = 'https://search.bilibili.com'
    doAction(p, n, s);
}

console.log(`
                                                                                                   
                                L,,,,,,f                                        
                              f;,,,,,,,,L                                       
                             11,,,,,,,,,f        LL,,,tL                        
                             L,,,,,,,,,t.      f,,,,,,,,f                       
                             L,,,,,,,,,L     ti,,,,,,,,,i1                      
                  f1         1,,,,,,,,L     L,,,,,,,,,,,L                       
                t:iiiiiii1fLi,,,,,,,,,,fLt f,,,,,,,,,,,L                        
                L:iL   LLLiiiiiiifLf,,,,,,,,,,,,,,,,,,L                         
              LiLiiL ;LLLLLLiiiiiiiiiiiiLL,,,,,,,,,,L.                          
            L,,,LiitLLLLLLLiiiiiii1f   LLiiiitL,,,,;                            
          L;,,,L .fiiiii;iiiL.,Li:L   LLLLLLLi:iL,,,f;                          
         L,,iL        LGLf...  LiiLLLLLLLLLLLiLL:,,,,,L                         
        L,,L                    1LiiiLLLLLL      L,,,,,L                        
       L,f,                        .GLLtff         L1,,t                        
      ,fL                LL           ..,L            L,L                       
      f,L                         L        :f           L                       
      Lt            Lt           .           L           L:                     
      LL           f                          f           :L                    
      LL          ii      L        t           L           ,L                   
       L           f      f       L             L           1.                  
       L              fL  .L     1               L           L                  
        L          Lt   1L    ,i if              L           f                  
         L        :  Lf                          t           L                  
          L      1   t                          L            L                  
           .L    i   L                         f            L                   
             fL  1  .t                        f             L                   
                L1  ;,                       L             t                    
            .;LLLf  L                      fL             L;                    
        ti1GGt:,,1. f,,,LLLLt.      .tLGf.               1t                     
        L ,iLGGGLGGGGCtiL..............                 Li                      
       tiiiiiiitff1 iiiiif                             L                        
       Lfii;iiiiii  iii;fL                            L                         
    t;  Lff tft ff1 fffffL                          L                           
   .t   fffff;ff ff  ffffL                         .1                           
   t   ,Lff  ff ffff ffffL                          t                           
    L   Lff  ;tf fffiffffL                          L                           
       fffff ;fffffff fffL                          L                           
       Lffff i ,ffff. fffL                          L                           
       Lfff  tff fff  fffL                          L                           
       Lfff   f fff  tfffL                          L                           
        LLffffffffi  fLL                            L                           
          ,L;, iiiiifLL                             L                           
                L                                   L                           
                L                                   L                           
                L                                   L                           
`)