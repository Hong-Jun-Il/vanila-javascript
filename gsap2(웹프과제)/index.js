// declare landingAnimation: ()=>void
// declare countAnimate: (...args: any)=>void
// declare loadingBarAnimation: ()=>void
// declare mainAnimation: ()=>void

function landingAnimation() {
  const $counter3 = document.querySelector(".counter-3");

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 10; j++) {
      const div = document.createElement("div");

      div.className = "num";
      div.textContent = j;
      $counter3.appendChild(div);
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    $counter3.appendChild(finalDiv);
  }

  countAnimate($counter3, 5);
  countAnimate(document.querySelector(".counter-2"), 6);
  countAnimate(document.querySelector(".counter-1"), 2, 4);
  loadingBarAnimation();
}

function countAnimate(counter, duration, delay = 0) {
  const numHeight = counter.querySelector(".num").clientHeight;

  const totalDistance =
    (counter.querySelectorAll(".num").length - 1) * numHeight;

  gsap.to(counter, {
    y: -totalDistance,
    delay,
    duration,
    ease: "power2.inOut",
  });
}

function loadingBarAnimation() {
  gsap.to(".digit", {
    top: "-150px",
    stagger: {
      amount: 0.25,
    },
    delay: 6,
    duration: 1,
    ease: "power4.inOut",
  });

  gsap.from(".loader-1", {
    width: 0,
    duration: 6,
    ease: "power2.inOut",
  });

  gsap.from(".loader-2", {
    width: 0,
    duration: 2,
    delay: 1.9,
    ease: "power2.inOut",
  });

  gsap.to(".loader", {
    background: "none",
    delay: 6.5,
    duration: 0.1,
  });

  gsap.to(".loader-1", {
    rotate: 90,
    y: -50,
    duration: 0.5,
    delay: 6.5,
  });

  gsap.to(
    ".loader-2",
    {
      x: -75,
      y: 75,
      duration: 0.5,
    },
    "<"
  );

  gsap.to(".loader", {
    scale: 40,
    duration: 1,
    delay: 7.3,
    ease: "power2.inOut",
  });

  gsap.to(".loader", {
    rotate: 45,
    y: 500,
    x: 2000,
    duration: 1,
    delay: 7.3,
    ease: "power2.inOut",
  });

  gsap.to(".loading-screen", {
    display: "none",
    duration: 0.5,
    delay: 7.6,
    ease: "power1.inOut",
  });
}

function mainAnimation() {
  const tl = gsap.timeline();

  tl.to("header", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    duration: 1,
    ease: "power4.inOut",
    // delay: 8.5
  })
    .from("header > h1", {
      autoAlpha: 0,
      duration: 0.5,
    })
    .from("nav > ul > li", {
      autoAlpha: 0,
      stagger: 0.1,
    })
    .to(
      "aside",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=.5"
    )
    .to(
      "aside > .img-wrapper",
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=.2"
    )
    .to(".sec", {
      stagger: 0.1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    })
    .to(".line", {
      height: "100%",
      duration: 0.6,
      ease: "power3.in",
    })
    .to(".block-left", {
      left: "-50%",
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    })
    .to(
      ".block-right",
      {
        right: "-50%",
        duration: 1,
        ease: "power3.out",
      },
      "<"
    )
    .to(
      ".line",
      {
        autoAlpha: 0,
        duration: 0.1,
      },
      "<"
    );
}

document.addEventListener("DOMContentLoaded", () => {
  landingAnimation();
  mainAnimation();
});
