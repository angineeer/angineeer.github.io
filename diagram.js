var $ = function (elementid) {return document.getElementById(elementid);};

var responseto6no = {prompt: "Anakartta sorun var. Yeni Anakart sipariş et.", answer: false, answerable: false};
var responseto6yes = {prompt: "Yeni Dimm PC/Memory Card siparişi ver.", answer: false, answerable: false};
var responsetoresponse = {prompt: "Tebrikler.", answer: false, answerable: false};

var test6 = { prompt: "Dimm PC/ Memory Card ı başka türbin ile yer değiştirdiğinde arayüze ulaşıyor musun?", answer: false, answerable: true, yes: responseto6yes, no: responseto6no, elementid: "test6"};

var response1 = {prompt: "Konfigürasyon hatalı yapılmış. Tekrar commissioning yapılması gerekiyor. TBO ile görüş.", answer: false, answerable: false};
var response2= {prompt: "Boardlarda sorun var. Dimm PC konfigürasyonunda sorun var. Enerji kes/ver. Reset at. Sorun çözüldü mü?", answer: false, answerable: true, yes: responsetoresponse, no: test6};
var response3 = {prompt: "Beslemeyi kontrol et, arayüze girmeye çalış.", answer: false, answerable: false};
var response4 = {prompt: "Kuledeki fiber F/O ve switchleri kontrol et.", answer: false, answerable: false};


var test5 = { prompt: "Nacelleden NC2 ya bağlanabiliyor musun?", answer: false, answerable: true, yes: response4, no: test6, elementid: "test5"}; //What is the test/response for no?
var test4 = { prompt: "Nacelleden arayüze giriliyor mu?", answer: false, answerable: true, yes: test5, no: response2, elementid: "test4"};
var test3 = { prompt: "CMS Beslemesi çalışıyor mu?", answer: false, answerable: true, yes: test4, no: response3, elementid: "test3"};
var test2 = { prompt: "Uzaktan ping atılabiliyor mu?", answer: false, answerable: true, yes: response2, no: test3, elementid: "test2"};
var test1 = { prompt: "Uzaktan Web arayüzüne giriyor mu?", answer: false, answerable: true, yes: response1, no: test2, elementid: "test1"};

var current_test = test1;
$("prompt").innerHTML = test1.prompt;

function navigate(clickedTestID) {
    current_test = clickedTestID;
    resetTestProperties();
    adjustScene();
}
function resetTestProperties() {
    //Reset test properties
    current_test.answer = false;
    $(current_test.elementid).style.backgroundColor = "#e9ecef";
}
function adjustScene() {
    $("prompt").innerHTML = current_test.prompt;    //Show current test/response prompt

    //Hide or show buttons if prompt is answerable accordingly
    if(current_test.answerable){
        $("yesnobuttons").style.display = "flex";
    }
    else if(!current_test.answerable){
        $("yesnobuttons").style.display = "none";
    }
}

function yesPressed(){
    current_test.answer = true;
    if("elementid" in current_test) $(current_test.elementid).style.backgroundColor = "#28a745";
    current_test = current_test.yes;    //Set next test/response
    if("elementid" in current_test) resetTestProperties();
    adjustScene();
}

function noPressed(){
    current_test.answer = false;
    if("elementid" in current_test) $(current_test.elementid).style.backgroundColor = "#dc3545";
    current_test = current_test.no; //Set next test/response
    if("elementid" in current_test) resetTestProperties();
    adjustScene();
}