function setValues(value, adres) {
    var formData = $('#modbusForm').serialize();
    
    // Добавляем значение в данные формы
    formData = '&single_register_value=' + value;
    formAdres = '&adres=' + adres;

    $.ajax({
        type: 'POST',
        url: '/set_values',
        data: formData + formAdres,
        success: function(response) {
        },
        error: function(error) {
            alert('Error: ' + error.responseText);
        }
    });
}

function updateValues() {

    $.get('/update_values', function(data) {
        res1 = data.result1;
        res2 = data.result2;
        res3 = data.result3;
        res4 = data.result4;
        res5 = data.result5;
        resFire = data.resultFire;
        resFire = data.result1;

const res1Bl = document.getElementById('res1Bl');
const res2Bl = document.getElementById('res2Bl');
const res3Bl = document.getElementById('res3Bl');
const res4Bl = document.getElementById('res4Bl');
const res1Tx = document.getElementById('res1Tx');
const res2Tx = document.getElementById('res2Tx');
const res3Tx = document.getElementById('res3Tx');
const res4Tx = document.getElementById('res4Tx');
const res1Dy = document.getElementById('res1Dy');
const res2Dy = document.getElementById('res2Dy');
const res3Dy = document.getElementById('res3Dy');
const res4Dy = document.getElementById('res4Dy');
const res1My = document.getElementById('res1My');
const res2My = document.getElementById('res2My');
const res3My = document.getElementById('res3My');
const res4My = document.getElementById('res4My');

const butt1 = document.getElementById('main1');
const butt2 = document.getElementById('main2');
const butt3 = document.getElementById('main3');
const butt4 = document.getElementById('main4');

        const fire = document.getElementById('fire');


        $('#result1').html(data.result5[0] + '°C');
        $('#result2').html(data.result5[1] + '%');
        $('#result3').html(data.result5[2] + 'ppm');
        $('#result4').html(data.result5[3] + 'ppm');
        
document.addEventListener('click', function() {
});

        var audio = new Audio('static/alarm.mp3');
        //fire
        if (resFire == 0) {
            fire.classList.add('fireOff');
            fire.classList.remove('fireOn');
            audio.pause();
            audio.currentTime = 0;
        }
        else{
            fire.classList.add('fireOn');
            fire.classList.remove('fireOff');
            if (audio.paused || audio.ended) {
                audio.currentTime = 0; // Устанавливаем время воспроизведения в начало
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;
            }
        }


        //1
        if (res1 == 0) {
            res1Bl.classList.add('ventBgOff', 'ventColOff');
            res1Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res1Dy.classList.add('resDyOff');
            res1Dy.classList.remove('resDyOn');
            res1My.classList.add('resMyOn');
            res1My.classList.remove('resMyOff');
            res1Tx.innerText = 'mode_fan_off';
            butt1.classList.add('disable');
            butt1.classList.remove('visible');
        }
        else if (res1 == 1) {
            res1Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res1Bl.classList.remove('ventBgOff', 'ventColOff');
            res1Dy.classList.add('resDyOff');
            res1Dy.classList.remove('resDyOn');
            res1My.classList.add('resMyOn');
            res1My.classList.remove('resMyOff');
            res1Tx.innerText = 'mode_fan';
            butt1.classList.add('disable');
            butt1.classList.remove('visible');
        }
        else if (res1 == 2) {
            res1Bl.classList.add('ventBgOff', 'ventColOff');
            res1Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res1Dy.classList.add('resDyOn');
            res1Dy.classList.remove('resDyOff');
            res1My.classList.add('resMyOff');
            res1My.classList.remove('resMyOn');
            res1Tx.innerText = 'mode_fan_off';
            butt1.classList.remove('disable');
            butt1.classList.add('visible');
        }
        else if (res1 == 3) {
            res1Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res1Bl.classList.remove('ventBgOff', 'ventColOff');
            res1Dy.classList.add('resDyOn');
            res1Dy.classList.remove('resDyOff');
            res1My.classList.add('resMyOff');
            res1My.classList.remove('resMyOn');
            res1Tx.innerText = 'mode_fan';
            butt1.classList.remove('disable');
            butt1.classList.add('visible');
        }
        else if (res1 == 4) {
            res1Bl.classList.add('ventBgOff', 'ventColOff');
            res1Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res1Dy.classList.remove('resDyOff');
            res1Dy.classList.remove('resDyOn');
            res1My.classList.remove('resMyOn');
            res1My.classList.remove('resMyOff');
            res1Tx.innerText = 'warning';
            butt1.classList.add('disable');
            butt1.classList.remove('visible');
        }
        else {
            res1Bl.classList.add('ventBgOff', 'ventColOff');
            res1Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res1Dy.classList.add('resDyOff');
            res1Dy.classList.remove('resDyOn');
            res1My.classList.remove('resMyOn');
            res1My.classList.add('resMyOff');
            res1Tx.innerText = 'phonelink_off';
            butt1.classList.add('disable');
            butt1.classList.remove('visible');
        }


        //2

        if (res2 == 0) {
            res2Bl.classList.add('ventBgOff', 'ventColOff');
            res2Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res2Dy.classList.add('resDyOff');
            res2Dy.classList.remove('resDyOn');
            res2My.classList.add('resMyOn');
            res2My.classList.remove('resMyOff');
            res2Tx.innerText = 'mode_fan_off';
            butt2.classList.add('disable');
            butt2.classList.remove('visible');
        }
        else if (res2 == 1) {
            res2Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res2Bl.classList.remove('ventBgOff', 'ventColOff');
            res2Dy.classList.add('resDyOff');
            res2Dy.classList.remove('resDyOn');
            res2My.classList.add('resMyOn');
            res2My.classList.remove('resMyOff');
            res2Tx.innerText = 'mode_fan';
            butt2.classList.add('disable');
            butt2.classList.remove('visible');
        }
        else if (res2 == 2) {
            res2Bl.classList.add('ventBgOff', 'ventColOff');
            res2Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res2Dy.classList.add('resDyOn');
            res2Dy.classList.remove('resDyOff');
            res2My.classList.add('resMyOff');
            res2My.classList.remove('resMyOn');
            res2Tx.innerText = 'mode_fan_off';
            butt2.classList.remove('disable');
            butt2.classList.add('visible');
        }
        else if (res2 == 3) {
            res2Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res2Bl.classList.remove('ventBgOff', 'ventColOff');
            res2Dy.classList.add('resDyOn');
            res2Dy.classList.remove('resDyOff');
            res2My.classList.add('resMyOff');
            res2My.classList.remove('resMyOn');
            res2Tx.innerText = 'mode_fan';
            butt2.classList.remove('disable');
            butt2.classList.add('visible');
        }
        else if (res2 == 4) {
            res2Bl.classList.add('ventBgOff', 'ventColOff');
            res2Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res2Dy.classList.remove('resDyOff');
            res2Dy.classList.remove('resDyOn');
            res2My.classList.remove('resMyOn');
            res2My.classList.remove('resMyOff');
            res2Tx.innerText = 'warning';
            butt2.classList.add('disable');
            butt2.classList.remove('visible');
        }
        else {
            res2Bl.classList.add('ventBgOff', 'ventColOff');
            res2Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res2Dy.classList.add('resDyOff');
            res2Dy.classList.remove('resDyOn');
            res2My.classList.remove('resMyOn');
            res2My.classList.add('resMyOff');
            res2Tx.innerText = 'phonelink_off';
            butt2.classList.add('disable');
            butt2.classList.remove('visible');
        }


        //3
        if (res3 == 0) {
            res3Bl.classList.add('ventBgOff', 'ventColOff');
            res3Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res3Dy.classList.add('resDyOff');
            res3Dy.classList.remove('resDyOn');
            res3My.classList.add('resMyOn');
            res3My.classList.remove('resMyOff');
            res3Tx.innerText = 'mode_fan_off';
            butt3.classList.add('disable');
            butt3.classList.remove('visible');
        }
        else if (res3 == 1) {
            res3Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res3Bl.classList.remove('ventBgOff', 'ventColOff');
            res3Dy.classList.add('resDyOff');
            res3Dy.classList.remove('resDyOn');
            res3My.classList.add('resMyOn');
            res3My.classList.remove('resMyOff');
            res3Tx.innerText = 'mode_fan';
            butt3.classList.add('disable');
            butt3.classList.remove('visible');
        }
        else if (res3 == 2) {
            res3Bl.classList.add('ventBgOff', 'ventColOff');
            res3Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res3Dy.classList.add('resDyOn');
            res3Dy.classList.remove('resDyOff');
            res3My.classList.add('resMyOff');
            res3My.classList.remove('resMyOn');
            res3Tx.innerText = 'mode_fan_off';
            butt3.classList.remove('disable');
            butt3.classList.add('visible');
        }
        else if (res3 == 3) {
            res3Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res3Bl.classList.remove('ventBgOff', 'ventColOff');
            res3Dy.classList.add('resDyOn');
            res3Dy.classList.remove('resDyOff');
            res3My.classList.add('resMyOff');
            res3My.classList.remove('resMyOn');
            res3Tx.innerText = 'mode_fan';
            butt3.classList.remove('disable');
            butt3.classList.add('visible');
        }
        else if (res3 == 4) {
            res3Bl.classList.add('ventBgOff', 'ventColOff');
            res3Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res3Dy.classList.remove('resDyOff');
            res3Dy.classList.remove('resDyOn');
            res3My.classList.remove('resMyOn');
            res3My.classList.remove('resMyOff');
            res3Tx.innerText = 'warning';
            butt3.classList.add('disable');
            butt3.classList.remove('visible');
        }
        else {
            res3Bl.classList.add('ventBgOff', 'ventColOff');
            res3Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res3Dy.classList.add('resDyOff');
            res3Dy.classList.remove('resDyOn');
            res3My.classList.remove('resMyOn');
            res3My.classList.add('resMyOff');
            res3Tx.innerText = 'phonelink_off';
            butt3.classList.add('disable');
            butt3.classList.remove('visible');
        }



        //4

        if (res4 == 0) {
            res4Bl.classList.add('ventBgOff', 'ventColOff');
            res4Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res4Dy.classList.add('resDyOff');
            res4Dy.classList.remove('resDyOn');
            res4My.classList.add('resMyOn');
            res4My.classList.remove('resMyOff');
            res4Tx.innerText = 'mode_fan_off';
            butt4.classList.add('disable');
            butt4.classList.remove('visible');
        }
        else if (res4 == 1) {
            res4Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res4Bl.classList.remove('ventBgOff', 'ventColOff');
            res4Dy.classList.add('resDyOff');
            res4Dy.classList.remove('resDyOn');
            res4My.classList.add('resMyOn');
            res4My.classList.remove('resMyOff');
            res4Tx.innerText = 'mode_fan';
            butt4.classList.add('disable');
            butt4.classList.remove('visible');
        }
        else if (res4 == 2) {
            res4Bl.classList.add('ventBgOff', 'ventColOff');
            res4Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res4Dy.classList.add('resDyOn');
            res4Dy.classList.remove('resDyOff');
            res4My.classList.add('resMyOff');
            res4My.classList.remove('resMyOn');
            res4Tx.innerText = 'mode_fan_off';
            butt4.classList.remove('disable');
            butt4.classList.add('visible');
        }
        else if (res4 == 3) {
            res4Bl.classList.add('ventBgOn', 'ventColOn', 'VentOn');
            res4Bl.classList.remove('ventBgOff', 'ventColOff');
            res4Dy.classList.add('resDyOn');
            res4Dy.classList.remove('resDyOff');
            res4My.classList.add('resMyOff');
            res4My.classList.remove('resMyOn');
            res4Tx.innerText = 'mode_fan';
            butt4.classList.remove('disable');
            butt4.classList.add('visible');
        }
        else if (res4 == 4) {
            res4Bl.classList.add('ventBgOff', 'ventColOff');
            res4Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res4Dy.classList.add('resDyOff');
            res4Dy.classList.remove('resDyOn');
            res4My.classList.remove('resMyOn');
            res4My.classList.add('resMyOff');
            res4Tx.innerText = 'warning';
            butt4.classList.add('disable');
            butt4.classList.remove('visible');
        }
        else {
            res4Bl.classList.add('ventBgOff', 'ventColOff');
            res4Bl.classList.remove('ventBgOn', 'ventColOn', 'VentOn');
            res4Dy.classList.add('resDyOff');
            res4Dy.classList.remove('resDyOn');
            res4My.classList.remove('resMyOn');
            res4My.classList.add('resMyOff');
            res4Tx.innerText = 'phonelink_off';
            butt4.classList.add('disable');
            butt4.classList.remove('visible');
        }



    });
}

