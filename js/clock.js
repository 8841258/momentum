const clock = document.querySelector("h2.clock");


function clockFunc() {
    //Date Object... 모든 것 추출 가능 => 반환:number 타입
    //String 변환... 대문자 S
    //문자열.padStart(문자열 길이, 채울 문자열), padEnd
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clockFunc();

//setInterval(func, ms) 함수를 ms마다 실행, setTimeout
setInterval(clockFunc, 1000);


