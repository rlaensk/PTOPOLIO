document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "PHOTOSOP",
    "Illustrat",
    "Git Hub",
    "Figma",
  ];

  const skillDiv = document.querySelector("#skill");
  const marqueeUl = document.createElement("ul");

  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    marqueeUl.appendChild(li);
  });
  const firstLi = marqueeUl.firstElementChild.cloneNode(true);
  marqueeUl.appendChild(firstLi);
  skillDiv.appendChild(marqueeUl);
});
