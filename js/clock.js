const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // padStart(2,"0") 자리수를 2자리로 해주기 위해 숫자가 2자리 미만인 경우 앞에 0을 추가함 
    // date.getHours()가 숫자이기 때문에 문자로 바꿔주기 위해서 
    // String함수를 써줌
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);