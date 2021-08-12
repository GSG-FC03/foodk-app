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
          typeOfObject.appendChild(paraOfCategory);
          paraOfCategory.textContent = "Category";

          const category = document.createElement("h3");
          category.style.color = "black";
          category.textContent = `${s.strCategory}`;
          typeOfObject.appendChild(category);

          // div of area of selected item
          const areaOfObject = document.createElement("div");
          areaOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(areaOfObject);

          const paraOfArea = document.createElement("p");
          paraOfArea.style.color = "black";
          areaOfObject.appendChild(paraOfArea);
          paraOfArea.textContent = "Area";

          const area = document.createElement("h3");
          area.style.color = "black";
          area.textContent = `${s.strArea}`;
          areaOfObject.appendChild(area);

          // div of  ingradients of selected item
          const ingradientsOfObject = document.createElement("div");
          ingradientsOfObject.setAttribute("class", "item ingradients");
          descriptionOfItems.appendChild(ingradientsOfObject);

          const paraOfIngradients = document.createElement("p");
          ingradientsOfObject.appendChild(paraOfIngradients);
          paraOfIngradients.textContent = "Ingradients";

          const IngradientsDiv = document.createElement("div");
          IngradientsDiv.setAttribute("class", "clickDiv");
          IngradientsDiv.style.display = "none";
          ingradientsOfObject.appendChild(IngradientsDiv);

          const ingradient = document.createElement("p");
          ingradient.style.display = "none";
          IngradientsDiv.appendChild(ingradient);

          // making fo loop to get values of all ingradients that have value
          let aray1 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strIngredient") && value !== null) {
              aray1.push(value);
            }
          }
          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);

          //add on click on plus to get data of quantiries
          plusIcon1.onclick = function () {
            ingradient.style.display = "block";
            IngradientsDiv.style.display = "block";
            subtractIcon1.style.display = "block";
            ingradient.textContent = `${aray1}`;
            quantitiesOfObject.style.marginTop = "177px";
            plusIcon1.style.display = "none";
          };
          // creation of subtract icon
          const subtractIcon1 = document.createElement("i");
          subtractIcon1.setAttribute("class", "ri-subtract-fill");
          ingradientsOfObject.appendChild(subtractIcon1);
          subtractIcon1.style.display = "none";

          //add on click on subtract to hide data of quantiries
          subtractIcon1.onclick = function () {
            IngradientsDiv.style.display = "none";
            ingradient.style.display = "none";
            plusIcon1.style.display = "block";
            subtractIcon1.style.display = "none";
            quantitiesOfObject.style.marginTop = "0";
          };

          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities ");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";

          const quantitiesDiv = document.createElement("div");
          quantitiesDiv.setAttribute("class", "clickDiv");
          quantitiesDiv.style.display = "none";
          quantitiesOfObject.appendChild(quantitiesDiv);

          const quantitie = document.createElement("p");
          quantitie.style.display = "none";
          quantitiesDiv.appendChild(quantitie);

          // making fo loop to get values of all ingradients that have value
          let aray2 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strMeasure") && value !== null) {
              aray2.push(value);
            }
          }
          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);

          //add on click on plus to get data of quantiries
          plusIcon2.onclick = function () {
            quantitiesDiv.style.display = "block";
            quantitie.style.display = "block";
            subtractIcon2.style.display = "block";
            quantitie.textContent = `${aray2}`;
            instructionsOfObject.style.marginTop = "177px";
            plusIcon2.style.display = "none";
          };

          const subtractIcon2 = document.createElement("i");
          subtractIcon2.setAttribute("class", "ri-subtract-fill");
          quantitiesOfObject.appendChild(subtractIcon2);
          subtractIcon2.style.display = "none";

          subtractIcon2.onclick = function () {
            quantitiesDiv.style.display = "none";
            quantitie.style.display = "none";
            plusIcon2.style.display = "block";
            subtractIcon2.style.display = "none";
            instructionsOfObject.style.marginTop = "0";
          };

          const instructionsOfObject = document.createElement("div");
          instructionsOfObject.setAttribute("class", "item instructions");
          descriptionOfItems.appendChild(instructionsOfObject);

          const paraOfInstructions = document.createElement("p");
          instructionsOfObject.appendChild(paraOfInstructions);
          paraOfInstructions.textContent = "Instructions";

          const instructionDiv = document.createElement("div");
          instructionDiv.setAttribute("class", "instDiv");
          instructionsOfObject.appendChild(instructionDiv);
          instructionDiv.style.display = "none";

          const instructions = document.createElement("p");
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
          instructionDiv.appendChild(instructions);

          // creation of plus icon

          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          // when we click on plus sign display instructions
          plusIcon3.onclick = function () {
            instructionDiv.style.display = "block";
            instructions.style.display = "block";
            plusIcon3.style.display = "none";
            subtractIcon3.style.display = "block";
          };

          const subtractIcon3 = document.createElement("i");
          subtractIcon3.setAttribute("class", "ri-subtract-fill");
          instructionsOfObject.appendChild(subtractIcon3);
          subtractIcon3.style.display = "none";

          subtractIcon3.onclick = function () {
            instructions.style.display = "none";
            instructionDiv.style.display = "none";
            plusIcon3.style.display = "block";
            subtractIcon3.style.display = "none";
          };
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
          name.style.color = "black";
          name.textContent = `${s.strDrink}`;

          // div of category of selected item
          const typeOfObject = document.createElement("div");
          typeOfObject.setAttribute("class", "item");
          descriptionOfItems.appendChild(typeOfObject);

          const paraOfCategory = document.createElement("p");
          typeOfObject.appendChild(paraOfCategory);
          paraOfCategory.textContent = "Category";

          const category = document.createElement("h3");
          category.style.color = "black";
          typeOfObject.appendChild(category);
          category.textContent = `${s.strCategory}`;

          // div of ingradients of selected item
          const ingradientsOfObject = document.createElement("div");
          ingradientsOfObject.setAttribute("class", "item ingradients");
          descriptionOfItems.appendChild(ingradientsOfObject);

          const paraOfIngradients = document.createElement("p");
          ingradientsOfObject.appendChild(paraOfIngradients);
          paraOfIngradients.textContent = "Ingradients";

          const IngradientsDiv = document.createElement("div");
          IngradientsDiv.setAttribute("class", "clickDiv");
          IngradientsDiv.style.display = "none";
          ingradientsOfObject.appendChild(IngradientsDiv);

          const ingradient = document.createElement("p");
          ingradient.style.display = "none";
          IngradientsDiv.appendChild(ingradient);

          // making fo loop to get values of all ingradients that have value
          let aray1 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strIngredient") && value !== null) {
              aray1.push(value);
            }
          }

          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);

          //add on click on plus to get data of quantiries
          plusIcon1.onclick = function () {
            ingradient.style.display = "block";
            IngradientsDiv.style.display = "block";
            subtractIcon1.style.display = "block";
            ingradient.textContent = `${aray1}`;
            quantitiesOfObject.style.marginTop = "177px";
            plusIcon1.style.display = "none";
          };

          const subtractIcon1 = document.createElement("i");
          subtractIcon1.setAttribute("class", "ri-subtract-fill");
          ingradientsOfObject.appendChild(subtractIcon1);
          subtractIcon1.style.display = "none";

          subtractIcon1.onclick = function () {
            IngradientsDiv.style.display = "none";
            ingradient.style.display = "none";
            plusIcon1.style.display = "block";
            subtractIcon1.style.display = "none";
            quantitiesOfObject.style.marginTop = "0";
          };

          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities ");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";

          const quantitiesDiv = document.createElement("div");
          quantitiesDiv.setAttribute("class", "clickDiv");
          quantitiesDiv.style.display = "none";
          quantitiesOfObject.appendChild(quantitiesDiv);

          const quantitie = document.createElement("p");
          quantitie.style.display = "none";
          quantitiesDiv.appendChild(quantitie);

          // making fo loop to get values of all ingradients that have value
          let aray2 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strMeasure") && value !== null) {
              aray2.push(value);
            }
          }
          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);

          //add on click on plus to get data of quantiries
          plusIcon2.onclick = function () {
            quantitiesDiv.style.display = "block";
            quantitie.style.display = "block";
            subtractIcon2.style.display = "block";
            quantitie.textContent = `${aray2}`;
            instructionsOfObject.style.marginTop = "177px";
            plusIcon2.style.display = "none";
          };

          const subtractIcon2 = document.createElement("i");
          subtractIcon2.setAttribute("class", "ri-subtract-fill");
          quantitiesOfObject.appendChild(subtractIcon2);
          subtractIcon2.style.display = "none";

          subtractIcon2.onclick = function () {
            quantitiesDiv.style.display = "none";
            quantitie.style.display = "none";
            plusIcon2.style.display = "block";
            subtractIcon2.style.display = "none";
            instructionsOfObject.style.marginTop = "0";
          };
          const instructionsOfObject = document.createElement("div");
          instructionsOfObject.setAttribute("class", "item instructions");
          descriptionOfItems.appendChild(instructionsOfObject);

          const paraOfInstructions = document.createElement("p");
          instructionsOfObject.appendChild(paraOfInstructions);
          paraOfInstructions.textContent = "Instructions";

          const instructionDiv = document.createElement("div");
          instructionDiv.setAttribute("class", "instDiv");
          instructionsOfObject.appendChild(instructionDiv);
          instructionDiv.style.display = "none";

          const instructions = document.createElement("p");
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
          instructionDiv.appendChild(instructions);

          // creation of plus icon

          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          // when we click on plus sign display instructions
          plusIcon3.onclick = function () {
            instructionDiv.style.display = "block";
            instructions.style.display = "block";
            plusIcon3.style.display = "none";
            subtractIcon3.style.display = "block";
          };

          const subtractIcon3 = document.createElement("i");
          subtractIcon3.setAttribute("class", "ri-subtract-fill");
          instructionsOfObject.appendChild(subtractIcon3);
          subtractIcon3.style.display = "none";

          subtractIcon3.onclick = function () {
            instructions.style.display = "none";
            instructionDiv.style.display = "none";
            plusIcon3.style.display = "block";
            subtractIcon3.style.display = "none";
          };
        }
      }
    })

    .catch((eroo) => console.log(eroo));
}
