const defaultProfile = {
  fullName: 'Your Name',
  role: 'Senior Software Developer',
  yearsOfExperience: '8+ years',
  pageTitle: 'Your Name | Senior Software Developer Portfolio',
  pageDescription:
    'Portfolio of a Senior Software Developer focused on distributed systems, secure API design, and cloud-native platforms.',
  headline: 'Building secure, scalable APIs and high-performance backend systems.',
  heroSummary:
    'I architect and implement resilient backend platforms with a focus on API design, event-driven workflows, cloud infrastructure, and engineering excellence.',
  about:
    'Senior Software Developer with 8+ years of experience delivering enterprise-grade products. Strong background in API architecture, microservices, cloud deployment, performance optimization, and developer mentoring. I enjoy taking products from concept to production while balancing speed, quality, and long-term maintainability.',
  contact: {
    email: 'your.email@example.com',
    linkedIn: 'linkedin.com/in/your-profile',
    github: 'github.com/your-username',
    location: 'Your City, Country'
  }
};

const profile = {
  ...defaultProfile,
  ...(window.PORTFOLIO_PROFILE || {}),
  contact: {
    ...defaultProfile.contact,
    ...((window.PORTFOLIO_PROFILE && window.PORTFOLIO_PROFILE.contact) || {})
  }
};

const experiences = [
  {
    role: 'Senior Software Engineer · Brillio LLC (NJ, USA)',
    period: 'Mar 2018 – Present',
    achievements: [
      'Designed and delivered enterprise REST APIs and event-driven microservices using Node.js/TypeScript with AWS serverless (Lambda, API Gateway).',
      'Built and governed API gateways on Apigee (Edge/X/Hybrid/On-Prem), including shared flows, security policies, traffic management, and analytics.',
      'Implemented OAuth2/JWT/SSO (Okta) security patterns plus RBAC/ABAC authorization for multi-tenant services.',
      'Developed resilient async workflows with SQS/SNS/Kinesis (idempotency, retries, backoff) and improved operational reliability through structured logging/monitoring.',
      'Led CI/CD and quality gates (SonarQube, tests, reviews) and mentored offshore engineers on API design, gateway standards, and secure coding.'
    ]
  },
  {
    role: 'Software Engineer · Torry Harris Business Solutions (Client: British Telecom)',
    period: 'Mar 2017 – Mar 2019',
    achievements: [
      'Built REST APIs on Apigee Edge and implemented Node.js-based callouts/extension policies for orchestration logic.',
      'Integrated REST with SOAP backends using WSDL and XML transformations and supported production rollouts and hotfixes.',
      'Implemented OAuth2, shared flows, centralized logging, and API monetization; analyzed performance using Apigee analytics and Kibana.'
    ]
  }
];

const skills = [
  'REST API Design (versioning, pagination, validation, error schemas)',
  'Node.js / TypeScript (event loop, async/await, streaming)',
  'Microservices & Event-Driven Architecture',
  'External API Integrations (timeouts, retries, rate limiting, circuit breakers)',
  'Apigee Edge / X / Hybrid / On-Prem (installation, deployment, shared flows)',
  'API Security (OAuth2, JWT, mTLS, API keys, RBAC/ABAC, CORS)',
  'Traffic Management (quota, spike arrest, caching, threat protection)',
  'AWS Lambda / API Gateway / SQS / SNS / Kinesis / S3 / CloudWatch',
  'Serverless Framework & CI/CD (GitHub/GitLab, quality gates)',
  'MongoDB & Mongoose (document modeling, indexes, aggregations)',
  'PostgreSQL (schema basics, query tuning)',
  'Redis (cache-aside, TTL, invalidation)',
  'Observability (structured logs, metrics, tracing) - CloudWatch / ELK / Datadog',
  'Frontend Engineering (React/Next.js, responsive UI, accessibility, performance)'
];

const apiProjects = [
  {
    name: 'Apigee Policy Generator',
    summary:
      'Generates Apigee proxy policy bundles (SpikeArrest/Quota/OAuth/JWT/CORS) from a high-level YAML spec with validation and safe defaults.',
    stack: 'Node.js · TypeScript · Apigee · YAML · CI/CD',
    status: 'Prototype / Portfolio',
    link: '#',
    image:
      'assets/projects/apigee-policy-generator.svg'
  },
  {
    name: 'OpenAPI Contract Guard',
    summary:
      'Detects breaking API changes, suggests semantic versioning updates, and auto-generates release risk reports for API reviewers.',
    stack: 'TypeScript · OpenAPI Tooling · GitHub Actions',
    status: 'Build-ready',
    link: '#',
    image:
      'assets/projects/openapi-contract-guard.svg'
  },
  {
    name: 'Real-Time Event Stream Tracker',
    summary:
      'Tracks event flow, lag, and failures from Kinesis with replay controls and correlation IDs for distributed-system debugging.',
    stack: 'AWS Kinesis · Lambda · Node.js · React',
    status: 'MVP scope defined',
    link: '#',
    image:
      'assets/projects/real-time-event-tracker.svg'
  },
  {
    name: 'Smart API Performance Analyzer',
    summary:
      'Profiles slow endpoints and recommends cache/query/index improvements with measurable before-vs-after latency tracking.',
    stack: 'Node.js · Postgres/Mongo · Redis · OpenTelemetry',
    status: 'Concept → Build phase',
    link: '#',
    image:
      'assets/projects/smart-api-performance.svg'
  },
  {
    name: 'AI Security Threat Correlator for APIs',
    summary:
      'Correlates API logs, auth failures, and WAF alerts to detect credential stuffing, token replay, and bot abuse in near real time.',
    stack: 'Node.js · Python · ELK · OpenTelemetry · AWS Security',
    status: 'Production-ready architecture',
    link: '#',
    image:
      'assets/projects/ai-security-threat.svg'
  },
  {
    name: 'Production-Ready E-commerce Clone',
    summary:
      'Full-stack e-commerce app with catalog, cart, checkout, coupons, admin dashboard, and production-style CI/CD.',
    stack: 'Next.js · Node.js · PostgreSQL · Redis · Docker',
    status: 'Design + build ready',
    link: '#',
    image:
      'assets/projects/ecommerce-clone.svg'
  },
  {
    name: 'SaaS Landing + CMS Builder',
    summary:
      'Reusable landing components with theme controls, SEO metadata, analytics hooks, and free-tier deployment workflows.',
    stack: 'Next.js · Tailwind · Headless CMS · Lighthouse CI',
    status: 'Portfolio / Demo',
    link: '#',
    image:
      'assets/projects/saas-cms-builder.svg'
  },
  {
    name: 'Real-Estate Listings Platform',
    summary:
      'Property search platform with map filters, lead routing, broker/admin workflows, and API-first backend architecture.',
    stack: 'React · Node.js · MongoDB · Maps APIs',
    status: 'Production-style demo',
    link: '#',
    image:
      'assets/projects/real-estate-platform.svg'
  }
];

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

