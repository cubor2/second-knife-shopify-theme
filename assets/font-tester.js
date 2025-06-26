// FONT TESTER MODULE AVANCÉ - Pour tester les Google Fonts en live
// Usage: Ajoutez ?font-test à l'URL pour activer le mode test

class FontTester {
  constructor() {
    this.fonts = [
      // POLICES SÉLECTIONNÉES
      { name: 'Lora', weights: [400, 500, 600, 700], category: 'heading' },
      { name: 'IBM Plex Serif', weights: [400, 500, 600, 700], category: 'body' },

      // ANCIENNES POLICES
      { name: 'Figtree', weights: [400, 600, 700, 800], category: 'heading' },
      { name: 'Work Sans', weights: [300, 400, 500, 600], category: 'body' },

      // ALTERNATIVES ÉLÉGANTES
      { name: 'Inter', weights: [400, 500, 600, 700, 800], category: 'both' },
      { name: 'Poppins', weights: [400, 500, 600, 700, 800], category: 'heading' },
      { name: 'Source Sans Pro', weights: [400, 600, 700], category: 'body' },
      { name: 'Nunito', weights: [400, 600, 700, 800], category: 'both' },
      { name: 'Lato', weights: [400, 700, 900], category: 'body' },
      { name: 'Montserrat', weights: [400, 600, 700, 800], category: 'heading' },
      { name: 'Open Sans', weights: [400, 600, 700], category: 'body' },
      { name: 'Rubik', weights: [400, 500, 600, 700], category: 'both' },

      // CARACTÈRES FORTS
      { name: 'Oswald', weights: [400, 600, 700], category: 'heading' },
      { name: 'Raleway', weights: [400, 600, 700, 800], category: 'heading' },
      { name: 'Playfair Display', weights: [400, 700, 900], category: 'heading' },
      { name: 'DM Sans', weights: [400, 500, 700], category: 'both' },
      { name: 'Space Grotesk', weights: [400, 600, 700], category: 'heading' },

      // TES POLICES CUSTOM - Ajoute ici !
      { name: 'Bebas Neue', weights: [400], category: 'heading' },
      { name: 'Roboto', weights: [300, 400, 500, 700], category: 'both' },
    ];

    this.currentHeading = 'Lora';
    this.currentBody = 'IBM Plex Serif';
    this.currentHeadingWeight = 700;
    this.currentBodyWeight = 400;
    this.customFonts = []; // Polices ajoutées dynamiquement
    this.init();
  }

  init() {
    // Vérifier si on est en mode test
    if (!window.location.search.includes('font-test')) return;

    this.createInterface();
    this.preloadFonts();
  }

