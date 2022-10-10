// habilidades

const skillsItems = document.querySelectorAll(".skills-items li");
const skillsDescriptions = document.querySelectorAll(".skills-descriptions li");

function activeSkill(index) {
  skillsDescriptions.forEach((item) => {
    item.classList.remove("active");
  });
  skillsDescriptions[index].classList.add("active");
  skillsItems.forEach((item) => {
    item.classList.remove("focus");
  });
  skillsItems[index].classList.add("focus");
}

skillsItems.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeSkill(index);
  });
});

// header scroll

const introduction = document.getElementById("introduction");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");

function goIntroduction() {
  window.scroll(0, 0);
}

function goSkills() {
  window.scroll(0, 880);
}

function goProjects() {
  window.scroll(0, 1600);
}

introduction.addEventListener("click", goIntroduction);
skills.addEventListener("click", goSkills);
projects.addEventListener("click", goProjects);
