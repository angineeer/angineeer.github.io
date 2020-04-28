var response1 = {prompt: "Erişiliyor ise, konfugirasyon sorunu olabilir. Snow ticket açarak sorunu bildirin."};
var response2= {prompt: "Bottom sectiondaki LRO'nun enerjisini kesin tekrar verin. SWAS üzerinden tekrar erişmeye çaışın. Ulaşamadığınız durumda, durumu anlatan SNOW Ticket açın."};
var response3 = {prompt: "Erişiliyor ise, konfugirasyon sorunu olabilir. Snow ticket açarak sorunu bildirin."};
var response4 = {prompt: "Sorun çözüldü. Tebrikler!"};

var response5 = {prompt: "- Power Supplylar çalışmıyorsa Power Supply siparişi yapın.<br>- Power Supplylar çalışıyor ama Ledler yeşil yanmıyorsa, Ledlerin durumunu belirtecek şekilde SNOW ticket ile durumu bildir."};

var response6= {prompt: "CMS Box ile Box in bağlı olduğu Ethernet kablosunu kontrol edin. CMS Anakart, Ethernet Switch veya Kablolamada sorun olabilir. Stabil çalışmayan bir cihaz mevcut."};
var response7 = {prompt: "Kuledeki Fiber Optik Kablo, Topbox veya Bottombox daki Fiber Optik/Ethernet dönüştürücüler de veya Top Box daki Ethernet switchte sorun var. CMS Box ın bağlı olduğu haberleşme hattını kontrol edin."};

var response8 = {prompt: "Cihaz Bachmann\n" +
        "Cihaz configurasyonunda sorun var. Talimat ``E0004750108_1_DC09_EN_Dead-CMS-Repair-Instruction---Communication-BAM-Hardware``\n" +
        "Dökümanının ``3.2 On-Site Troubleshooting`` bölümünü takip edin. Sorun devem\n" +
        "ederse, yapılan işlemleri ve durumu anlatacak sekilde SNOW Ticket açınız."};
var response9 = {prompt: "DIMM PC / DIMM BOARD çalışıyordur. Anakartta sorun var. Yeni anakart siparişi için anakart üzerindeki yazan etiketleri kontrol edin ve yeni anakart sipariş edin.", instructions: [" "], i1img: ["image11.1.png", "image11.2.png"]};

var response10 = {prompt: "Yedek parça sıkıntısı yaşanmaktadır. \n" +
        "Bachmann DIMM Board siparişi gereklidir. Eğer parça bulunamaz ise tüm\n" +
        "CMS Box, Sensorler ve Kablolama, yeni Bachmann Box ile degisitirilecektir.\n" +
        "\n" +
        "DIMM-Board\n" +
        "siparişi vermek icin SNOW Ticket uzerinden talep yapin"};
var response11 = {prompt: "Sorun\n" +
        "Dimm-PC de kartta veya Memory cardta olabilir. DIMM PC yi denediğiniz türbinde\n" +
        "sadece DIMM-PC kartları değiştirerek, arayüze ulaşmaya çalışın. Sorunun SD\n" +
        "Memory Kartta mı yoksa DIMM-PC Karta mı olduğunu anlamaya çalışın.\n" +
        "\n" +
        "Sorun DIMM-PC Karta ise SAP 50500 ile siparis edin. Sorun SD Memory Kart da ise siparis vermek icin SNOW Ticket uzerinden talep yapin"};
var response12 = {prompt: "CF Memory cardlar kopyalanabiliyor. Deneme yapmakta oldugunz turbinde CF Card kopyasini alın ve sorun yasadığınız CF cardın içerisine tekrar yazin. Kopyaladığınız kartın arayüzüne girin ve sorun yasaginiz Türbinin numarasini girin. Kopyaladığınız CF cardın konfigurasyonunda sorun yaşıyorsanız. SNOW Ticket açın ve konfigurasyonu talep edin. CF Cart yazmaya karşı korumalıysa, data yazamıyorsanız, piyasadan yeni CF Kart siparis edin ve yeni karta kopyalama islemini gerçekleştirin."};


var test12 = { prompt: "Prüftechnik cihazında nasıl bir hafıza kartı mevcut?", answer: "Cevapsız", buttonyes: "DIMM-BOARD", buttonno: "DIMM-PC (SD Card)", buttonc: "CF Memory Card", yes: response10, no: response11, c: response12, elementid: "#test12", instructions: ["Hafıza kartları"], i1img: ["image12.1.png"]};
var test11 = { prompt: "<h5>CMS Box içerisindeki kartlarda sorun olabilir. CMS Boxın enerjisini kesip tekrar verin. PCnizin ayarlarından emin olun. Arayüze bağlanmayı tekrar deneyin.\n" +
        "Eğer sorun devam ediyorsa; sorun yaşadığınız DIMM PC/DIMM BOARD/ CF Card benzer özellikteki başka bir türbine taşıyın. Taşıdığınız türbinde CMS arayüzüne ulaşmaya çalışın.</h5> Başka bir türbinde, sorun yaşadığınız DIMM PC/ DIMM BOARD/ CF Cardı denediğinizde, Web arayüzüne ulaştınız mı?", answer: "Cevapsız", yes: response9, no: test12, elementid: "#test11", instructions: ["Cihazin IP bilgisi DIMM PC / DIMM / CF Card icerisinde bulunmaktadir. Eger DIMM PC / DIMM BOARD du baska bir turbine tasirsaniz, test etmek istediginizde sorunlu olan cihazin IP sinin kullanmaniz gerekiyor. "]};
