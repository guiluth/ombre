window.onscroll=function(){
if (document.body.scrollTop>20||document.documentElement.scrollTop>20){document.getElementById("submenu").style.top="0";document.getElementById("topbar").style.display="none";}else{document.getElementById("submenu").style.top="80px";document.getElementById("topbar").style.display="block";document.getElementById("submenu").style.height="80px";document.getElementById("marges").style.display="block";}}




// Variablesconst slider = document.querySelector('.slider');let isDragging = false;let startPos = 0;let currentTranslate = 0;let prevTranslate = 0;let animationID = 0;
// Event listenersslider.addEventListener('mousedown', startDragging);slider.addEventListener('touchstart', startDragging);slider.addEventListener('mouseup', stopDragging);slider.addEventListener('touchend', stopDragging);slider.addEventListener('mouseleave', stopDragging);slider.addEventListener('mousemove', drag);slider.addEventListener('touchmove', drag);
// Functionsfunction startDragging(e) {  e.preventDefault();  startPos = getPositionX(e);  isDragging = true;  animationID = requestAnimationFrame(animation);  slider.classList.add('grabbing');}
function stopDragging() {  isDragging = false;  cancelAnimationFrame(animationID);  const movedBy = currentTranslate - prevTranslate;  if (movedBy < -100) {    shiftSlide(1);  } else if (movedBy > 100) {    shiftSlide(-1);  } else {    shiftSlide(0);  }  slider.classList.remove('grabbing');}
function drag(e) {  if (isDragging) {    const currentPosition = getPositionX(e);    currentTranslate = prevTranslate + currentPosition - startPos;  }}
function getPositionX(e) {  return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;}
function animation() {  setSliderPosition();  if (isDragging) {    requestAnimationFrame(animation);  }}
function setSliderPosition() {  slider.style.transform = `translateX(${currentTranslate}px)`;}
function shiftSlide(dir) {  prevTranslate = currentTranslate;  currentTranslate += dir * slideWidth();  setSliderPosition();}
function slideWidth() {  return document.querySelector('.card').offsetWidth;}





// image slider
document.addEventListener("DOMContentLoaded", function() {  var images = document.querySelectorAll(".sliders img");  var currentImage = 0;
  setInterval(function() {    images[currentImage].classList.remove("active");    currentImage = (currentImage + 1) % images.length;    images[currentImage].classList.add("active");  }, 3000); // Change image every 3 seconds});



//slider image sur carte de voiture
var slades = document.getElementsByClassName("slade");var dots = document.getElementsByClassName("dot");var currentSlade = 0;
})





// supprimer le toogle du submenu

document.querySelector('.iconi').addEventListener('click',  function(){

    document.querySelector('.demo').style.display='none';
    
    });
    document.querySelector('.iconif').addEventListener('click',  function(){
    
      document.querySelector('.demos').style.display='none';
      
      });
      document.querySelector('.icone').addEventListener('click',  function(){
        document.querySelector('.dema').style.display='none';
      });
      document.querySelector('.iconefe').addEventListener('click',  function(){
        document.querySelector('.demas').style.display='none';
      });

      document.querySelector('.iconefi').addEventListener('click',  function(){
        document.querySelector('.dima').style.display='none';
      });

      //controle du submenu

function menubar(){
    demo=document.getElementById('demo');
    demos= document.getElementById('demos');
    demo.style.display='block';
    demos.style.display='none';
    dema.style.display='none';
    demas.style.display='none';
    dima.style.display='none';
    }
    function menubar_touch(){
   demos=document.getElementById('demos'); 
     demo=document.getElementById('demo');
        demo.style. display='none';
    demos.style.display='block';
    dema.style.display='none';
    demas.style.display='none';
    dima.style.display='none';
    
    }
    function menubar_touching(){
        demos=document.getElementById('demos'); 
          demo=document.getElementById('demo');
          dema=document.getElementById('dema');
             demo.style. display='none';
         demos.style.display='none';
         dema.style.display='block';
         demas.style.display='none';
         dima.style.display='none';
         }

         function menubar_touf(){
            demos=document.getElementById('demos'); 
              demo=document.getElementById('demo');
              dema=document.getElementById('dema');
                 demo.style. display='none';
             demos.style.display='none';
             dema.style.display='none';
             demas.style.display='block';
             dima.style.display='none';
             }

             function menu_touch(){
                demos=document.getElementById('demos'); 
                  demo=document.getElementById('demo');
                  dema=document.getElementById('dema');
                     demo.style. display='none';
                 demos.style.display='none';
                 dema.style.display='none';
                 demas.style.display='none';
                 dima.style.display='block';
                 }
  





    // Fonction pour afficher l'image


 
 function showPreviewImage(file) { 

    var reader = new FileReader();
     reader.onload = function(event) {  
   
     document.getElementById('previewImage').setAttribute('src', event.target.result); 
   
   
    }; 
   
   
    reader.readAsDataURL(file);
   
   }
   
   
   // Événement de soumission du formulaire d'upload
   
   document.getElementById('uploadForm').addEventListener('submit', function(event) {  event.preventDefault(); 
   
    var fileInput = document.getElementById('imageUpload');  if (fileInput.files && fileInput.files[0]) {  
   
     showPreviewImage(fileInput.files[0]); 
      document.getElementById('previewCard').style.display = 'block';    
   
    
      // Afficher les informations dans la deuxième carte  
   
   
   
     var caracteristiques = document.getElementById('caracteristiques').value; 
      var model = document.getElementById('model').value;    
   var prix = document.getElementById('prix').value;  
     var contact = document.getElementById('contact').value;      
     document.getElementById('previewCaracteristiques').textContent = caracteristiques;  
     document.getElementById('previewModel').textContent = model;   
    document.getElementById('previewPrix').textContent = prix;   
    document.getElementById('previewContact').textContent = contact;  }});
   // Événement du bouton "Vend
   
   // Événement du bouton "Vendre"
   
   
   
   document.getElementById('sellButton').addEventListener('click', function() {  var imageSrc = document.getElementById('previewImage').getAttribute('src');  var caracteristiques = document.getElementById('previewCaracteristiques').textContent;  var model = document.getElementById('previewModel').textContent;  var prix = document.getElementById('previewPrix').textContent;  var contact = document.getElementById('previewContact').textContent;   
   
    // Crée une nouvelle carte pour afficher les informations  
   
   var newCard = document.createElement('div'); 
    newCard.className = 'card';  
     var newImage = document.createElement('img'); 
    newImage.src = imageSrc;  newImage.alt = 'Preview';  newImage.style.maxWidth = '100%';  newImage.style.height = 'auto';  
   
     var newCaracteristiques = document.createElement('p');  newCaracteristiques.textContent = "Caractéristiques: " + caracteristiques;    var newModel = document.createElement('p');  newModel.textContent = "Modèle: " + model;    var newPrix = document.createElement('p');  newPrix.textContent = "Prix: " + prix;    var newContact = document.createElement('p');  newContact.textContent = "Contact: " + contact;    newCard.appendChild(newImage);  newCard.appendChild(newCaracteristiques);  newCard.appendChild(newModel);  newCard.appendChild(newPrix);  newCard.appendChild(newContact);  
   
     // Ajoute la nouvelle carte à la page 
   
   
    var previewCard = document.getElementById('previewCard');  previewCard.parentNode.insertBefore(newCard, previewCard.nextSibling);  
   
   
     // Réinitialise le formulaire 
   
   
   
    document.getElementById('uploadForm').reset();  document.getElementById('previewCard').style.display = 'none';});