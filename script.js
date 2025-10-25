const projects = [
  {
    title: "Etheria: Restart",
    desc: "Гейм-дизайн и баланс персонажей для мобильной RPG.",
    img: "https://via.placeholder.com/300x200?text=Etheria",
    link: "#"
  },
  {
    title: "Mechanical Minds",
    desc: "Концепт и нарратив для sci-fi стратегии о пробуждении ИИ.",
    img: "https://via.placeholder.com/300x200?text=MechMinds",
    link: "#"
  },
  {
    title: "Shadow Circuit",
    desc: "Система прогрессии для киберпанк-роуглайка.",
    img: "https://via.placeholder.com/300x200?text=ShadowCircuit",
    link: "#"
  }
];

const container = document.getElementById('projects');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="w-full h-40 object-cover">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
      <p class="text-gray-400 mb-3">${p.desc}</p>
      <a href="${p.link}" class="text-indigo-400 hover:text-indigo-300">Подробнее →</a>
    </div>
  `;
  container.appendChild(card);
});
