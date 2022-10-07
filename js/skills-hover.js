
const skillsItems = document.querySelectorAll('.hoverLight'); //seleciona a lista das imagens
const skillsDescriptions = document.querySelectorAll('.skills-descriptions ul li');

function hoverLight() {
    skillsItems.innerHTML = 'oi';
}

skillsItems.forEach(item => {
    item.addEventListener('click', hoverLight); //para cada item da lista, adiciona o evento de click e chama a funcao
});

function activeSkill(index) {
    skillsDescriptions.forEach(item => {
        item.classList.remove('');
    });
    skillsDescriptions[index].classList.add('active');
}

skillsItems.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeSkill(index);
    });
});