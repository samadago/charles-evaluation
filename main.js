
window.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelectorAll('.categories__item');
  const weddingSection = document.querySelector('#weeding-list');
  const pregnantSection = document.querySelector('#pregnant-list');
  const coupleSection= document.querySelector('#couple-list');
  const babiesSection= document.querySelector('#baby-list');
  const baptismSection = document.querySelector('#baptism-liste');
  const familiesSection= document.querySelector('#family-list');
  const portraitSection= document.querySelector('#portait-list');


  // Add event listener to each category button
  categories.forEach(function(category) {
    category.addEventListener('click', function() {
      const categoryId = this.querySelector('h2').id;
      
      // Hide all sections except for the selected category
      if (categoryId === 'all') {
        weddingSection.style.display = 'block';
        pregnantSection.style.display = 'block';
        coupleSection.style.display = 'block';
        babiesSection.style.display = 'block';
        baptismSection.style.display = 'block';
        familiesSection.style.display = 'block';
        portraitSection.style.display = 'block';

        

        if (categoryId === 'all') {
          weddingSection.style.display = 'block';
          pregnantSection.style.display = 'block';


      } else if (categoryId === 'mariage') {
        weddingSection.style.display = 'block';
        pregnantSection.style.display = 'none';

      } else if (categoryId === 'grossesse') {
        weddingSection.style.display = 'none';
        pregnantSection.style.display = 'block';
        
      }

        if (categoryId === 'all') {
          coupleSection.style.display = 'block';
          babiesSection.style.display = 'block';


      } else if (categoryId === 'couple') {
        coupleSection.style.display = 'block';
        babiesSection.style.display = 'none';
        
        
      } else if (categoryId === 'bebe') {
        babiesSection.style.display = 'block';
        coupleSection.style.display = 'none';

      }


        if (categoryId === 'all') {
          baptismSection.style.display = 'block';
          familiesSection.style.display = 'block';
  

      } else if (categoryId === 'bapteme') {
        baptismSection.style.display = 'block';
        familiesSection.style.display = 'none';


        
      } else if (categoryId === 'famille') {
        familiesSection.style.display = 'block';
        baptismSection.style.display = 'none';
        

      }
        
    }
      
      if (categoryId === 'all') {

        portraitSection.style.display = 'block';
        familiesSection.style.display = 'none';





      } else if (categoryId === 'portrait') {
        portraitSection.style.display = 'block';
        familiesSection.style.display = 'none';


      } else if (categoryId === 'famille') {
        familiesSection.style.display = 'block';
        portraitSection.style.display = 'none';
        



          
  
        

      



      } else {
        weddingSection.style.display = 'none';
        pregnantSection.style.display = 'none';
        coupleSection.style.display = 'none';
        babiesSection.style.display = 'none';
        baptismSection.style.display = 'none';
        familiesSection.style.display = 'none';
        portraitSection.style.display = 'none';


      }
    });
  });
});