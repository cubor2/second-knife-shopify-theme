/**
 * Custom Product Slideshow
 * Gestion optimisée du slideshow produit avec navigation et compteur
 */

class ProductSlideshow {
  constructor() {
    this.mediaItems = document.querySelectorAll('.product__media-item');
    this.prevButton = document.querySelector('.slideshow-control--prev');
    this.nextButton = document.querySelector('.slideshow-control--next');
    this.currentSlideCounter = document.querySelector('.slideshow-counter-bottom .slider-counter--current');
    this.totalSlidesCounter = document.querySelector('.slideshow-counter-bottom .slider-counter--total');
    this.mediaList = document.querySelector('.product__media-list');

    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchStartY = 0;
    this.touchEndY = 0;
    this.minSwipeDistance = 50;
    this.isProcessingClick = false;

    this.init();
  }

  init() {
    if (!this.mediaItems.length) return;

    this.findInitialIndex();
    this.setupEventListeners();
    this.setupModalCloseOnMobile();
    this.updateDisplay();

    console.log('Product slideshow initialized:', this.mediaItems.length, 'slides');
  }

  setupModalCloseOnMobile() {
    // Améliorer la fermeture du modal en mobile
    const modal = document.querySelector('.product-media-modal');
    if (modal) {
      // Ajouter un gestionnaire pour le clic sur le backdrop
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          this.closeModal();
        }
      });

      // Fermer en cliquant sur l'image elle-même
      modal.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' || e.target.closest('.media')) {
          this.closeModal();
        }
      });

      // Améliorer le gestionnaire tactile pour la fermeture
      let modalTouchStartY = 0;
      let modalTouchStartX = 0;

      modal.addEventListener(
        'touchstart',
        (e) => {
          modalTouchStartY = e.touches[0].clientY;
          modalTouchStartX = e.touches[0].clientX;
        },
        { passive: true }
      );

      modal.addEventListener(
        'touchend',
        (e) => {
          const touchEndY = e.changedTouches[0].clientY;
          const touchEndX = e.changedTouches[0].clientX;
          const deltaY = touchEndY - modalTouchStartY;
          const deltaX = Math.abs(touchEndX - modalTouchStartX);

          // Fermer si c'est un tap simple sur l'image (pas de swipe)
          if (deltaX < 10 && Math.abs(deltaY) < 10) {
            if (e.target.tagName === 'IMG' || e.target.closest('.media')) {
              this.closeModal();
              return;
            }
          }

          // Fermer si on swipe vers le bas de plus de 100px
          if (deltaY > 100 && (e.target === modal || e.target.tagName === 'IMG')) {
            this.closeModal();
          }
        },
        { passive: true }
      );
    }
  }

  closeModal() {
    const modal = document.querySelector('.product-media-modal[open]');
    if (modal) {
      modal.removeAttribute('open');
      document.body.classList.remove('overflow-hidden');
    }
  }

  findInitialIndex() {
    for (let i = 0; i < this.mediaItems.length; i++) {
      if (this.mediaItems[i].classList.contains('is-active')) {
        this.currentIndex = i;
        break;
      }
    }
  }

  setupEventListeners() {
    // Navigation buttons - amélioration pour mobile
    if (this.prevButton) {
      this.prevButton.addEventListener('click', this.handlePrevClick.bind(this), { passive: false });
      this.prevButton.addEventListener('touchend', this.handlePrevTouch.bind(this), { passive: false });
    }

    if (this.nextButton) {
      this.nextButton.addEventListener('click', this.handleNextClick.bind(this), { passive: false });
      this.nextButton.addEventListener('touchend', this.handleNextTouch.bind(this), { passive: false });
    }

    // Touch events for mobile swipe
    if (this.mediaList) {
      this.mediaList.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
      this.mediaList.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: true });
      this.mediaList.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: false });
    }

    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handlePrevClick(e) {
    if (this.isProcessingClick) return;
    e.preventDefault();
    e.stopPropagation();
    this.isProcessingClick = true;
    this.goToPrevious();
    setTimeout(() => {
      this.isProcessingClick = false;
    }, 300);
  }

  handleNextClick(e) {
    if (this.isProcessingClick) return;
    e.preventDefault();
    e.stopPropagation();
    this.isProcessingClick = true;
    this.goToNext();
    setTimeout(() => {
      this.isProcessingClick = false;
    }, 300);
  }

  handlePrevTouch(e) {
    if (this.isProcessingClick) return;
    e.preventDefault();
    e.stopPropagation();
    this.isProcessingClick = true;
    this.goToPrevious();
    setTimeout(() => {
      this.isProcessingClick = false;
    }, 300);
  }

  handleNextTouch(e) {
    if (this.isProcessingClick) return;
    e.preventDefault();
    e.stopPropagation();
    this.isProcessingClick = true;
    this.goToNext();
    setTimeout(() => {
      this.isProcessingClick = false;
    }, 300);
  }

  handleTouchStart(e) {
    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  }

  handleTouchMove(e) {
    // Empêcher le scroll vertical si le swipe horizontal est détecté
    const touchX = e.changedTouches[0].screenX;
    const touchY = e.changedTouches[0].screenY;
    const deltaX = Math.abs(touchX - this.touchStartX);
    const deltaY = Math.abs(touchY - this.touchStartY);

    if (deltaX > deltaY && deltaX > 10) {
      e.preventDefault();
    }
  }

  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.touchEndY = e.changedTouches[0].screenY;
    this.handleSwipe(e);
  }

  handleKeyDown(e) {
    if (!document.querySelector('.product__media-list')) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        this.goToPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        this.goToNext();
        break;
      case 'Escape':
        // Fermer le modal si ouvert
        this.closeModal();
        break;
    }
  }

  handleSwipe(e) {
    const swipeDistanceX = this.touchEndX - this.touchStartX;
    const swipeDistanceY = this.touchEndY - this.touchStartY;

    // Vérifier que c'est bien un swipe horizontal et non vertical
    if (Math.abs(swipeDistanceX) < Math.abs(swipeDistanceY)) return;
    if (Math.abs(swipeDistanceX) < this.minSwipeDistance) return;

    e.preventDefault();

    if (swipeDistanceX > 0) {
      this.goToPrevious();
    } else {
      this.goToNext();
    }
  }

  goToNext() {
    if (this.mediaItems.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
    this.updateDisplay();
  }

  goToPrevious() {
    if (this.mediaItems.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.mediaItems.length) % this.mediaItems.length;
    this.updateDisplay();
  }

  goToSlide(index) {
    if (index >= 0 && index < this.mediaItems.length) {
      this.currentIndex = index;
      this.updateDisplay();
    }
  }

  updateDisplay() {
    // Mettre à jour les slides
    this.mediaItems.forEach((item, index) => {
      const isActive = index === this.currentIndex;
      item.classList.toggle('is-active', isActive);
      item.style.display = isActive ? 'block' : 'none';
    });

    // Mettre à jour le compteur
    this.updateCounter();

    // Déclencher un événement personnalisé
    this.dispatchSlideChangeEvent();
  }

  updateCounter() {
    if (this.currentSlideCounter) {
      this.currentSlideCounter.textContent = (this.currentIndex + 1).toString();
    }
    if (this.totalSlidesCounter) {
      this.totalSlidesCounter.textContent = this.mediaItems.length.toString();
    }
  }

  dispatchSlideChangeEvent() {
    const event = new CustomEvent('slideshow:change', {
      detail: {
        currentIndex: this.currentIndex,
        totalSlides: this.mediaItems.length,
        activeSlide: this.mediaItems[this.currentIndex],
      },
    });
    document.dispatchEvent(event);
  }

  // API publique
  getCurrentIndex() {
    return this.currentIndex;
  }

  getTotalSlides() {
    return this.mediaItems.length;
  }

  destroy() {
    this.prevButton?.removeEventListener('click', this.handlePrevClick);
    this.nextButton?.removeEventListener('click', this.handleNextClick);
    this.prevButton?.removeEventListener('touchend', this.handlePrevTouch);
    this.nextButton?.removeEventListener('touchend', this.handleNextTouch);
    this.mediaList?.removeEventListener('touchstart', this.handleTouchStart);
    this.mediaList?.removeEventListener('touchmove', this.handleTouchMove);
    this.mediaList?.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

// Initialisation automatique au chargement du DOM - DÉSACTIVÉE pour éviter conflit avec SliderComponent
// document.addEventListener('DOMContentLoaded', () => {
//   // Vérifier si on est sur une page produit
//   if (document.querySelector('.product__media-list')) {
//     window.productSlideshow = new ProductSlideshow();
//   }
// });

// Export pour utilisation externe si nécessaire
window.ProductSlideshow = ProductSlideshow;

// Slider de produit simple et efficace
class SimpleProductSlider {
  constructor() {
    this.slider = document.querySelector('.product__media-list');
    this.slides = document.querySelectorAll('.product__media-item');
    this.prevButton = document.querySelector('.slideshow-control--prev');
    this.nextButton = document.querySelector('.slideshow-control--next');
    this.currentIndex = 0;

    if (!this.slider || !this.slides.length) return;

    this.init();
  }

  init() {
    console.log('🚀 Initializing SimpleProductSlider with', this.slides.length, 'slides');

    // Connecter les événements
    if (this.prevButton) {
      this.prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('⬅️ Previous button clicked');
        this.goToPrevious();
      });
    }

    if (this.nextButton) {
      this.nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('➡️ Next button clicked');
        this.goToNext();
      });
    }

    // Trouver l'index initial de la slide active
    this.slides.forEach((slide, index) => {
      if (slide.classList.contains('is-active')) {
        this.currentIndex = index;
      }
    });

    console.log('✅ SimpleProductSlider initialized, current index:', this.currentIndex);
  }

  goToNext() {
    if (this.slides.length <= 1) return;

    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlider();
    console.log('➡️ Went to slide', this.currentIndex + 1, 'of', this.slides.length);
  }

  goToPrevious() {
    if (this.slides.length <= 1) return;

    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlider();
    console.log('⬅️ Went to slide', this.currentIndex + 1, 'of', this.slides.length);
  }

  updateSlider() {
    // Méthode 1: Utiliser les classes is-active comme fait Dawn
    this.slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === this.currentIndex);
    });

    // Méthode 2: Scroll horizontal si c'est un slider horizontal
    if (this.slider.scrollWidth > this.slider.clientWidth) {
      const slideWidth = this.slides[0]?.offsetWidth || 0;
      const scrollPosition = this.currentIndex * slideWidth;

      this.slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }

    // Méthode 3: Pour thumbnail_slider, cacher/montrer les slides
    const isThumbLayout = document.querySelector('.product--thumbnail_slider');
    if (isThumbLayout) {
      this.slides.forEach((slide, index) => {
        slide.style.display = index === this.currentIndex ? 'block' : 'none';
      });
    }

    // Mettre à jour le compteur
    this.updateCounter();
  }

  updateCounter() {
    const currentCounter = document.querySelector('.slider-counter--current');
    if (currentCounter) {
      currentCounter.textContent = (this.currentIndex + 1).toString();
    }
  }
}

