const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const findEl = document.querySelector('#ingredients')

const element = ingredients.map(option => {
const creatingElement = document.createElement('li');
creatingElement.textContent = option;
    creatingElement.classList.add('item');

    return creatingElement;
})

console.log(element);
findEl.append(...element);