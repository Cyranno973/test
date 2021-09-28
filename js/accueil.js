/* APPEL TABLEAU PHOTOGRAPHES POU PAGE D'ACCUEIL */
const categoryTags = ['Portrait','Art','Fashion','Architecture','Travel','Sport','Animals','Events'];
let ulEl = document.querySelector('header nav ul');


categoryTags.forEach(tag =>{
    ulEl.innerHTML += `
    <li>
            <a class="nav" href="" data-tag="${tag.toLowerCase()}" aria-label="category"># ${tag}</a>
    </li>
    `;
})

const photographersConst = document.querySelector('.photographers');

json.photographers.forEach(photographer => {
    imgPhotographers = photographer.portrait;
    namePhotographers = photographer.name;
    cityPhotographers = photographer.city;
    countryPhotographers = photographer.country;
    taglinePhotographers = photographer.tagline;
    prixPhotographers = photographer.price;
    tagsPhotographers = photographer.tags;
    idPhotographers = photographer.id;

    photographersConst.innerHTML += `
     <article class="encartPhotographer" data-tags="${tagsPhotographers.map(tag => `${tag}`).join(' ')}">
         <a class="lienPhotographer" href="photographer-page.html?id=${idPhotographers}"  alt="">
             <img class="portraitPhotographer" src="${imgPhotographers}" alt="photographer photo">
             <h2 class="namePhotographer">${namePhotographers}</h2>
         </a>
         <div class="textPhotographer">
             <h3 class="adressePhotographer">${cityPhotographers}, ${countryPhotographers}</h3>
             <p class="taglinePhotographer">${taglinePhotographers}</p>
             <p class="pricePhotographer">${prixPhotographers}€/jour</p>
         </div>
         <div class="tagsPhotograph ">
             ${tagsPhotographers.map(tag => `<a class="" href="index.html"># ${tag}</a>`).join('')}
         </div>
     </article>`;
})
