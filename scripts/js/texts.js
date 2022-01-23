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
const AboutTitleEl = document.querySelector('.about_title');
const AboutSubtitleEl = document.querySelector('.about_subtitle');
const AboutDescriptionEl = document.querySelector('.about_description');
const AboutInfoNameYearsEl = document.querySelector('.about_info_name_years');
const AboutInfoNameExperienceEl = document.querySelector('.about_info_name_experience');
const AboutInfoNameCompletedEl = document.querySelector('.about_info_name_completed');
const AboutInfoNameProjectsEl = document.querySelector('.about_info_name_projects');
const AboutInfoNameCompaniesEl = document.querySelector('.about_info_name_companies');
const AboutInfoNameWorkedEl = document.querySelector('.about_info_name_worked');
const SkillsTitleMainEl = document.querySelector('.skills_title_main');
const SkillsSubtitleEl = document.querySelector('.skills_subtitle');
const SkillsTitleFrontEl = document.querySelector('.skills_title_front');
const SkillsSubtitleFrontEl = document.querySelector('.skills_subtitle_front');
const SkillsTitleBackEl = document.querySelector('.skills_title_back');
const SkillsSubtitleBackEl = document.querySelector('.skills_subtitle_back');
const SkillsTitleComputerEl = document.querySelector('.skills_title_computer');
const SkillsSubtitleComputerEl = document.querySelector('.skills_subtitle_computer');
const QualificationTitleMainEl = document.querySelector('.qualification_title_main');
const QualificationSubtitleMainEl = document.querySelector('.qualification_subtitle_main');
const QualificationCollegeEl = document.querySelector('.qualification_college');
const QualificationCourseEl = document.querySelector('.qualification_course');
const QualificationWorkEl = document.querySelector('.qualification_work');
const CollegeName1El = document.querySelector('.college_name_1');
const CollegeDate1El = document.querySelector('.college_date_1');
const CollegeName2El = document.querySelector('.college_name_2');
const QualificationTitle1El = document.querySelector('.qualification_title_1');
const WorkDateEl = document.querySelector('.work_date');
const QualificationTitle2El = document.querySelector('.qualification_title_2');
const PortfolioTitleMainEl = document.querySelector('.portfolio_title_main');
const PortfolioSubtitleMainEl = document.querySelector('.portfolio_subtitle_main');
const ContactTitleMainEl = document.querySelector('.contact_title_main');
const ContactSubtitleMainEl = document.querySelector('.contact_subtitle_main');
const ContactTitleCallEl = document.querySelector('.contact_title_call');
const ContactTitleLocationEl = document.querySelector('.contact_title_location');
const ContactFormNameEl = document.querySelector('.contact_form_name');
const ContactFormProjectEl = document.querySelector('.contact_form_project');
const ContactFormMessageEl = document.querySelector('.contact_form_message');
const FormSubtitleEl = document.querySelector('.footer_subtitle');
const FooterSkillsEl = document.querySelector('.footer_skills');
const FooterPortfolioEl = document.querySelector('.footer_portfolio');
const FooterContactEl = document.querySelector('.footer_contact');

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
    AboutTitleEl.textContent = data[attr].about_title;
    AboutSubtitleEl.textContent = data[attr].about_subtitle;
    AboutDescriptionEl.textContent = data[attr].about_description;
    AboutInfoNameYearsEl.textContent = data[attr].about_info_name_years;
    AboutInfoNameExperienceEl.textContent = data[attr].about_info_name_experience;
    AboutInfoNameCompletedEl.textContent = data[attr].about_info_name_completed;
    AboutInfoNameProjectsEl.textContent = data[attr].about_info_name_projects;
    AboutInfoNameCompaniesEl.textContent = data[attr].about_info_name_companies;
    AboutInfoNameWorkedEl.textContent = data[attr].about_info_name_worked;
    SkillsTitleMainEl.textContent = data[attr].skills_title_main;
    SkillsSubtitleEl.textContent = data[attr].skills_subtitle;
    SkillsTitleFrontEl.textContent = data[attr].skills_title_front;
    SkillsSubtitleFrontEl.textContent = data[attr].skills_subtitle_front;
    SkillsTitleBackEl.textContent = data[attr].skills_title_back;
    SkillsSubtitleBackEl.textContent = data[attr].skills_subtitle_back;
    SkillsTitleComputerEl.textContent = data[attr].skills_title_computer;
    SkillsSubtitleComputerEl.textContent = data[attr].skills_subtitle_computer;
    QualificationTitleMainEl.textContent = data[attr].qualification_title_main;
    QualificationSubtitleMainEl.textContent = data[attr].qualification_subtitle_main;
    QualificationCollegeEl.textContent = data[attr].qualification_college;
    QualificationCourseEl.textContent = data[attr].qualification_course;
    QualificationWorkEl.textContent = data[attr].qualification_work;
    CollegeName1El.textContent = data[attr].college_name_1;
    CollegeDate1El.textContent = data[attr].college_date_1;
    CollegeName2El.textContent = data[attr].college_name_2;
    QualificationTitle1El.textContent = data[attr].qualification_title_1;
    WorkDateEl.textContent = data[attr].work_date;
    QualificationTitle2El.textContent = data[attr].qualification_title_2;
    PortfolioTitleMainEl.textContent = data[attr].portfolio_title_main;
    PortfolioSubtitleMainEl.textContent = data[attr].portfolio_subtitle_main;
    ContactTitleMainEl.textContent = data[attr].contact_title_main;
    ContactSubtitleMainEl.textContent = data[attr].contact_subtitle_main;
    ContactTitleCallEl.textContent = data[attr].contact_title_call;
    ContactTitleLocationEl.textContent = data[attr].contact_title_location;
    ContactFormNameEl.textContent = data[attr].contact_form_name;
    ContactFormProjectEl.textContent = data[attr].contact_form_project;
    FormSubtitleEl.textContent = data[attr].footer_subtitle;
    FooterSkillsEl.textContent = data[attr].footer_skills;
    FooterPortfolioEl.textContent = data[attr].footer_portfolio;
    FooterContactEl.textContent = data[attr].footer_contact;

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
    "about_title": "Sobre mim",
    "about_subtitle": "Minha introdução",
    "about_description": "Atualmente trabalhando como Analista de Desenvolvimento de Sistemas, realizando a função de Full Stack, podendo trabalhar no backend, frontend e banco de dados. Trabalhando com as linguagens Go, Javascript (ReactJS) e MySQL para banco de dados. Também tenho experiência em redes e servidores, mas no momento focado 100% em desenvolvimento, principalmente na área de Frontend.",
    "about_info_name_years": "Anos",
    "about_info_name_experience": "experiência",
    "about_info_name_completed": "completos",
    "about_info_name_projects": "Projetos",
    "about_info_name_companies": "Empresas",
    "about_info_name_worked": "trabalhadas",
    "skills_title_main": "Habilidades",
    "skills_subtitle": "Meu nível técnico",
    "skills_title_front": "Desenvolvedor Frontend",
    "skills_subtitle_front": "Estudando por 2 anos",
    "skills_title_back": "Desenvolvedor Backend",
    "skills_subtitle_back": "Estudando por 1 ano",
    "skills_title_computer": "Técnico de Informática",
    "skills_subtitle_computer": "3 anos de experiência",
    "qualification_title_main": "Qualificações",
    "qualification_subtitle_main": "Minha jornada pessoal",
    "qualification_college": "Colégio",
    "qualification_course": "Cursos",
    "qualification_work": "Profissional",
    "college_name_1": "Análise e desenvolvimento de sistemas",
    "college_date_1": "2021 - Atual",
    "college_name_2": "Ensino Médio",
    "qualification_title_1": "Analista de Desenvolvimento de Software",
    "work_date": "2021 - Atual",
    "qualification_title_2": "Analista de Dados e Manutenção de Redes",
    "portfolio_title_main": "Portifólio",
    "portfolio_subtitle_main": "Meu trabalho",
    "contact_title_main": "Contato",
    "contact_subtitle_main": "Entre em contato",
    "contact_title_call": "Me ligue",
    "contact_title_location": "Localização",
    "contact_form_name": "Nome",
    "contact_form_project": "Projeto",
    "contact_form_message": "Mensagem",
    "footer_subtitle": "Desenvolvedor Frontend",
    "footer_skills": "Habilidades",
    "footer_portfolio": "Portifólio",
    "footer_contact": "Contato",

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
    "about_title": "About Me",
    "about_subtitle": "My experience",
    "about_description": "Currently working as a Systems Development Analyst, performing the role of Full Stack, being able to work on the backend, frontend and database. Working with Go, Javascript (ReactJS) and MySQL languages ​​for database. I also have experience in networks and servers, but at the moment focused 100% on development, mainly in the Frontend area.",
    "about_info_name_years": "Years",
    "about_info_name_experience": "Experience",
    "about_info_name_completed": "Projects",
    "about_info_name_projects": "Completed",
    "about_info_name_companies": "Companies",
    "about_info_name_worked": "worked",
    "skills_title_main": "Skills",
    "skills_subtitle": "My technical skills",
    "skills_title_front": "Frontend Developer",
    "skills_subtitle_front": "Studying for 2 years",
    "skills_title_back": "Backend Developer",
    "skills_subtitle_back": "Studying for 1 year",
    "skills_title_computer": "Computer Technician",
    "skills_subtitle_computer": "3 years of experience",
    "qualification_title_main": "Qualification",
    "qualification_subtitle_main": "My personal journey",
    "qualification_college": "College",
    "qualification_course": "Course",
    "qualification_work": "Work",
    "college_name_1": "Analysis and systems development",
    "college_date_1": "2021 - Current",
    "college_name_2": "High School",
    "qualification_title_1": "Software Development Analyst",
    "work_date": "2021 - Current",
    "qualification_title_2": "Data Analyst and Network Maintenance",
    "portfolio_title_main": "Portfolio",
    "portfolio_subtitle_main": "My work",
    "contact_title_main": "Contact me",
    "contact_subtitle_main": "Get in touch",
    "contact_title_call": "Call me",
    "contact_title_location": "Location",
    "contact_form_name": "Name",
    "contact_form_project": "Project",
    "contact_form_message": "Message",
    "footer_subtitle": "Frontend Developer",
    "footer_skills": "Skills",
    "footer_portfolio": "Portfolio",
    "footer_contact": "Contact",
  },
}