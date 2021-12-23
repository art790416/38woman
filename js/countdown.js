// JavaScript Document
jQuery(document).ready(function() {

    window.setInterval(countDown, 1);
    qaControl();
});

function qaControl() {
    /**改寫部分↓ */
    jQuery('#list').find('.item').click(function() {
        jQuery(this).toggleClass('show');
        jQuery(this).find('.item-content').toggle();
    });
    /**改寫部分↑ */
}

function countDown() {
    var now = new Date();
    var future = new Date("03/16/2021 00:00:00");
    var timeLeft = future - now;
    var milli = timeLeft;

    var mills = now.getMilliseconds();
    var seconds = milli / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    mills = 1000 - mills;
    var spareMills = mills.toString().substr(0, 1);
    var spareSeconds = seconds % 60;
    var spareMinutes = minutes % 60;
    var spareHours = hours % 24;
    var spareDays = days % 365;


    minutes = parseInt(minutes);
    hours = parseInt(hours);
    days = parseInt(days);
    spareSeconds = parseInt(spareSeconds);
    spareMinutes = parseInt(spareMinutes);
    spareHours = parseInt(spareHours);
    spareDays = parseInt(spareDays);

    days = padNumber(days);
    hours = padNumber(hours);
    minutes = padNumber(minutes);
    spareSeconds = padNumber(spareSeconds);
    spareMinutes = padNumber(spareMinutes);
    spareHours = padNumber(spareHours);
    spareDays = padNumber(spareDays);


    timeLeft = spareDays + "天" + spareHours + "時" + spareMinutes + "分" + spareSeconds + "." + spareMills + "秒";
    var mySpan = document.getElementById("timer");
    mySpan.innerHTML = timeLeft;

    if (milli <= 0) { //Time's run out! If all values go to zero
        mySpan.innerHTML = "00:00:00";
    }
}

function padNumber(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}