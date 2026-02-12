const text = "Web Developer & Cyber Security Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;


