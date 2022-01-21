const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const homeTitleEl = document.querySelector('.home_title');
const homeSubtitleEl = document.querySelector('.home_subtitle');
const homeDescriptionEl = document.querySelector('.home_description');
const navHomeEl = document.querySelector('.nav_home');
const navAboutEl = document.querySelector('.nav_about');
const navSkillsEl = document.querySelector('.nav_skills');
const navPortfolioEl = document.querySelector('.nav_portfolio');
const navContactEl = document.querySelector('.nav_contact');
const ContactButtonEl = document.querySelector('.contact_button');
const ScrollNameEl = document.querySelector('.home_scroll_name');

link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active_language').classList.remove('active_language');
    el.classList.add('active_language');

    const attr = el.getAttribute('language');

    homeTitleEl.textContent = data[attr].home_title;
    homeSubtitleEl.textContent = data[attr].home_subtitle;
    homeDescriptionEl.textContent = data[attr].home_description;
    navHomeEl.textContent = data[attr].nav_home;
    navAboutEl.textContent = data[attr].nav_about;
    navSkillsEl.textContent = data[attr].nav_skills;
    navPortfolioEl.textContent = data[attr].nav_portfolio;
    navContactEl.textContent = data[attr].nav_contact;
    ContactButtonEl.textContent = data[attr].contact_button;
    ScrollNameEl.textContent = data[attr].home_scroll_name;
  });
});

var data = {
  "portuguese":
  {
    "home_title": "Olá, meu nome é Gabriel",
    "home_subtitle" : "Desenvolvedor Frontend",
    "home_description": "Desenvolvedor Junior com foco em frontend, mas também podendo fazer a função de full stack. Aprendendo todo dia um pouco mais nesse imenso mundo da tecnologia. ",
    "nav_home": "Inicio",
    "nav_about": "Sobre",
    "nav_skills": "Habilidades",
    "nav_portfolio": "Portifólio",
    "nav_contact": "Contato",
    "contact_button": "Entre em contato",
    "home_scroll_name": "Role para baixo",
  },
  "english":
  {
    "home_title": "Hello, I'm Gabriel",
    "home_subtitle" : "Frontend Developer",
    "home_description": "Junior developer focused on frontend, but also able to do the full stack role. Learning a little more every day in this immense world of technology.",
    "nav_home": "Home",
    "nav_about": "About",
    "nav_skills": "Skills",
    "nav_portfolio": "Portfolio",
    "nav_contact": "Contact",
    "contact_button": "Contact me",
    "home_scroll_name": "Scroll Down",

  },
}