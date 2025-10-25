const langData = {
  ru: {
    title: "Mimenko — Гейм-дизайнер",
    subtitle: "Создаю миры, где механики и история говорят на одном языке.",
    projectsTitle: "Проекты",
    footer: "© 2025 Mimenko. Сделано с ♥ и GitHub Pages.",
    projects: [
      { title: "Etheria: Restart", desc: "Гейм-дизайн и баланс персонажей для мобильной RPG." },
      { title: "Mechanical Minds", desc: "Концепт и нарратив для sci-fi стратегии о пробуждении ИИ." },
      { title: "Shadow Circuit", desc: "Система прогрессии для киберпанк-роуглайка." }
    ]
  },
  en: {
    title: "Mimenko — Game Designer",
    subtitle: "I create worlds where mechanics and story speak the same language.",
    projectsTitle: "Projects",
    footer: "© 2025 Mimenko. Made with ♥ and GitHub Pages.",
    projects: [
      { title: "Etheria: Restart", desc: "Game design and character balance for a mobile RPG." },
      { title: "Mechanical Minds", desc: "Concept and narrative for a sci-fi strategy about AI awakening." },
      { title: "Shadow Circuit", desc: "Progression system for a cyberpunk roguelike." }
    ]
  },
  de: {
    title: "Mimenko — Game Designer",
    subtitle: "Ich erschaffe Welten, in denen Mechanik und Geschichte dieselbe Sprache sprechen.",
    projectsTitle: "Projekte",
    footer: "© 2025 Mimenko. Erstellt mit ♥ und GitHub Pages.",
    projects: [
      { title: "Etheria: Restart", desc: "Game-Design und Charakterbalance für ein mobiles RPG." },
      { title: "Mechanical Minds", desc: "Konzept und Erzählung für eine Sci-Fi-Strategie über KI-Erwachen." },
      { title: "Shadow Circuit", desc: "Fortschrittssystem für ein Cyberpunk-Roguelike." }
    ]
  }
};

// Загружаем язык из localStorage или ставим русский по умолчанию
let currentLang = localStorage.getItem('lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  renderContent();
}

function renderContent() {
  const data = langData[currentLang];
  document.getElementById('title').textContent = data.title;
  document.getElementById('subtitle').textContent = data.subtitle;
  document.getElementById('projects-title').textContent = data.projectsTitle;
  document.getElementById('footer-text').textContent = data.footer;

  const container = document.getElementById('projects');
  container.innerHTML = '';

  data.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition';
    card.innerHTML = `
      <img src="https://via.placeholder.com/300x200?text=${encodeURIComponent(p.title)}" alt="${p.title}" class="w-full h-40 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
        <p class="text-gray-400 mb-3">${p.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Рендерим при загрузке страницы
document.addEventListener('DOMContentLoaded', renderContent);
