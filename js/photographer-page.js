// recuperation d'element dans le DOM
const presentationPhoto = document.querySelector('.presentationPhotograph');
const photosConst = document.querySelector('.photosPhotograph');

// recuperation de l'id dans la barre d'address
let urlEl = new URLSearchParams(window.location.search);
let id = urlEl.get("id");

// recuperation de la data selon l'id
json.photographers.map(phtographeEl => {
    //console.log(phtographeEl);
    if (phtographeEl.id == id) {
        //    console.log('teste passer');
        imgPhotographers = phtographeEl.portrait;
        namePhotographers = phtographeEl.name;
        cityPhotographers = phtographeEl.city;
        countryPhotographers = phtographeEl.country;
        taglinePhotographers = phtographeEl.tagline;
        prixPhotographers = phtographeEl.price;
        tagsPhotographers = phtographeEl.tags;
        idPhotographers = phtographeEl.id
    }
})
if (presentationPhoto) {
    presentationPhoto.innerHTML += `
    <button class="contactPhotographer">Contactez-moi</button>
    <div class="textPhotographer">
        <h2 class="namePhotographer">${namePhotographers}</h2>
        <h3 class="adressePhotographer">${cityPhotographers}, ${countryPhotographers}</h3>
        <p class="taglinePhotographer">${taglinePhotographers}</p>
        <div class="tagsPhotograph">${tagsPhotographers.map(tag => `<a class="" href="index.html"># ${tag}</a>`).join('')}</div>
    </div>
    <div>
        <img  class="portraitPhotographer" src="${imgPhotographers}" alt="photographer photo">
    </div>
`;
}
/**
 * nom du dossier selon l'id recuperer
 */
json.photographers.map(phothographeEl => {
    if (phothographeEl.id == id) {
        nomDossier = phothographeEl.name.split(' ').shift();
        //  nameDossier[0]
        // console.log(nomDossier);
    }
})
  json.media.filter(media => media.photographerId == id).map(media => {
    //  console.log(media);
    titrePhoto = media.title;
    likesPhoto = media.likes;
    idPhotoMedia = media.id;
    idPhoto = media.photographerId;
    imgPhoto = `<img class="imgPhoto" src="images/${nomDossier}/${media.image}" alt="photo"></img>`;
    videoPhoto = `<video class="imgPhoto" src="images/${nomDossier}/${media.video}" alt="photo"></video>`;

    function ImageOuVideo() {
        if (media.image) {
            return imgPhoto;
        } else {
            return videoPhoto;
        }
    }

    photosConst.innerHTML += `
                <div class="encartPhoto">
                    <a class="lienPhoto" href="" alt="" target="_blank">
                        ${ImageOuVideo()}
                    </a>
                    <div class="textPhoto">
                        <h3 class="nomPhoto">${titrePhoto}</h3>
                        <button class="likesPhoto" data-idmedia="${idPhotoMedia}" data-likes="${likesPhoto}">
                            <span class="nbLikes">${likesPhoto}</span>
                            <img class="heart" src="images/icones/heart.svg" alt="">
                        </button>
                    </div>
                </div>
                `;
});

const likes = document.querySelectorAll('.likesPhoto');

// ajout des addEvent Listener sur le bouton likes
likes.forEach(chiffre => {
    chiffre.addEventListener('click', calculCoeur)
})

function calculCoeur() {
    console.log(this);
    let dataIdAtt = this.getAttribute('data-idmedia');
    //   console.log(dataIdAtt);
    let cible = document.querySelector(`[data-idmedia='${dataIdAtt}'] .nbLikes`)
      console.log(cible);
    let coeurPlusUn = Number(cible.textContent) + 1;
    //console.log(coeurPlusUn);
    cible.textContent = coeurPlusUn;
    //console.log(coeurPlusUn);
}
