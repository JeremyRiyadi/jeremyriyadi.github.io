const BASE = '/image/sertif/';
const D = 'Dicoding/', IBM = 'IBM/';

// [title, category, organizer, year, image, description, link?]
const rows = [
  ['Expert Data Science Program','Data Science','Indosat and IDCamp',2026,D+'Dicoding Sertifikat Level Expert.jpeg','Expert-level program selected for only 100 participants across Indonesia. Over 110 hours covering business analytics, machine learning, big data with PySpark, cloud-based data science, and the mathematical foundations of data science.'],
  ['Intermediate Data Science Program','Data Science','Indosat and IDCamp',2026,D+'Sertifikat Dicoding Kelas Menengah.jpeg','Intermediate program by IDCamp and Indosat Ooredoo Hutchison focused on data analysis, data processing, and machine learning fundamentals, with around 70 hours of hands-on study.'],
  ['AIESEC Future Leaders','Soft Skills','AIESEC',2025,'aiesec certificate.jpeg','Short leadership development program covering public speaking, leadership, and networking through interactive sessions and practical activities.'],
  ['Productivity With AI Bootcamp','AI','BDT & Dicoding',2026,'[BDT] Sertifikat - Jeremy Djohar Riyadi.png','Intensive bootcamp on using AI to improve productivity: generative AI, prompt engineering, AI-assisted content creation, workflow automation, and responsible AI use.'],
  ['Productivity With AI Bootcamp','AI','BDT & Dicoding',2026,'[BDT] Sertifikat - Jeremy Djohar Riyadi (1).png','Intensive bootcamp on using AI to improve productivity: generative AI, prompt engineering, AI-assisted content creation, workflow automation, and responsible AI use.'],
  ['Data Science Short Course','Data Science','Stanford University',2024,'DataScience-ShortCourse.jpg','Short course covering data fundamentals, essential tools, machine learning, deep learning, and data visualization with Tableau.'],
  ['Datavidia','Data Science','Institut Teknologi Bandung',2025,'Datavidia.jpg','Deep learning competition on image classification using Python, where participants build and train models for accurate image recognition.'],
  ['AI for Work & Career Readiness with Google AI Products','AI','Hacktiv8',2026,'Hacktiv8 - Maju Bareng AI.jpg','Introduces AI as a productivity tool: generative AI, LLMs, ethical use, prompt engineering, and practical tools like Google Workspace.','https://students.hacktiv8.com/certificates/9d1981dc-225e-4c54-956d-30ba438b3b76'],
  ['AI Agent for Data Analysis','AI','IBM',2026,IBM+'Data - AI Agent for Data Analysis.jpeg','AI-powered data analysis covering AI agents, LLMs, prompt engineering, and practical tools to explore data and generate insights.'],
  ['Membangun Sistem Machine Learning','AI','Dicoding',2026,D+'Membangun Sistem Machine Learning.jpeg','MLOps across the ML lifecycle: experiment tracking, model versioning, deployment, automated retraining, and monitoring using MLflow, GitHub, and Docker.','https://www.dicoding.com/certificates/MEPJOGNQLZ3V'],
  ['Belajar Fundamental Deep Learning','AI','Dicoding',2026,D+'Belajar Fundamental Deep Learning.jpeg','Deep learning with TensorFlow and Keras: neural networks, NLP, computer vision, time series, recommendation systems, reinforcement learning, and generative AI.','https://www.dicoding.com/certificates/53XE1GOQVZRN'],
  ['Belajar Penerapan Data Science','Data Science','Dicoding',2026,D+'Belajar Penerapan Data Science.jpeg','End-to-end data science process: project management, big data with PySpark, cloud implementation, and case studies such as dashboards, customer segmentation, and credit scoring.','https://www.dicoding.com/certificates/N9ZON50NRXG5'],
  ['Belajar Machine Learning untuk Pemula','AI','Dicoding',2025,D+'Belajar Machine Learning untuk Pemula.jpg','Fundamentals of machine learning: supervised and unsupervised learning, feature engineering, model optimization, and evaluation, with a final project.','https://www.dicoding.com/certificates/KEXL21V4WZG2'],
  ['Belajar Fundamental Analisis Data','Data Science','Dicoding',2026,D+'Belajar Fundamental Analisis Data.jpeg','Data gathering, cleaning, exploration, and visualization, plus building interactive dashboards with Streamlit to communicate insights.','https://www.dicoding.com/certificates/81P25EL7YPOY'],
  ['Belajar Matematika untuk Data Science','Data Science','Dicoding',2026,D+'Belajar Matematika untuk Data Science.jpeg','Builds the mathematical foundation for data science and AI/ML, including implementing statistical methods in Python.','https://www.dicoding.com/certificates/53XE1YQ7VZRN'],
  ['Belajar Dasar SQL','SQL','Dicoding',2025,D+'Belajar Dasar SQL.jpg','Fundamentals of databases, database management systems, SQL theory, and basic SQL queries.','https://www.dicoding.com/certificates/98XW0OY74XM3'],
  ['Belajar Dasar Data Science','Data Science','Dicoding',2025,D+'Belajar Dasar Data Science.jpg','Foundations of data science: the role of data, core concepts, analysis, tools, machine learning applications, and portfolio guidance.','https://www.dicoding.com/certificates/1OP8RJME2ZQK'],
  ['Belajar Membuat Front-End untuk Pemula','Software Engineering','Dicoding',2025,D+'Belajar Membuat Front End untuk Pemula.jpg','Front-end web development with JavaScript: BOM, DOM, event handling, and web storage, with a project building an interactive web app.','https://www.dicoding.com/certificates/KEXL79V7RXG2'],
  ['Belajar Dasar Pemrograman JavaScript','JavaScript','Dicoding',2025,D+'Belajar Dasar Pemrograman JavaScript.jpg','Comprehensive JavaScript introduction: syntax, functions, data structures, OOP, functional programming, asynchronous processes, and code quality.','https://www.dicoding.com/certificates/0LZ0R1VENP65'],
  ['Belajar Dasar Pemrograman Web','Software Engineering','Dicoding',2024,D+'Belajar Dasar Pemrograman Web.jpg','Front-end web development with JavaScript, covering BOM, DOM, event handling, and web storage, with a final interactive web project.','https://www.dicoding.com/certificates/QLZ9VE429X5D'],
  ['Belajar Dasar AI','AI','Dicoding',2025,D+'Belajar Dasar AI.jpg','Foundations of AI and its industry applications, including data for AI, machine learning, and deep learning concepts and use cases.','https://www.dicoding.com/certificates/1RXYWQJN9ZVM'],
  ['Memulai Pemrograman dengan Python','Python','Dicoding',2025,D+'Memulai Pemrograman dengan Python.jpg','Python fundamentals: control flow, arrays, matrices, subprograms, OOP, style guides, unit testing, and popular libraries.','https://www.dicoding.com/certificates/JMZVOV86NXN9'],
  ['Belajar Penggunaan Generative AI','AI','Dicoding',2026,D+'Belajar Penggunaan Generative AI.jpg','Using AI as a productivity tool: generative AI, LLMs, ethical usage, prompt engineering, and integration with Google Workspace.','https://www.dicoding.com/certificates/GRX5W3EQKZ0M'],
  ['Spec Driven Development dengan Kiro','Development','Dicoding',2026,D+'Spec Driven Development.jpeg','Principles of writing clear, actionable specifications and integrating them into the development process to improve code quality and collaboration.','https://www.dicoding.com/certificates/6RPN776EQX2M'],
  ['AI Praktis Untuk Produktivitas','AI','Dicoding',2026,D+'AI Praktis untuk Produktivitas.jpeg','Using AI for everyday problem solving: AI basics, practical tools, prompt engineering, and responsible use with attention to ethics and security.','https://www.dicoding.com/certificates/81P2O4R1YZOY'],
  ['Introduction to Financial Literacy','Financial','Dicoding',2026,D+'Introduction To Financial Literacy.jpeg','Fundamentals of financial literacy: personal finance management, investment basics, and smart loan strategies.','https://www.dicoding.com/certificates/07Z6705YJPQR'],
  ['Belajar Strategi Pengembangan Diri','Personal Development','Dicoding',2026,D+'Belajar Strategi Pengembangan Diri.jpeg','Personal development fundamentals: self-awareness, goal setting, time management, and communication skills.','https://www.dicoding.com/certificates/JMZVO400RXN9'],
  ['AI Fundamentals: Foundations for Understanding AI','AI','IBMSkillsBuild',2026,IBM+'AIFundamentalsFoundationsforUnderstandingAI_Badge20260507-33-az7jbk.jpg','AI concepts, machine learning, neural networks, deep learning, ethical considerations, and prompt writing.'],
  ['AI Literacy','AI','IBMSkillsBuild',2026,IBM+'AI-Literacy.jpeg','How AI works, core concepts, ethical principles, benefits and risks, prompt writing, and practical use of AI tools.'],
  ['Data Literacy','Data Science','IBMSkillsBuild',2026,IBM+'Data-Literacy.jpeg','How data is used in everyday decisions: data types, analysis, visualization, tools, and ethical considerations.'],
  ['Getting Started With Data','Data','IBMSkillsBuild',2026,IBM+'Getting Started With Data.jpeg','Data concepts, big data, analytics processes, and data visualization with Tableau Desktop.'],
  ['Unleashing The Power of AI Agents','AI','IBMSkillsBuild',2026,IBM+'Unleashing The Power of AI Agents.jpeg','AI agent types and applications, and how they automate tasks and support decision-making through real-world simulations.'],
  ['Classifying Data Using IBM Granite','AI','IBMSkillsBuild',2026,IBM+'Classifying Data Using IBM Granite.jpeg','Using generative AI to classify text data with IBM Granite models: text classification, prompt engineering, and model selection.'],
  ['AI Healthcare','AI','IBMSkillsBuild',2026,IBM+'AI Healthcare.jpeg','How AI transforms healthcare through diagnosis, research, administration, and patient care, with an IBM watsonx Assistant simulation.'],
];

