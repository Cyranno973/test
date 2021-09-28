const encartPhotographers = [...document.querySelectorAll('.encartPhotographer')];
const aEl = [...document.querySelectorAll('#menu ul li a')];

aEl.map((category, index) => category.addEventListener('click', (event) => {
    event.preventDefault();
    let categoryCLicker = event.target.dataset.tag;
    console.log(categoryCLicker);
    let allClassNav = aEl.map(a => a.classList.contains('yellow'))
    console.log(allClassNav);
    if (!allClassNav.includes(true)) {
        console.log("class yellow non present");
        event.target.classList.add("yellow");

        encartPhotographers.map(article => article).filter(article => {
            let tableEl = article.dataset.tags;
            tableEl = tableEl.split(' ');
            console.log(tableEl);
            if (tableEl.includes(categoryCLicker)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        })

    } else if (allClassNav.indexOf(true) === index) {
        console.log('il a cliquer sur le meme tag');
        event.target.classList.remove("yellow");
        return encartPhotographers.map(article => article.style.display = 'block');

    } else {
        console.log('il a cliquer sur un autre tag et la class yellow est present');
        aEl.forEach(a => a.classList.remove('yellow'))
        event.target.classList.add("yellow");
        encartPhotographers.map(article => article.style.display = 'block');

        encartPhotographers.map(article => article).filter(article => {
            let tableEl = article.dataset.tags;
            tableEl = tableEl.split(' ');
            if (tableEl.includes(categoryCLicker)) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        })
    }
}));













//TODO creer fonction et factoriser le code et pour allez plus loin creer des class
function filterTags(event, index) {


}
