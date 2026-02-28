import type { NavItem, Testimonial, Announcement, GalleryImage, Facility, Activity, TeamMember, AdmissionInfo } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Principal', href: '#principal' },
  { label: 'About Us', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  // { label: 'Facilities', href: '#facilities' },
  { label: 'Activities', href: '#activities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News & Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const schoolInfo = {
  name: 'BK Gyan Deep Public School',
  tagline: 'Excellence in Education, Enlightenment in Life',
  board: 'CBSE',
  classes: 'Nursery to Class 5th',
  location: 'New Delhi, Delhi, India',
  phone: ['9868100204'],
  email: 'info@bkgyandeeppublicschool.edu.in',
  address: ' G7CP+CVQ Allah Mohalla, Tekhand, Okhla Phase I, Okhla Industrial Estate, New Delhi, Delhi 110020',
};

export const heroContent = {
  title: 'Welcome to BK Gyan Deep Public School',
  subtitle: 'Where Every Child Shines Bright',
  description: 'Nurturing young minds with quality education, holistic development, and values that build future leaders.',
  ctaPrimary: 'Admission Open',
  ctaSecondary: 'Contact Us',
};

export const aboutContent = {
  title: 'About BK Gyan Deep Public School',
  intro: 'BK Gyan Deep Public School, is a premier educational institution committed to providing quality education that nurtures academic excellence, character development, and lifelong learning.',
  history: 'Founded with a vision to create a learning environment that fosters intellectual curiosity and moral values, BK Gyan Deep Public School has grown from a small institution to one of the most respected schools in the region. Over the years, we have consistently maintained high academic standards while embracing innovative teaching methodologies.',
  stats: [
    { value: '28+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Students Graduated' },
    { value: '200+', label: 'Expert Faculty' },
    { value: '98%', label: 'Board Results' },
  ],
};

export const visionMission = {
  vision: {
    title: 'Our Vision',
    content: 'To be a leading institution that transforms young minds into compassionate, responsible, and innovative global citizens through holistic education and value-based learning.',
  },
  mission: {
    title: 'Our Mission',
    content: 'To provide a stimulating learning environment that empowers students to achieve academic excellence, develop strong character, and contribute positively to society through innovative teaching practices and comprehensive development programs.',
  },
  coreValues: [
    'Excellence in Education',
    'Integrity & Honesty',
    'Respect for All',
    'Continuous Learning',
    'Social Responsibility',
    'Innovation & Creativity',
  ],
};

export const whyChooseUs = [
  {
    icon: 'GraduationCap',
    title: 'Academic Excellence',
    description: 'Consistently achieving 98%+ board results with our result-oriented teaching methodology and dedicated faculty support.',
  },
  {
    icon: 'Users',
    title: 'Expert Faculty',
    description: 'Highly qualified and experienced teachers who are passionate about nurturing young minds with personalized attention.',
  },
  {
    icon: 'Building2',
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities including smart classrooms, well-equipped labs, and extensive sports facilities.',
  },
  {
    icon: 'Palette',
    title: 'Holistic Development',
    description: 'Balanced focus on academics, sports, arts, and life skills to ensure all-round development of every child.',
  },
  {
    icon: 'Shield',
    title: 'Safe Environment',
    description: 'Comprehensive safety measures including CCTV surveillance, trained security staff, and strict safety protocols.',
  },
  {
    icon: 'Heart',
    title: 'Values & Character',
    description: 'Strong emphasis on moral values, ethics, and character building to develop responsible future citizens.',
  },
];

export const infrastructure = [
  { title: 'Spacious Classrooms', count: '60+' },
  { title: 'Science Labs', count: '6' },
  { title: 'Computer Labs', count: '3' },
  { title: 'Libraries', count: '2' },
  { title: 'Sports Fields', count: '5' },
  { title: 'Activity Rooms', count: '8' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mrs. Priya Sharma',
    relation: 'Parent of Aarav Sharma, Class 8',
    content: 'BK Gyan Deep Public School has transformed my child\'s life. The dedicated teachers and excellent infrastructure have helped Aarav excel in both academics and extracurricular activities. The school\'s focus on values and character building is truly commendable.',
  },
  {
    id: 2,
    name: 'Mr. Rohan Gupta',
    relation: 'Parent of Ananya Gupta, Class 10',
    content: 'The individual attention given to each student is remarkable. My daughter has shown tremendous improvement in her confidence and academic performance. The school provides a perfect balance of studies and co-curricular activities.',
  },
  {
    id: 3,
    name: 'Neha Verma',
    relation: 'Student, Class 12 (Science Stream)',
    content: 'Being a student of BK Gyan Deep Public School for the past 12 years, I can confidently say this is the best institution for holistic education. The teachers are not just educators but mentors who guide us at every step.',
  },
  {
    id: 4,
    name: 'Mrs. Kavita Patel',
    relation: 'Parent of Vihaan Patel, Class 5',
    content: 'The safety measures and caring environment at BK Gyan Deep Public School give me peace of mind. My son loves going to school every day and has developed a genuine love for learning. Highly recommended!',
  },
];

export const announcements: Announcement[] = [
  { id: 1, title: 'Summer Vacation from May 15 to June 30', date: '2024-05-10', type: 'notice' },
  { id: 2, title: 'Annual Day Function - March 25, 2024', date: '2024-03-15', type: 'event' },
  { id: 3, title: 'Admission Open for Session 2024-25', date: '2024-01-15', type: 'announcement' },
  { id: 4, title: 'CBSE Board Exams Start from February 15', date: '2024-02-01', type: 'notice' },
  { id: 5, title: 'Parent-Teacher Meeting - April 10', date: '2024-04-05', type: 'event' },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/annual-day.jpg', alt: 'Annual Day Function', category: 'Events' },
  { id: 2, src: '/images/science-lab.jpg', alt: 'Science Laboratory', category: 'Labs' },
  { id: 3, src: '/images/sports-ground.jpg', alt: 'Sports Ground', category: 'Sports' },
  { id: 4, src: '/images/art-class.jpg', alt: 'Art Class', category: 'Activities' },
  { id: 5, src: '/images/library.jpg', alt: 'School Library', category: 'Infrastructure' },
  { id: 6, src: '/images/yoga-class.jpg', alt: 'Yoga Class', category: 'Activities' },
  { id: 7, src: '/images/computer-lab.jpg', alt: 'Computer Lab', category: 'Labs' },
  { id: 8, src: '/images/music-class.jpg', alt: 'Music Class', category: 'Activities' },
  { id: 9, src: '/images/assembly.jpg', alt: 'Morning Assembly', category: 'Events' },
  { id: 10, src: '/images/playground.jpg', alt: 'Playground', category: 'Sports' },
  { id: 11, src: '/images/debate-competition.jpg', alt: 'Debate Competition', category: 'Events' },
  { id: 12, src: '/images/science-exhibition.jpg', alt: 'Science Exhibition', category: 'Events' },
];

export const facilities: Facility[] = [
  {
    id: 1,
    title: 'Smart Classrooms',
    description: 'Digital classrooms equipped with interactive smart boards, projectors, and audio-visual systems to make learning engaging and effective.',
    icon: 'Tv',
    image: '/images/classroom.jpg',
  },
  {
    id: 2,
    title: 'Science Laboratories',
    description: 'Well-equipped Physics, Chemistry, and Biology labs with modern equipment and safety measures for practical learning experiences.',
    icon: 'FlaskConical',
    image: '/images/science-lab.jpg',
  },
  {
    id: 3,
    title: 'Computer Labs',
    description: 'State-of-the-art computer labs with high-speed internet, latest software, and individual systems for each student.',
    icon: 'Monitor',
    image: '/images/computer-lab.jpg',
  },
  {
    id: 4,
    title: 'Library & Resource Center',
    description: 'A vast collection of books, journals, digital resources, and reading spaces to encourage reading habits and research skills.',
    icon: 'BookOpen',
    image: '/images/library.jpg',
  },
  {
    id: 5,
    title: 'Sports Facilities',
    description: 'Extensive sports infrastructure including cricket ground, football field, basketball court, and indoor sports complex.',
    icon: 'Trophy',
    image: '/images/sports-ground.jpg',
  },
  {
    id: 6,
    title: 'Transportation',
    description: 'Safe and comfortable school bus service with GPS tracking, trained drivers, and lady attendants for all routes.',
    icon: 'Bus',
    image: '/images/transport.jpg',
  },
  {
    id: 7,
    title: 'Medical Room',
    description: 'Well-equipped medical room with trained nurse, first-aid facilities, and tie-ups with nearby hospitals for emergencies.',
    icon: 'HeartPulse',
    image: '/images/medical-room.jpg',
  },
  {
    id: 8,
    title: 'Activity Rooms',
    description: 'Dedicated spaces for music, dance, art, and drama with specialized equipment and instruments.',
    icon: 'Music',
    image: '/images/music-class.jpg',
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    title: 'Sports & Games',
    description: 'Comprehensive sports program including cricket, football, basketball, badminton, and athletics with professional coaching.',
    icon: 'Medal',
    image: '/images/sports-ground.jpg',
  },
  {
    id: 2,
    title: 'Arts & Crafts',
    description: 'Creative expression through painting, sculpture, pottery, and various craft activities under expert guidance.',
    icon: 'Palette',
    image: '/images/art-class.jpg',
  },
  {
    id: 3,
    title: 'Music & Dance',
    description: 'Training in vocal and instrumental music along with classical and contemporary dance forms.',
    icon: 'Music',
    image: '/images/music-class.jpg',
  },
  {
    id: 4,
    title: 'Debate & Public Speaking',
    description: 'Regular debates, elocution competitions, and public speaking workshops to build communication skills.',
    icon: 'Mic',
    image: '/images/debate-competition.jpg',
  },
  {
    id: 5,
    title: 'Yoga & Meditation',
    description: 'Daily yoga sessions and mindfulness practices to promote physical and mental well-being.',
    icon: 'Sparkles',
    image: '/images/yoga-class.jpg',
  },
  {
    id: 6,
    title: 'Science Club',
    description: 'Hands-on experiments, science exhibitions, and innovation projects to foster scientific temper.',
    icon: 'Lightbulb',
    image: '/images/science-exhibition.jpg',
  },
];

export const managementTeam: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Chairman',
    image: '/images/placeholder-avatar.jpg',
    description: 'A visionary educationist with over 40 years of experience in the field of education.',
  },
  {
    id: 2,
    name: 'Mrs. Anita Sharma',
    position: 'Principal',
    image: '/images/placeholder-avatar.jpg',
    description: 'M.A., B.Ed. with 25 years of experience in school administration and educational leadership.',
  },
  {
    id: 3,
    name: 'Mr. Vikram Singh',
    position: 'Vice Principal',
    image: '/images/placeholder-avatar.jpg',
    description: 'M.Sc., B.Ed. with 20 years of teaching and administrative experience.',
  },
  {
    id: 4,
    name: 'Mrs. Priya Patel',
    position: 'Academic Coordinator',
    image: '/images/placeholder-avatar.jpg',
    description: 'M.A., B.Ed. with 18 years of experience in curriculum development and teacher training.',
  },
];

