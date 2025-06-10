// Custom Product Slideshow JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionne tous les éléments nécessaires
  const mediaItems = document.querySelectorAll('.product__media-item');
  const prevButton = document.querySelector('.slideshow-control--prev');
  const nextButton = document.querySelector('.slideshow-control--next');
  const currentSlideCounter = document.querySelector('.slideshow-counter-bottom .current-slide');
  const totalSlidesCounter = document.querySelector('.slideshow-counter-bottom .total-slides');

  // S'il n'y a pas d'éléments médias, on arrête ici
  if (!mediaItems.length) return;

  // Définit l'index de départ (image active)
  let currentIndex = 0;

  // Trouve l'index initial (celui qui a la classe is-active)
  for (let i = 0; i < mediaItems.length; i++) {
    if (mediaItems[i].classList.contains('is-active')) {
      currentIndex = i;
      break;
    }
  }

  // Fonction pour mettre à jour le compteur
  function updateCounter() {
    if (currentSlideCounter) {
      currentSlideCounter.textContent = (currentIndex + 1).toString();
    }
    if (totalSlidesCounter) {
      totalSlidesCounter.textContent = mediaItems.length.toString();
    }
  }

  // Fonction pour montrer une image
  function showImage(index) {
    // Cache toutes les images
    mediaItems.forEach((item) => {
      item.classList.remove('is-active');
      item.style.display = 'none';
    });

    // Affiche l'image courante
    mediaItems[index].classList.add('is-active');
    mediaItems[index].style.display = 'block';

    // Met à jour le compteur
    updateCounter();
  }

  // Fonction pour passer à l'image suivante
  function nextImage() {
    currentIndex = (currentIndex + 1) % mediaItems.length;
    showImage(currentIndex);
  }

  // Fonction pour passer à l'image précédente
  function prevImage() {
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    showImage(currentIndex);
  }

  // Ajoute les écouteurs d'événements aux boutons
  if (prevButton) {
    prevButton.addEventListener('click', function (e) {
      e.preventDefault();
      prevImage();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function (e) {
      e.preventDefault();
      nextImage();
    });
  }

  // Swipe sur mobile
  let touchStartX = 0;
  let touchEndX = 0;

  const mediaList = document.querySelector('.product__media-list');

  if (mediaList) {
    mediaList.addEventListener(
      'touchstart',
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    mediaList.addEventListener(
      'touchend',
      function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );
  }

  function handleSwipe() {
    const minSwipeDistance = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (swipeDistance > minSwipeDistance) {
      // Swipe de droite à gauche - image précédente
      prevImage();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swipe de gauche à droite - image suivante
      nextImage();
    }
  }

  // Initialise le compteur
  updateCounter();

  // Affiche l'image initiale
  showImage(currentIndex);

  // Console log pour debug
  console.log('Product slideshow initialized with', mediaItems.length, 'images');
});
