const imageContaner = document.getElementsByClassName("image")[0];
const item = localStorage.getItem("value");
const imagesrc = document.getElementsByClassName("img")[0];

if (item) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
    .then((res) => {
      if (res.status !== 200) {
        console.log(`looks like there was an error ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      for (let s of data.meals) {
        if (s.strMeal === item) {
          imagesrc.setAttribute("src", `${s.strMealThumb}`);
          imageContaner.appendChild(imagesrc);
        }
      }
    })
    .catch((eroo) => console.log(eroo));
}

if (item) {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${item}`)
    .then((res) => {
      if (res.status !== 200) {
        console.log(`looks like there was an error ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      for (let s of data.drinks) {
        if (s.strDrink === item) {
          imagesrc.setAttribute("src", `${s.strDrinkThumb}`);
          imageContaner.appendChild(imagesrc);
        }
      }
    })
    .catch((eroo) => console.log(eroo));
}
