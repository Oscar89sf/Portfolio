export function init() {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  let tl2 = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    delay: 0.5,
    yoyo: true,
  });

  let tl = gsap.timeline();

  const navBrand = document.querySelector(".nav__brand");
  const navItem = document.querySelectorAll(".nav__list__item");
  const heroHeading = document.querySelector(".hero__heading-h1");
  const navBtn = document.querySelector("#nav-btn");
  const heroHeadingSecondary = document.querySelector(
    ".hero__heading-secondary"
  );
  const overLine = document.querySelector(".overline");
  const typeText = document.querySelector(".type__text");
  const profileImg = document.querySelector(".profile__img");

  tl.from(heroHeading, {
    autoAlpha: 0,
    y: "80",
    ease: "power2.out",
    duration: 0.5,
  })
    .from(heroHeadingSecondary, {
      autoAlpha: 0,
      y: "80",
      ease: "power2.out",
      duration: 0.5,
    })
    .from(
      navBrand,
      {
        autoAlpha: 0,
        x: -50,
      },
      "-=0.5"
    )
    .from(
      navItem,
      {
        autoAlpha: 0,
        x: -50,
        stagger: 0.2,
      },
      "<"
    )
    .from(
      navBtn,
      {
        autoAlpha: 0,
      },
      "<"
    );

  tl2
    .to(typeText, { text: { value: "Web" } }, "+=1")
    .to(typeText, { text: { value: "JavaScript" } }, "+=1")
    .to(typeText, { text: { value: "React" } }, "+=1")
    .to(typeText, { text: { value: "Frontend" } }, "+=1")
    .to(typeText, { text: { value: "Fullstack" } }, "+=1");

  const reveal = gsap.utils.toArray(".reveal");

  reveal.forEach((element, i) => {
    gsap.from(element, {
      lazy: false,
      duration: 3,
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "+=200 80%",
        scrub: 0.5,
      },
      autoAlpha: 0,
      ease: "power1.inOut",
    });
  });
}
