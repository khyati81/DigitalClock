function update() {
    //Get todays date
    let today = new Date();
    
    //Extract time from date
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[today.getDay()];

    let date = today.getDate();

    const monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month =  monthArr[today.getMonth()];

    // console.log(day,date,month);

    //Pad 0 if time is < 10 (single digit)
    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
 
    //Convert railway clock to AM/PM clock
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;
    
    //Assign AM or PM according to time
    let timeOfDay = (hour > 12) ? "AM" : "PM";
    

    //Insert time using dom
    document.getElementById('hours').innerHTML = hour + ' :&nbsp';
    document.getElementById('minutes').innerHTML = minutes + ' :&nbsp';
    document.getElementById('seconds').innerHTML = seconds +'&nbsp';
    document.getElementById('timeOfDay').innerHTML = timeOfDay;
    document.getElementById('day').innerHTML = day + ' ,';
    document.getElementById('date').innerHTML = date + '&nbsp&nbsp';
    document.getElementById('month').innerHTML =  month;

}

setInterval(() => {
    update();
}, 1000);

















