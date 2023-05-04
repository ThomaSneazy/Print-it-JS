// Définition de chaque slide avec une image et une ligne de texte
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection de tous les dots sur la page
const dots = document.querySelectorAll('.dot');

// Initialisation de l'index du slide actif
let currentSlide = 0;

// Fonction qui crée les dots sur la page
function createDots() {
  // Sélection de la div qui contiendra les dots
  const dotsContainer = document.querySelector('.dots');

  // Parcours de chaque slide pour créer un dot pour chaque slide
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div'); // Création d'un div pour chaque dot
    dot.classList.add('dot'); // Ajout de la classe "dot" à chaque dot
    dotsContainer.appendChild(dot); // Ajout de chaque dot à la div qui les contient
  }
}

// Fonction qui change le slide actif et met à jour les dots correspondants
function changeSlide() {
  const bannerImg = document.querySelector('.banner-img');
  const bannerText = document.querySelector('#banner p');

  // Mise à jour de l'image et du texte du slide actif
  bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
  bannerText.innerHTML = slides[currentSlide].tagLine;

  // Parcours de chaque dot pour mettre à jour leur style en fonction du slide actif
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Fonction qui change le slide actif précédent et met à jour les dots correspondants
function prevSlide() {
  currentSlide--; // Décrémentation de l'index du slide actif
  if (currentSlide < 0) { // Si on atteint le premier slide, on repasse à la fin
    currentSlide = slides.length - 1;
  }
  changeSlide(); // Mise à jour du slide actif
  const dots = document.querySelectorAll('.dot'); // Sélection de tous les dots sur la page
  // Mise à jour du style des dots
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

// Fonction qui change le slide actif suivant et met à jour les dots correspondants
function nextSlide() {
  currentSlide++; // Incrémentation de l'index du slide actif
  if (currentSlide >= slides.length) { // Si on atteint la fin, on repasse au premier slide
    currentSlide = 0;
  }
  changeSlide(); // Mise à jour du slide actif
  const dots = document.querySelectorAll('.dot'); // Sélection de tous les dots sur la page
  // Mise à jour du style des dots
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

createDots(); // Appel à la fonction qui crée les dots sur la page

// Sélection des flèches de navigation gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout des événements click aux flèches de navigation gauche et droite
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);
