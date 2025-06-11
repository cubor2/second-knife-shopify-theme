/**
 * Custom Product Slideshow
 * Gestion optimisée du slideshow produit avec navigation et compteur
 */

class ProductSlideshow {
  constructor() {
    this.mediaItems = document.querySelectorAll('.product__media-item');
    this.prevButton = document.querySelector('.slideshow-control--prev');
    this.nextButton = document.querySelector('.slideshow-control--next');
    this.currentSlideCounter = document.querySelector('.slideshow-counter-bottom .current-slide');
    this.totalSlidesCounter = document.querySelector('.slideshow-counter-bottom .total-slides');
    this.mediaList = document.querySelector('.product__media-list');

    this.currentIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.minSwipeDistance = 50;

    this.init();
  }

  init() {
    if (!this.mediaItems.length) return;

    this.findInitialIndex();
    this.setupEventListeners();
    this.updateDisplay();

    console.log('Product slideshow initialized:', this.mediaItems.length, 'slides');
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
    // Navigation buttons
    this.prevButton?.addEventListener('click', this.handlePrevClick.bind(this));
    this.nextButton?.addEventListener('click', this.handleNextClick.bind(this));

    // Touch events for mobile swipe
    if (this.mediaList) {
      this.mediaList.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
      this.mediaList.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handlePrevClick(e) {
    e.preventDefault();
    this.goToPrevious();
  }

  handleNextClick(e) {
    e.preventDefault();
    this.goToNext();
  }

  handleTouchStart(e) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
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
    }
  }

  handleSwipe() {
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) < this.minSwipeDistance) return;

    if (swipeDistance > 0) {
      this.goToPrevious();
    } else {
      this.goToNext();
    }
  }

  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.mediaItems.length;
    this.updateDisplay();
  }

  goToPrevious() {
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
    this.mediaList?.removeEventListener('touchstart', this.handleTouchStart);
    this.mediaList?.removeEventListener('touchend', this.handleTouchEnd);
    document.removeEventListener('keydown', this.handleKeyDown);
  }
}

// Initialisation automatique au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier si on est sur une page produit
  if (document.querySelector('.product__media-list')) {
    window.productSlideshow = new ProductSlideshow();
  }
});

// Export pour utilisation externe si nécessaire
window.ProductSlideshow = ProductSlideshow;
