const search = document.querySelector(".searchInput");
const Container = document.getElementById("MainContainer");
Container.addEventListener("click", forSelected);
search.onkeypress = function (e) {
  if (e.key === "Enter") {
    localStorage.setItem(1, search.value);
    location.reload();
  }
};


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
      const link= document.createElement("a");
      link.setAttribute("href","../selectedProduct/selectedProduct.html");
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
      var Found = Boolean(
        LocalstorageValues.includes(element.strMeal)
      );
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
  });
}
else{

     
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

        const link= document.createElement("a");
        link.setAttribute("href","../selectedProduct/selectedProduct.html");
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
  
        Meal.appendChild(favoritMeal);
  const mealName = document.createElement("p");
      mealName.setAttribute("class", "mealName");
      mealName.textContent = `${element.strMeal}`;
      mealName.style.display = "none";
      Meal.appendChild(mealName);
        var LocalstorageValues = localStorage.getItem("favoriteMeals");
        LocalstorageValues = LocalstorageValues
          ? LocalstorageValues.split(",")
          : [];
        var Found = Boolean(
          LocalstorageValues.includes(element.strMeal)
        );
        const favIcon = document.createElement("i");
        if (Found == false) {
          favIcon.setAttribute("class", "ri-heart-line");
          favIcon.setAttribute("onclick", "Favorite(this)");
        } else {
          favIcon.setAttribute("class", "fas fa-heart");
          favIcon.setAttribute("onclick", "Favorite(this)");
        }
        favoritMeal.appendChild(favIcon);

      }
    });
 }/*  else {
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
        // Create a tag and give it attribute href that take the user to
        // Selected productpage
        const link = document.createElement("a");
        link.setAttribute("href", "../selectedProduct/selectedProduct.html");
        Container.appendChild(link);

}

        // create div class FirstOpject
        const Meal = document.createElement("div");
        Meal.setAttribute("class", "FirstOpject");
        link.appendChild(Meal);

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

        const mealName = document.createElement("p");
        mealName.setAttribute("class", "mealName");
        mealName.textContent = `${element.strMeal}`;
        mealName.style.display = "none";
        Meal.appendChild(mealName);
      }
    });
}  */

// This function make repalce the value for each click on dish or drink and save in localStorge ,this is the same function in drink page .

function forSelected(items) {
  const select = items.target.parentElement.parentElement;
  console.log(select);
  const selectedElemet = select.getElementsByClassName("mealName")[0].innerHTML;
  const s = localStorage.setItem("value", selectedElemet);
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