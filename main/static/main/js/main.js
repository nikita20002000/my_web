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
