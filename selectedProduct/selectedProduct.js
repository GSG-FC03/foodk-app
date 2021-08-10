const imgOfHeader = document.querySelector(".imgOfHeader");
const descriptionOfItems = document.querySelector(".descriptionOfItems");

function creatElements() {
  // create elements for header
  const imgProduct = document.createElement("img");
  imgProduct.setAttribute("class", "imgProduct");
  imgProduct.setAttribute(
    "src",
    "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
  );
  imgOfHeader.appendChild(imgProduct);

  const arrow = document.createElement("div");
  arrow.setAttribute("class", "arrow");
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

  //////////////////////////////////////////////////////////////
  // create section of details of selecteg items

  // div of name of selected item
  const nameOfObject = document.createElement("div");
  nameOfObject.setAttribute("class", "item");
  descriptionOfItems.appendChild(nameOfObject);
  const name = document.createElement("h3");
  nameOfObject.appendChild(name);
  name.textContent = "salad";

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
  category.textContent = "pie";

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
  area.textContent = "palestine";

  //////////////////////////////////////////////////////////////
  // div of  ingradients of selected item
  const ingradientsOfObject = document.createElement("div");
  ingradientsOfObject.setAttribute("class", "item ingradients Headnotes");
  descriptionOfItems.appendChild(ingradientsOfObject);

  const paraOfIngradients = document.createElement("p");
  paraOfIngradients.setAttribute("class", "Headnotes");
  ingradientsOfObject.appendChild(paraOfIngradients);
  paraOfIngradients.textContent = "Ingradients";
  // creation of plus icon
  const plusIcon1 = document.createElement("i");
  plusIcon1.setAttribute("class", "ri-add-line");
  ingradientsOfObject.appendChild(plusIcon1);
  ///////////////////////////////////////////////////////////////

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

  ///////////////////////////////////////////////////////

  // div of   instructions of selected item
  const instructionsOfObject = document.createElement("div");
  instructionsOfObject.setAttribute("class", "item instructions Headnotes");
  descriptionOfItems.appendChild(instructionsOfObject);

  const paraOfInstructions = document.createElement("p");
  paraOfInstructions.setAttribute("class", "Headnotes");
  instructionsOfObject.appendChild(paraOfInstructions);
  paraOfInstructions.textContent = "Instructions";
  // creation of plus icon
  const plusIcon3 = document.createElement("i");
  plusIcon3.setAttribute("class", "ri-add-line");
  instructionsOfObject.appendChild(plusIcon3);
}
creatElements();