export const admissionInfo: AdmissionInfo[] = [
  { grade: 'Nursery', ageCriteria: '3+ years as on 31st March', documents: ['Birth Certificate', 'Address Proof', 'Photographs'], fees: '₹50,000/year' },
  { grade: 'LKG & UKG', ageCriteria: '4-5 years as on 31st March', documents: ['Birth Certificate', 'Previous Report Card', 'Address Proof'], fees: '₹55,000/year' },
  { grade: 'Class 1-5', ageCriteria: '6-10 years', documents: ['Birth Certificate', 'Previous Report Card', 'Transfer Certificate'], fees: '₹60,000/year' },
  { grade: 'Class 6-8', ageCriteria: '11-13 years', documents: ['Previous Report Card', 'Transfer Certificate', 'Character Certificate'], fees: '₹65,000/year' },
  { grade: 'Class 9-10', ageCriteria: '14-15 years', documents: ['Previous Report Card', 'Transfer Certificate', 'Birth Certificate'], fees: '₹70,000/year' },
  { grade: 'Class 11-12', ageCriteria: '16-17 years', documents: ['Class 10 Marksheet', 'Transfer Certificate', 'Character Certificate'], fees: '₹80,000/year' },
];

export const academicHighlights = [
  { year: '2023', class10: '98.5%', class12: '96.8%', toppers: '12' },
  { year: '2022', class10: '97.2%', class12: '95.5%', toppers: '10' },
  { year: '2021', class10: '96.8%', class12: '94.2%', toppers: '8' },
  { year: '2020', class10: '95.5%', class12: '93.8%', toppers: '9' },
];

