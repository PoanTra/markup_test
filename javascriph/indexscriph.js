const form = document.querySelector('#Form')

form.addEventListener("submit" , (e) =>{ e.preventDefault()

    alert("ការស្នើរសុំធ្វើតេស្តទទួលបានជោគេជ័យ");

    var txtkhmer = document.querySelector("#NameKh").value;
    var txtenglish = document.querySelector("#NameEng").value;
    var txtlanguage = document.querySelector("#Language").value;
    var txttime = document.querySelector("#Time").value;
    var txtoldlevel = document.querySelector("#OldLevel").value;
    var txtteachername = document.querySelector("#TeacherName").value;
    var txtnewlevel = document.querySelector("#OldLevel").value;
    var txtreason = document.querySelector("#Reason").value;
    var txtdate = document.querySelector("#Date").value;
    var txtphone = document.querySelector("#Phone").value;

    var my_text = `- ឈ្មោះជាអក្សរខ្មែរ : ${txtkhmer}
    %0A - ឈ្មោះជាអក្សរឡាតាំង : ${txtenglish}
    %0A - តេស្តភាសា: ${txtlanguage}
    %0A - ម៉ោង: ${txttime}
    %0A - កម្រិតធ្លាប់សិក្សា: ${txtoldlevel}
    %0A - ឈ្មោះគ្រូ: ${txtteachername}
    %0A - កម្រិតចង់រៀន: ${txtnewlevel}
    %0A - មូលហេតុ: ${txtreason}
    %0A - ថ្ងៃធ្វើតេស្ត : ${txtdate}
    %0A - លេខទូរសព្ទ : ${txtphone}`

    var token = "7919041010:AAEqjFza-NSkZ8oVuZ46xqR6fkJ8HDV-bq0";

    var chat_id = "-4781733136";

    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

})




var shiftTime = {
    "បារាំង":{
        "11h30-12h30":[],
        "16h00-17h00":[],
        "17h30-18h30":[],
        "18h30-19h30":[],
        "19h30-20h30":[],
        "20h30-21h30":[],
        "09h00-11h00":[],
        "13h00-15h00":[],
        "15h00-17h00":[],
        "17h30-19h30":[],

    },

    "អង់គ្លេស":{
        "17h30-18h30":[],
        "18h30-19h30":[],
    },
    "ចិន":{
        "07h15-08h15":[],
        "11h30-12h30":[],
        "12h20-13h30":[],
        "17h30-18h30":[],
        "18h30-19h30":[],
        "19h30-20h30":[],
        "20h30-21h30":[],
        "13h00-15h00":[],
    },
}

window.onload = function(){
    
    const selectLanguage = document.getElementById('Language');
    const selectTime = document.getElementById('Time');

    selectTime.disabled = true;
    
    for(let Language in shiftTime){
        console.log(Language);
        selectLanguage.options[selectLanguage.options.length] = new Option(Language, Language)
    }
    selectLanguage.onchange = (e) => {
        selectTime.disabled = false

        selectTime.length = 1 

        for(let time in shiftTime[e.currentTarget.value]){
            console.log(time);
            selectTime.options[selectTime.options.length] = new Option(time, time)
        }
    }
}
