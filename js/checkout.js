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
        var tamt = cot[4];
        var tamtinh = Number(gia) * Number(soluong);
        tamt.innerHTML = nf.format(tamtinh);
        tongtien = tongtien + Number(gia) * Number(soluong);
    }
    document.getElementById("tongtien").innerText = nf.format(tongtien);
    if (tongtien >= 1000000) {
        document.getElementById("km").style.display = "";
        document.getElementById("km2").innerHTML = ""
        var kmck = document.getElementById("kmcheck").checked;
        var kmck1 = document.getElementById("kmcheck1").checked;

        if (kmck == true) {
            tongtien = tongtien + 35000;
        } else if (kmck1 == true) {
            tongtien = tongtien - 35000;
        } else {
            tongtien = tongtien + 35000
        }
        document.getElementById("tongtien").innerText = nf.format(tongtien);

    } else if (tongtien < 1000000) {
        var zz = 1000000 - Number(tongtien);
        document.getElementById("km2").innerHTML = "*( Mua thêm " + nf.format(zz) + " để nhận khuyến mãi )</br> <h4>Phí vận chuyển 35.000</h4>"
        tongtien = tongtien + 35000
        document.getElementById("tongtien").innerText = nf.format(tongtien);
        document.getElementById("km").style.display = "none";
    }
}


document.getElementById("xuathoadon").style.display = "none";

// function checkhoten(){
//     var hoten=document.getElementById("hoten");
//     if(hoten.value == ""){
//         hoten.style.border = "1px solid red";
//         hoten.focus();
//         return false;
//     } else{
//         hoten.style.border = "";

//     }
// }

    // check định dạng email

function checkemail() {
    var email = document.getElementById("email");
    var reg = /^\w+@\w+\.com/
    if (email.value.match(reg)) {
        email.style.border = "none";
        document.getElementById("trave2").innerHTML = "";
    } else {
        document.getElementById("trave2").innerHTML = ("Vui lòng nhập đúng định dạng email");
        email.focus();
        email.style.border = "1px solid red";
        return false;
    }
}
    //check sdt
function checkphone() {
    var phonepatten = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phonenum = document.getElementById("sdt");
    if (sdt.value.match(phonepatten)) {
        phonenum.style.border = "none";
        document.getElementById("trave1").innerHTML = "";
    } else {
        document.getElementById("trave1").innerHTML = ("Vui lòng nhập đúng định dạng số điện thoại");
        phonenum.focus();
        phonenum.style.border = "1px solid red";
        return false;
    }
}
    //check xuat hoa don
function checkxuat() {
    var check = document.getElementById("radioxuathoadon").checked;
    if (check == true) {
        document.getElementById("xuathoadon").style.display = "";
        ttnn=document.getElementById("ttnn");
        ttnn.setAttribute("required", "");
        ttct=document.getElementById("ttct");
        ttct.setAttribute("required", "");
  
    } else {
        document.getElementById("xuathoadon").style.display = "none";
        ttnn=document.getElementById("ttnn").required=false;
        ttct=document.getElementById("ttct").required=false;    
    }
}



