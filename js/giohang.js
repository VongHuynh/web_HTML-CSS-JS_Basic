var nf = new Intl.NumberFormat();
                        
document.getElementById("km").style.display = "none";
function xoa(x) {
    var row = x.parentElement.parentElement;
    row.remove();
    thanhtien();
}
function thanhtien() {



    var giohang = document.getElementById("giohang");
    var sodong = giohang.getElementsByClassName("tt");
    var tongtien = 0;
    
    for (var i = 0; i < sodong.length; i++) {
        var cot = sodong[i].getElementsByTagName("td");
        var soluong = cot[3].children[0].value;
        var gia = cot[2].innerHTML;
        var tamt=cot[4];
        var tamtinh= Number(gia) * Number(soluong);
        tamt.innerHTML=nf.format(tamtinh);
        
        tongtien = tongtien + Number(gia) * Number(soluong);
    }
    document.getElementById("tongtien").innerText = nf.format(tongtien);
    if (tongtien >= 1000000) {
        document.getElementById("km").style.display = "";
        document.getElementById("km2").innerHTML = ""

    } else if (tongtien < 1000000) {
        var zz = 1000000 - Number(tongtien);
        document.getElementById("km2").innerHTML = "*( Mua thêm " + nf.format( zz) + " để nhận khuyến mãi )"
        document.getElementById("km").style.display = "none";


    }

}

