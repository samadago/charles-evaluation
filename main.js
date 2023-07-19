
/*
const weddingList = document.getElementById('wedding-list');
const pregnantList = document.getElementById('pregnant-list');
const babyList = document.getElementById('baby-list');
const coupleList = document.getElementById('couple-list');
const baptismList = document.getElementById('baptism-list');
const familyList = document.getElementById('family-list');
const portraitList = document.getElementById('portrait-list');

const weddingPhotos = document.querySelectorAll('.img-wedding');
const pregnantPhotos = document.querySelectorAll('.img-pregnant');
const babyPhotos = document.querySelectorAll('.img-baby');
const couplePhotos = document.querySelectorAll('.img-couple');
const baptismPhotos = document.querySelectorAll('.img-baptism');
const familyPhotos = document.querySelectorAll('.img-family');
const portraitPhotos = document.querySelectorAll('.img-portrait');

const notWeddingPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos];
const notPregnantPhotos = [weddingPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos];
const notBabyPhotos = [pregnantPhotos, weddingPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos];
const notCouplePhotos = [pregnantPhotos, babyPhotos, weddingPhotos, baptismPhotos, familyPhotos, portraitPhotos];
const notBaptismPhotos = [pregnantPhotos, babyPhotos, couplePhotos, weddingPhotos, familyPhotos, portraitPhotos];
const notFamilyPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, weddingPhotos, portraitPhotos];
const notPortraitPhotos = [pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, weddingPhotos];
const allPhotos = [weddingPhotos, pregnantPhotos, babyPhotos, couplePhotos, baptismPhotos, familyPhotos, portraitPhotos];

/**
 * Display the photos of a category 
 */

/*
function showCategory(elements, elementsList, othersElements) {
    for (let i = 0; i < elements.length; i++) {
        // Display the photos of a category 
        elementsList.insertBefore(elements[i], elementsList.firstElementChild);
        elements[i].style.display = "inline-block";

        // Not display the photos of the others categories 
        for (let i = 0; i < othersElements.length; i++) {
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
            for (let j = 0; j < othersElements[i].length; j++) {
                othersElements[i][j].style.display = "none";
            }
        }
    }
}

/**
 * Display all the photos 
 */

/*
function showAllPhotos(allElements) {
    for (let i = 0; i < allPhotos.length; i++) {
        //console.log(othersElements[i])
        for (let j = 0; j < allPhotos[i].length; j++) {
            weddingList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            pregnantList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            babyList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            coupleList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            baptismList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            familyList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
        for (let j = 0; j < allPhotos[i].length; j++) {
            portraitList.firstElementChild;
            allPhotos[i][j].style.display = "inline-block";
        }
    }
}

/**
 * Click events listeners 
 */

/*
function setPhotosInPage() {
    // Click on the Wedding button 
    document.querySelector('#wedding').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(weddingPhotos, weddingList, notWeddingPhotos);
    })
    // Click on the Pregnant button 
    document.querySelector('#pregnant').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(pregnantPhotos, pregnantList, notPregnantPhotos);
    })
    // Click on the Baby button 
    document.querySelector('#baby').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(babyPhotos, babyList, notBabyPhotos);
    })
    // Click on the Couple button 
    document.querySelector('#couple').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(couplePhotos, coupleList, notCouplePhotos);
    })
    // Click on the Baptism button 
    document.querySelector('#baptism').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(baptismPhotos, baptismList, notBaptismPhotos);
    })
    // Click on the Family button 
    document.querySelector('#family').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(familyPhotos, familyList, notFamilyPhotos);
    })
    // Click on the Pregnant button 
    document.querySelector('#portrait').addEventListener('click', (e) => {
        e.preventDefault();
        showCategory(portraitPhotos, portraitList, notPortraitPhotos);
    })
    // Click on the All the photos button 
    document.querySelector('#all').addEventListener('click', (e) => {
        e.preventDefault();
        showAllPhotos(allPhotos);
    })
}


/*
window.addEventListener("DOMContentLoaded", () => {
    getPhotos();
})