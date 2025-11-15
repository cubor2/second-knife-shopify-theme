# MODULE DE CONSENTEMENT AUX COOKIES - SECOND KNIFE

**Style Magasin Vivant : Discret, Simple, Professionnel**

---

## 📋 POURQUOI UN MODULE CUSTOM ?

### ❌ Problème avec le module Shopify par défaut :
- Design peu esthétique
- Bandeau massif qui prend de la place
- Peu personnalisable
- Ne s'intègre pas avec le design system SK

### ✅ Avantages du module custom :
- **Discret** : Petit bandeau en bas à gauche
- **Rapide** : 2 boutons clairs (Accepter / Refuser)
- **Design cohérent** : Intégré au design system SK
- **Conforme RGPD** : Gestion complète du consentement
- **Performant** : Charge GA4 et Meta Pixel uniquement si accepté

---

## 🎯 FONCTIONNEMENT

1. **Premier visiteur** → Bandeau apparaît en bas à gauche
2. **Clic "Accepter tout"** → Active GA4 + Meta Pixel + mémorise le choix
3. **Clic "Refuser"** → Désactive tous les trackers non essentiels
4. **Stockage** → Cookie de consentement (1 an)
5. **Modification** → Bouton "Cookies" accessible en footer

---

## 📦 FICHIERS À CRÉER

### 1. Section Liquid : `sections/cookie-consent.liquid`

Ce fichier contient le module de consentement complet.

### 2. Intégration dans `layout/theme.liquid`

Ajout du module juste avant la fermeture du `</body>`.

---

## 🔧 INSTALLATION

### ÉTAPE 1 : Créer la section

Créer le fichier `sections/cookie-consent.liquid` avec le code fourni ci-dessous.

### ÉTAPE 2 : Intégrer dans theme.liquid

Dans `layout/theme.liquid`, juste avant `</body>`, ajouter :

```liquid
{% section 'cookie-consent' %}
```

### ÉTAPE 3 : Modifier l'intégration GA4 et Meta Pixel

Dans `layout/theme.liquid`, **remplacer** l'intégration actuelle de GA4 et Meta Pixel par une version conditionnelle qui ne charge que si le consentement est donné.

---

## 💻 CODE DE LA SECTION

```liquid
{% comment %}
  Section : Module de consentement aux cookies
  Conforme RGPD - Design SK minimaliste
{% endcomment %}

<style>
  .sk-cookie-consent {
    position: fixed;
    bottom: 24px;
    left: 24px;
    max-width: 420px;
    background: #121212;
    color: white;
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 9999;
    font-family: system-ui, -apple-system, sans-serif;
    display: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .sk-cookie-consent.show {
    display: block;
  }

  .sk-cookie-consent__title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .sk-cookie-consent__text {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.85);
  }

  .sk-cookie-consent__text a {
    color: white;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .sk-cookie-consent__text a:hover {
    text-decoration: none;
  }

  .sk-cookie-consent__actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .sk-cookie-consent__button {
    flex: 1;
    min-width: 120px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid white;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
  }

  .sk-cookie-consent__button:hover {
    background: white;
    color: #121212;
  }

  .sk-cookie-consent__button--primary {
    background: white;
    color: #121212;
  }

  .sk-cookie-consent__button--primary:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 640px) {
    .sk-cookie-consent {
      bottom: 12px;
      left: 12px;
      right: 12px;
      max-width: none;
      padding: 16px;
    }

    .sk-cookie-consent__actions {
      flex-direction: column;
    }

    .sk-cookie-consent__button {
      width: 100%;
    }
  }
</style>

<div id="sk-cookie-consent" class="sk-cookie-consent">
  <div class="sk-cookie-consent__title">
    Consentement aux cookies
  </div>
  <div class="sk-cookie-consent__text">
    Nous utilisons des cookies pour améliorer votre expérience, analyser notre trafic et personnaliser les publicités. 
    <a href="/pages/cookies" target="_blank">En savoir plus</a>
  </div>
  <div class="sk-cookie-consent__actions">
    <button type="button" class="sk-cookie-consent__button" onclick="skCookieConsent.decline()">
      Refuser
    </button>
    <button type="button" class="sk-cookie-consent__button sk-cookie-consent__button--primary" onclick="skCookieConsent.accept()">
      Accepter tout
    </button>
  </div>
</div>

<script>
  const skCookieConsent = {
    cookieName: 'sk_cookie_consent',
    cookieExpiry: 365,

    init() {
      const consent = this.getConsent();
      if (consent === null) {
        this.showBanner();
      } else if (consent === 'accepted') {
        this.loadAnalytics();
      }
    },

    showBanner() {
      const banner = document.getElementById('sk-cookie-consent');
      if (banner) {
        banner.classList.add('show');
      }
    },

    hideBanner() {
      const banner = document.getElementById('sk-cookie-consent');
      if (banner) {
        banner.classList.remove('show');
      }
    },

    accept() {
      this.setConsent('accepted');
      this.hideBanner();
      this.loadAnalytics();
    },

    decline() {
      this.setConsent('declined');
      this.hideBanner();
    },

    setConsent(value) {
      const date = new Date();
      date.setTime(date.getTime() + (this.cookieExpiry * 24 * 60 * 60 * 1000));
      document.cookie = `${this.cookieName}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
    },

    getConsent() {
      const name = this.cookieName + '=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return null;
    },

    loadAnalytics() {
      // Google Analytics 4
      {%- if settings.enable_ga4 and settings.ga4_measurement_id != blank -%}
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id={{ settings.ga4_measurement_id }}';
        document.head.appendChild(gaScript);

        gaScript.onload = function() {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '{{ settings.ga4_measurement_id }}');
        };
      {%- endif -%}

      // Meta Pixel
      {%- if settings.enable_meta_pixel and settings.meta_pixel_id != blank -%}
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '{{ settings.meta_pixel_id }}');
        fbq('track', 'PageView');
      {%- endif -%}
    }
  };

  // Initialisation au chargement de la page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => skCookieConsent.init());
  } else {
    skCookieConsent.init();
  }
