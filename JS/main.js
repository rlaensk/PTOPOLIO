document.addEventListener("DOMContentLoaded", function () {
  const marquee = gsap.timeline();

  // .marquee-content 요소를 올바르게 선택하여 애니메이션 적용

  ScrollTrigger.create({
    animation: marquee,
    trigger: "#about", // 트리거 요소를 #skill로 설정
    start: "top 80%",
    end: "150% 30%",
    scrub: true,
    pin: false,
    markers: true,
  });
});
