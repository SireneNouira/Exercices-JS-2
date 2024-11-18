// EXERCICE 1

// let img = document.querySelector("img");
// img.addEventListener("mouseover", handleMouseOverAddNewSrc);
// function handleMouseOverAddNewSrc() {

//     img.src = "images/image1_2.jpg";

// }

// img.addEventListener("mouseout", handleMouseOutAddNewSrc);
// function handleMouseOutAddNewSrc() {

//     img.src = "images/image1.jpg";

// }

// EXERCICE 2

// let champ= document.querySelector("input");

// champ.addEventListener("blur", handeBoiteDeDia);
// function handeBoiteDeDia(){
//     alert("Merci de votre participation");
// }

// EXERCICE 3

// const champ = document.getElementById("lastname");

// champ.addEventListener("keyup", handleClickOnClavier);
// function handleClickOnClavier(){
// let valeur = champ.value;
//     alert(valeur);
// }

// EXERCICE 4

// const champ = document.querySelectorAll("input");

// const buttonRaz = document.querySelector("button");

// buttonRaz.addEventListener("click", handleRemoveDonnees);
// function handleRemoveDonnees() {

//     champ.forEach((element)=> (element.value = ""));
// }

// EXERCICE 5

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("mouseover", handleMouseOverAddNewImg);
  
});


function handleMouseOverAddNewImg(event) {
    console.log(event.target);
    
    event.target.src = "images/image1_2.jpg";
  }
  