const achievements = rows.map(([title, category, organizer, year, img, desc, link]) =>
  ({ title, category, organizer, year, img: BASE + encodeURI(img), desc, link }));

const list = document.getElementById('list');
const filtersEl = document.getElementById('filters');
const countEl = document.getElementById('count');

const card = a => `
  <article class="achievement reveal" data-category="${a.category}">
    <figure class="media"><img src="${a.img}" alt="${a.title} certificate" loading="lazy"></figure>
    <div class="content">
      <h2 class="headline">${a.title}</h2>
      <div class="meta">
        <span class="pill"><b>Category</b> · ${a.category}</span>
        <span class="pill"><b>Organizer</b> · ${a.organizer}</span>
        <span class="pill"><b>Year</b> · ${a.year}</span>
      </div>
      <p class="desc">${a.desc}</p>
      ${a.link ? `<a class="link" href="${a.link}" target="_blank" rel="noopener">More details →</a>` : ''}
    </div>
  </article>`;

list.innerHTML = achievements.map(card).join('');

// Filter chips
const categories = ['All', ...new Set(achievements.map(a => a.category))];
filtersEl.innerHTML = categories.map((c, i) =>
  `<button class="chip${i ? '' : ' active'}" data-cat="${c}">${c}</button>`).join('');

function applyFilter(cat) {
  let shown = 0;
  list.querySelectorAll('.achievement').forEach(el => {
    const show = cat === 'All' || el.dataset.category === cat;
    el.classList.toggle('hidden', !show);
    if (show) shown++;
  });
  countEl.textContent = `${shown} ${shown === 1 ? 'credential' : 'credentials'}`;
}
filtersEl.addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  filtersEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === btn));
  applyFilter(btn.dataset.cat);
});
applyFilter('All');

// Reveal on scroll
const items = document.querySelectorAll('.reveal');
if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  items.forEach(el => el.classList.add('visible'));
} else {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}