var test10 = { prompt: "CMS BOX in üretici firması hangisi?", answer: "Cevapsız", buttonyes: "Bachmann", buttonno: "Prüftechnic", yes: response8, no: test11, elementid: "#test10"};

var test9 = { prompt: "Nacelleden NC2 ya bağlanabiliyor musun?", answer: "Cevapsız", yes: response6, no: response7, elementid: "#test9", instructions: ["Bagli oldugunuz switch uzerinde NC2 ya veya diger turibnlere ulasmaya calisin"]};
var test8 = { prompt: "Nacelleden arayüze giriliyor mu?", answer: "Cevapsız", yes: test9, no: test10, elementid: "#test8", instructions: ["Sorunun incelenmesi için Nacelle çıkın.  Nacelle de bulunan ethernet switche bağlanın ve cihazın web arayüzüne ulaşmaya çalışın <br>BETA/GAMMA icin ``ping 192.168.5.xx`` (X= turbin numarasi) <br>DELTA icin ``ping 192.168.130.171``"]};
var test7 = { prompt: "CMS Beslemesi çalışıyor mu? Ethernet kablosu doğru porta takılı mı? Statu ledleri yeşil yanıyor mu?", answer: "Cevapsız", yes: test8, no: response5, elementid: "#test7", instructions: ["Bachmann CMS Box", "Prüftechnik CMS Box"], i1img: ["image7.1.png", "image7.2.png"], i2img: ["image7.3.png", "image7.4.png", "image7.5.png"]};


var test6 = { prompt: "Dimm PC/Dimm Board konfigurasyonun da yada anakartta sorun olabilir. Enerjiyi kesip ver, Reset atmaya çalışın. Web arayüzüne erişebiliyor musunuz?", answer: "Cevapsız", yes: response4, no: test10, elementid: "#test6"};
var test5 = { prompt: "Uzaktan ping atılabiliyor mu?", answer: "Cevapsız", yes: test6, no: test7, elementid: "#test5", instructions: ["SWAS üzerinden CMD ye girerek,ping atmaya çalışın <br>BETA/GAMMA için ``ping 192.168.5.xx`` (X= türbin numarası)<br> DELTA icin ``ping 192.168.130.171``"], i1img: ["image5.1.png"]};

var test4 = { prompt: "Uzaktan Web arayüzüne giriyor mu?", answer: "Cevapsız", yes: response3, no: test5, elementid: "#test4", instructions: ["Delta için 192.165.130.171 adresine Internet Explorer üzerinde CMS arayüzüne erişmeye çalışın"], i1img: ["image4.1.png"]};
var test3 = { prompt: "SWAS üzerinden türbine erişim sağlayabiliyor musunuz?", answer: "Cevapsız", yes: response2, no: test4, elementid: "#test3", instructions: ["SWAS erişimi"], i1img: ["image3.1.png"]};
var test2 = { prompt: "Uzaktan Web arayüzüne giriyor mu?", answer: "Cevapsız", yes: response1, no: test5, elementid: "#test2", instructions: ["Sahaya SWAS uzerinden erişim yapın.", "Beta / Gamma Türbinler icin<br> • ``192.168.5.xx`` IP sini kullanarak,Internet Explorer üzerinde CMS Arayüzüne erişmeye çalışın <br>(X= türbin numarası)"], i1img: ["image2.1.png"], i2img: ["image2.2.png"]};
var test1 = { prompt: "Türbin versiyonunuz Nedir?", answer: "Cevapsız", buttonyes: "Beta / Gamma", buttonno: "Delta", yes: test2, no: test3, elementid: "#test1"};

var current_item = test1;
$("#prompt").html(test1.prompt);
adjustScene();

const element = document.getElementById("getData");
var technicianname = "";
var nxnumber = 0;
var answers = [];
var answerIterator = 0;
var reportSent = false;

function proceed() {
    technicianname = $("#name").val();
    nxnumber = $("#nxnumber").val();
    if(technicianname === "" || nxnumber === ""){
        alert("Lütfen boş alanları doldurunuz.");
        return;
    }
    $("#nameidrow").css("display", "none");
    $("#testnumrow1").css("display", "flex");
    $("#testnumrow2").css("display", "flex");
    $("#mainrow").css("display", "flex");

}

function navigate(clickedTest) {
    reportSent = false;
    current_item = clickedTest;
    resetTestProperties();
    adjustScene();
}

function resetTestProperties() {
    //Reset test properties
    current_item.answer = false;
    $(current_item.elementid).css("background-color", "#e9ecef");
}

