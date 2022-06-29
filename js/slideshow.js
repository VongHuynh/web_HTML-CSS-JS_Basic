var hinhanh = [];
var j = 0;
function loading() {
    for (var i = 0; i < 4; i++) {
        hinhanh[i] = new Image();
        hinhanh[i].src = "hinhanh/banner" + i + ".jpg";
    }
}
changeImage = function () {

    if (j == hinhanh.length) {
        j = 0;
    } else {
        j++;
        document.getElementById('img').src = hinhanh[j - 1].src;

    }
}

var myset = setInterval(changeImage, 2000);


var d=1;
function stop() {
    if (d == 1) {
        myset = clearInterval(myset);
        document.getElementById("stop").setAttribute("class","far fa-play-circle")
        d = 0;
    } else {
        myset = setInterval(changeImage, 2000);
        document.getElementById("stop").setAttribute("class","far fa-pause-circle")

        d = 1;
    }
}

function imgPrev() {
    if (j == 0) {
        j = hinhanh.length;
    } else {
        j--;
        document.getElementById("img").src = hinhanh[j].src;
    }

}
function imgNext() {
    if (j >= hinhanh.length) {
        j = 0;
    } else {
        j++;
        document.getElementById("img").src = hinhanh[j - 1].src;
    }
}

// hàm thời gian
var timef = function time() {
    var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    
    if (h < 10) {
        h = "0" + h;
    };
    if (m < 10) {
        m = "0" + m
    };
    if (s < 10) {
        s = "0" + s;
    }
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;


    if (h < 12) {
        document.getElementById("timeimg").innerHTML = "<i  class='fas fa-cloud-sun'></i>";

    } else if (h >= 12 && h < 17.5) {
        document.getElementById("timeimg").innerHTML = "<i  class='far fa-sun'></i>";

    } else if (h > 17.5) {
        document.getElementById("timeimg").innerHTML = "<i  class='far fa-moon'></i>";

    }
}
setInterval(timef, 1000);

