const imageContaner = document.getElementsByClassName("imgOfHeader")[0];
const item = localStorage.getItem("value");
const imagesrc = document.getElementsByClassName("img")[0];
const descriptionOfItems = document.querySelector(".descriptionOfItems");

// to display the chosen dish
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

          // give the img class src 
          imagesrc.setAttribute("src", `${s.strMealThumb}`);

         // create a in anchor tag and , class , href  
          const arrow = document.createElement("a");
          arrow.setAttribute("class", "arrow");
          arrow.setAttribute("href", "../food/food.html");
          imgOfHeader.appendChild(arrow);

          // create an i tag and give it class ri-arrow-left-s-line
          const arrowIcon = document.createElement("i");
          arrowIcon.setAttribute("class", "ri-arrow-left-s-line");
          arrow.appendChild(arrowIcon);

          const favoriteIcon = document.createElement("div");
          favoriteIcon.setAttribute("class", "favoriteIcon");
          imgOfHeader.appendChild(favoriteIcon);

          const fav = document.createElement("i");
          fav.setAttribute("class", "ri-heart-3-line");
          favoriteIcon.appendChild(fav);

          // div of name of selected item
          const nameOfObject = document.createElement("div");
          nameOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(nameOfObject);

          const name = document.createElement("h3");
          nameOfObject.appendChild(name);
          name.textContent = `${s.strMeal}`;

          // div of category of selected item
          const typeOfObject = document.createElement("div");
          typeOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(typeOfObject);
          const paraOfCategory = document.createElement("p");
          paraOfCategory.setAttribute("class", "Headnotes");
          typeOfObject.appendChild(paraOfCategory);
          paraOfCategory.textContent = "Category";
          const category = document.createElement("h3");
          typeOfObject.appendChild(category);
          category.textContent = `${s.strCategory}`;

          // div of area of selected item
          const areaOfObject = document.createElement("div");
          areaOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(areaOfObject);

          const paraOfArea = document.createElement("p");
          paraOfArea.setAttribute("class", "Headnotes");
          areaOfObject.appendChild(paraOfArea);
          paraOfArea.textContent = "Area";

          const area = document.createElement("h3");
          areaOfObject.appendChild(area);
          area.textContent = `${s.strArea}`;

          // div of  ingradients of selected item
          const ingradientsOfObject = document.createElement("div");
          ingradientsOfObject.setAttribute(
            "class",
            "item ingradients Headnotes"
          );
          descriptionOfItems.appendChild(ingradientsOfObject);

          const paraOfIngradients = document.createElement("p");
          paraOfIngradients.setAttribute("class", "Headnotes");
          ingradientsOfObject.appendChild(paraOfIngradients);
          paraOfIngradients.textContent = "Ingradients";

          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);

          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities Headnotes");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          paraOfQuantities.setAttribute("class", "Headnotes");
          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";

          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);

          // div of   instructions of selected item
          const instructionsOfObject = document.createElement("div");
          instructionsOfObject.setAttribute(
            "class",
            "item instructions Headnotes"
          );
          descriptionOfItems.appendChild(instructionsOfObject);

          const paraOfInstructions = document.createElement("p");
          paraOfInstructions.setAttribute("class", "Headnotes");
          instructionsOfObject.appendChild(paraOfInstructions);
          paraOfInstructions.textContent = "Instructions";

          // creation of plus icon
          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          // when we click on plus sign display instructions
          plusIcon3.onclick = function () {
            instructions.style.display = "block";
          };
          const instructions = document.createElement("p");
          instructionsOfObject.appendChild(instructions);
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
        }
      }
    })
    .catch((eroo) => console.log(eroo));
}
// to display the chosen drink
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

          const arrow = document.createElement("a");
          arrow.setAttribute("class", "arrow");
          arrow.setAttribute("href", "../drinks/drinks.html");
          imgOfHeader.appendChild(arrow);

          const arrowIcon = document.createElement("i");
          arrowIcon.setAttribute("class", "ri-arrow-left-s-line");
          arrow.appendChild(arrowIcon);

          
          const favoriteIcon = document.createElement("div");
          favoriteIcon.setAttribute("class", "favoriteIcon");
          imgOfHeader.appendChild(favoriteIcon);

          const fav = document.createElement("i");
          fav.setAttribute("class", "ri-heart-3-line");
          favoriteIcon.appendChild(fav);

          // div of name of selected item
          const nameOfObject = document.createElement("div");
          nameOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(nameOfObject);

          const name = document.createElement("h3");
          nameOfObject.appendChild(name);
          name.textContent = `${s.strDrink}`;

          // div of category of selected item
          const typeOfObject = document.createElement("div");
          typeOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(typeOfObject);
          const paraOfCategory = document.createElement("p");
          paraOfCategory.setAttribute("class", "Headnotes");
          typeOfObject.appendChild(paraOfCategory);

          paraOfCategory.textContent = "Category";
          const category = document.createElement("h3");
          typeOfObject.appendChild(category);
          category.textContent = `${s.strCategory}`;

          const ingradientsOfObject = document.createElement("div");
          ingradientsOfObject.setAttribute(
            "class",
            "item ingradients Headnotes"
          );
          descriptionOfItems.appendChild(ingradientsOfObject);

          const paraOfIngradients = document.createElement("p");
          paraOfIngradients.setAttribute("class", "Headnotes");
          ingradientsOfObject.appendChild(paraOfIngradients);
          paraOfIngradients.textContent = "Ingradients";

          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);

          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities Headnotes");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          paraOfQuantities.setAttribute("class", "Headnotes");

          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";

          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);

          // div of   instructions of selected item
          const instructionsOfObject = document.createElement("div");
          instructionsOfObject.setAttribute(
            "class",
            "item instructions Headnotes"
          );
          descriptionOfItems.appendChild(instructionsOfObject);

          const paraOfInstructions = document.createElement("p");
          paraOfInstructions.textContent = "Instructions";
          instructionsOfObject.appendChild(paraOfInstructions);
          paraOfInstructions.setAttribute("class", "Headnotes");

          // creation of plus icon
          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          // when we click on plus sign display instructions
          plusIcon3.onclick = function () {
            instructions.style.display = "block";
          };
          const instructions = document.createElement("p");
          instructionsOfObject.appendChild(instructions);
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
        }
      }
    })
    .catch((eroo) => console.log(eroo));
}