function adjustScene() {

    $("#prompt").html(current_item.prompt);    //Show current test/response prompt

    if(!("yes" in current_item)){
        $("#buttonyes").html("Sonucu TBO ya Mail Gönder");
        $("#buttonnocol").css("display", "none");
        $("#ccol").css("display", "none");
    }
    else if("buttonyes" in current_item) {
        $("#buttonyes").html(current_item.buttonyes);
        $("#buttonno").html(current_item.buttonno);
        $("#buttonnocol").css("display", "block");
        if("buttonc" in current_item){
            $("#ccol").css("display", "block");
            $("#cbutton").html(current_item.buttonc);
        }
    }
    else {
        $("#buttonyes").html("Evet");
        $("#buttonno").html("Hayır");
        $("#buttonyes").css("display", "block");
        $("#buttonnocol").css("display", "block");
        $("#ccol").css("display", "none");
    }
    //Adjust instructions
    if("instructions" in current_item){
        $("#instruction1row").css("display", "flex");
        if (current_item.instructions.length > 1)$("#instruction2row").css("display", "flex");
        else $("#instruction2row").css("display", "none");

        $("#instruction1").html(current_item.instructions[0]);
        if("i1img" in current_item){
            if (current_item.i1img.length === 2){
                $("#instruction1img1").css("display", "block");
                $("#instruction1img1").attr("src",current_item.i1img[0]);
                $("#instruction1img2").css("display", "block");
                $("#instruction1img2").attr("src",current_item.i1img[1]);
            }
            else if (current_item.i1img.length === 1){
                $("#instruction1img2").css("display", "none");
                $("#instruction1img1").css("display", "block");
                $("#instruction1img1").attr("src",current_item.i1img[0]);
            }
        }
        else{
            $("#instruction1img1").css("display", "none");
            $("#instruction1img2").css("display", "none");
        }

        $("#instruction2").html(current_item.instructions[1]);


        if ("i2img" in current_item && current_item.i2img.length >= 3){
            $("#instruction2img1").css("display", "block");
            $("#instruction2img1").attr("src",current_item.i2img[0]);
            $("#instruction2img2").css("display", "block");
            $("#instruction2img2").attr("src",current_item.i2img[1]);
            $("#instruction2img3").css("display", "block");
            $("#instruction2img3").attr("src",current_item.i2img[2]);
        }
        else if (current_item.i2img.length >= 2){
            $("#instruction2img3").css("display", "none");
            $("#instruction2img1").css("display", "block");
            $("#instruction2img1").attr("src",current_item.i2img[0]);
            $("#instruction2img2").css("display", "block");
            $("#instruction2img2").attr("src",current_item.i2img[1]);
        }
        else if (current_item.i2img.length >= 1){
            $("#instruction2img2").css("display", "none");
            $("#instruction2img3").css("display", "none");
            $("#instruction2img1").css("display", "block");
            $("#instruction2img1").attr("src",current_item.i2img[0]);
        }
        else{
            $("#instruction2img1").css("display", "none");
            $("#instruction2img2").css("display", "none");
            $("#instruction2img3").css("display", "none");
        }
    }
    else{
        $("#instruction1row").css("display", "none");
        $("#instruction2row").css("display", "none");
    }
}
function sendReport() {
    if(reportSent === true)  return;
    reportSent = true;
    var str = "";
    var i = 0;
    for(i = 0; i < answers.length; i++){
        str += answers[i].prompt + " - <span style='font-weight: 600'>" + answers[i].answer + "</span><br>";
    }
    Email.send({
        SecureToken : "18e0d5f0-4df1-4971-b44b-a34c44ac6c22",
        To : ['oguzhanangin45@gmail.com', 'tsariyer@nordex-online.com'],
        From : "cmsreport.nx@gmail.com",
        Subject : "CMS Kontrol Raporu - " + technicianname,
        Body : "<h3>Teknisyen isim: " + technicianname + "<br>NX numarası: " + nxnumber + "</h3>" + "<p><br> Alınan cevaplar:<br>" + str + "<br>Elde edilen sonuç:<br>" + current_item.prompt + "</p>"
    }).then(
        message => alert(message + (message==="OK" ? " Mail başarıyla gönderildi." : ""))
    );

}
function yesPressed(){
    if(!("yes" in current_item))
    {
        sendReport();
        return;
    }
    answers[answerIterator++] = current_item;
    current_item.answer = $("#buttonyes").text();
    $(current_item.elementid).css("background-color", "#28a745");
    current_item = current_item.yes;    //Set next test/response
    resetTestProperties();
    adjustScene();
}

function noPressed(){
    answers[answerIterator++] = current_item;
    current_item.answer = $("#buttonno").text();
    $(current_item.elementid).css("background-color", "#dc3545");
    current_item = current_item.no; //Set next test/response
    resetTestProperties();
    adjustScene();
}

function cpressed() {
    current_item.answer = $("#button3").text();
    answers[answerIterator++] = current_item;
    current_item = current_item.c;
    adjustScene();
}