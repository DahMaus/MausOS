function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeLabel");
    timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

const bgm = new Audio("./bgm.mp3");
bgm.loop = true;
bgm.volume = 0.5;

bgm.play().catch(() => {
    document.addEventListener("click", () => {
        bgm.play().catch(console.error);
    }, { once: true });
});


dragElement(document.getElementById("Wsgwindow"));

dragElement(document.getElementById("Appwindow"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }


  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;
  
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function closeWindow(element) {
    element.style.display = "none";
}

var welcomeScreen = document.querySelector("#Wsgwindow");
var welcomeScreenClose = document.querySelector("#closeWsgWindow");

welcomeScreenClose.addEventListener("click", function() {
    closeWindow(welcomeScreen);
});

dragElement(document.getElementById("Gameswindow"));

var gamesScreen = document.querySelector("#Gameswindow");
var gamesScreenClose = document.querySelector("#closeGamesWindow");

gamesScreenClose.addEventListener("click", function() {
closeWindow(gamesScreen);
});

var gamesIcon = document.querySelector(".GamesIcon");

gamesIcon.addEventListener("click", function() {
openWindow(gamesScreen);
selectApp(gamesIcon);
});

gamesIcon.addEventListener("animationend", function() {
DeSelectApp(gamesIcon);
});

var appScreen = document.querySelector("#Appwindow");
var appScreenClose = document.querySelector("#closeAppWindow");

appScreenClose.addEventListener("click", function() {
    closeWindow(appScreen);
});

var selectedApp = undefined

function selectApp(element) {
element.classList.add("selectedApp");
selectedApp = element
}

function DeSelectApp(element) {
element.classList.remove("selectedApp");
selectedApp = null
} 

function openWindow(element) {
element.style.display = "block";
}

var appIcon = document.querySelector(".SwagyratorIcon");

appIcon.addEventListener("click", function() {
    openWindow(appScreen);
    selectApp(appIcon);
});

appIcon.addEventListener("animationend", function() {
    DeSelectApp(appIcon);
});

var counter = 0;
var counterLabel = document.querySelector("#counterLabel");
var mouseButton = document.querySelector("#mouseButton");

mouseButton.addEventListener("click", function() {
counter++;
counterLabel.innerHTML = counter;
});