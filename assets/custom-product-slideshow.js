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

// Initialisation automatique au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Vérifier si on est sur une page produit
  if (document.querySelector('.product__media-list')) {
    window.productSlideshow = new ProductSlideshow();
  }
});

// Export pour utilisation externe si nécessaire
window.ProductSlideshow = ProductSlideshow;
