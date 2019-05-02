let title = document.querySelector('title');
let cocktailName = document.getElementById('cocktail-name');
let cocktailImage = document.getElementById('cocktail-image');
let cocktailInstructions = document.getElementById('cocktail-instructions');
let cocktailGlass = document.getElementById('cocktail-glass');

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(res => res.json())
  .then(res => {
    title.innerHTML = res.drinks[0].strDrink;
    cocktailName.innerHTML = res.drinks[0].strDrink;
    cocktailImage.innerHTML = `<img src=${res.drinks[0].strDrinkThumb} alt=${
      res.drinks[0].strDrink
    }/>`;
    cocktailGlass.innerHTML = res.drinks[0].strGlass;
    cocktailInstructions.innerHTML = res.drinks[0].strInstructions;
  });
