const button = document.querySelector(".SearchB");
const search = document.querySelector(".searchInput");
const Container = document.getElementById("MainContainer");
button.addEventListener("click", function () {
  localStorage.setItem(1, search.value);
  location.reload();
});

if(localStorage.getItem(1) != null)
{
fetch(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${localStorage.getItem(1)}`
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
      const Meal = document.createElement("div");
      Meal.setAttribute("class", "FirstOpject");
      Container.appendChild(Meal);
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
else{
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=` )
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
        const Meal = document.createElement("div");
        Meal.setAttribute("class", "FirstOpject");
        Container.appendChild(Meal);
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