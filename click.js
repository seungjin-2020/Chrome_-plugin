// 시간을 표시하는 도큐맨트를 입력
const clockcontainer = document.querySelector(".js-clock"),
    clockTitle = clockcontainer.querySelector(".nowTime");
const MyName = document.querySelector(".yourName");
// 홈페이지 제목(h1) 컬러설정 도큐맨트를 입력
const title = document.querySelector("#title");
const todo_input = document.querySelector("todo-input");
const CLICKED_CLASS = "clicked";
const CLICKED_CLASS2 = "clicked2";
const CLICKED_CLASS_SOLID = "solid";
const CLICKED_CLASS_LIST_SOLID = "listsolid";

//현제 시간을 구해서 표시하는 함수
function getTime () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;

}

// title 에 CLICKED_CLASS 라는 클레스가 없으면 add 있으면 remove 하는 함수
function hadnleclick() {
    clockcontainer.classList.toggle(CLICKED_CLASS);
    greeting.classList.toggle(CLICKED_CLASS);
    weather.classList.toggle(CLICKED_CLASS);
    toDoList.classList.toggle(CLICKED_CLASS);
    toDoList.classList.toggle(CLICKED_CLASS_LIST_SOLID);
    toDoInput.classList.toggle(CLICKED_CLASS_SOLID);
    MyName.classList.toggle(CLICKED_CLASS_SOLID);

    
}
// title 를 클릭했을대 이벤트가 발생하게 하는 함수
function click() {
    clockTitle.addEventListener("click", hadnleclick);
}
// 함수 실행
click();

// 현제 시간을 구하는 함수를 실행후 0.5초마다 반복적으로 구하게하는 함수
function init () {
    getTime();
    setInterval(getTime, 500)
}
// 현제시간 구해서 표시하는 함수 실행
init();
