const translations = {
  "en": {
    "connect-title": "Connect | Dieumerci Mumbere Tassi",
    "nav-lang": "Language",
    "connect-sub": "Engineer | Preacher | Musician",
    "cat-tech": "Technical & Engineering",
    "cat-ministry": "Ministry & Music",
    "cat-contact": "Direct Contact",
    "link-li": "Professional Resume (LinkedIn)",
    "link-git": "Source Code & Projects (GitHub)",
    "link-yt": "Sermons & Worship Music",
    "link-fb": "Community Updates (Facebook)",
    "link-wa": "Chat on WhatsApp",
    "link-mail": "Send an Email",
    "btn-back": "Back to Website",
    "footer-social": "© 2026 Dieumerci.T | Nairobi, Kenya"
  },
  "fr": {
    "connect-title": "Contact | Dieumerci Mumbere Tassi",
    "nav-lang": "Langue",
    "connect-sub": "Ingénieur | Prédicateur | Musicien",
    "cat-tech": "Technique & Ingénierie",
    "cat-ministry": "Ministère & Musique",
    "cat-contact": "Contact Direct",
    "link-li": "CV Professionnel (LinkedIn)",
    "link-git": "Code Source & Projets (GitHub)",
    "link-yt": "Sermons & Musique de Louange",
    "link-fb": "Mises à jour (Facebook)",
    "link-wa": "Discuter sur WhatsApp",
    "link-mail": "Envoyer un Email",
    "btn-back": "Retour au site",
    "footer-social": "© 2026 Dieumerci.T | Nairobi, Kenya"
  },
  "sw": {
    "connect-title": "Ungana | Dieumerci Mumbere Tassi",
    "nav-lang": "Lugha",
    "connect-sub": "Mhandisi | Mhubiri | Mwanamuziki",
    "cat-tech": "Ufundi na Uhandisi",
    "cat-ministry": "Huduma na Muziki",
    "cat-contact": "Mawasiliano ya Moja kwa Moja",
    "link-li": "Wasifu wa Kitaalamu (LinkedIn)",
    "link-git": "Miradi ya GitHub",
    "link-yt": "Mahubiri na Ibada",
    "link-fb": "Habari za Jamii (Facebook)",
    "link-wa": "Ongea nasi WhatsApp",
    "link-mail": "Tuma Barua Pepe",
    "btn-back": "Rudi kwenye Tovuti",
    "footer-social": "© 2026 Dieumerci.T | Nairobi, Kenya"
  },
  "ln": {
    "connect-title": "Kozala na | Dieumerci Mumbere Tassi",
    "nav-lang": "Lokota",
    "connect-sub": "Mwana-mayele | Mosakoli | Moyembi",
    "cat-tech": "Mayele ya Mosala",
    "cat-ministry": "Losambo mpe Miziki",
    "cat-contact": "Masolo ya mbala moko",
    "link-li": "Bomoi ya Mosala (LinkedIn)",
    "link-git": "Misala na GitHub",
    "link-yt": "Mateya mpe Nzembo ya Losambo",
    "link-fb": "Sango ya Lisanga (Facebook)",
    "link-wa": "Solola na WhatsApp",
    "link-mail": "Tindela ngai Email",
    "btn-back": "Zonga na Site",
    "footer-social": "© 2026 Dieumerci.T | Nairobi, Kenya"
  }
};

function changeLanguage(lang) {
  // 1. Save the choice so it remembers when you go to another page
  localStorage.setItem('preferredLang', lang);

  // 2. Loop through every element that has a data-key attribute
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    
    if (translations[lang] && translations[lang][key]) {
      // Special case for the browser tab title
      if (element.tagName === 'TITLE') {
        document.title = translations[lang][key];
      } else {
        // Use innerHTML in case you have <strong> or <i> tags in your translations
        element.innerHTML = translations[lang][key];
      }
    }
  });

  // 3. Update the dropdown label text visually
  const label = document.getElementById('langLabel');
  if (label) {
    const names = { en: 'English', fr: 'Français', sw: 'Kiswahili', ln: 'Lingala' };
    label.innerHTML = `<i class="bi bi-translate me-1"></i> ${names[lang]}`;
  }
}

// 4. Run this automatically when the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  changeLanguage(savedLang);
});