export const subjectsByGrade = {
  'Nursery-V': ['English', 'Mathematics', 'Environmental Studies', 'Hindi', 'Art & Craft', 'Music', 'Physical Education'],
  'VI-VIII': ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'Sanskrit/French', 'Computer Science', 'Art & Craft', 'Music', 'Physical Education'],
  'IX-X': ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi/Sanskrit/French', 'Information Technology'],
  'XI-VIII': ['Physics', 'Chemistry', 'Mathematics/Biology', 'English', 'Optional Subject (Computer Science/Economics/Psychology)'],
};

export const events = [
  { id: 1, title: 'Annual Day Function', date: '2024-03-25', type: 'upcoming', description: 'Grand cultural celebration showcasing student talents' },
  { id: 2, title: 'Sports Day', date: '2024-02-15', type: 'past', description: 'Inter-house sports competition and athletic events' },
  { id: 3, title: 'Science Exhibition', date: '4-01-2024', type: 'upcoming', description: 'Display of innovative science projects by students' },
  { id: 4, title: 'Parent-Teacher Meeting', date: '2024-04-10', type: 'upcoming', description: 'Mid-term progress discussion with parents' },
  { id: 5, title: 'Summer Camp', date: '2024-05-01', type: 'past', description: 'Fun-filled activities and learning workshops' },
  { id: 6, title: 'Independence Day', date: '2024-08-15', type: 'upcoming', description: 'Patriotic celebrations and cultural programs' },
];