  createInterface() {
    const panel = document.createElement('div');
    panel.innerHTML = `
      <div id="font-tester-panel" style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 2px solid #000;
        padding: 20px;
        z-index: 10000;
        max-width: 320px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        font-family: system-ui;
        font-size: 14px;
      ">
        <h3 style="margin: 0 0 15px 0; font-size: 16px; position: sticky; top: 0; background: white; padding-bottom: 10px; border-bottom: 1px solid #eee;">🎨 Font Tester Pro</h3>
        
        <!-- SECTION TITRES -->
        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">📝 TITRES (H1, H2, H3)</h4>
          
          <div style="margin-bottom: 10px;">
            <label style="font-weight: 500; display: block; margin-bottom: 5px;">Police:</label>
            <select id="heading-font-select" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
              ${this.getAllFonts()
                .filter((f) => f.category === 'heading' || f.category === 'both')
                .map(
                  (font) =>
                    `<option value="${font.name}" ${font.name === this.currentHeading ? 'selected' : ''}>${
                      font.name
                    }</option>`
                )
                .join('')}
            </select>
          </div>
          
          <div>
            <label style="font-weight: 500; display: block; margin-bottom: 5px;">Graisse:</label>
            <select id="heading-weight-select" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
              <option value="300">300 - Light</option>
              <option value="400">400 - Regular</option>
              <option value="500">500 - Medium</option>
              <option value="600">600 - SemiBold</option>
              <option value="700" selected>700 - Bold</option>
              <option value="800">800 - ExtraBold</option>
              <option value="900">900 - Black</option>
            </select>
          </div>
        </div>
        
        <!-- SECTION TEXTES -->
        <div style="margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">📄 TEXTES (p, body)</h4>
          
          <div style="margin-bottom: 10px;">
            <label style="font-weight: 500; display: block; margin-bottom: 5px;">Police:</label>
            <select id="body-font-select" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
              ${this.getAllFonts()
                .filter((f) => f.category === 'body' || f.category === 'both')
                .map(
                  (font) =>
                    `<option value="${font.name}" ${font.name === this.currentBody ? 'selected' : ''}>${
                      font.name
                    }</option>`
                )
                .join('')}
            </select>
          </div>
          
          <div>
            <label style="font-weight: 500; display: block; margin-bottom: 5px;">Graisse:</label>
            <select id="body-weight-select" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
              <option value="300">300 - Light</option>
              <option value="400" selected>400 - Regular</option>
              <option value="500">500 - Medium</option>
              <option value="600">600 - SemiBold</option>
              <option value="700">700 - Bold</option>
            </select>
          </div>
        </div>
        
        <!-- SECTION AJOUT CUSTOM -->
        <div style="margin-bottom: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">🚀 AJOUTER UNE POLICE</h4>
          
          <div style="margin-bottom: 10px;">
            <label style="font-weight: 500; display: block; margin-bottom: 5px;">URL Google Font:</label>
            <input type="text" id="custom-font-url" placeholder="URL specimen ou CSS (ex: fonts.google.com/specimen/...)" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 12px;">
          </div>
          
          <div style="margin-bottom: 10px;">
            <select id="custom-font-category" style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
              <option value="heading">Pour les titres</option>
              <option value="body">Pour les textes</option>
              <option value="both">Pour les deux</option>
            </select>
          </div>
          
          <button id="add-custom-font" style="width: 100%; padding: 8px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
            ➕ Ajouter la police
          </button>
        </div>
        
        <!-- SECTION CONTRÔLES -->
        <div style="margin-bottom: 15px;">
          <button id="reset-fonts" style="width: 100%; padding: 10px; background: #f0f0f0; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; margin-bottom: 10px;">
            🔄 Reset (Lora Bold + IBM Regular)
          </button>
          
          <div style="font-size: 12px; color: #666; line-height: 1.4; text-align: center;">
            💡 Changements instantanés sur la page !<br>
            Supprimez <code>?font-test</code> pour désactiver.
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(panel);
    this.attachEvents();
  }

  getAllFonts() {
    return [...this.fonts, ...this.customFonts];
  }

  attachEvents() {
    // Changement de police titre
    document.getElementById('heading-font-select').addEventListener('change', (e) => {
      this.currentHeading = e.target.value;
      this.applyFonts();
    });

    // Changement de graisse titre
    document.getElementById('heading-weight-select').addEventListener('change', (e) => {
      this.currentHeadingWeight = parseInt(e.target.value);
      this.applyFonts();
    });

    // Changement de police texte
    document.getElementById('body-font-select').addEventListener('change', (e) => {
      this.currentBody = e.target.value;
      this.applyFonts();
    });

    // Changement de graisse texte
    document.getElementById('body-weight-select').addEventListener('change', (e) => {
      this.currentBodyWeight = parseInt(e.target.value);
      this.applyFonts();
    });

    // Ajout de police custom
    document.getElementById('add-custom-font').addEventListener('click', () => {
      this.addCustomFont();
    });

    // Reset
    document.getElementById('reset-fonts').addEventListener('click', () => {
      this.resetFonts();
    });
  }

  addCustomFont() {
    const url = document.getElementById('custom-font-url').value.trim();
    const category = document.getElementById('custom-font-category').value;

    if (!url) {
      alert('⚠️ Veuillez entrer une URL Google Font');
      return;
    }

    try {
      const fontData = this.parseGoogleFontUrl(url);
      if (!fontData) {
        alert('⚠️ URL Google Font invalide');
        return;
      }

      // Vérifier si déjà ajoutée
      if (this.getAllFonts().some((f) => f.name === fontData.name)) {
        alert(`⚠️ "${fontData.name}" est déjà disponible`);
        return;
      }

      // Ajouter la police
      const newFont = { ...fontData, category };
      this.customFonts.push(newFont);

      // Charger la police (utiliser l'URL CSS générée si disponible)
      const urlToLoad = fontData.cssUrl || url;
      this.loadFont(urlToLoad);

      // Mettre à jour les sélecteurs
      this.updateFontSelectors();

      // Vider le champ
      document.getElementById('custom-font-url').value = '';

      console.log(`✅ Police ajoutée: ${fontData.name}`, fontData);
      alert(`✅ "${fontData.name}" ajoutée avec succès !`);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la police:", error);
      alert("❌ Erreur lors de l'ajout de la police");
    }
  }

  parseGoogleFontUrl(url) {
    // NOUVEAU : Support des URLs specimen + CSS automatique !

    // 1. URL SPECIMEN : https://fonts.google.com/specimen/Font+Name
    const specimenMatch = url.match(/fonts\.google\.com\/specimen\/([^?&#]+)/);
    if (specimenMatch) {
      const encodedName = specimenMatch[1];
      const name = decodeURIComponent(encodedName.replace(/\+/g, ' '));
      // Graisses communes pour toutes les polices
      const commonWeights = [400, 600, 700];

      console.log(`🔄 Auto-conversion: "${name}" avec graisses ${commonWeights.join(', ')}`);

      // Créer l'URL CSS automatiquement
      const cssUrl = `https://fonts.googleapis.com/css2?family=${encodedName}:wght@${commonWeights.join(
        ';'
      )}&display=swap`;

      return {
        name,
        weights: commonWeights,
        cssUrl, // On sauvegarde l'URL générée
      };
    }

    // 2. URL CSS : https://fonts.googleapis.com/css2?family=Font+Name:wght@400;700&display=swap
    const cssMatch = url.match(/family=([^:&]+)(:wght@([0-9;]+))?/);
    if (cssMatch) {
      const name = decodeURIComponent(cssMatch[1].replace(/\+/g, ' '));
      const weightsStr = cssMatch[3] || '400';
      const weights = weightsStr
        .split(';')
        .map((w) => parseInt(w))
        .filter((w) => w && w >= 100 && w <= 900);

      return {
        name,
        weights: weights.length > 0 ? weights : [400],
      };
    }

    return null;
  }

  loadFont(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
  }

  updateFontSelectors() {
    const headingSelect = document.getElementById('heading-font-select');
    const bodySelect = document.getElementById('body-font-select');

    // Sauvegarder les valeurs actuelles
    const currentHeading = headingSelect.value;
    const currentBody = bodySelect.value;

    // Mettre à jour les options
    headingSelect.innerHTML = this.getAllFonts()
      .filter((f) => f.category === 'heading' || f.category === 'both')
      .map(
        (font) => `<option value="${font.name}" ${font.name === currentHeading ? 'selected' : ''}>${font.name}</option>`
      )
      .join('');

    bodySelect.innerHTML = this.getAllFonts()
      .filter((f) => f.category === 'body' || f.category === 'both')
      .map(
        (font) => `<option value="${font.name}" ${font.name === currentBody ? 'selected' : ''}>${font.name}</option>`
      )
      .join('');
  }

  resetFonts() {
    this.currentHeading = 'Lora';
    this.currentBody = 'IBM Plex Serif';
    this.currentHeadingWeight = 700;
    this.currentBodyWeight = 400;

    document.getElementById('heading-font-select').value = 'Lora';
    document.getElementById('body-font-select').value = 'IBM Plex Serif';
    document.getElementById('heading-weight-select').value = '700';
    document.getElementById('body-weight-select').value = '400';

    this.applyFonts();
  }

  preloadFonts() {
    // Charger toutes les Google Fonts
    const fontUrls = this.fonts.map((font) => {
      const weights = font.weights.join(';');
      return `https://fonts.googleapis.com/css2?family=${font.name.replace(/ /g, '+')}:wght@${weights}&display=swap`;
    });

    fontUrls.forEach((url) => this.loadFont(url));
  }

  applyFonts() {
    // Supprimer les styles existants
    const existingStyle = document.getElementById('font-tester-styles');
    if (existingStyle) existingStyle.remove();

    // Créer les nouveaux styles
    const style = document.createElement('style');
    style.id = 'font-tester-styles';
    style.textContent = `
      /* FONT TESTER PRO - Titres */
      h1, .h1, .sk-hero__title, .sk-display, .rich-text__heading, .title.h1, h1.title,
      h2, .h2, .title.h2, h2.title,
      h3, .h3, .title.h3, h3.title,
      h4, .h4, .title.h4, h4.title {
        font-family: '${this.currentHeading}', system-ui, sans-serif !important;
        font-weight: ${this.currentHeadingWeight} !important;
      }
      
      /* FONT TESTER PRO - Textes (ULTRA SPÉCIFIQUE pour override le design system) */
      html body .shopify-section .rich-text .rich-text__text p,
      html body .shopify-section .rich-text .rte p,
      html body .shopify-section .rich-text p,
      html body .shopify-section p,
      html body .page-width p,
      html body .content-container p,
      html body .rte p,
      html body p,
      body, .rte, .rte p, .link, .text-body p, .content-container p, .page-width p,
      .rich-text__text p, .newsletter__subheading, .newsletter__subheading p {
        font-family: '${this.currentBody}', system-ui, sans-serif !important;
        font-weight: ${this.currentBodyWeight} !important;
      }
      
      /* FONT TESTER PRO - Navigation (ULTRA SPÉCIFIQUE) */
      html body .shopify-section .header .header__menu-item,
      html body .shopify-section .header .header__menu-item a,
      html body .shopify-section .header .list-menu__item,
      html body .shopify-section .header .list-menu__item a,
      html body .shopify-section .header nav a,
      html body .shopify-section .header nav .list-menu__item,
      html body .shopify-section .header nav .list-menu__item a,
      html body .shopify-section .header .header__menu-item,
      html body .shopify-section .header .list-menu__item,
      html body .header .header__menu-item,
      html body .header .list-menu__item,
      html body .header a,
      .header__menu-item, .list-menu__item {
        font-family: '${this.currentBody}', system-ui, sans-serif !important;
        font-weight: ${this.currentBodyWeight} !important;
      }
    `;

    document.head.appendChild(style);

    console.log(
      `🎨 Font Tester Pro: Titres = ${this.currentHeading} (${this.currentHeadingWeight}), Textes = ${this.currentBody} (${this.currentBodyWeight})`
    );
  }
}

// Auto-init si on est en mode développement
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new FontTester());
} else {
  new FontTester();
}
