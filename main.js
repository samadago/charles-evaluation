const mariageListe = document.getElementById('mariage-liste');
const grossesseListe = document.getElementById('grossesse-liste');
const bebeListe = document.getElementById('bebe-liste');
const coupleListe = document.getElementById('couple-liste');
const baptemeListe = document.getElementById('bapteme-liste');
const familleListe = document.getElementById('famille-liste');
const portraitListe = document.getElementById('portrait-liste');

const mariagePhotos = document.querySelectorAll('.img-mariage');
const grossessePhotos = document.querySelectorAll('.img-grossesse');
const bebePhotos = document.querySelectorAll('.img-bebe');
const couplePhotos = document.querySelectorAll('.img-couple');
const baptemePhotos = document.querySelectorAll('.img-bapteme');
const famillePhotos = document.querySelectorAll('.img-famille');
const portraitPhotos = document.querySelectorAll('.img-portrait');

const notMariagePhotos = [mariagePhotos, bebePhotos, couplePhotos, baptemePhotos, famillePhotos, portraitPhotos];
const notGrossessePhotos = [mariagePhotos, bebePhotos, couplePhotos, baptemePhotos, famillePhotos, portraitPhotos];
const notBebePhotos = [mariagePhotos, grossessePhotos, couplePhotos, baptemePhotos, famillePhotos, portraitPhotos];
const notCouplePhotos = [grossessePhotos, bebePhotos, mariagePhotos, baptemePhotos, famillePhotos, portraitPhotos];
const notBaptemePhotos = [grossessePhotos, bebePhotos, couplePhotos, mariagePhotos, famillePhotos, portraitPhotos];
const notFamillePhotos = [grossessePhotos, bebePhotos, couplePhotos, baptemePhotos, mariagePhotos, portraitPhotos];
const notPortraitPhotos = [grossessePhotos, bebePhotos, couplePhotos, baptemePhotos, famillePhotos, mariagePhotos];
const allPhotos = [mariagePhotos, grossessePhotos, bebePhotos, couplePhotos, baptemePhotos, famillePhotos, portraitPhotos];



/* Display the photos of a category */
function showCategory(elements, elementsList, othersElements) {
    for(let i = 0; i < elements.length; i++) {
        // Display all the photos of a category 
        elementsList.insertBefore(elements[i], elementsList.firstElementChild); 
        elements[i].style.display = "inline-block"; 

        // Not display the photos of the others categories 
        for(let i = 0; i < othersElements.length; i++) {
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
            for(let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none"; 
            }
        }
    }
}

/* Display all the photos */
function showAllPhotos(allElements) {
   for(let i = 0; i < allPhotos.length; i++) {
       //console.log(othersElements[i])
       for(let j = 0; j < allPhotos[i].length; j++) {
           mariageListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           grossesseListeList.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           bebeListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           coupleListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           baptemeListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           familleListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
       for(let j = 0; j < allPhotos[i].length; j++) {
           portraitListe.firstElementChild; 
           allPhotos[i][j].style.display = "inline-block"; 
       }
   }
}

/**
 * Click events listeners 
 */
function setPhotosInPage() {
    // Click on the Wedding button 
    document.querySelector('#wedding').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(mariagePhotos, mariageListe, notMariagePhotos);
    })
    // Click on the Pregnant button 
    document.querySelector('#pregnant').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(grossessePhotos, grossesseListe, notGrossessePhotos);
    })
    // Click on the Baby button 
    document.querySelector('#baby').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(bebePhotos, bebeListe, notBebePhotos);
    })
    // Click on the Couple button 
    document.querySelector('#couple').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(couplePhotos, coupleListe, notCouplePhotos);
    })
    // Click on the Baptism button 
    document.querySelector('#baptism').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(baptemePhotos, baptemeListe, notBaptemePhotos);
    })
    // Click on the Family button 
    document.querySelector('#family').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(famillePhotos, familleListe, notFamillePhotos);
    })
    // Click on the Pregnant button 
    document.querySelector('#portrait').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(portraitPhotos, portraitListe, notPortraitPhotos);
    })
    // Click on the All the photos button 
    document.querySelector('#all').addEventListener('click', (e) => {
        e.preventDefault();
        showAllPhotos(allPhotos);
    })
}




