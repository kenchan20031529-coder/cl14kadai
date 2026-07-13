document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function (){
    el.style.left = (Math.random() * 300 + 400) + "px";
    el.style.top = (Math.random() * 80 + 200) + "px";
  });
});

document.querySelectorAll('.chou').forEach(function (el) {
  el.addEventListener('mouseover', function (){
    el.style.left = (Math.random() * 800) + "px";
    el.style.top = (Math.random() * 200 + 250) + "px";
  });
});

function resizeScreen(){
    const scale = Math.min(
        window.innerWidth / 960,
        window.innerHeight / 534
    );

    const screen = document.getElementById("screen");
    screen.style.transform = `scale(${scale})`;
}

resizeScreen();
window.addEventListener("resize", resizeScreen);