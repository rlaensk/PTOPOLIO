/*
document.addEventListener("DOMContentLoaded", function () {
  const marquee = gsap.timeline();

  // .marquee-content 요소를 올바르게 선택하여 애니메이션 적용

  ScrollTrigger.create({
    animation: marquee,
    trigger: "#about", // 트리거 요소를 #skill로 설정
    start: "top 80%",
    end: "150% 30%",
    scrub: false,
    pin: false,
    markers: false,
  });
});
*/
document.addEventListener("DOMContentLoaded", function () {
  // .marquee-content 요소를 선택합니다.
  const marqueeContent = document.querySelector(".marquee-content");

  const triggerElement = document.querySelector("#about");

  // Intersection Observer 옵션 설정
  const options = {
    root: triggerElement, // 뷰포트를 루트로 사용
    rootMargin: "0px", // 루트의 마진
    threshold: 0.2, // 80%가 보일 때 콜백 실행
  };

  // Intersection Observer 콜백 함수
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 애니메이션 로직을 여기에 추가합니다.
        animateMarquee();
        observer.unobserve(entry.target); // 애니메이션이 한 번만 실행되도록 설정
      }
    });
  };

  // Intersection Observer 생성
  const observer = new IntersectionObserver(observerCallback, options);

  // 감시할 요소 설정
  observer.observe(triggerElement);

  // 애니메이션 함수
  function animateMarquee() {
    // 애니메이션 로직
    let start = null;
    const duration = 1000; // 애니메이션 지속 시간 (밀리초)
    const startPos = parseInt(getComputedStyle(marqueeContent).top, 10);

    const endPos = startPos - 1150; // 원하는 위치

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const ease = progress / duration; // 단순 선형 이징

      marqueeContent.style.transform = `translateY(${
        startPos + ease * (endPos - startPos)
      }px)`;

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }
});

//hambergerMenu
const $ham1 = document.querySelector(".ham1");
const $ham2 = document.querySelector(".ham2");
const $hambergetBox = document.querySelector(".hambergerMenu");
const $hambergerList = document.querySelector("#hambergerList");
$hambergetBox.addEventListener("click", function () {
  $ham1.classList.toggle("active");
  $ham2.classList.toggle("active");
  $hambergerList.classList.toggle("active");
});

//about

document.addEventListener("DOMContentLoaded", function () {
  const $myName = document.querySelector(".myName");
  const $skills = document.querySelector(".skills");
  const $nature = document.querySelector(".natuer");
  const $body = document.querySelector("body");

  $body.addEventListener("mousemove", function (e) {
    const x = e.clientY;
    console.log(x);
  });
  $myName.addEventListener("mousemove", function (e) {
    const rect = $myName.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const perventage = (x / width) * 100;
    console.log(x);
  });
});
