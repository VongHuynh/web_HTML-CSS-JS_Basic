var menu2 = ["Whey protein", "Mass gainer", "EAAS, BCAAS & Amino", "Fat Burner", "Vitamin và khoáng chất", "Pre-workout",
    "Phụ kiện & dụng cụ", "Thời trang Fitness"];
var menucon = ["Hydroyzed whey protein", "Whey protein isolate", "Whey protein blend", "Casein protein", "Protein bar"];

var linkhtml = ["wheyprotein.html", "mass.html", "#", "#", "#", "#", "#", "#"]


var t = 0;
for (var z of menu2) {
    var li = document.createElement("li");
    var text = document.createTextNode(z);
    var a = document.createElement("a");
    a.setAttribute("href", linkhtml[t])
    a.appendChild(text);
    li.appendChild(a);
    var category2 = document.getElementsByClassName("menucon")[0].appendChild(li);
    li.setAttribute("class", "whey")
    t++;
}

for (var z of menucon) {
    var classwhey = document.getElementsByClassName("whey")[0];
    var ulw = document.createElement("ul");
    ulw.setAttribute("class", "menuchau");
    classwhey.appendChild(ulw);

    var li = document.createElement("li");
    var text = document.createTextNode(z);
    var a = document.createElement("a");
    a.style.fontStyle = "italic";
    a.setAttribute("href", "#");
    a.appendChild(text);
    li.appendChild(a);
    var category2 = document.getElementsByClassName("menuchau")[0].appendChild(li);
}

