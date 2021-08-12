const searchInput = document.getElementsByClassName("searchInput")[0];
const drinksContainer = document.getElementById("MainContainer");
const addLocalStorge = [];


searchInput.onkeypress = searchs;
drinksContainer.addEventListener("click", forSelected);
document.addEventListener('DOMContentLoaded',loadSearch)

const api = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s";
// function to fetch API with try and return error by catch
async function getData() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    createCardsOfDrinks(data);
  } catch (error) {
    console.log("error", error.message);
  }
}
getData();

// function to create elements and get all photos of drinks from API

function createCardsOfDrinks(data) {
  let arrayOfDrinks = data.drinks;
  for (let i = 0; i < arrayOfDrinks.length; i++) {
    // for each element in API Create a tag and give it href attribute that take the user to Selected productpage
    const link = document.createElement("a");
    link.setAttribute("class", "item");
    link.setAttribute("href", "../selectedProduct/selectedProduct.html");

    // create div class FirstOpject inside a(item)
    const Drink = document.createElement("div");
    Drink.setAttribute("class", "FirstOpject");
    drinksContainer.appendChild(Drink);

    //create img tag and give it class imgOfOpject and src attribute and put it inside div(FirstOpject)
    const imgDrink = document.createElement("img");
    imgDrink.setAttribute("class", "imgOfOpject");
    Drink.appendChild(imgDrink);
    imgDrink.setAttribute("src", `${arrayOfDrinks[i].strDrinkThumb}`);

    // create div tag and give it class favorite and put it inside div            (FirstOpject)
    const favoriteDrink = document.createElement("div");
    favoriteDrink.setAttribute("class", "favorite");
    Drink.appendChild(favoriteDrink);

    // create i tag and give it class ri-heart-line and put it inside div(favorite)
    const favIcon = document.createElement("i");
    favIcon.setAttribute("class", "ri-heart-line");
    favoriteDrink.appendChild(favIcon);
    link.appendChild(Drink);

    // create p tag and give it class drinkName,give it taxt from API ng give it  style display as none and put it inside div(FirstOpject)
    const drinkName = document.createElement("p");
    drinkName.setAttribute("class", "drinkName");
    drinkName.textContent = `${arrayOfDrinks[i].strDrink}`;
    drinkName.style.display = "none";
    Drink.appendChild(drinkName)
    drinksContainer.appendChild(link);
  }
}

function searchs(e) {
  if (e.key === "Enter") {
    e.preventDefault();
     const searcharr=[];
          const se=localStorage.setItem("uuuu",searchInput.value);
          console.log(se,111111)
          searcharr.push(se)
    drinksContainer.textContent = "";
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput.value}`
    )
      .then((res) => {
        if (res.status !== 200) {
          console.log(`looks like there was an error ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
       
        for (let i of data.drinks){
          // for each element in API Create a tag and give it href attribute that take the user to Selected productpage
          const link = document.createElement("a");
          link.setAttribute("href", "../selectedProduct/selectedProduct.html");
          link.setAttribute("class", "item");
          drinksContainer.appendChild(link);

          // create div class FirstOpject inside a(item)
          const Drink = document.createElement("div");
          Drink.setAttribute("class", "FirstOpject");
          link.appendChild(Drink);

          // create p tag and give it class drinkName,give it taxt from API ng give it  style display as none and put it inside div(FirstOpject)
          const drinkName = document.createElement("p");
          drinkName.setAttribute("class", "drinkName");
          drinkName.textContent = `${i.strDrink}`;
          drinkName.style.display = "none";
          Drink.appendChild(drinkName);

          // create div tag and give it class favorite and put it inside div            (FirstOpject)
          const favoriteDrink = document.createElement("div");
          favoriteDrink.setAttribute("class", "favorite");
          Drink.appendChild(favoriteDrink);

          // create i tag and give it class ri-heart-line and put it inside div(favorite)
          const favIcon = document.createElement("i");
          favIcon.setAttribute("class", "ri-heart-line");
          favoriteDrink.appendChild(favIcon);

          //create img tag and give it class imgOfOpject and src attribute and put it inside div(FirstOpject)
          const imgDrink = document.createElement("img");
          imgDrink.setAttribute("class", "imgOfOpject");
          imgDrink.setAttribute("src", `${i.strDrinkThumb}`);
          Drink.appendChild(imgDrink);
          
       
        }
      })
      .catch((rej) => console.log(rej));

    // searchInput.value = "";
  
}}

// This function make repalce the value for each click on dish or drink and save in localStorge ,this is the same function in drink page .
function forSelected(items) {
  const select = items.target.parentElement;
  const selectedElemet =
    select.getElementsByClassName("drinkName")[0].innerHTML;
  const selected = localStorage.setItem("value",selectedElemet);
  addLocalStorge.push(selected);
}

function loadSearch() {

    drinksContainer.textContent = "";
 
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${localStorage.getItem("uuuu")}`
    )
      .then((res) => {
        if (res.status !== 200) {
          console.log(`looks like there was an error ${res.status}`);
        } else {
          return res.json();
        }
      })
.then((data) => {
  for (let i of data.drinks){
    // for each element in API Create a tag and give it href attribute that take the user to Selected productpage
    const link = document.createElement("a");
    link.setAttribute("href", "../selectedProduct/selectedProduct.html");
    link.setAttribute("class", "item");
    drinksContainer.appendChild(link);

    // create div class FirstOpject inside a(item)
    const Drink = document.createElement("div");
    Drink.setAttribute("class", "FirstOpject");
    link.appendChild(Drink);

    // create p tag and give it class drinkName,give it taxt from API ng give it  style display as none and put it inside div(FirstOpject)
    const drinkName = document.createElement("p");
    drinkName.setAttribute("class", "drinkName");
    drinkName.textContent = `${i.strDrink}`;
    drinkName.style.display = "none";
    Drink.appendChild(drinkName);

    // create div tag and give it class favorite and put it inside div            (FirstOpject)
    const favoriteDrink = document.createElement("div");
    favoriteDrink.setAttribute("class", "favorite");
    Drink.appendChild(favoriteDrink);

    // create i tag and give it class ri-heart-line and put it inside div(favorite)
    const favIcon = document.createElement("i");
    favIcon.setAttribute("class", "ri-heart-line");
    favoriteDrink.appendChild(favIcon);

    //create img tag and give it class imgOfOpject and src attribute and put it inside div(FirstOpject)
    const imgDrink = document.createElement("img");
    imgDrink.setAttribute("class", "imgOfOpject");
    imgDrink.setAttribute("src", `${i.strDrinkThumb}`);
    Drink.appendChild(imgDrink);
         
       
  }
})
.catch((rej) => console.log(rej));

searchInput.value = "";

}
