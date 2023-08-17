setInterval(function(){
    let d = new Date();
    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let Day = d.getDay();
    let da=d.getDate();
    let mon = d.getMonth();
    let yr = d.getFullYear();

    if(hrs>=13){
        hrs-=12;
        meridiem.innerHTML ="PM";
    }
    else{
        meridiem.innerHTML = "AM";
    }

    if(Day==1){
        day.innerHTML=`${da}/${mon}/${yr} - Monday`;
    }
    else if(Day ==2){
        day.innerHTML=`${da}/${mon}/${yr} - Tuesday`;
    }
    else if(Day==3){
        day.innerHTML=`${da}/${mon}/${yr} - Wednesday`;
    }
    else if(Day==4){
        day.innerHTML=`${da}/${mon}/${yr} - Thursday`;
    }
    else if(Day=5){
        day.innerHTML=`${da}/${mon}/${yr} - Friday`;
    }
    else if(Day==6){
        day.innerHTML=`${da}/${mon}/${yr} - Saturday`;
    }
    else{
        day.innerHTML=`${da}/${mon}/${yr} - Sunday`;
    }

    hours.innerHTML = hrs + '<p class="time-text">Hours</p>';
    minutes.innerHTML = min + '<p class="time-text">Minutes</p>';
    seconds.innerHTML = sec + '<p class="time-text">Seconds</p>';
})