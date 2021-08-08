const button = document.querySelector(".SearchB");
const search = document.querySelector(".searchInput");
const Container = document.getElementById("MainContainer");
button.addEventListener("click", function () {
  localStorage.setItem(1, search.value);
  location.reload();
});

if (localStorage.getItem(1) != null) {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${localStorage.getItem(
      1
    )}`
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
        // Create a div with a card class
        const link = document.createElement("a");
        link.setAttribute("href", "../selectedProduct/selectedProduct.html");
        const Meal = document.createElement("div");
        link.appendChild(Meal);
        Meal.setAttribute("class", "FirstOpject");
        Container.appendChild(link);
        const imgMeal = document.createElement("img");
        imgMeal.setAttribute("class", "imgOfOpject");

        Meal.appendChild(imgMeal);

        imgMeal.setAttribute("src", `${element.strMealThumb}`);
        const favoriteDrink = document.createElement("div");
        favoriteDrink.setAttribute("class", "favorite");

        Meal.appendChild(favoriteDrink);

        const favIcon = document.createElement("i");
        favIcon.setAttribute("class", "ri-heart-line");
        favoriteDrink.appendChild(favIcon);
      }
    });
} else {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
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
        // Create a div with a card class
        const link = document.createElement("a");
        link.setAttribute("href", "../selectedProduct/selectedProduct.html");
        const Meal = document.createElement("div");
        link.appendChild(Meal);
        Meal.setAttribute("class", "FirstOpject");
        Container.appendChild(link);
        const imgMeal = document.createElement("img");
        imgMeal.setAttribute("class", "imgOfOpject");

        Meal.appendChild(imgMeal);

        imgMeal.setAttribute("src", `${element.strMealThumb}`);
        const favoriteDrink = document.createElement("div");
        favoriteDrink.setAttribute("class", "favorite");

        Meal.appendChild(favoriteDrink);

        const favIcon = document.createElement("i");
        favIcon.setAttribute("class", "ri-heart-line");
        favoriteDrink.appendChild(favIcon);
      }
    });
}
const BackButton = document.querySelector(".BackB");
BackButton.addEventListener("click", function () {
  localStorage.removeItem(1);
});
const HomeButton = document.querySelector(".Home");
HomeButton.addEventListener("click", function () {
  localStorage.removeItem(1);
});
const HomeButton = document.querySelector(".Favorite");
HomeButton.addEventListener("click", function () {
  localStorage.removeItem(1);
});

