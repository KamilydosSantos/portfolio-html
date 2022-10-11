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

//menu mobile

const buttonMenu = document.getElementById('button-menu');

function activeMenu() {
  const menu = document.getElementById('nav');
  menu.classList.toggle('active-menu');
}

buttonMenu.addEventListener('click', activeMenu);