const a = 5;
const b = 2;
const myName = "minseo";

console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log("hello " + myName);

const tobuy = ["potato", "tomato", "pizza"]
console.log(tobuy)
tobuy.push("kimbab")
console.log(tobuy)
console.log(tobuy[2])

const player = {
    name:"minseo", 
    points : 10, 
    fat : false, 
}
console.log(player);
player.lastname = "kim"
player.points = player.points + 15
console.log(player.points);
console.log(player)

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("minseo", 25);
sayHello("seonyoung", 20);
sayHello("hyolim" , 24);

function plus(a, b) {
    console.log(a + b);
}
function devide(a, b) {
    console.log(a/b)
}

plus(8, 30);
devide(98, 20)

const player = {
    name:"minseo", 
    sayHello : function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meent you!!");
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");


const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2
}
const KrAge = calculateKrAge(age)

console.log(KrAge);
const age = parseInt(prompt("How old are you?"));

console.log(age)
console.log(typeof age)
console.log(typeof "15", typeof parseInt("15"))
console.log(isNaN(age));

// if(condition){
    //condition === true
// }
// else(condition){
    //condition === false
// }
if (isNaN(age) || age < 0) {
    console.log("Please write a rear positive number");
}
else if (age < 18) {
    console.log("너무 어려요ㅜ");
}
else if (age >= 18 && age <= 50) {
    console.log("You can drink!");
}
else if (age > 50 && age <= 80) {
    console.log("You should exercise");
}
else if (age > 80) {
    console.log("You can do whatever you want!");
}

const title = document.querySelector(".hello h1");
//.hello h1이 여러개 있어도 그중에 한개만 가져옴
//querySelctor(.hello:first-child h1)
//여러개를 다 가져오고 싶으면 querySelctorAll

// console.dir(title); ->엘리먼트 내부를 보고 싶을 때



// 글자를 클릭하면 색이 변하고, 콘솔에 입력됨
console.dir(title)

function handleTitleClick() {
    title.innerText = "That was a right click!";
    title.style.color = "tomato";
}

// 글자 위에 마우스를 올릴 떄
function handelMouseEnter() {
    title.innerText = "mouse is here!";
    title.style.color = "turquoise";
}

// 글자 위에서 마우스를 뺄 때
function handelMouseLeave() {
    title.innerText = "Mouse is gone!";
    title.style.color = "dodgerblue";
}

function handleWindowResize() {
    title.innerText = "You just resized!";
    title.style.color = "purple";
    // document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!"); 
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("ALL GOOOD!!");
}
function handleWindowContextMenu() {
    title.innerText = "That was a right click!";
    title.style.color = "tomato";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handelMouseEnter);
title.addEventListener("mouseleave",handelMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("contextmenu", handleWindowContextMenu);