// Diagnostic complet du slider
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔍 === DIAGNOSTIC SLIDER PRODUIT ===');

  // 1. Vérifier tous les éléments disponibles
  const sliderComponent = document.querySelector('slider-component');
  const productSlideshow = document.querySelector('.product-slideshow');
  const mediaList = document.querySelector('.product__media-list');
  const mediaItems = document.querySelectorAll('.product__media-item');
  const slideshowControls = document.querySelector('.slideshow-controls');
  const prevButtons = document.querySelectorAll('[name="previous"]');
  const nextButtons = document.querySelectorAll('[name="next"]');

  console.log('📍 Éléments trouvés:', {
    'slider-component': !!sliderComponent,
    'product-slideshow': !!productSlideshow,
    'media-list': !!mediaList,
    'media-items': mediaItems.length,
    'slideshow-controls': !!slideshowControls,
    'prev-buttons': prevButtons.length,
    'next-buttons': nextButtons.length,
  });

  // 2. Vérifier le layout actuel
  const productWrapper = document.querySelector('.product');
  if (productWrapper) {
    const classes = Array.from(productWrapper.classList);
    console.log('📋 Classes du produit:', classes);
  }

  // 3. Vérifier les boutons spécifiques
  const customPrev = document.querySelector('.slideshow-control--prev');
  const customNext = document.querySelector('.slideshow-control--next');

  console.log('🎯 Boutons custom:', {
    'prev-button': !!customPrev,
    'next-button': !!customNext,
    'prev-visible': customPrev ? getComputedStyle(customPrev).display !== 'none' : false,
    'next-visible': customNext ? getComputedStyle(customNext).display !== 'none' : false,
  });

  // 4. Test des clics avec activation du SimpleProductSlider
  if (customPrev && customNext && mediaList && mediaItems.length > 1) {
    console.log('✅ Initialisation du SimpleProductSlider...');
    window.simpleSlider = new SimpleProductSlider();
  } else {
    console.log("❌ Impossible d'initialiser le slider - éléments manquants");
  }

  console.log('🏁 Diagnostic terminé - vérifiez la console lors des clics');
});

// Export pour utilisation externe si nécessaire
window.SimpleProductSlider = SimpleProductSlider;
