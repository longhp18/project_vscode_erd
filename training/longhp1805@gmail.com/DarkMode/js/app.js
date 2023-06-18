var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var second = today.getSeconds();

function myFunc() {
    

    if (hour < 10) {
        document.getElementById("hour").innerHTML = "0" + hour;
    } else {
        document.getElementById("hour").innerHTML = hour;
    }
    if (min < 10) {
        document.getElementById("min").innerHTML = "0" + min;
    } else {
        document.getElementById("min").innerHTML = min;
    }
    if (second < 10) {
        document.getElementById("second").innerHTML = "0" + second;
    } else {
        document.getElementById("second").innerHTML = second;
    }
    
}setInterval(myFunc, 1000);

/*
if(hour < 18 ) {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    
}else {
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
} 

*/




document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
})
