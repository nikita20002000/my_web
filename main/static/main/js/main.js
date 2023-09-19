(function () {
    let rotateY = 0,
        rotateX = 0;

    document.onkeydown = function (e) {
            if (e.keyCode === 37) rotateY -= 8;
        else if (e.keyCode === 38) rotateX += 8
        else if (e.keyCode === 39) rotateY += 8
        else if (e.keyCode === 40) rotateX -= 8

        document.querySelector('.cube').style.transform =
            'rotateY(' + rotateY + 'deg)' +
            'rotateX(' + rotateX + 'deg)';
    }
})();



var
    outputConsole = document.querySelector(".output-console");


outputConsole.style.height = (window.innerHeight / 3) * 2 + 'px';
outputConsole.style.top = window.innerHeight / 3 + 'px'







/* fake console stuff */
var commandStart = ['Performing DNS Lookups for',
        'Searching ',
        'Analyzing ',
        'Estimating Approximate Location of ',
        'Compressing ',
        'Requesting Authorization From : ',
        'wget -a -t ',
        'tar -xzf ',
        'Entering Location ',
        'Compilation Started of ',
        'Downloading '],
    commandParts = ['Data Structure',
        'http://wwjd.com?au&2',
        'Texture',
        'TPS Reports',
        ' .... Searching ... ',
        'http://zanb.se/?23&88&far=2',
        'http://ab.ret45-33/?timing=1ww'],
    commandResponses = ['Authorizing ',
        'Authorized...',
        'Access Granted..',
        'Compression Complete.',
        'Compilation of Data Structures Complete..',
        'Entering Security Console...',
        'Encryption Unsuccesful Attempting Retry...',
        'Waiting for response...',
        '....Searching...',
        'Calculating Space Requirements '
    ],
    isProcessing = false,
    processTime = 0,
    lastProcess = 0;




function consoleOutput(){
    var textEl = document.createElement('p');

    if(isProcessing){
        textEl = document.createElement('span');
        textEl.textContent += Math.random() + " ";
        if(Date.now() > lastProcess + processTime){
            isProcessing = false;
        }
    }else{
        var commandType = ~~(Math.random()*4);
        switch(commandType){
            case 0:
                textEl.textContent = commandStart[~~(Math.random()*commandStart.length)] + commandParts[~~(Math.random()*commandParts.length)];
                break;
            case 3:
                isProcessing = true;
                processTime = ~~(Math.random()*5000);
                lastProcess = Date.now();
            default:
                textEl.textContent = commandResponses[~~(Math.random()*commandResponses.length)];
                break;
        }
    }

    outputConsole.scrollTop = outputConsole.scrollHeight;
    outputConsole.appendChild(textEl);

    if (outputConsole.scrollHeight > window.innerHeight) {
        var removeNodes = outputConsole.querySelectorAll('*');
        for(var n = 0; n < ~~(removeNodes.length/3); n++){
            outputConsole.removeChild(removeNodes[n]);
        }
    }

    setTimeout(consoleOutput, ~~(Math.random()*200));
}


setTimeout(function(){
    consoleOutput();
}, 200);

