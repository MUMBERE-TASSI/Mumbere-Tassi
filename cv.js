const translations = {
  en: {
    "nav-home": "Home",
    "nav-bio": "Bio & CV",
    "nav-lang": "Language",
    "header-bio-title": "Biography & CV",
    "header-bio-sub": "Engineering solutions, building faith, and creating harmony.",
    "bio-section-title": "Biography",
    "bio-p1": "<strong>Mumbere Tassi Dieumerci</strong> is a multifaceted professional based in Kenya, driven by the belief that technology and spirituality can both serve as tools for transformation.",
    "bio-p2": "His educational journey began in <strong>Goma, DRC</strong>, at EP KATOYI and later ITIG / DON BOSCO, specializing in Electrical studies.",
    "bio-p3": "He continued his academic path in Kenya at <strong>JKUAT</strong> in Nairobi, studying Information Technology.",
    "bio-p4": "He has a deep passion for music, starting with the Uhai Choir. He is widely known as <strong>“Josias”</strong> in the church community.",
    "bio-p5": "As an <strong>Electrical and IT Engineer</strong>, he specializes in infrastructure and digital security.",
    "bio-p6": "Beyond the lab, he is a dedicated <strong>Preacher in RPMC</strong> and Musician.",
    "connect-head": "Connect With Me",
    "edu-title": "Education & Training",
    "edu-h1": "Cybersecurity & Network Engineering",
    "edu-p1": "Specialized training in Cyber Kill Chain and Huawei infrastructure.",
    "edu-h2": "Electrical Engineering",
    "edu-p2": "Focus on power distribution and industrial automation.",
    "work-title": "Work & Projects",
    "work-h1": "SmartPOS System Development",
    "work-p1": "Architecting a full-stack POS system using Django and SQL.",
    "skill-title": "Technical Skills",
    "date-current": "Current",
    "date-adv": "Advanced Diploma",
    "date-ongoing": "Ongoing",
    "footer-text": "© 2026 Mumbere Tassi Dieumerci | Engineering & Ministry"
  },
  fr: {
    "nav-home": "Accueil",
    "nav-bio": "Bio & CV",
    "nav-lang": "Langue",
    "header-bio-title": "Biographie & CV",
    "header-bio-sub": "Solutions d'ingénierie, bâtir la foi et créer l'harmonie.",
    "bio-section-title": "Biographie",
    "bio-p1": "<strong>Mumbere Tassi Dieumerci</strong> est un professionnel polyvalent basé au Kenya, animé par la conviction que la technologie et la spiritualité sont des outils de transformation.",
    "bio-p2": "Son parcours éducatif a commencé à <strong>Goma, RDC</strong>, à l'EP KATOYI puis à l'ITIG / DON BOSCO en électricité.",
    "bio-p3": "Il a poursuivi ses études au Kenya à <strong>JKUAT</strong> (Nairobi) en Informatique.",
    "bio-p4": "Passionné de musique, il a débuté avec la chorale Uhai. Il est connu sous le nom de <strong>« Josias »</strong> dans la communauté chrétienne.",
    "bio-p5": "En tant qu'<strong>Ingénieur Électricien et IT</strong>, il se spécialise dans les infrastructures et la sécurité numérique.",
    "bio-p6": "Au-delà du laboratoire, il est un <strong>Prédicateur à la RPMC</strong> et musicien dévoué.",
    "connect-head": "Contactez-moi",
    "edu-title": "Éducation & Formation",
    "edu-h1": "Cybersécurité & Ingénierie Réseau",
    "edu-p1": "Formation spécialisée en Cyber Kill Chain et infrastructure Huawei.",
    "edu-h2": "Génie Électrique",
    "edu-p2": "Focus sur la distribution d'énergie et l'automatisation industrielle.",
    "work-title": "Travaux & Projets",
    "work-h1": "Développement du Système SmartPOS",
    "work-p1": "Architecture d'un système POS complet avec Django et SQL.",
    "skill-title": "Compétences Techniques",
    "date-current": "Actuel",
    "date-adv": "Diplôme Supérieur",
    "date-ongoing": "En cours",
    "footer-text": "© 2026 Mumbere Tassi Dieumerci | Ingénierie & Ministère"
  },
  sw: {
    "nav-home": "Nyumbani",
    "nav-bio": "Wasifu na CV",
    "nav-lang": "Lugha",
    "header-bio-title": "Wasifu na CV",
    "header-bio-sub": "Suluhu za kihandisi, kujenga imani, na kuleta amani.",
    "bio-section-title": "Wasifu",
    "bio-p1": "<strong>Mumbere Tassi Dieumerci</strong> ni mtaalamu mwenye vipaji vingi nchini Kenya...",
    "bio-p2": "Safari yake ya kimasomo ilianzia <strong>Goma, DRC</strong>...",
    "bio-p4": "Anajulikana sana kama <strong>“Josias”</strong> katika jamii ya kanisa.",
    "edu-title": "Elimu na Mafunzo",
    "work-title": "Kazi na Miradi",
    "date-current": "Sasa",
    "date-ongoing": "Inaendelea"
    // Add remaining Swahili here...
  },
  ln: {
    "nav-home": "Mboka",
    "nav-bio": "Lisolo ya Bomoi",
    "nav-lang": "Lokota",
    "header-bio-title": "Lisolo ya Bomoi & CV",
    "bio-section-title": "Lisolo ya Bomoi",
    "bio-p1": "<strong>Mumbere Tassi Dieumerci</strong> azali mosali mayele na Kenya...",
    "bio-p4": "Babyangaka ye <strong>“Josias”</strong> na lingomba.",
    "edu-title": "Kelasi na Formasion",
    "work-title": "Misala na Baprojet",
    "date-current": "Sik'oyo"
    // Add remaining Lingala here...
  }
};

function changeLanguage(lang) {
  localStorage.setItem('preferredLang', lang);

  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      // Use innerHTML so <strong> and <p> tags are preserved
      element.innerHTML = translations[lang][key];
    }
  });

  const label = document.getElementById('langLabel');
  if (label) {
    const names = { en: 'English', fr: 'Français', sw: 'Kiswahili', ln: 'Lingala' };
    label.innerHTML = `<i class="bi bi-translate me-1"></i> ${names[lang]}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'en';
  changeLanguage(savedLang);
});