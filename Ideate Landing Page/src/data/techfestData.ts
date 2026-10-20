export interface EventItem {
  id: string;
  title: string;
  category: 'Competitions' | 'Workshops' | 'Exhibitions' | 'Lectures & Shows';
  tagline: string;
  description: string;
  details: string[];
  venue: string;
  date: string;
  image: string;
  badgeText: string;
  eligibility: string;
  teamSize?: string;
  registrationOpen: boolean;
  officialPath: string;
  stats?: { label: string; value: string }[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  category: 'Competitions' | 'Workshops' | 'Exhibitions' | 'Lectures & Shows';
  venue: string;
  day: 1 | 2 | 3;
  description: string;
}

export const FESTIVAL_METRICS = [
  { value: '175,000+', label: 'Total Footfall', detail: 'Students, researchers, and tech enthusiasts' },
  { value: '2,500+', label: 'Institutions', detail: 'Universities and colleges represented nationwide' },
  { value: '50+', label: 'Nations', detail: 'Global international participants & competitors' },
  { value: '₹50L+', label: 'Prize Pool', detail: 'Cash awards, grants, and incubation credits' },
];

export const PATRONAGES = [
  'Patronage of UNESCO',
  'Supported by UNICEF',
  'Make in India Initiative',
  'Digital India Partner',
  'SAYEN & CEE Endorsed',
];

export const FEATURED_COMPETITIONS: EventItem[] = [
  {
    id: 'robowars',
    title: 'International Robowars',
    category: 'Competitions',
    tagline: 'Asia\'s premier combat robotics tournament',
    description: 'The heavyweight championship of robot combat. Engineering teams deploy custom-fabricated 60kg and 8kg titanium armor bots armed with spinning flywheels, pneumatic flippers, and hardened chassis inside a bulletproof polycarbonate arena.',
    details: [
      'Weight Divisions: 60kg (Heavyweight) and 8kg (Featherweight)',
      'Custom arena engineered with pneumatic hazard zones and steel spikes',
      'Dual-elimination tournament bracket with international qualifiers',
      'Live technical scrutineering and safety compliance inspection'
    ],
    venue: 'Gymkhana Grounds Arena, IIT Bombay',
    date: 'Dec 16–18, 2026',
    image: '/src/assets/images/techfest_robowars_battle_1792511716218.jpg',
    badgeText: 'Flagship Combat Arena',
    eligibility: 'Open to international & national collegiate teams',
    teamSize: 'Up to 6 members',
    registrationOpen: true,
    officialPath: 'https://techfest.org/competitions/robowars',
    stats: [
      { label: 'Weight Classes', value: '60kg / 8kg' },
      { label: 'Armor Spec', value: 'Titanium Grade 5' },
      { label: 'Arena Impact', value: 'Polycarbonate Cage' }
    ]
  },
  {
    id: 'meshmerize',
    title: 'Meshmerize Autonomous Maze',
    category: 'Competitions',
    tagline: 'Precision autonomous micro-mouse pathfinding',
    description: 'Autonomous micro-mouse robotic rovers must map, traverse, and calculate optimal Dijkstra and flood-fill navigation through an unfamiliar dynamic maze using onboard ultrasonic, LiDAR, and optical odometry without manual control.',
    details: [
      'Line-following + grid coordinate shortest-path algorithms',
      'Dry exploration run followed by high-velocity sprint runs',
      'Microcontroller architecture: ESP32, STM32, or Teensy platforms',
      'Zonal rounds in 6 metro hubs leading to the IIT Bombay Grand Finale'
    ],
    venue: 'Indoor Sports Complex, IIT Bombay',
    date: 'Dec 16–17, 2026',
    image: '/src/assets/images/techfest_hero_visual_1792511714438.jpg',
    badgeText: 'Autonomous Navigation',
    eligibility: 'All undergraduate and diploma engineering students',
    teamSize: 'Up to 4 members',
    registrationOpen: true,
    officialPath: 'https://techfest.org/competitions/meshmerize',
    stats: [
      { label: 'Navigation', value: 'Autonomous Flood-Fill' },
      { label: 'Sensory Array', value: 'LiDAR / IR Optical' },
      { label: 'Rounds', value: 'Dry Run + Speed Run' }
    ]
  },
  {
    id: 'ev-green-mobility',
    title: 'EV Infra & Green Mobility AI',
    category: 'Competitions',
    tagline: 'AI solutions for clean transit and grid telemetry',
    description: 'Develop intelligent algorithmic systems for real-time electric vehicle fleet routing, smart charging load distribution, dynamic battery pack thermal analytics, and renewable microgrid load balancing.',
    details: [
      'Hardware-in-the-loop and live dataset simulation tracks',
      'Evaluation by clean energy researchers and mobility pioneers',
      'Live demonstration of telemetry dashboard at Techfest campus'
    ],
    venue: 'Lecture Hall Complex (LHC), IIT Bombay',
    date: 'Dec 17, 2026',
    image: '/src/assets/images/techfest_humanoid_exhibit_1792511717300.jpg',
    badgeText: 'Clean Tech Challenge',
    eligibility: 'University students & independent researchers',
    teamSize: '1–4 members',
    registrationOpen: true,
    officialPath: 'https://techfest.org/competitions/green-mobility'
  }
];

export const ALL_EVENTS: EventItem[] = [
  ...FEATURED_COMPETITIONS,
  {
    id: 'workshop-modern-ai',
    title: 'Modern AI & Agentic Systems',
    category: 'Workshops',
    tagline: 'Hands-on Generative AI, RAG, and Autonomous Tool Workflows',
    description: 'An intensive technical workshop hosted in IIT Bombay computer laboratories. Implement real neural pipelines, fine-tune multimodal LLMs, construct production vector retrieval engines, and build autonomous agents.',
    details: [
      'Production Retrieval-Augmented Generation (RAG) with hybrid search',
      'Tool-calling autonomous agents with structured schema verification',
      'Local model deployment and quantized inference on edge hardware',
      'Official Certificate of Participation by Techfest, IIT Bombay'
    ],
    venue: 'Computer Center Labs, IIT Bombay',
    date: 'Dec 16–17, 2026',
    image: '/src/assets/images/techfest_ai_workshop_1792511717144.jpg',
    badgeText: 'Masterclass Workshop',
    eligibility: 'Basic Python & ML foundations recommended',
    registrationOpen: true,
    officialPath: 'https://techfest.org/workshops/modern-ai'
  },
  {
    id: 'workshop-cybersecurity',
    title: 'Ethical Hacking & Cloud Exploitation',
    category: 'Workshops',
    tagline: 'Defensive engineering and offensive security CTF',
    description: 'Immerse into threat modeling, zero-trust infrastructure, container breakout vectors, web API exploitation, and defense strategies against automated adversarial AI attacks.',
    details: [
      'Live sandbox attack-and-defend Capture The Flag (CTF)',
      'Reverse engineering firmware and vulnerability assessment',
      'Led by certified ethical hackers and security researchers'
    ],
    venue: 'New Software Lab, Dept. of CSE, IIT Bombay',
    date: 'Dec 17–18, 2026',
    image: '/src/assets/images/techfest_ai_workshop_1792511717144.jpg',
    badgeText: 'Offensive Security',
    eligibility: 'All students with networking fundamentals',
    registrationOpen: true,
    officialPath: 'https://techfest.org/workshops/ethical-hacking'
  },
  {
    id: 'exhibit-humanoids',
    title: 'Global Humanoid & Robotics Conclave',
    category: 'Exhibitions',
    tagline: 'Live bipedal humanoid robotics and bionic demonstrations',
    description: 'Encounter the frontier of physical artificial intelligence. Witness live public demonstrations of advanced bipedal robots including Unitree G1, autonomous quadruped platforms, and bionic exoskeletons designed for extreme environments.',
    details: [
      'Interactive robotic mobility demonstrations across obstacle courses',
      'Direct Q&A with roboticists, controls engineers, and designers',
      'Next-generation carbon composite and harmonic drive mechanics'
    ],
    venue: 'TechConnect Pavilion, IIT Bombay Gymkhana',
    date: 'Dec 16–18, 2026 (All Days)',
    image: '/src/assets/images/techfest_humanoid_exhibit_1792511717300.jpg',
    badgeText: 'Open Public Pavilion',
    eligibility: 'All registered festival attendees',
    registrationOpen: true,
    officialPath: 'https://techfest.org/exhibitions/humanoids'
  },
  {
    id: 'exhibit-techconnect',
    title: 'TechConnect IIT Bombay R&D',
    category: 'Exhibitions',
    tagline: 'Flagship showcase of breakthrough IIT Bombay innovations',
    description: 'Over 100 deep-tech projects, patents, and prototypes incubated directly inside IIT Bombay research facilities—spanning student aerospace rovers, electric racing cars, biomedical implants, and quantum computing hardware.',
    details: [
      'Formula Student electric race car telemetry and aerodynamics display',
      'ISRO & DRDO aerospace technology transfer showcases',
      'Nano-satellite ground station live telemetry feeds'
    ],
    venue: 'Convocation Hall & Foyer, IIT Bombay',
    date: 'Dec 16–18, 2026',
    image: '/src/assets/images/techfest_hero_visual_1792511714438.jpg',
    badgeText: 'Campus R&D',
    eligibility: 'All festival attendees & industry delegates',
    registrationOpen: true,
    officialPath: 'https://techfest.org/exhibitions/techconnect'
  },
  {
    id: 'technoholix-night',
    title: 'Technoholix Science & Music Synthesis',
    category: 'Lectures & Shows',
    tagline: 'The legendary night festival combining visual science and EDM',
    description: 'When the sun sets over Powai Lake, Techfest transforms into an audiovisual celebration. Experience laser projections, aerial kinetic spectacles, and international electronic dance music headliners.',
    details: [
      'Over 25,000 students gathering at the main open-air arena',
      'Architectural 40W RGB laser arrays and synchronized fire systems',
      'Opening acts by technological circus and illusion artists from Ozone'
    ],
    venue: 'Main Gymkhana Grounds, IIT Bombay',
    date: 'Dec 16, 17 & 18 (Evenings 7:00 PM)',
    image: '/src/assets/images/techfest_technoholix_stage_1792511717935.jpg',
    badgeText: 'Evening Grand Arena',
    eligibility: 'Complimentary access for all registered delegates',
    registrationOpen: true,
    officialPath: 'https://techfest.org/technoholix'
  },
  {
    id: 'keynote-lectures',
    title: 'International Keynotes & World Leaders',
    category: 'Lectures & Shows',
    tagline: 'Pioneering thinkers shaping the next half-century of science',
    description: 'Techfest has historically hosted titans of science and society—from Dr. APJ Abdul Kalam, Rakesh Sharma, and Bjarne Stroustrup to Nobel Laureates and pioneering AI researchers. Discover this year\'s visionaries in intimate lecture formats.',
    details: [
      'Nobel Laureate address on quantum coherence and information',
      'Keynote addresses on commercial spaceflight and lunar exploration',
      'Moderated fireside audience Q&A with student innovators'
    ],
    venue: 'PC Saxena Auditorium, IIT Bombay',
    date: 'Dec 16–18, 2026',
    image: '/src/assets/images/techfest_hero_visual_1792511714438.jpg',
    badgeText: 'Distinguished Lectures',
    eligibility: 'Seating on first-come basis with delegate badge',
    registrationOpen: true,
    officialPath: 'https://techfest.org/lectures'
  }
];

export const SCHEDULE_DAYS: Record<number, ScheduleItem[]> = {
  1: [
    {
      time: '09:00 AM',
      title: 'Grand Inauguration Ceremony',
      category: 'Lectures & Shows',
      venue: 'Convocation Hall',
      day: 1,
      description: 'Opening remarks by Institute leadership, unveiling of the 30th edition theme, and keynote address.'
    },
    {
      time: '10:30 AM',
      title: 'International Robowars: 8kg & 60kg Scrutineering',
      category: 'Competitions',
      venue: 'Gymkhana Arena',
      day: 1,
      description: 'Failsafe verification, weight check, and opening round knockout brackets.'
    },
    {
      time: '11:00 AM',
      title: 'TechConnect & Humanoid Pavilion Opens',
      category: 'Exhibitions',
      venue: 'TechConnect Pavilion',
      day: 1,
      description: 'Public showcase of 100+ IIT Bombay innovations and global humanoid demonstrations.'
    },
    {
      time: '01:30 PM',
      title: 'Modern AI: Architecture & Quantization Workshop',
      category: 'Workshops',
      venue: 'Computer Center Lab 1',
      day: 1,
      description: 'Hands-on training session on model fine-tuning and autonomous tool orchestration.'
    },
    {
      time: '07:00 PM',
      title: 'Technoholix: Day 1 Science Visuals & Laser Symphony',
      category: 'Lectures & Shows',
      venue: 'Gymkhana Main Stage',
      day: 1,
      description: 'High-energy technological illusionists and laser visual synchronization.'
    }
  ],
  2: [
    {
      time: '09:30 AM',
      title: 'Meshmerize Autonomous Maze: Speed Run Qualifiers',
      category: 'Competitions',
      venue: 'Indoor Sports Complex',
      day: 2,
      description: 'Top collegiate autonomous rovers battle against the clock in unseen maze layouts.'
    },
    {
      time: '11:00 AM',
      title: 'Ethical Hacking: Live Red-Team CTF Challenge',
      category: 'Workshops',
      venue: 'CSE Software Lab',
      day: 2,
      description: 'Intense offensive security workshop and sandbox vulnerability exploitation.'
    },
    {
      time: '02:00 PM',
      title: 'Distinguished Keynote: Frontiers in Space Exploration',
      category: 'Lectures & Shows',
      venue: 'PC Saxena Auditorium',
      day: 2,
      description: 'Address by senior aerospace scientists and interactive student discourse.'
    },
    {
      time: '03:30 PM',
      title: 'International Robowars: Quarterfinals & Semifinals',
      category: 'Competitions',
      venue: 'Gymkhana Arena',
      day: 2,
      description: 'High-stakes combat collisions as elite bots fight for the championship finals.'
    },
    {
      time: '07:30 PM',
      title: 'Technoholix: International EDM Night',
      category: 'Lectures & Shows',
      venue: 'Gymkhana Main Stage',
      day: 2,
      description: 'Electrifying headliner musical set with synchronized architectural pyrotechnics.'
    }
  ],
  3: [
    {
      time: '10:00 AM',
      title: 'EV Infra & Green Mobility AI Final Presentations',
      category: 'Competitions',
      venue: 'Lecture Hall Complex',
      day: 3,
      description: 'Shortlisted teams pitch algorithmic grid solutions to industry jury.'
    },
    {
      time: '12:00 PM',
      title: 'Meshmerize Grand Finale: Sudden Death Maze Sprint',
      category: 'Competitions',
      venue: 'Indoor Sports Complex',
      day: 3,
      description: 'Championship showdown between the fastest autonomous micro-mice.'
    },
    {
      time: '03:30 PM',
      title: 'International Robowars: 60kg Grand Final Battle',
      category: 'Competitions',
      venue: 'Gymkhana Arena',
      day: 3,
      description: 'The ultimate battle for the Asia Robowars champion crown.'
    },
    {
      time: '05:30 PM',
      title: 'Valedictory & Prize Distribution Ceremony',
      category: 'Lectures & Shows',
      venue: 'Convocation Hall',
      day: 3,
      description: 'Awarding over ₹50 Lakhs in prizes and felicitation of winning inventors.'
    },
    {
      time: '07:30 PM',
      title: 'Technoholix Climax & Drone Constellation Finale',
      category: 'Lectures & Shows',
      venue: 'Gymkhana Main Stage',
      day: 3,
      description: 'A 500-drone constellation light performance over Powai Lake and closing set.'
    }
  ]
};

export const PAST_LEGENDS = [
  { name: 'Dr. APJ Abdul Kalam', role: 'Former President of India & Aerospace Scientist', note: 'Inaugural address inspiring student innovators' },
  { name: 'Rakesh Sharma', role: 'Hero of the Soviet Union & 1st Indian in Space', note: 'Delivered keynote on human space endurance' },
  { name: 'Bjarne Stroustrup', role: 'Creator of the C++ Programming Language', note: 'Masterclass on system programming evolutions' },
  { name: 'Sophia the Robot', role: 'Hanson Robotics Humanoid Citizen', note: 'First interactive public AI dialogue in Asia' },
];

export const FAQS = [
  {
    q: 'What is Techfest, IIT Bombay?',
    a: 'Techfest is the annual science and technology festival of the Indian Institute of Technology Bombay. Established in 1998, it has grown into Asia\'s largest science and technology festival, recording over 175,000 attendees and participants from 2,500+ institutions worldwide.'
  },
  {
    q: 'How do I register for Competitions and Workshops?',
    a: 'Registrations are completed online through the official portal. Click the "Register Now" button anywhere on this page to select your events, create your delegate profile, and submit your team roster. Entry to exhibitions and lectures is free with delegate registration.'
  },
  {
    q: 'Is accommodation provided for outstation participants?',
    a: 'Yes. Techfest provides on-campus hostel accommodation at IIT Bombay for verified participants, competitors, and workshop attendees upon advance booking through the official portal.'
  },
  {
    q: 'Are workshops and competitions open to non-IIT students?',
    a: 'Absolutely. Techfest is open to students and enthusiasts from any accredited university, college, or international institution. Specific eligibility criteria for each track are outlined on its details page.'
  },
  {
    q: 'What are the official dates and location?',
    a: 'Techfest 2026 takes place on December 16, 17, and 18, 2026 across the campus of IIT Bombay, located in Powai, Mumbai, Maharashtra 400076, India.'
  }
];