function setContactLink(id, value, type) {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }

  if (!value) {
    el.textContent = 'Will add soon';
    return;
  }

  const link = document.createElement('a');
  link.className = 'inline-link';
  link.textContent = value;

  if (type === 'email') {
    link.href = `mailto:${value}`;
  } else {
    link.href = value.startsWith('http') ? value : `https://${value}`;
    link.target = '_blank';
    link.rel = 'noreferrer';
  }

  el.innerHTML = '';
  el.appendChild(link);
}

function initProfile() {
  document.title = profile.pageTitle;
  const meta = document.getElementById('pageDescription');
  meta?.setAttribute('content', profile.pageDescription);

  setText('brandName', profile.fullName);
  setText('footerName', profile.fullName);
  setText('heroRole', profile.role);
  setText('heroExperience', `${profile.yearsOfExperience} experience`);
  setText('heroHeadline', profile.headline);
  setText('heroSummary', profile.heroSummary);
  setText('aboutText', profile.about);

  setContactLink('contactEmail', profile.contact.email, 'email');
  setContactLink('contactLinkedIn', profile.contact.linkedIn, 'url');
  setContactLink('contactGitHub', profile.contact.github, 'url');
  setText('contactLocation', profile.contact.location);
  setText('year', new Date().getFullYear().toString());
}

function renderExperience() {
  const container = document.getElementById('experienceList');
  if (!container) return;
  container.innerHTML = '';

  experiences.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'card timeline-item reveal';
    card.style.transitionDelay = `${index * 80}ms`;

    const points = item.achievements.map((a) => `<li>${a}</li>`).join('');

    card.innerHTML = `
      <h3>${item.role}</h3>
      <p class="muted">${item.period}</p>
      <ul>${points}</ul>
    `;
    container.appendChild(card);
  });
}

function renderSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;
  container.innerHTML = '';

  skills.forEach((skill, index) => {
    const item = document.createElement('div');
    item.className = 'chip reveal';
    item.style.transitionDelay = `${index * 40}ms`;
    item.textContent = skill;
    container.appendChild(item);
  });
}


function buildProjectFallbackImage(projectName) {
  const safeName = encodeURIComponent(projectName);
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 700'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%231b2f52'/><stop offset='100%' stop-color='%23101a2f'/></linearGradient></defs><rect width='1200' height='700' fill='url(%23g)'/><circle cx='980' cy='90' r='140' fill='rgba(110,168,255,0.25)'/><circle cx='230' cy='640' r='180' fill='rgba(134,247,211,0.18)'/><text x='70' y='610' fill='%23e8edf9' font-size='52' font-family='Inter,Arial,sans-serif'>${safeName}</text></svg>`;
}

function renderProjects() {
  const container = document.getElementById('projectGrid');
  if (!container) return;
  container.innerHTML = '';

  apiProjects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'card project-card';
    card.style.transitionDelay = `${index * 70}ms`;

    const linkLabel = project.link === '#' ? 'Coming Soon' : 'View Project';

    const fallbackImage = buildProjectFallbackImage(project.name);

    card.innerHTML = `
      <div class="project-image-wrap">
        <img src="${project.image || fallbackImage}" alt="${project.name} preview" class="project-image" loading="lazy" referrerpolicy="no-referrer" />
      </div>
      <div class="project-content">
        <h3>${project.name}</h3>
        <div class="project-meta">
          <span>${project.stack}</span>
          <span class="status">${project.status}</span>
        </div>
      </div>
      <div class="project-overlay">
        <p>${project.summary}</p>
        <a class="project-link ${project.link === '#' ? 'disabled' : ''}" href="${project.link}" ${
      project.link === '#' ? 'aria-disabled="true" tabindex="-1"' : 'target="_blank" rel="noreferrer"'
    }>${linkLabel}</a>
      </div>
    `;

    const projectImage = card.querySelector('.project-image');
    if (projectImage) {
      projectImage.addEventListener('error', () => {
        projectImage.src = fallbackImage;
      });
    }

    container.appendChild(card);
  });
}

function initRevealAnimation() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((element) => element.classList.add('reveal-ready'));

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

initProfile();
renderExperience();
renderSkills();
renderProjects();
initRevealAnimation();
