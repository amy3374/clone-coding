const title = document.querySelector(".hello h1");

const superEventHandler = {
handleMouseEnter : function() {
    title.innerText = "mouse is here!";
    title.style.color = "turquoise";
},
handleMouseLeave : function() {
    title.innerText = "Mouse is gone!";
    title.style.color = "dodgerblue";
},
handleWindowResize : function() {
    title.innerText = "You just resized!";
    title.style.color = "purple";

},
handleWindowContextMenu : function() {
    title.innerText = "That was a right click!";
    title.style.color = "tomato";
    document.body.style.backgroundColor = "yellow";
}
}
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleWindowContextMenu); 