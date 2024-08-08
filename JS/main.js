const $mousePinter = document.querySelector(".mouseChild");
window.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  $mousePinter.style.left = mouseX + "px";
  $mousePinter.style.top = mouseY + "px";
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

// myName,skills,nature
gsap.registerPlugin(ScrollTrigger);

gsap.to(".myName", {
  scrollTrigger: {
    trigger: ".myName",
    start: "top 80%",
    end: "top 0%",
    scrub: true,
  },
  x: 500,
});

gsap.to(".skills", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    end: "top 0%",
    scrub: true,
  },
  x: -500,
});

gsap.to(".nature", {
  scrollTrigger: {
    trigger: ".nature",
    start: "top 80%",
    end: "top 0%",
    scrub: true,
  },
  x: 500,
});

// project hide Img
const projectImgElements = document.querySelectorAll(".projectImg_el");

const projectVisible = (mouseX, mouseY) => {
  let visibleElement = null;

  projectImgElements.forEach(($projectImgBox) => {
    const projectImgBoxRect = $projectImgBox.getBoundingClientRect();

    if (
      mouseX >= projectImgBoxRect.left &&
      mouseX <= projectImgBoxRect.right &&
      mouseY >= projectImgBoxRect.top &&
      mouseY <= projectImgBoxRect.bottom
    ) {
      visibleElement = $projectImgBox;
    } else {
      // 외부에 있으면 이미지 박스를 숨김
      gsap.to($projectImgBox, {
        autoAlpha: 0,
        duration: 0.2,
      });
    }
  });

  if (visibleElement) {
    // 내부에 있으면 이미지 박스를 표시하고 위치를 업데이트
    gsap.to(visibleElement, {
      x:
        mouseX -
        visibleElement.getBoundingClientRect().left -
        visibleElement.clientWidth / 2,
      y:
        mouseY -
        visibleElement.getBoundingClientRect().top -
        visibleElement.clientHeight / 2,
      autoAlpha: 1,
      duration: 0.2,
    });
  }
};

// 모든 프로젝트 이미지 요소에 대해 이벤트 리스너 추가
document.addEventListener("mousemove", (e) => {
  projectVisible(e.clientX, e.clientY);
});
