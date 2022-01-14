const API_URL = 'https://restcountries.com/v3.1/region/europe?fields=name'; //création de la  variable API_URL

//Lire notre JSON 
async function render() {
    const response = await fetch('https://restcountries.com/v3.1/region/europe?fields=name'); // Création de la variable response 
    const countries = await response.json();

    let countryName=``; // Création de la variable countryName

    for(const country of countries){ // Création du boucle, pour afficher country(pays), se trouvant dans countries de la page
        countryName+=`<li>${country.name.official}</li>`;
    }
    const ul = document.querySelector("#countries"); //Obtenir la liste et l'afficher dans index HTML
    ul.innerHTML= countryName; 
  }


window.addEventListener('load', render()); // Chargement de la page


/*
window.onload = function(){

  $.get("data.json", function(data){
      console.log(data);
      });
  }

*/