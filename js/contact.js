
/*
 * 
*** MODALE DE CONTACT ***
 * 
 */

const modalBtn = document.querySelector("#contactPhotographer");
const modalBg = document.querySelector(".modalContact");
const button = document.querySelector("button");

/* APPARITION FORM */
button.addEventListener("click", test => {
    modalBg.style.display = "block";
});

/* CLOSE FORM */
const crossForm = document.querySelector("#closeForm");
crossForm.addEventListener("click", function(){
    modalBg.style.display = "none";
  });


/*
 * 
 */
