const button = document.querySelector(".SearchB");
const search = document.querySelector(".searchInput");
const Container = document.getElementById("MainContainer");
var storedNames = localStorage.getItem("favoriteMeals");
storedNames = storedNames ? storedNames.split(",") : [];

for (let i = 0; i < storedNames.length; ++i) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${storedNames[i]}`
  )
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
      } else {
        // Examine the text in the response
        return response.json();
      }
    })
    .then((data) => {
      let dat = data.meals;
      for (element of dat) {
        if (element.strMeal === storedNames[i]) {
          // Create a div with a card class
          const link = document.createElement("a");
          link.setAttribute("href", "../selectedProduct/selectedProduct.html");
          const Meal = document.createElement("div");
          Meal.appendChild(link);
          Meal.setAttribute("class", "FirstOpject");
          Container.appendChild(Meal);
          const imgMeal = document.createElement("img");
          imgMeal.setAttribute("class", "imgOfOpject");

          link.appendChild(imgMeal);

          imgMeal.setAttribute("src", `${element.strMealThumb}`);
          const favoritMeal = document.createElement("div");
          favoritMeal.setAttribute("class", "favorite");
          const mealName = document.createElement("p");
          mealName.setAttribute("class", "mealName");
          mealName.textContent = `${element.strMeal}`;
          mealName.style.display = "none";
          Meal.appendChild(mealName);
          Meal.appendChild(favoritMeal);

          var LocalstorageValues = localStorage.getItem("favoriteMeals");
          LocalstorageValues = LocalstorageValues
            ? LocalstorageValues.split(",")
            : [];
          var Found = Boolean(LocalstorageValues.includes(element.strMeal));
          const favIcon = document.createElement("i");
          if (Found == false) {
            favIcon.setAttribute("class", "ri-heart-line");
            favIcon.setAttribute("onclick", "Favorite(this)");
          } else {
            //favIcon.setAttribute("class", "fas");
            favIcon.setAttribute("class", "fas fa-heart");
            favIcon.setAttribute("onclick", "Favorite(this)");
          }
          favoritMeal.appendChild(favIcon);
        }
      }
    });
}

var storedDrinksNames = localStorage.getItem("favoriteDrinks");
storedDrinksNames = storedDrinksNames ? storedDrinksNames.split(",") : [];

for (let b = 0; b < storedDrinksNames.length; ++b) {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${storedDrinksNames[b]}`
  )
    .then((response) => {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
      } else {
        // Examine the text in the response
        return response.json();
      }
    })
    .then((data) => {
      for (let i of data.drinks) {
        if (i.strDrink === storedDrinksNames[b]) {
          const link = document.createElement("a");
          link.setAttribute("href", "../selectedProduct/selectedProduct.html");

          const Drink = document.createElement("div");
          Drink.setAttribute("class", "FirstOpject");

          const imgDrink = document.createElement("img");
          imgDrink.setAttribute("class", "imgOfOpject");
          imgDrink.setAttribute("src", `${i.strDrinkThumb}`);

          const drinkName = document.createElement("p");
          drinkName.setAttribute("class", "drinkName");
          drinkName.textContent = `${i.strDrink}`;
          drinkName.style.display = "none";
          Drink.appendChild(drinkName);

          const favoriteDrink = document.createElement("div");
          favoriteDrink.setAttribute("class", "favorite");

          var LocalstorageValues = localStorage.getItem("favoriteDrinks");
          LocalstorageValues = LocalstorageValues
            ? LocalstorageValues.split(",")
            : [];
          var Found = Boolean(LocalstorageValues.includes(i.strDrink));
          const favIcon = document.createElement("i");
          if (Found == false) {
            favIcon.setAttribute("class", "ri-heart-line");
            favIcon.setAttribute("onclick", "Favorite(this)");
          } else {
            //favIcon.setAttribute("class", "fas");
            favIcon.setAttribute("class", "fas fa-heart");
            favIcon.setAttribute("onclick", "Favorite(this)");
          }

          link.appendChild(imgDrink);
          favoriteDrink.appendChild(favIcon);
          Drink.appendChild(favoriteDrink);
          Drink.appendChild(link);
          Container.appendChild(Drink);
        }
      }
    });
}

function Favorite(x) {
  if (x.classList == "ri-heart-line") {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("mealName")[0]
        .innerHTML;

    var LocalStorageArr = localStorage.getItem("favoriteMeals");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(select);
    localStorage.setItem("favoriteMeals", LocalStorageArr);
  } else {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("mealName")[0]
        .innerHTML;
    var LocalStorageArr = localStorage.getItem("favoriteMeals");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    var remove = LocalStorageArr.indexOf(select);
    LocalStorageArr.splice(remove, 1);

    localStorage.setItem("favoriteMeals", LocalStorageArr);
  }
}

function FavoriteDrink(x) {
  if (x.classList == "ri-heart-line") {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("drinkName")[0]
        .innerHTML;

    var LocalStorageArr = localStorage.getItem("favoriteDrinks");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    LocalStorageArr.push(select);
    localStorage.setItem("favoriteDrinks", LocalStorageArr);
  } else {
    x.classList.toggle("ri-heart-line");
    x.classList.toggle("fas");
    x.classList.toggle("fa-heart");
    const select =
      x.parentElement.parentElement.getElementsByClassName("drinkName")[0]
        .innerHTML;
    var LocalStorageArr = localStorage.getItem("favoriteDrinks");
    LocalStorageArr = LocalStorageArr ? LocalStorageArr.split(",") : [];
    var remove = LocalStorageArr.indexOf(select);
    LocalStorageArr.splice(remove, 1);

    localStorage.setItem("favoriteDrinks", LocalStorageArr);
  }
}
