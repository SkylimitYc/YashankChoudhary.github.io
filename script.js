const rotatingTitles = [
  "Cloud Engineer",
  "DevOps Enthusiast",
  "Automation Focused",
  "Infrastructure Driven",
];


const panelContent = {
  me: {
    eyebrow: "Me",
    title: "About Yashank",
    body: `
      <div class="context-window__grid">
        <div class="context-window__card">
          <h3>Who I am</h3>
          <p>
            I am an IT professional working toward a strong career in DevOps and Cloud
            Engineering through daily learning, hands-on projects, and practical system work.
          </p>
        </div>
        <div class="context-window__card">
          <h3>How I work</h3>
          <p>
            I like to learn by doing. I take ideas, turn them into working projects, and improve
            them through repetition, debugging, and steady execution.
          </p>
        </div>
      </div>
    `,
  },
  projects: {
    eyebrow: "Projects",
    title: "Things I build",
    body: `
      <div class="context-window__grid">
        <div class="context-window__card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio built to present my skills, projects, and growth in a cleaner,
            more professional way while also giving me room to practice deployment workflows.
           <h3> Portfolio Deployment (DevOps Project)<br></h3>
            - Built using HTML, CSS, JavaScript<br>
            - Containerized using Docker<br>
            - Deployed locally via Nginx container<br>
            - Hosted on cloud using Render<br>
            - Accessible globally via public URL<br>
            </p>
        </div>
        <div class="context-window__card">
          <h3>DevOps Practice</h3>
          <p>
            I am using this project to strengthen my Git workflow, Docker usage, and deployment
            thinking so the site is not just designed well, but also easier to ship and maintain.
          </p>
        </div>
      </div>
    `,
  },
  skills: {
    eyebrow: "Skills",
    title: "What I bring",
    body: `
      <div class="skill-groups">
        <div class="skill-group">
          <h3>Core Tools</h3>
          <p>HTML, CSS, JavaScript, Git, GitHub, Docker, Linux basics</p>
        </div>
        <div class="skill-group">
          <h3>Cloud & DevOps</h3>
          <p>AWS fundamentals, deployment flow, containerization, CI/CD learning path</p>
        </div>
        <div class="skill-group">
          <h3>Support & Systems</h3>
          <p>Desktop support, troubleshooting, DNS basics, connectivity checks, system setup</p>
        </div>
        <div class="skill-group">
          <h3>Currently Growing</h3>
          <p>Cloud infrastructure, automation, advanced DevOps workflows, and AI-assisted building</p>
        </div>
      </div>
    `,
  },
  fun: {
    eyebrow: "Fun",
    title: "A little personality",
    body: `
      <div class="context-window__grid">
        <div class="context-window__card">
          <h3>Builder mindset</h3>
          <p>
            I enjoy building things from scratch, breaking them, fixing them, and learning from
            that cycle until the result becomes better and more reliable.
          </p>
        </div>
        <div class="context-window__card">
          <h3>Curiosity</h3>
          <p>
            I am genuinely interested in how systems work behind the scenes, from deployment and
            automation to the details that make infrastructure stable and easier to operate.
          </p>
        </div>
      </div>
    `,
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's connect",
    body: `
      <div class="context-window__grid">
        <div class="context-window__card">
          <h3>Open to</h3>
          <p>
            Junior DevOps roles, Cloud-focused opportunities, project collaboration, and practical
            work that helps me grow while contributing real value.
          </p>
        </div>
        <div class="context-window__card">
          <h3>Reach me</h3>
          <div class="contact-links">
            <a href="mailto:Yashankch@gmail.com">Email: Yashankch@gmail.com</a>
            <a href="https://www.linkedin.com/in/yashank-choudhary-b984b8252/" target="_blank" rel="noreferrer">
              LinkedIn: yashank-choudhary
            </a>
            <a href="https://github.com/SkylimitYc" target="_blank" rel="noreferrer">
              GitHub: SkylimitYc
            </a>
          </div>
        </div>
      </div>
    `,
  },
};

const typingTarget = document.getElementById("typing");
const promptBar = document.getElementById("promptBar");
const promptInput = document.getElementById("promptInput");
const cards = document.querySelectorAll(".quick-card");
const panelTitle = document.getElementById("panelTitle");
const panelEyebrow = document.getElementById("panelEyebrow");
const panelBody = document.getElementById("panelBody");
const panelClose = document.getElementById("panelClose");
const panelFrame = document.querySelector(".context-window__frame");
const themeToggle = document.getElementById("themeToggle");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTitle() {
  if (!typingTarget) {
    return;
  }

  const currentTitle = rotatingTitles[titleIndex];
  typingTarget.textContent = currentTitle.slice(0, charIndex);

  if (!isDeleting) {
    charIndex += 1;
    if (charIndex > currentTitle.length) {
      isDeleting = true;
      setTimeout(typeTitle, 1200);
      return;
    }
  } else {
    charIndex -= 1;
    if (charIndex < 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % rotatingTitles.length;
      charIndex = 0;
    }
  }

  setTimeout(typeTitle, isDeleting ? 45 : 90);
}

function setActiveCard(activeCard) {
  cards.forEach((card) => {
    card.classList.toggle("is-active", card === activeCard);
  });
}

function updatePanel(key) {
  const nextPanel = panelContent[key];
  if (!nextPanel || !panelTitle || !panelEyebrow || !panelBody || !panelFrame) {
    return;
  }

  panelFrame.classList.add("is-updating");

  setTimeout(() => {
    panelEyebrow.textContent = nextPanel.eyebrow;
    panelTitle.textContent = nextPanel.title;
    panelBody.innerHTML = nextPanel.body;
    panelFrame.classList.remove("is-updating");
  }, 120);
}

function resetPanel() {
  if (!panelTitle || !panelEyebrow || !panelBody) {
    return;
  }

  panelEyebrow.textContent = "Portfolio";
  panelTitle.textContent = "Tap a card below";
  panelBody.innerHTML =
    "<p>Explore my DevOps and cloud journey, current learning path, hands-on projects, and the kind of engineering work I want to grow into.</p>";
  setActiveCard(null);
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "prompt-toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => toast.remove(), 200);
  }, 2200);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("yashank-portfolio-theme", theme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to day mode" : "Switch to night mode");
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("yashank-portfolio-theme");
  const prefersDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => setActiveCard(card));
  card.addEventListener("focus", () => setActiveCard(card));
  card.addEventListener("click", () => {
    setActiveCard(card);
    updatePanel(card.dataset.panel);
  });
});

if (panelClose) {
  panelClose.addEventListener("click", resetPanel);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

if (promptBar && promptInput) {
  promptBar.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = promptInput.value.trim();

    if (!question) {
      showToast("Ask something about my cloud, DevOps, Docker, or CI/CD journey.");
      return;
    }

    showToast(`You asked: "${question}"`);
    promptInput.value = "";
  });
}

initializeTheme();
typeTitle();
