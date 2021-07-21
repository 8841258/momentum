//LOGIN

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");

//반복적인 String은 오타를 방지하기 위해 대문자 변수로 저장한다.
//String 오타는 콘솔에서 가르쳐주지 않지만, 변수 오타는 콘솔에서 표시해주기 때문!
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";

//event - JS가 기본적으로 제공하는 정보. 
//localStorage - 브라우저에 기본적으로 저장할 수 있게 하는 기능. 
//.setItem("key", "value") .getItem("key") .removeItem("key")
function onLoginSubmit(event) {
    event.preventDefault(); //더이상 반짝 나타났다 사라지지 않는다...감동ㅠㅠ
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreetings(saveUsername);
}