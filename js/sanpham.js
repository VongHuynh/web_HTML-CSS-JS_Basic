
for (var i = 0; i < sanpham.length; i++) {

    var spdiv = document.createElement("div");
    spdiv.setAttribute("class", "sp");
    document.getElementsByClassName("box_center2")[0].appendChild(spdiv);


    var spa = document.createElement("a");
    spa.setAttribute("href", "#");
    spdiv.appendChild(spa);

    var spgiamgia = document.createElement("div");
    spgiamgia.setAttribute("class", "giamgia");
    spa.appendChild(spgiamgia);

    var spquatang = document.createElement("div");
    spquatang.setAttribute("class", "quatang");
    spa.appendChild(spquatang);

    var spimg = document.createElement("img");
    spimg.setAttribute("class", "hinhanh");
    spa.appendChild(spimg);

    var spten = document.createElement("div");
    spten.setAttribute("class", "ten");
    spa.appendChild(spten);

    var spgia = document.createElement("div");
    spgia.setAttribute("class", "gia");
    spa.appendChild(spgia);

    var sptrangthai = document.createElement("div");
    sptrangthai.setAttribute("class", "trangthai");
    sptrangthai.style.color = "green"
    sptrangthai.style.fontFamily = "sans-serif"

    spa.appendChild(sptrangthai);


    var anh = document.getElementsByClassName("hinhanh")[i];
    anh.src = "hinhanh/" + sanpham[i].photo;
    document.getElementsByClassName("ten")[i].innerHTML = sanpham[i].name;
    document.getElementsByClassName("gia")[i].innerHTML = sanpham[i].gia;
    document.getElementsByClassName("trangthai")[i].innerHTML = sanpham[i].trangthai;


    if (sanpham[i].giamgia == "") {
        document.getElementsByClassName("giamgia")[i].style.border = "none";
        
    } else {
        document.getElementsByClassName("giamgia")[i].innerHTML = sanpham[i].giamgia;
    }

    if (sanpham[i].quatang == "") {
        document.getElementsByClassName("quatang")[i].style.border = "none";
    }else{
        document.getElementsByClassName("quatang")[i].innerHTML = sanpham[i].quatang;
    }

}