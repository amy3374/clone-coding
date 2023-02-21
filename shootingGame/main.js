let canvas;
let ctx;
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameoverImage;
let gameOver = false; // true이면 게임이 끝나고, false이면 게임임 안끝남
let score = 0;

let spaceshipX = canvas.width / 2 - 30;
let spaceshipY = canvas.height - 60;

let bulletList = []; //총알들을 저장하는 리스트
function bullet() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    //init은 함수를 초기화
    this.x = spaceshipX + 18;
    this.y = spaceshipY;
    this.alive = true; // true면 살아있는 총알

    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 7;
  };

  this.chekHit = function () {
    for (let i = 0; i < enemyList.length; i++) {
      if (
        this.y <= enemyList[i].y &&
        this.x >= enemyList[i].x &&
        this.x <= enemyList[i].x + 40
      ) {
        //총알이 죽음, 우주선 사라짐, 점수 획득
        score++;
        this.alive = false;
        enemyList.splice(i, 1);
      }
    }
  };
}

function generateRandomValue(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

let enemyList = [];
function enemy() {
  this.x = 0;
  this.y = 0;
  this.init = function () {
    this.y = 0;
    this.x = generateRandomValue(0, canvas.width - 48);

    enemyList.push(this);
  };
  this.update = function () {
    this.y += 4;

    if (this.y >= canvas.height - 48) {
      gameOver = true;
      console.log("Gameover");
    }
  };
}
function loadImage() {
  backgroundImage = new Image();
  backgroundImage.src = "images/background.jpg";

  spaceshipImage = new Image();
  spaceshipImage.src = "images/spaceship.png";

  bulletImage = new Image();
  bulletImage.src = "images/bullet.png";

  enemyImage = new Image();
  enemyImage.src = "images/enemy.png";

  gameoverImage = new Image();
  gameoverImage.src = "images/gameover.jpg";
}

let keysDown = {};
function keyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysDown[event.key] = true;
  });
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.key];

    if (event.key == " ") {
      createBullet(); //총알 생성 함수
    }
  });
}

function createBullet() {
  //console.log("총알 생성!");
  let b = new bullet();
  b.init();
  //console.log("새로운 총알 리스트", bulletList);
}

function createEnemy() {
  const interval = setInterval(function () {
    let e = new enemy();
    e.init();
  }, 1000);
}

function update() {
  if ("ArrowRight" in keysDown) {
    spaceshipX += 5; // 우주선의 속도
  } // 오른쪽으로 이동
  if ("ArrowLeft" in keysDown) {
    spaceshipX -= 5; // 우주선의 속도
  } // 왼쪽으로 이동
  if (spaceshipX <= 0) {
    spaceshipX = 0;
  }
  if (spaceshipX >= canvas.width - 60) {
    spaceshipX = canvas.width - 60;
  } // 우주선의 좌표값이 경기장 안에 있도록 지정

  //총알의 y좌표 업데이트 함수 호출
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].chekHit();
    }
  }

  //적의 좌표 업데이트
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
}

function render() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);
  ctx.fillText(`Score : ${score}`, 20, 20);
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y);
    }
  }

  for (let i = 0; i < enemyList.length; i++) {
    ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y);
  }
}

function main() {
  if (!gameOver) {
    // gameOver이 false가 되면 main함수를 호출, 아니면 호출x
    update(); //좌표값을 업데이트하고
    render(); //그려주고
    requestAnimationFrame(main); // 위의 과정을 아주 빠르게 반복해줌
  } else {
    ctx.drawImage(gameoverImage, 0, 100, 400, 500);
  }
}

loadImage();
keyboardListener();
createEnemy();
main();
// 방향키를 누루면 우주선의 xy가바뀌고 다시 render

//총알 만들기
//1.스페이스바를 누루면 총알 발사
//2.총알이 발사 = 총알의 y값이 -=, 총알의 x값은 = 스페이스를 누른 순간 우주선의 x좌표
//3.발사된 총알들은 총알 배열에 저장
//4.모든 총알드은 x,y좌표값이 있어야 함
//5. 총알 배열을 가지고 render
