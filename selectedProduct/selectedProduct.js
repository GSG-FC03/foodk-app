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
      
                    // create lists to list items
          const unorderedList = document.createElement("ul");
          ingradientsOfObject.appendChild(unorderedList);
                  // making fo loop to get values of all ingradients that have value
          let aray1 = [];

          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strIngredient") && value != "") {
              aray1.push(value);
            }
          }

          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);
          //add on click on plus to get data of quantiries
          plusIcon1.onclick = function () {
              //for loop on array to get data and put it in list
            for (let l1 of aray1) {
              const list1 = document.createElement("li");
              unorderedList.appendChild(list1);
            
              list1.textContent = `${l1}`;
            }

            
          };

          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities Headnotes");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          paraOfQuantities.setAttribute("class", "Headnotes");
          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";
        
            // create lists to list items
          const unorderedList2 = document.createElement("ol");
          ingradientsOfObject.appendChild(unorderedList2);
         // making fo loop to get values of all ingradients that have value
          let aray2 = [];
          const list2 = document.createElement("li");
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strMeasure") && value != "") {
              aray2.push(value);
            }
          }

          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);
          //add on click on plus to get data of quantiries
          plusIcon2.onclick = function () {
                  //for loop on array to get data and put it in list
            for (let l2 of aray2) {
                const list2 = document.createElement("li");
              unorderedList.appendChild(list2);

              list2.textContent = `${l2}`;
            }
          };

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
          const plusIcon4 = document.createElement("i");
          plusIcon4.setAttribute("class", "ri-subtract-fill");
          instructionsOfObject.appendChild(plusIcon4);
          plusIcon4.style.display = "none";

          plusIcon4.onclick = function () {
            instructions.style.display = "none";
            instructionDiv.style.display = "none";
            plusIcon3.style.display = "block";
            plusIcon4.style.display = "none";
          };
          // when we click on plus sign display instructions
          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          plusIcon3.onclick = function () {
            instructionDiv.style.display = "block";
            instructions.style.display = "block";
            plusIcon3.style.display = "none";
            plusIcon4.style.display = "block";
          };
          const instructionDiv = document.createElement("div");
          instructionDiv.setAttribute("class", "instructionDiv");
          instructionsOfObject.appendChild(instructionDiv);
          instructionDiv.style.display = "none";

          const instructions = document.createElement("p");
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
          instructionDiv.appendChild(instructions);
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
          // div of ingradients of selected item
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


            // create lists to list items
            const unorderedList1 = document.createElement("ol");
            ingradientsOfObject.appendChild(unorderedList1);

          // making fo loop to get values of all ingradients that have value
          let aray1 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strIngredient") && value != null) {
              aray1.push(value);
            }
          }

          // creation of plus icon
          const plusIcon1 = document.createElement("i");
          plusIcon1.setAttribute("class", "ri-add-line");
          ingradientsOfObject.appendChild(plusIcon1);
          //add on click on plus to get data of quantiries
          plusIcon1.onclick = function () {
            //for loop on array to get data and put it in list
            for (let l1 of aray1) {
                const list1 = document.createElement("li");
              unorderedList1.appendChild(list1);

              list1.textContent = `${l1}`;
            }
          };
          // div of   quantities of selected item
          const quantitiesOfObject = document.createElement("div");
          quantitiesOfObject.setAttribute("class", "item quantities Headnotes");
          descriptionOfItems.appendChild(quantitiesOfObject);

          const paraOfQuantities = document.createElement("p");
          paraOfQuantities.setAttribute("class", "Headnotes");

          quantitiesOfObject.appendChild(paraOfQuantities);
          paraOfQuantities.textContent = "Quantities";

            // create lists to list items
            const unorderedList2 = document.createElement("ol");
            ingradientsOfObject.appendChild(unorderedList2);
          // making fo loop to get values of all ingradients that have value
          let aray2 = [];
          for (const [key, value] of Object.entries(s)) {
            if (key.includes("strMeasure") && value != null) {
              aray2.push(value);
            }
          }

          // creation of plus icon
          const plusIcon2 = document.createElement("i");
          plusIcon2.setAttribute("class", "ri-add-line");
          quantitiesOfObject.appendChild(plusIcon2);
          plusIcon2.onclick = function () {
             //for loop on array to get data and put it in list
             for (let l2 of aray2) {
                const list2 = document.createElement("li");
              unorderedList2.appendChild(list2);

              list2.textContent = `${l2}`;
            }
          };

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
          const plusIcon4 = document.createElement("i");
          plusIcon4.setAttribute("class", "ri-subtract-fill");
          instructionsOfObject.appendChild(plusIcon4);
          plusIcon4.style.display = "none";

          plusIcon4.onclick = function () {
            instructionDiv.style.display = "none";
            instructions.style.display = "none";
            plusIcon3.style.display = "block";
            plusIcon4.style.display = "none";
          };
          // when we click on plus sign display instructions
          const plusIcon3 = document.createElement("i");
          plusIcon3.setAttribute("class", "ri-add-line");
          instructionsOfObject.appendChild(plusIcon3);

          plusIcon3.onclick = function () {
            instructionDiv.style.display = "block";
            instructions.style.display = "block";
            plusIcon3.style.display = "none";
            plusIcon4.style.display = "block";
          };
          const instructionDiv = document.createElement("div");
          instructionDiv.setAttribute("class", "instructionDiv");
          instructionsOfObject.appendChild(instructionDiv);
          instructionDiv.style.display = "none";

          const instructions = document.createElement("p");
          instructions.textContent = `${s.strInstructions}`;
          instructions.style.display = "none";
          instructionDiv.appendChild(instructions);
        }
      }
    })
    .catch((eroo) => console.log(eroo));
}
