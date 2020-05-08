var response1 = {prompt: "Erişiliyor ise, konfugirasyon sorunu olabilir. Snow ticket açarak sorunu bildirin.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response2= {prompt: "Bottom sectiondaki LRO'nun enerjisini kesin tekrar verin. SWAS üzerinden tekrar erişmeye çaışın. Ulaşamadığınız durumda, durumu anlatan SNOW Ticket açın.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response3 = {prompt: "Erişiliyor ise, konfugirasyon sorunu olabilir. Snow ticket açarak sorunu bildirin.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response4 = {prompt: "Sorun çözüldü. Tebrikler!", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};

var response5 = {prompt: "- Power Supplylar çalışmıyorsa Power Supply siparişi yapın.<br>- Power Supplylar çalışıyor ama Ledler yeşil yanmıyorsa, Ledlerin durumunu belirtecek şekilde SNOW ticket ile durumu bildir.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};

var response6= {prompt: "CMS Box ile Box in bağlı olduğu Ethernet kablosunu kontrol edin. CMS Anakart, Ethernet Switch veya Kablolamada sorun olabilir. Stabil çalışmayan bir cihaz mevcut.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response7 = {prompt: "Kuledeki Fiber Optik Kablo, Topbox veya Bottombox daki Fiber Optik/Ethernet dönüştürücüler de veya Top Box daki Ethernet switchte sorun var. CMS Box ın bağlı olduğu haberleşme hattını kontrol edin.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};

var response8 = {prompt: "Cihaz Bachmann\n" +
        "Cihaz configurasyonunda sorun var. Talimat ``E0004750108_1_DC09_EN_Dead-CMS-Repair-Instruction---Communication-BAM-Hardware``\n" +
        "Dökümanının ``3.2 On-Site Troubleshooting`` bölümünü takip edin. Sorun devem\n" +
        "ederse, yapılan işlemleri ve durumu anlatacak sekilde SNOW Ticket açınız.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response9 = {prompt: "DIMM PC / DIMM BOARD çalışıyordur. Anakartta sorun var. Yeni anakart siparişi için anakart üzerindeki yazan etiketleri kontrol edin ve yeni anakart sipariş edin.", instructions: ["image11.1.png", "image11.2.png"], buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};

var response10 = {prompt: "Yedek parça sıkıntısı yaşanmaktadır. \n" +
        "Bachmann DIMM Board siparişi gereklidir. Eğer parça bulunamaz ise tüm\n" +
        "CMS Box, Sensorler ve Kablolama, yeni Bachmann Box ile degisitirilecektir.\n" +
        "\n" +
        "DIMM-Board\n" +
        "siparişi vermek icin SNOW Ticket uzerinden talep yapin", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response11 = {prompt: "Sorun\n" +
        "Dimm-PC de kartta veya Memory cardta olabilir. DIMM PC yi denediğiniz türbinde\n" +
        "sadece DIMM-PC kartları değiştirerek, arayüze ulaşmaya çalışın. Sorunun SD\n" +
        "Memory Kartta mı yoksa DIMM-PC Karta mı olduğunu anlamaya çalışın.\n" +
        "\n" +
        "Sorun DIMM-PC Karta ise SAP 50500 ile siparis edin. Sorun SD Memory Kart da ise siparis vermek icin SNOW Ticket uzerinden talep yapin", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response12 = {prompt: "CF Memory cardlar kopyalanabiliyor. Deneme yapmakta oldugunz turbinde CF Card kopyasini alın ve sorun yasadığınız CF cardın içerisine tekrar yazin. Kopyaladığınız kartın arayüzüne girin ve sorun yasaginiz Türbinin numarasini girin. Kopyaladığınız CF cardın konfigurasyonunda sorun yaşıyorsanız. SNOW Ticket açın ve konfigurasyonu talep edin. CF Cart yazmaya karşı korumalıysa, data yazamıyorsanız, piyasadan yeni CF Kart siparis edin ve yeni karta kopyalama islemini gerçekleştirin.", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};
var response13 = {prompt: "response 13 (soru 13 hayır)", buttons: ["Sonucu TBO ya Mail Gönder_success_button1"]};

var test13 = { prompt: "Prüftechnik cihazında nasıl bir hafıza kartı mevcut?", answer: "Cevapsız", buttons: ["DIMM-BOARD_success_button1", "DIMM-PC (SD Card)_danger_button2", "CF Memory Card_secondary_button3"], yes: response10, no: response11, c: response12, elementid: "#test13", instructions: ["Hafıza kartları", "image12.1.png"]};//, i1img: ["image12.1.png"]
var test12 = { prompt: "<h5>CMS Box içerisindeki kartlarda sorun olabilir. CMS Boxın enerjisini kesip tekrar verin. PCnizin ayarlarından emin olun. Arayüze bağlanmayı tekrar deneyin.\n" +
        "Eğer sorun devam ediyorsa; sorun yaşadığınız DIMM PC/DIMM BOARD/ CF Card benzer özellikteki başka bir türbine taşıyın. Taşıdığınız türbinde CMS arayüzüne ulaşmaya çalışın.</h5> Başka bir türbinde, sorun yaşadığınız DIMM PC/ DIMM BOARD/ CF Cardı denediğinizde, Web arayüzüne ulaştınız mı?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: response9, no: test13, elementid: "#test12", instructions: ["Cihazin IP bilgisi DIMM PC / DIMM / CF Card icerisinde bulunmaktadir. Eger DIMM PC / DIMM BOARD du baska bir turbine tasirsaniz, test etmek istediginizde sorunlu olan cihazin IP sinin kullanmaniz gerekiyor. "]};
var test11 = { prompt: "CMS BOX in üretici firması hangisi?", answer: "Cevapsız", buttons: ["Bachmann_success_button1", "Prüftechnic_danger_button2"], yes: response8, no: test12, elementid: "#test11"};
var test10 = { prompt: "Nacelleden NC2 ya bağlanabiliyor musunuz?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: response6, no: response7, elementid: "#test10", instructions: ["Bağlı olduğunuz switch üzerinde NC2 ya veya diğer türbinlere ulaşmaya çalışın"]};
var test9 = { prompt: "Nacelleden arayüze giriliyor mu?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: test10, no: test11, elementid: "#test9", instructions: ["Sorunun incelenmesi için Nacelle çıkın.  Nacelle de bulunan ethernet switche bağlanın ve cihazın web arayüzüne ulaşmaya çalışın <br>BETA/GAMMA icin ``ping 192.168.5.xx`` (X= turbin numarasi) <br>DELTA icin ``ping 192.168.130.171``"]};
var test8 = { prompt: "Türbin ziyareti gerçekleştirin, CMS Beslemesi çalışıyor mu? Ethernet kablosu doğru porta takılı mı? Statü ledleri yeşil yanıyor mu? Kontrol ediniz.", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: test9, no: response5, elementid: "#test8", instructions: ["Bachmann CMS Box", "image7.1.png", "image7.2.png", "Prüftechnik CMS Box", "image7.3.png", "image7.4.png", "image7.5.png"]};//, i1img: ["image7.1.png", "image7.2.png"], i2img: ["image7.3.png", "image7.4.png", "image7.5.png"]
var test7 = { prompt: "soru 13 yazısı eklenecek", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: test8, no: response13, elementid: "#test7", instructions: ["Soru 13 instructions", "image12.1.png"]};
var test6 = { prompt: "Dimm PC/Dimm Board konfigurasyonun da yada anakartta sorun olabilir. Enerjiyi kesip ver, Reset atmaya çalışın. Web arayüzüne erişebiliyor musunuz?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: response4, no: test10, elementid: "#test6"};
var test5 = { prompt: "Uzaktan ping atılabiliyor mu?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: test6, no: test7, elementid: "#test5", instructions: ["SWAS üzerinden CMD ye girerek,ping atmaya çalışın <br>BETA/GAMMA için ``ping 192.168.5.xx`` (X= türbin numarası)<br> DELTA icin ``ping 192.168.130.171``", "image5.1.png"]};//, i1img: []
var test4 = { prompt: "Uzaktan Web arayüzüne giriyor mu?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: response3, no: test5, elementid: "#test4", instructions: ["Delta için 192.165.130.171 adresine Internet Explorer üzerinde CMS arayüzüne erişmeye çalışın", "image4.1.png"]};//, i1img: ["image4.1.png"]
var test3 = { prompt: "SWAS üzerinden türbine erişim sağlayabiliyor musunuz?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"], yes: test4, no: response2, elementid: "#test3", instructions: ["SWAS erişimi", "image3.1.png"]};//, i1img: ["image3.1.png"]
var test2 = { prompt: "Uzaktan Web arayüzüne giriyor mu?", answer: "Cevapsız", buttons: ["Evet_success_button1", "Hayır_danger_button2"],yes: response1, no: test5, elementid: "#test2", instructions: ["Sahaya SWAS uzerinden erişim yapın.", "image2.1.png",  "Beta / Gamma Türbinler icin<br> • ``192.168.5.xx`` IP sini kullanarak,Internet Explorer üzerinde CMS Arayüzüne erişmeye çalışın <br>(X= türbin numarası)", "image2.2.png"]}; //, i1img: ["image2.1.png"], i2img: ["image2.2.png"]
var test1 = { prompt: "Türbin versiyonunuz Nedir?", answer: "Cevapsız", buttons: ["Beta / Gamma_success_button1", "Delta_primary_button2"], yes: test2, no: test3, elementid: "#test1"};

//Set initial test
var current_item = test1;
adjustScene();

var technicianname = "";
var nxnumber = 0;
var answeredTests = [];   //Test items that are answered
var answerIterator = 0; //Used for iterating answers array
var reportSent = false; //Used for preventing accidental send mail button clicks
var iterator;   //Used for general array iterations in for loops
var button;

function proceed() {
    //Get the values
    technicianname = $("#name").val();
    nxnumber = $("#nxnumber").val();
    //Check if input is valid
    if(technicianname === "" || nxnumber === ""){
        alert("Lütfen boş alanları doldurunuz.");
        return;
    }
    //Set display of elements to display and elements to hide accordingly
    $("#nameidrow").css("display", "none");
    $("#testnumrow1").css("display", "flex");
    $("#testnumrow2").css("display", "flex");
    $("#testnumrow3").css("display", "flex");
    $("#mainrow").css("display", "flex");
}

function navigate(selectedTest) {
    reportSent = false;
    current_item = selectedTest;
    resetTestProperties();
    adjustScene();
}

function resetTestProperties() {
    //Reset test properties
    current_item.answer = "Cevaplanmadı";
}

function adjustScene() {
    $(current_item.elementid).css("background-color", "#f0ad4e");   //Hightlight current test nav button
    $("#prompt").html(current_item.prompt);    //Show current test/response prompt

    //Adjust buttons according to current question
    if("buttons" in current_item){
        $("#buttonrow").html("");
        $("#buttonrow").css("display", "flex");
        for(iterator = 0; iterator < current_item.buttons.length; iterator += 1){
            button = current_item.buttons[iterator].split("_");
            $("#buttonrow").append(
                "<div class='col'>" +
                "<button id='" + button[2] + "' class='btn btn-" + button[1] + " btn-block btn-lg' type='button' onclick='buttonPressed(this)' style='font-size: 30px;font-weight: bold;'>"
                + button[0] +
                "</button>" +
                "</div>"
            );
        }
    }
    else{
        $("#buttonrow").html("");
        $("#buttonrow").css("display", "none");
    }

    //Adjust instructions
    if("instructions" in current_item) {
        $("#instruction1row").css("display", "flex");
        $("#instructionscol").html("");
        for(iterator = 0; iterator < current_item.instructions.length; iterator += 1) {
            if (current_item.instructions[iterator].includes("image")) {
                $("#instructionscol").append("<img style=''display: none;' class='rounded img-fluid' src=" + current_item.instructions[iterator] + " alt='Yönerge resim'/>");
            } else {
                $("#instructionscol").append(
                    "<h4>" + current_item.instructions[iterator] + "</h4>");
            }
        }
    }
    else{
        $("#instructionscol").html("");
        $("#instruction1row").css("display", "none");
    }
}
function sendReport() {
    //Prevent email spamming by pressing the send email button
    if(reportSent === true)  return;
    reportSent = true;
    //Build string that will be sent by email
    var str = "";
    for(iterator = 0; iterator < answeredTests.length; iterator += 1){
        str += answeredTests[iterator].prompt + " - <span style='font-weight: 600'>" + answeredTests[iterator].answer + "</span><br>";
    }
    //Send email using smtp.js
    Email.send({
        SecureToken : "18e0d5f0-4df1-4971-b44b-a34c44ac6c22",
        To : ["oguzhanangin45@gmail.com", "tsariyer@nordex-online.com"],
        From : "cmsreport.nx@gmail.com",
        Subject : "CMS Kontrol Raporu - " + technicianname,
        Body : "<h3>Teknisyen isim: " + technicianname + "<br>NX numarası: " + nxnumber + "</h3>" + "<p><br> Alınan cevaplar:<br>" + str + "<br>Elde edilen sonuç:<br>" + current_item.prompt + "</p>"
    }).then(
        message => alert(message + (message==="OK" ? " Mail başarıyla gönderildi." : ""))   //Alert success message if successful else alert error message returned from smtp.js send function
    );

}
function buttonPressed(btn){
    //Check if current item is a response
    if(!("yes" in current_item))
    {
        sendReport();
        return;
    }
    current_item.answer = btn.textContent;  //Get the selected answer
    if(!itemAlreadyAdded()) answeredTests[answerIterator++] = current_item;   //Add current test to the answered tests to send with email
    $(current_item.elementid).css("background-color", getComputedStyle(btn)["background-color"]);   //Set test nav color according to button color
    if(btn.id === "button1")current_item = current_item.yes;    //Set next test/response
    else if(btn.id === "button2")current_item = current_item.no;    //Set next test/response
    else if(btn.id === "button3")current_item = current_item.c;    //Set next test/response
    resetTestProperties();
    adjustScene();
}
function itemAlreadyAdded() {
    for (iterator = 0; iterator < answeredTests.length; iterator++){
        if(answeredTests[iterator].elementid === current_item.elementid){
            return true;
        }
    }
    return false;
}