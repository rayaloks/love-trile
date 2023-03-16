// 1111
const bodyEl = document.querySelector("body");

// 2222
bodyEl.addEventListener("mousemove", function(event){
    // 3333  
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    // 4444
    const spanEl = document.createElement("span");

    // 6666
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // 11,11,11,
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // 5555
    bodyEl.appendChild(spanEl);

    // 101010
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
});