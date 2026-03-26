const translations = {
  en: {
    "nav-home": "Home",
    "nav-about": "About Dieumerci",
    "nav-connect": "Connect",
    "nav-lang": "Language",
    "hero-sub": "Electrical & IT Engineer | Preacher | Musician | Leader",
    "hero-btn": "Explore My World",
    "career-title": "Professional Paths",
    "career-elec-h": "Electrical Engineering",
    "career-elec-p": "Designing power systems and optimizing electrical infrastructure.",
    "career-it-h": "IT & Cybersecurity",
    "career-it-p": "Securing networks, developing SmartPOS systems, and data protection.",
    "career-min-h": "Ministry & Preaching",
    "career-min-p": "Providing spiritual guidance, leadership, and community service.",
    "career-mus-h": "Music & Worship",
    "career-mus-p": "Creative expression through melody and musical performance.",
    "bio-title": "Biography",
    "bio-p1": "<p>Based in Kenya, <strong>Mumbere Tassi Dieumerci</strong> is a multifaceted leader...</p>",
    "bio-p2": "<p>Complementing his technical expertise, he is a dedicated Preacher and Musician...</p>",
    "bio-top": "Return to Top",
    "footer-sub": "Electrical & IT Engineer | Ministry Leader | Musician",
    "footer-copy": "© 2026 Dieumerci Mumbere Tassi. Driven by purpose."
  },
  fr: {
    "nav-home": "Accueil",
    "nav-about": "À propos de Dieumerci",
    "nav-connect": "Contact",
    "nav-lang": "Langue",
    "hero-sub": "Ingénieur Électricien & IT | Prédicateur | Musicien | Leader",
    "hero-btn": "Explorer Mon Monde",
    "career-title": "Parcours Professionnels",
    "career-elec-h": "Génie Électrique",
    "career-elec-p": "Conception de systèmes électriques et optimisation des infrastructures.",
    "career-it-h": "Informatique & Cybersécurité",
    "career-it-p": "Sécurisation des réseaux et développement de systèmes SmartPOS.",
    "career-min-h": "Ministère & Prédication",
    "career-min-p": "Orientation spirituelle, leadership et service communautaire.",
    "career-mus-h": "Musique & Adoration",
    "career-mus-p": "Expression créative à travers la mélodie et la performance.",
    "bio-title": "Biographie",
    "bio-p1": "<p>Basé au Kenya, <strong>Mumbere Tassi Dieumerci</strong> est un leader polyvalent...</p>",
    "bio-p2": "<p>En complément de son expertise technique, il est un prédicateur et musicien dévoué...</p>",
    "bio-top": "Retour en haut",
    "footer-sub": "Ingénieur Électricien & IT | Leader de Ministère | Musicien",
    "footer-copy": "© 2026 Dieumerci Mumbere Tassi. Guidé par un but."
  },
  sw: {
    "nav-home": "Nyumbani",
    "nav-about": "Kuhusu Dieumerci",
    "nav-connect": "Wasiliana",
    "nav-lang": "Lugha",
    "hero-sub": "Mhandisi wa Umeme na IT | Mhubiri | Mwanamuziki | Kiongozi",
    "hero-btn": "Gundua Ulimwengu Wangu",
    "career-title": "Njia za Kitaaluma",
    "career-elec-h": "Uhandisi wa Umeme",
    "career-elec-p": "Kusanifu mifumo ya umeme na kuboresha miundombinu.",
    "career-it-h": "IT na Usalama wa Mtandao",
    "career-it-p": "Kulinda mitandao na kutengeneza mifumo ya SmartPOS.",
    "career-min-h": "Huduma na Hubiri",
    "career-min-p": "Kutoa mwongozo wa kiroho na uongozi wa jamii.",
    "career-mus-h": "Muziki na Ibada",
    "career-mus-p": "Ubunifu kupitia melodi na utendaji wa muziki.",
    "bio-title": "Wasifu",
    "bio-p1": "<p>Akiwa nchini Kenya, <strong>Mumbere Tassi Dieumerci</strong> ni kiongozi...</p>",
    "bio-p2": "<p>Pamoja na utaalamu wake wa kiufundi, yeye ni mhubiri na mwanamuziki...</p>",
    "bio-top": "Rudi Juu",
    "footer-sub": "Mhandisi wa Umeme | Kiongozi wa Huduma | Mwanamuziki",
    "footer-copy": "© 2026 Dieumerci Mumbere Tassi."
  },
  ln: {
    "nav-home": "Mboka",
    "nav-about": "Tala Dieumerci",
    "nav-connect": "Kutana",
    "nav-lang": "Lokota",
    "hero-sub": "Ingénieur ya Courant na IT | Mosakoli | Moyembi | Mokambi",
    "hero-btn": "Tala Mokili na Ngai",
    "career-title": "Misala na Ngai",
    "career-elec-h": "Génie Électrique",
    "career-elec-p": "Kosala bamasini ya courant na kobongisa infrastructure.",
    "career-it-h": "Informatique & Cybersecurity",
    "career-it-p": "Kobatela réseaux na kosala ba systèmes ya SmartPOS.",
    "career-min-h": "Mosala ya Nzambe",
    "career-min-p": "Kopesa toli ya molimo na kokamba lingomba.",
    "career-mus-h": "Loyembo na Losambo",
    "career-mus-p": "Kosala miziki mpo na kokumisa Nzambe.",
    "bio-title": "Lisolo ya Bomoi",
    "bio-p1": "<p>Wuta Kenya, <strong>Mumbere Tassi Dieumerci</strong> azali mokambi...</p>",
    "bio-p2": "<p>Longola boyebi ya technique, azali mpe mosakoli na moyembi...</p>",
    "bio-top": "Butwa na likolo",
    "footer-sub": "Ingénieur ya Courant | Mokambi ya Lingomba | Moyembi",
    "footer-copy": "© 2026 Dieumerci Mumbere Tassi."
  }
};

function changeLanguage(lang) {
  // Save preference to local storage
  localStorage.setItem('preferredLang', lang);

  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      // Use innerHTML for biography paragraphs to keep <strong> tags, 
      // otherwise use textContent for safety.
      if (key.includes('bio-p')) {
        element.innerHTML = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update visual lang label if needed
  const label = document.getElementById('langLabel');
  if (label) {
    const langNames = { en: 'English', fr: 'Français', sw: 'Kiswahili', ln: 'Lingala' };
    label.innerHTML = `<i class="bi bi-translate me-1"></i> ${langNames[lang]}`;
  }
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  changeLanguage(savedLang);
});

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mumbere Tassi Dieumerci",
  "url": "https://mumbere-tassi.github.io/Mumbere-Tassi/",
  "sameAs": [
    "https://www.linkedin.com/in/YOUR_LINKEDIN",
    "https://www.facebook.com/YOUR_FACEBOOK",
    "https://twitter.com/YOUR_TWITTER"
  ],
  "jobTitle": "Electrical & IT Engineer | Preacher | Musician | Leader",
  "worksFor": {
    "@type": "Organization",
    "name": "Self-employed / Portfolio"
  },
  "image": "https://mumbere-tassi.github.io/Mumbere-Tassi/2022-06-03%2016.00.05.jpg",
  "description": "Portfolio of Mumbere Tassi Dieumerci, combining engineering, ministry, and music."
}
</script>
