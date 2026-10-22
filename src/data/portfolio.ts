
/**
 * Central portfolio data for Ujwaldev V M.
 * Keep all portfolio content here so the existing cinematic UI stays reusable.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Ujwaldev V M',
  displayName: 'Ujwaldev V M',
  firstName: 'UJWALDEV V M',
  seriesTag: 'THE SERIES',
  originalLabel: 'UJWALDEV V M ORIGINAL',
  role: 'Cloud DevOps Engineer',
  tagline: ['Cloud DevOps Engineer', 'Azure', 'AWS', 'GCP', 'Python', 'AI'],
  intro:
    'Cloud DevOps Engineer with 5+ years of IT experience, including 4+ years in DevOps and cloud technologies. Skilled in AWS, Azure, GCP, CI/CD, Terraform, Docker, Kubernetes, Jenkins, Linux, and Python. Focused on infrastructure automation, secure deployments, scalability, and improving system reliability and delivery efficiency.',
  location: 'Remote — India',
  email: 'vmujwaldev@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ujwaldev-v-m-638501406',
    github: 'https://github.com/ujwaldev100-debug',
  },
    resumePdf: `${import.meta.env.BASE_URL}assets/Ujwaldev_Resume.pdf`,
  portrait: {
    src: `${import.meta.env.BASE_URL}assets/ujwaldev-portrait.png`,
    srcSet: `${import.meta.env.BASE_URL}assets/ujwaldev-portrait.png`,
    alt: 'Ujwaldev V M — portfolio intro artwork',
  },

  interests: [
    'Cloud Architecture',
    'Platform Engineering',
    'Infrastructure Automation',
    'Creative Product Development',
  ],
};


export const education = [
  {
    school: 'Jain University',
    place: 'India',
    degree: 'Bachelor of Computer Applications (BCA) — Cloud & DevOps',
    period: '2026 – Present',
    score: 'Currently pursuing',
  },
  {
    school: 'Government Polytechnic College Palakkad',
    place: 'Kerala, India',
    degree: 'Diploma in Mechanical Engineering',
    period: '2017 – 2020',
    score: 'Diploma completed',
  },
];


export const experience = [
  {
    company: 'Cloud & Platform Engineering',
    role: 'Cloud DevOps Engineer',
    place: 'Remote — India',
    period: '5+ years of IT experience',
    points: [
      'Build and maintain cloud infrastructure across Azure and AWS using infrastructure as code and repeatable deployment practices.',
      'Develop and support CI/CD pipelines with Azure DevOps, Jenkins, GitHub Actions and related delivery tooling.',
      'Operate containerized applications using Docker and Kubernetes, with Helm and GitOps workflows where appropriate.',
      'Support monitoring, alerting, incident response, cloud security and operational reliability.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const projects: Project[] = [
  {
    id: 'ellora',
    title: 'Ellora',
    year: 'Personal Project',
    genre: 'Creative Technology • Visual Discovery',
    logline:
      'A creative and visual discovery platform designed to bring an immersive experience to exploring ideas and content.',
    stack: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'SQLite',
    ],
    build: [
      'Designed and developed a personal product focused on creative exploration and visual discovery.',
      'Built the application experience around a web development stack including Django, Python, HTML, CSS and JavaScript.',
      'Combined product design and implementation into an independently developed application.',
    ],
    features: [
      'Creative and visual discovery experience',
      'Django application architecture',
      'Responsive web interface',
      'Python-based application development',
      'Independent product development',
    ],
    metrics: [],
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'tenants',
  },
  {
    id: 'manufacturing-platform',
    title: 'Manufacturing Platform',
    year: 'Enterprise Project',
    genre: 'Azure • DevOps • Kubernetes',
    logline:
      'A cloud delivery platform supporting manufacturing workloads through automated infrastructure, deployment pipelines and operational monitoring.',
    stack: [
      'Azure',
      'Azure DevOps',
      'Terraform',
      'ARM Templates',
      'Docker',
      'AKS',
      'Helm',
      'Argo CD',
    ],
    build: [
      'Automated Azure infrastructure provisioning with Terraform and ARM templates.',
      'Supported CI/CD delivery workflows using Azure DevOps and container-based deployment practices.',
      'Worked with Docker, Azure Kubernetes Service and Helm to support application deployment and orchestration.',
      'Applied GitOps practices, monitoring, access controls and operational troubleshooting.',
    ],
    features: [
      'Infrastructure as code',
      'Azure DevOps CI/CD',
      'Docker and AKS deployments',
      'Helm-based application delivery',
      'GitOps with Argo CD',
      'Monitoring and cloud security',
    ],
    metrics: [],
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'automotive-platform',
    title: 'Automotive Application Platform',
    year: 'Enterprise Project',
    genre: 'AWS • CI/CD • Containers',
    logline:
      'An AWS application platform focused on repeatable delivery, infrastructure automation and container-based workloads.',
    stack: [
      'AWS',
      'Jenkins',
      'Terraform',
      'Amazon ECS',
      'Amazon ECR',
      'AWS Lambda',
      'IAM',
      'API Gateway',
    ],
    build: [
      'Provisioned and maintained AWS resources using Terraform and infrastructure automation practices.',
      'Developed and supported Jenkins pipelines for application build and deployment workflows.',
      'Worked with Amazon ECS and ECR to support container image management and application delivery.',
      'Integrated AWS services including Lambda, IAM and API Gateway into application infrastructure workflows.',
    ],
    features: [
      'Terraform infrastructure provisioning',
      'Jenkins CI/CD pipelines',
      'Amazon ECS application deployments',
      'Amazon ECR image management',
      'Lambda and API Gateway integrations',
      'IAM-based access control',
    ],
    metrics: [],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Transformation Program',
    year: 'Enterprise Project',
    genre: 'AWS • Kubernetes • Platform Engineering',
    logline:
      'A cloud transformation initiative centered on infrastructure automation, container orchestration, observability and resilient delivery.',
    stack: [
      'AWS',
      'Terraform',
      'Amazon EKS',
      'Jenkins',
      'Argo CD',
      'Docker',
      'AWS Lambda',
      'CloudWatch',
    ],
    build: [
      'Managed AWS infrastructure automation and reusable Terraform configurations.',
      'Supported Kubernetes workloads and GitOps-based delivery using Amazon EKS and Argo CD.',
      'Worked with Jenkins and cloud-native pipeline options to support build and release workflows.',
      'Contributed to observability, security, recovery planning and operational support practices.',
    ],
    features: [
      'AWS infrastructure as code',
      'Amazon EKS and Docker',
      'GitOps with Argo CD',
      'Automated build and release workflows',
      'Monitoring and observability',
      'Cloud security and disaster recovery practices',
    ],
    metrics: [],
    palette: crimson,
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ellora',
    title: 'Independent Product Builder',
    org: 'Ellora',
    detail:
      'Created and deployed a creative and visual discovery platform as a personal product.',
    laurel: 'Personal Project',
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud & DevOps Engineering',
    org: 'Professional Experience',
    detail:
      'Experience spanning cloud platforms, infrastructure automation, CI/CD, containers and production operations.',
    laurel: 'Cloud Engineering',
  },
  {
    id: 'platform-automation',
    title: 'Infrastructure Automation',
    org: 'Azure & AWS',
    detail:
      'Hands-on project experience with infrastructure as code, deployment automation and cloud operations.',
    laurel: 'Automation',
  },
];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'LinkedIn Learning',
    name: 'Building a Cloud Architecture Diagram',
   link: `${import.meta.env.BASE_URL}assets/building-cloud-architecture-diagram.pdf`,
  },
  {
    issuer: 'LinkedIn Learning',
    name: 'Cloud Architecture: Design Decisions',
    link: `${import.meta.env.BASE_URL}assets/cloud-architecture-design-decisions.pdf`,
  },
];

export type Skill = { name: string; mono: string; note?: string };

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    subtitle: 'Design, provisioning and operations',
    skills: [
      { name: 'Microsoft Azure', mono: 'Az', note: 'Azure' },
      { name: 'Amazon Web Services', mono: 'Aw', note: 'AWS' },
      { name: 'Google Cloud', mono: 'Gc' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Delivery',
    subtitle: 'Build, release and automation',
    skills: [
      { name: 'Azure DevOps', mono: 'Ad' },
      { name: 'Jenkins', mono: 'Je' },
      { name: 'GitHub Actions', mono: 'Gh' },
      { name: 'GitLab CI', mono: 'Gl' },
      { name: 'Argo CD', mono: 'Ar' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    subtitle: 'Package, deploy and operate workloads',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Azure AKS', mono: 'Ak' },
      { name: 'Amazon EKS', mono: 'Ek' },
      { name: 'Amazon ECS', mono: 'Ec' },
      { name: 'Helm', mono: 'Hm' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    subtitle: 'Repeatable cloud foundations',
    skills: [
      { name: 'Terraform', mono: 'Tf' },
      { name: 'CloudFormation', mono: 'Cf' },
      { name: 'ARM Templates', mono: 'Ar' },
      { name: 'Ansible', mono: 'An' },
    ],
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    subtitle: 'Visibility, alerting and troubleshooting',
    skills: [
      { name: 'CloudWatch', mono: 'Cw' },
      { name: 'Azure Monitor', mono: 'Am' },
      { name: 'Prometheus', mono: 'Pr' },
      { name: 'Grafana', mono: 'Gr' },
      { name: 'ELK Stack', mono: 'El' },
    ],
  },
  {
    id: 'scripting',
    title: 'Scripting & Tooling',
    subtitle: 'Automation and developer workflows',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Bash', mono: 'Ba' },
      { name: 'PowerShell', mono: 'Ps' },
      { name: 'Git', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Maven', mono: 'Mv' },
      { name: 'SonarQube', mono: 'Sq' },
      { name: 'Nexus', mono: 'Nx' },
    ],
  },
  {
    id: 'application',
    title: 'Application Development',
    subtitle: 'The engineering behind Ellora',
    skills: [
      { name: 'Django', mono: 'Dj' },
      { name: 'Python 3.12', mono: 'Py' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'JSON', mono: 'Js' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Microsoft Azure': ['Manufacturing Platform', 'Azure DevOps'],
  'Amazon Web Services': [
    'Automotive Application Platform',
    'Cloud Transformation Program',
  ],
  'Google Cloud': ['Cloud platform familiarity'],
  'Azure DevOps': ['Manufacturing Platform'],
  Jenkins: [
    'Automotive Application Platform',
    'Cloud Transformation Program',
  ],
  'GitHub Actions': ['CI/CD and automation'],
  'GitLab CI': ['CI/CD and automation'],
  'Argo CD': ['Manufacturing Platform', 'Cloud Transformation Program'],
  Docker: [
    'Manufacturing Platform',
    'Automotive Application Platform',
    'Cloud Transformation Program',
  ],
  Kubernetes: ['Azure AKS', 'Amazon EKS'],
  'Azure AKS': ['Manufacturing Platform'],
  'Amazon EKS': ['Cloud Transformation Program'],
  'Amazon ECS': ['Automotive Application Platform'],
  Helm: ['Manufacturing Platform'],
  Terraform: [
    'Manufacturing Platform',
    'Automotive Application Platform',
    'Cloud Transformation Program',
  ],
  CloudFormation: ['AWS infrastructure automation'],
  'ARM Templates': ['Manufacturing Platform'],
  Ansible: ['Configuration management and automation'],
  CloudWatch: ['Cloud Transformation Program'],
  'Azure Monitor': ['Manufacturing Platform'],
  Prometheus: ['Monitoring and observability'],
  Grafana: ['Monitoring and observability'],
  'ELK Stack': ['Log monitoring and analysis'],
  Python: ['Ellora', 'Automation scripts'],
  Bash: ['Linux and deployment automation'],
  PowerShell: ['Cloud and systems administration'],
  Git: ['Source control and CI/CD'],
  Linux: ['Cloud operations and troubleshooting'],
  Maven: ['Build automation'],
  SonarQube: ['Code quality workflows'],
  Nexus: ['Artifact management'],
  Django: ['Ellora'],
  'Python 3.12': ['Ellora'],
  HTML: ['Ellora'],
  CSS: ['Ellora'],
  JavaScript: ['Ellora'],
  SQLite: ['Ellora'],
  JSON: ['Configuration and application development'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2017 – 2020',
    synopsis:
      'Building an engineering foundation through a Diploma in Mechanical Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description:
          'Diploma in Mechanical Engineering at Government Polytechnic College Palakkad.',
        tags: ['Engineering', 'Diploma'],
        runtime: '2017 – 2020',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Into the Cloud',
    period: 'Professional Journey',
    synopsis:
      'Growing across IT, cloud platforms, infrastructure and DevOps engineering.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Cloud Engineer',
        description:
          'Building practical experience across cloud infrastructure and operational engineering.',
        tags: ['Azure', 'AWS', 'Cloud Operations'],
        runtime: 'Professional experience',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Automator',
        description:
          'Using infrastructure as code and CI/CD pipelines to make deployment workflows repeatable.',
        tags: ['Terraform', 'Azure DevOps', 'Jenkins'],
        runtime: 'Automation',
        palette: violet,
      },
      {
        code: 'S02 E03',
        title: 'The Platform Builder',
        description:
          'Working with containers, Kubernetes, GitOps and monitoring practices.',
        tags: ['Docker', 'Kubernetes', 'Argo CD'],
        runtime: 'Platform engineering',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise Platforms',
    period: 'Cloud Projects',
    synopsis:
      'Applying cloud and DevOps practices across manufacturing, automotive and cloud transformation platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Manufacturing Platform',
        description:
          'Azure infrastructure, automated delivery, AKS, Helm, GitOps and operational monitoring.',
        tags: ['Azure', 'Terraform', 'AKS'],
        runtime: 'Azure',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Automotive Platform',
        description:
          'AWS infrastructure, Jenkins pipelines, ECS, ECR and serverless integrations.',
        tags: ['AWS', 'Jenkins', 'ECS'],
        runtime: 'AWS',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Transformation',
        description:
          'AWS, Terraform, EKS, GitOps, observability, security and recovery practices.',
        tags: ['Terraform', 'EKS', 'Argo CD'],
        runtime: 'AWS',
        palette: crimson,
      },
    ],
  },
  {
    number: 4,
    title: 'The Independent Builder',
    period: 'Personal Project',
    synopsis:
      'Bringing engineering and creative product development together through Ellora.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Ellora',
        description:
          'An independently developed creative and visual discovery platform built with Django and Python.',
        tags: ['Django', 'Python', 'JavaScript'],
        runtime: 'Personal project',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: '2026 – Present',
    synopsis:
      'Continuing formal learning in cloud and DevOps while deepening cloud architecture and platform engineering skills.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Cloud & DevOps Studies',
        description:
          'Pursuing a Bachelor of Computer Applications focused on Cloud and DevOps at Jain University.',
        tags: ['BCA', 'Cloud', 'DevOps'],
        runtime: '2026 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'Featured original',
    title: 'Ellora',
    detail: 'Creative and visual discovery platform',
    palette: jade,
  },
  {
    label: 'Primary cloud focus',
    title: 'AWS',
    detail: 'Cloud infrastructure and DevOps',
    palette: amber,
  },
  {
    label: 'Multi-cloud engineering',
    title: 'Azure',
    detail: 'Infrastructure and application delivery',
    palette: ocean,
  },
  {
    label: 'Infrastructure as code',
    title: 'Terraform',
    detail: 'Reusable infrastructure provisioning',
    palette: violet,
  },
  {
    label: 'Delivery automation',
    title: 'CI/CD',
    detail: 'Jenkins, Azure DevOps and GitHub Actions',
    palette: crimson,
  },
  {
    label: 'Container platforms',
    title: 'Kubernetes',
    detail: 'AKS, EKS, Docker and Helm',
    palette: ocean,
  },
  {
    label: 'GitOps',
    title: 'Argo CD',
    detail: 'Declarative application delivery',
    palette: jade,
  },
  {
    label: 'Observability',
    title: 'Monitoring',
    detail: 'CloudWatch, Azure Monitor, Prometheus and Grafana',
    palette: amber,
  },
  {
    label: 'Cloud architecture',
    title: 'Design Decisions',
    detail: 'Cloud architecture learning',
    palette: violet,
  },
  {
    label: 'Current studies',
    title: 'Cloud & DevOps',
    detail: 'BCA at Jain University',
    palette: crimson,
  },
];

/** Slides used by the existing cinematic Play Intro sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Introduction',
    title: 'Cloud DevOps Engineer',
    lines: [
      'Ujwaldev V M',
      'Cloud infrastructure, automation and platform engineering',
    ],
    chips: ['Azure', 'AWS', 'DevOps'],
  },
  {
    kicker: 'Cloud platforms',
    title: 'Multi-cloud engineering',
    lines: [
      'Microsoft Azure and Amazon Web Services',
      'Infrastructure provisioning, security and operations',
    ],
    chips: ['Azure', 'AWS', 'Terraform'],
  },
  {
    kicker: 'Automation',
    title: 'Build. Ship. Operate.',
    lines: [
      'Azure DevOps, Jenkins, GitHub Actions and GitOps',
      'Docker, Kubernetes, Helm and Argo CD',
    ],
    chips: ['CI/CD', 'Kubernetes', 'GitOps'],
  },
  {
    kicker: 'Enterprise projects',
    title: 'Three cloud platforms',
    lines: [
      'Manufacturing Platform — Azure',
      'Automotive Application Platform — AWS',
      'Cloud Transformation Program — AWS',
    ],
  },
  {
    kicker: 'Personal project',
    title: 'Meet Ellora',
    lines: [
      'A creative and visual discovery platform',
      'Independent product development with Django and Python',
    ],
    chips: ['Django', 'Python', 'JavaScript'],
  },
  {
    kicker: 'Education',
    title: 'Always learning',
    lines: [
      'BCA in Cloud & DevOps — Jain University',
      'Diploma in Mechanical Engineering — Government Polytechnic College Palakkad',
    ],
  },
  {
    kicker: 'The mission',
    title: 'Reliable cloud delivery',
    lines: [
      'Infrastructure as code, automation and observability',
      'Building secure, maintainable and resilient cloud platforms',
    ],
  },
];

export type ProfileId = 'ujwaldev' | 'recruiter' | 'developer' | 'creative';

export type SectionId =
  | 'about'
  | 'journey'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ujwaldev',
    name: 'Ujwaldev',
    blurb: 'The complete portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, skills and projects first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Cloud projects, stack and automation first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The story arc and Ellora first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Profile & education',
    palette: violet,
  },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Projects • Cloud & product engineering`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Selected projects and technical strengths',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Highlights',
    card: 'Highlights & Learning',
    meta: `${achievements.length} Highlights • ${certifications.length} Learning credentials`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};