document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.getElementById("openButton");
    var closeButton = document.getElementById("closeButton");
    var infoBlock = document.getElementById("info");

    openButton.addEventListener("click", function() {
        infoBlock.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        infoBlock.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var flor0 = document.getElementById("zFlore");
    var flor1 = document.getElementById("fFlore");
    var flor2 = document.getElementById("sFlore");
    var flor3 = document.getElementById("tFlore");
    var flor4 = document.getElementById("foFlore");
    var flor5 = document.getElementById("fiFlore");
    var fl0Bl = document.getElementById("screen0");
    var fl1Bl = document.getElementById("screen1");
    var fl2Bl = document.getElementById("screen2");
    var fl3Bl = document.getElementById("screen3");
    var fl4Bl = document.getElementById("screen4");
    var fl5Bl = document.getElementById("screen5");

    flor0.addEventListener("click", function() {
        fl0Bl.style.display = "block";
        fl1Bl.style.display = "none";
        fl2Bl.style.display = "none";
        fl3Bl.style.display = "none";
        fl4Bl.style.display = "none";
        fl5Bl.style.display = "none";
        flor0.style.backGround = "#717d8a";
        flor1.style.backGround = "#212529";
        flor2.style.backGround = "#212529";
        flor3.style.backGround = "#212529";
        flor4.style.backGround = "#212529";
        flor5.style.backGround = "#212529";
    });
    flor1.addEventListener("click", function() {
        fl1Bl.style.display = "block";
        fl0Bl.style.display = "none";
        fl2Bl.style.display = "none";
        fl3Bl.style.display = "none";
        fl4Bl.style.display = "none";
        fl5Bl.style.display = "none";
        flor0.style.backGround = "#212529";
        flor1.style.backGround = "#717d8a";
        flor2.style.backGround = "#212529";
        flor3.style.backGround = "#212529";
        flor4.style.backGround = "#212529";
        flor5.style.backGround = "#212529";
    });
    flor2.addEventListener("click", function() {
        fl2Bl.style.display = "block";
        fl1Bl.style.display = "none";
        fl0Bl.style.display = "none";
        fl3Bl.style.display = "none";
        fl4Bl.style.display = "none";
        fl5Bl.style.display = "none";
        flor0.style.backGround = "#212529";
        flor1.style.backGround = "#212529";
        flor2.style.backGround = "#717d8a";
        flor3.style.backGround = "#212529";
        flor4.style.backGround = "#212529";
        flor5.style.backGround = "#212529";
    });
    flor3.addEventListener("click", function() {
        fl3Bl.style.display = "block";
        fl1Bl.style.display = "none";
        fl0Bl.style.display = "none";
        fl2Bl.style.display = "none";
        fl4Bl.style.display = "none";
        fl5Bl.style.display = "none";
        flor0.style.backGround = "#212529";
        flor1.style.backGround = "#212529";
        flor2.style.backGround = "#212529";
        flor3.style.backGround = "#717d8a";
        flor4.style.backGround = "#212529";
        flor5.style.backGround = "#212529";
    });
    flor4.addEventListener("click", function() {
        fl4Bl.style.display = "block";
        fl1Bl.style.display = "none";
        fl0Bl.style.display = "none";
        fl2Bl.style.display = "none";
        fl3Bl.style.display = "none";
        fl5Bl.style.display = "none";
        flor0.style.backGround = "#212529";
        flor1.style.backGround = "#212529";
        flor2.style.backGround = "#212529";
        flor3.style.backGround = "#212529";
        flor4.style.backGround = "#717d8a";
        flor5.style.backGround = "#212529";
    });
    flor5.addEventListener("click", function() {
        fl5Bl.style.display = "block";
        fl1Bl.style.display = "none";
        fl0Bl.style.display = "none";
        fl2Bl.style.display = "none";
        fl3Bl.style.display = "none";
        fl4Bl.style.display = "none";
        flor0.style.backGround = "#212529";
        flor1.style.backGround = "#212529";
        flor2.style.backGround = "#212529";
        flor3.style.backGround = "#212529";
        flor4.style.backGround = "#212529";
        flor5.style.backGround = "#717d8a";
    });
});







$(document).ready(function() {
    updateValues();
    setInterval(updateValues, 500); // Обновлять каждую секунду
    
    
});
$('#setButton2').click(function() {
        console.log('Button 2 clicked');  // Добавьте лог
        setValues(2);
    });

    $('#setButton3').click(function() {
        console.log('Button 3 clicked');  // Добавьте лог
        setValues(3);
    });