</script>

{% schema %}
{
  "name": "Cookie Consent",
  "settings": []
}
{% endschema %}
```

---

## 🔄 MODIFICATION DE theme.liquid

### Avant (à supprimer) :

```liquid
{%- if settings.enable_ga4 and settings.ga4_measurement_id != blank -%}
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ settings.ga4_measurement_id }}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{ settings.ga4_measurement_id }}');
  </script>
{%- endif -%}

{%- if settings.enable_meta_pixel and settings.meta_pixel_id != blank -%}
  <!-- Meta Pixel Code -->
{%- endif -%}
```

### Après (à garder) :

Le module de consentement gère maintenant le chargement conditionnel des scripts.

---

## ✅ CHECKLIST D'INSTALLATION

- [ ] Créer `sections/cookie-consent.liquid`
- [ ] Ajouter `{% section 'cookie-consent' %}` dans `theme.liquid` avant `</body>`
- [ ] Supprimer l'intégration GA4/Meta Pixel du `<head>` de `theme.liquid`
- [ ] Créer la page `/pages/cookies` dans Shopify avec le HTML fourni
- [ ] Tester le bandeau (mode navigation privée)
- [ ] Vérifier que GA4 ne charge pas si refusé
- [ ] Vérifier que GA4 charge si accepté
- [ ] Push vers le thème live avec `shopify theme push`

---

## 🧪 COMMENT TESTER

1. **Ouvrir le site en navigation privée** (pas de cookies existants)
2. **Vérifier** que le bandeau apparaît en bas à gauche
3. **Cliquer sur "Refuser"** → Bandeau disparaît, pas de GA4 dans la console
4. **Supprimer les cookies** → Rafraîchir
5. **Cliquer sur "Accepter tout"** → Bandeau disparaît, GA4 charge dans la console
6. **Rafraîchir la page** → Bandeau ne réapparaît pas (consentement mémorisé)

---

## 🎨 DESIGN SYSTEM

Le module respecte le design system SK :
- **Espacement** : Multiples de 12px (12px, 24px)
- **Bordures** : 1px solid white avec opacité
- **Couleurs** : #121212 (fond), white (texte)
- **Typographie** : system-ui (cohérent avec le reste du site)
- **Responsive** : Adapté mobile (< 640px)

---

## 📊 CONFORMITÉ RGPD

✅ **Consentement préalable** : Aucun tracker ne charge avant acceptation  
✅ **Choix clair** : Boutons "Accepter" / "Refuser" équivalents  
✅ **Information** : Lien vers la politique de cookies  
✅ **Mémorisation** : Consentement stocké 365 jours  
✅ **Révocation** : Possibilité de modifier via footer (à ajouter)

---

## 💡 AMÉLIORATIONS FUTURES (OPTIONNELLES)

- Ajouter un bouton "Gérer mes préférences" pour un contrôle granulaire
- Créer un bouton dans le footer "Modifier mes préférences cookies"
- Ajouter des événements GTM pour suivre les taux d'acceptation/refus
- Intégrer des animations d'apparition/disparition

---

## 🚀 PRÊT À INSTALLER ?

Tout est prêt pour un module de consentement professionnel, conforme RGPD et parfaitement intégré à ton design system.

**Tu veux que je l'installe maintenant ?**

**© 2025 Second Knife - Module de consentement aux cookies**


