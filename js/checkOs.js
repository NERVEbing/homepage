let typeOs = function () {
    let platform = navigator.platform;
    if (platform.indexOf("Linux") >= 0) {
        return "linux";
    }
}

let spHolder = function (senentces, options) {
    superplaceholder({
        el: document.querySelector('#search'),
        sentences: senentces,
        options: options
    });
}

let searchText = ['输入搜索内容', '回车即可百度搜索', '可选择以下搜索引擎'];

if (typeOs() === 'linux') {
    spHolder(searchText, {
        // delay between letters (in milliseconds)
        letterDelay: 0, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 0,
        // should start on input focus. Set false to autostart
        startOnFocus: false,
        loop: false,
        cursor: ''
    });
} else {
    spHolder(searchText, {
        // delay between letters (in milliseconds)
        letterDelay: 100, // milliseconds
        // delay between sentences (in milliseconds)
        sentenceDelay: 1000,
        // should start on input focus. Set false to autostart
        startOnFocus: false,
        // loop through passed sentences
        loop: true,
        // Initially shuffle the passed sentences
        shuffle: false,
        // Show cursor or not. Shows by default
        showCursor: false,
        // String to show as cursor
        cursor: ''
    });
}

