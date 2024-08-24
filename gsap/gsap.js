function splitText(selector) {
    const $elems = document.querySelectorAll(selector);

    $elems.forEach((e) => {
        const str = e.innerText;

        const splitedText = str.split("").map((char) => {
            return `<span class="char">${char === " " ? "&nbsp;&nbsp;" : char}</span>`
        }).join("");

        e.innerHTML = splitedText;
    })
}


function roundedText() {
    const cursor = document.querySelector(".cursor");
    const $chars = document.querySelectorAll(".char");
    for (let i = 0; i < $chars.length; i++) {
        const rotation = i * (360 / $chars.length);

        gsap.set($chars[i], {
            x: 100,
            rotate: rotation,
        })
    }

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(cursor, {
        rotation: 360,
        duration: 5,
        ease: "none"
    })
}



window.addEventListener("DOMContentLoaded", () => {
    splitText(".cursor-text");
    roundedText();
})

window.addEventListener("mousemove", (e)=>{
    const cursor = document.querySelector(".cursor");
    const x = e.clientX;
    const y = e.clientY;

    const tl = gsap.timeline();

    tl.to(cursor, {
        duration: 1,
        x: x - 100,
        y: y - 100,
        ease: Expo.ease
    })
})