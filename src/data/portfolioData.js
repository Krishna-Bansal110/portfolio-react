export const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'Python'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Spring Boot'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Linux / Ubuntu'],
  },
]

export const projects = [
  {
    slug: 'housing-management-system',
    title: 'Housing Management System',
    type: 'Full-Stack Application',
    summary: 'A practical full-stack platform for handling the day-to-day operations of a residential society.',
    techStack: ['Spring Boot', 'React', 'MySQL', 'REST APIs', 'JWT Authentication'],
    features: [
      'Admin, resident, and security management',
      'Separate resident and security logins',
      'Visitor and maintenance bill management',
      'Role-based access control',
      'RESTful backend APIs with a React frontend',
    ],
    goal: 'Built to be practical enough for use by an actual residential society.',
  },
  {
    slug: 'mall-management-system',
    title: 'Mall Management System',
    type: 'Java + SQL OOP Project',
    summary: 'A Java and SQL application that models the main people, spaces, and services involved in mall operations.',
    techStack: ['Java', 'SQL', 'Object-Oriented Programming'],
    features: [
      'Mall owner and shop/space owner management',
      'Customer, shop, and food court management',
      'Space and theater management',
      'Database integration with SQL',
    ],
    concepts: ['Interfaces', 'Classes', 'Inheritance', 'Encapsulation', 'Database integration'],
    goal: 'Created to apply object-oriented programming concepts in a structured management system.',
  },
  {
    slug: 'quant-research-backtesting-platform',
    title: 'Quant Research & Backtesting Platform',
    type: 'Research Platform',
    inDevelopment: true,
    summary: 'An ongoing learning project exploring how quantitative research platforms process data, test strategies, and compare outcomes.',
    techStack: ['Python', 'FastAPI', 'Java / Spring Boot', 'SQL', 'Data Analysis'],
    features: [
      'Historical market data exploration',
      'Strategy development and backtesting',
      'Performance metrics and strategy comparison',
      'Data processing and REST API workflows',
    ],
    goal: 'Focused on learning Python-based research workflows and the foundations of quantitative systems.',
  },
]
