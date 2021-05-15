let time = document.getElementById('time'),
    dateTime = document.getElementById('date'),
    color = document.getElementById('color');

function timeAndDate(){
    let date = new Date();
    
    function seconds(){
        if(date.getSeconds < 10){
            return `0${date.getSeconds()}`;
        }else{
            return `${date.getSeconds()}`;
        }
    }
    time.textContent = `${date.getHours()} : ${date.getMinutes()} : ${seconds()}`;
    dateTime.textContent = `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`;

}

setInterval(timeAndDate,500);
onload = timeAndDate();

function getColor(){
    let getColor = color.value;
    localStorage.setItem('color', getColor);
    document.querySelector('.clock').style.background = localStorage.getItem('color');
    console.log(localStorage.getItem('color'));
}
 
function setColor(){
    color.value = localStorage.getItem('color');
    document.querySelector('.clock').style.background = localStorage.getItem('color');
}
setInterval(setColor, 2000);















