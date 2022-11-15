
let cities = ["Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
    "Çanakkale", "Çankırı", "Çorum","Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir",
    "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun",
    "Şanlıurfa", "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
];


//şehirleri artan şekilde sırala
let sortedCities = cities.sort();
////referans
let input = document.getElementById("input");
//Keyupta işlevi yürüt
input.addEventListener("keyup", (e) => {
      //yukarıdaki dizide döngü
    //Başlangıçta tüm öğeleri kaldırır (bu nedenle kullanıcı bir harfi silerse veya yeni bir harf eklerse önceki çıktıları temizler
    removeElements();
    if (input.value.length>1) {
        for (let i of sortedCities) {
            //girişi küçük harfe dönüştürüme ve her dizeyle karşılaştırma
            if (
                i.toLocaleLowerCase().startsWith(input.value.toLocaleLowerCase()) &&
                input.value != ""
            ) {
                // li elementi oluşturma
                let listItem = document.createElement("li");
                //Ortak bir sınıf ismi
                listItem.classList.add("list-items");
                listItem.style.cursor = "pointer";
                listItem.setAttribute("onclick", "displayNames('" + i + "')");
                //Uyuşan kısımları bold yapma
                let word = "<b>" + i.substr(0, input.value.length) + "</b>";
                word += i.substr(input.value.length);
                //değeri dizide gösterme
                listItem.innerHTML = word;
                document.querySelector(".list").appendChild(listItem);
            }
        }
    }
    
});
function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {
    //her şeyi temizleme
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

//function generateAvatar(
//    text,
//    foregroundColor = "black",
//    backgroundColor = "white"
//) {
//    const canvas = document.createElement("canvas");
//    const context = canvas.getContext("2d");

//    canvas.width = 200;
//    canvas.height = 200;

//    // Draw background
//    context.fillStyle = backgroundColor;
//    context.fillRect(0, 0, canvas.width, canvas.height);

//    // Draw text
//    context.font = "bold 100px Assistant";
//    context.fillStyle = foregroundColor;
//    context.textAlign = "center";
//    context.textBaseline = "middle";
//    context.fillText(text, canvas.width / 2, canvas.height / 2);

//    return canvas.toDataURL("image/png");
//}

//document.getElementById("avatar").src = generateAvatar(
//    "DC",
//    "white",
//    "#009578"
//);
