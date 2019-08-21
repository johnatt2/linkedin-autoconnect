function autoConnect(limit, occupationKeyword) {
    if (occupationKeyword === undefined) {
        var connectButtons = document.querySelectorAll('button[data-control-name="invite"]')
    } else {
        var elements = document.querySelectorAll('span.discover-person-card__occupation');
        var filteredElements = elements.filter(element => element.includes(occupationKeyword));
        var connectButtons = filteredElements.querySelectorAll("button span").filter(a => a.textContent.includes("Connect"));
    }
    for (var clickCount = 0; clickCount < limit; clickCount++) {
        connectButtons[clickCount].click();
        window.scrollTo(0, document.body.scrollHeight);
        window.scrollTo(document.body.scrollHeight, 0);
        window.scrollTo(0, document.body.scrollHeight)
    };
}

function runAutoConnect(timeInterval, limit, occupationKeyword) {
    setInterval(autoConnect,timeInterval,limit,occupationKeyword);
}

//Example w/ 10 connections click every 86400000 ms (one day)
runAutoConnect(86400000, 50);
