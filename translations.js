const translations = {
  en: {
    home: "Home",
    about: "About",
    heroTitle: "Welcome to Premium Cafe",
    heroSubtitle: "Fresh food & drinks everyday",
  },

  am: {
    home: "መነሻ",
    about: "ስለ እኛ",
    heroTitle: "እንኳን ወደ ፕሪሚየም ካፌ በደህና መጡ",
    heroSubtitle: "ትኩስ ምግብ እና መጠጥ",
  },

  or: {
    home: "Fuula Jalqabaa",
    about: "Waa'ee Keenya",
    heroTitle: "Baga Gara Premium Cafe Dhufte",
    heroSubtitle: "Nyaata fi dhugaatii haaraa guyyaa hunda",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    el.textContent = translations[lang][key];
  });
}
