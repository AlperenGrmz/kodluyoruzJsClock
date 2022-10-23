let Name = prompt("Adınız Nedir")
document.querySelector("#myName").innerHTML = Name

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

function showTime() {
    const today = new Date();
    let d = weekday[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = (h<10?"0"+h:h)
    m = (m<10?"0"+m:m)
    s = (s<10?"0"+s:s)
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + "-" + d;
    setTimeout(showTime, 1000);
}
showTime()