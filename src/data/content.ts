import type { NavItem, Testimonial, Announcement, GalleryImage, Facility, TeamMember, AdmissionInfo } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Principal', href: '#principal' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  // { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'News & Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const schoolInfo = {
  name: 'Shresth Public School',
  tagline: 'Excellence in Education, Enlightenment in Life',
  board: 'CBSE',
  classes: 'Nursery to Class 5th',
  location: 'New Delhi, Delhi, India',
  phone: ['99580 50771'],
  email: 'info@shresthpublicschool.edu.in',
  address: '1, Vishwakarma marg, Harkesh Nagar, Okhla Industrial Estate, New Delhi, Delhi 110020',
};

export const heroContent = {
  title: 'Welcome to Shresth Public School',
  subtitle: 'Where Every Child Shines Bright',
  description: 'Nurturing young minds with quality education, holistic development, and values that build future leaders.',
  ctaPrimary: 'Admission Open',
  ctaSecondary: 'Contact Us',
};

export const aboutContent = {
  title: 'About Shresth Public School',
  intro: 'Shresth Public School, is a premier educational institution committed to providing quality education that nurtures academic excellence, character development, and lifelong learning.',
  history: 'Founded with a vision to create a learning environment that fosters intellectual curiosity and moral values, Shresth Public School has grown from a small institution to one of the most respected schools in the region. Over the years, we have consistently maintained high academic standards while embracing innovative teaching methodologies.',
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


export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mrs. Priya Sharma',
    relation: 'Parent of Aarav Sharma, Class 8',
    content: 'Shresth Public School has transformed my child\'s life. The dedicated teachers and excellent infrastructure have helped Aarav excel in both academics and extracurricular activities. The school\'s focus on values and character building is truly commendable.',
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
    content: 'Being a student of Shresth Public School for the past 12 years, I can confidently say this is the best institution for holistic education. The teachers are not just educators but mentors who guide us at every step.',
  },
  {
    id: 4,
    name: 'Mrs. Kavita Patel',
    relation: 'Parent of Vihaan Patel, Class 5',
    content: 'The safety measures and caring environment at Shresth Public School give me peace of mind. My son loves going to school every day and has developed a genuine love for learning. Highly recommended!',
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
  { id: 1,  src: '/photos/K1.jpeg',        alt: 'Students in Class',        category: 'Students' },
  { id: 2,  src: '/photos/K2.jpeg',        alt: 'Classroom Activity',        category: 'Students' },
  { id: 3,  src: '/photos/K3.jpeg',        alt: 'Students Learning',         category: 'Students' },
  { id: 4,  src: '/photos/K4.jpeg',        alt: 'Students at Work',          category: 'Students' },
  { id: 5,  src: '/photos/K5.jpeg',        alt: 'Classroom Engagement',      category: 'Students' },
  { id: 6,  src: '/photos/k6.jpeg',        alt: 'Students in Session',       category: 'Students' },
  { id: 7,  src: '/photos/k7.jpeg',        alt: 'Learning Together',         category: 'Students' },
  { id: 8,  src: '/photos/k8.jpeg',        alt: 'Class in Progress',         category: 'Students' },
  { id: 9,  src: '/photos/K9.jpeg',        alt: 'Students at School',        category: 'Students' },
  { id: 10, src: '/photos/K10.jpeg',       alt: 'School Activity',           category: 'Students' },
  { id: 11, src: '/photos/k11.jpeg',       alt: 'Classroom Session',         category: 'Students' },
  { id: 12, src: '/photos/k12.jpeg',       alt: 'Students Together',         category: 'Students' },
  { id: 13, src: '/photos/N1.jpeg',        alt: 'Nursery Class',             category: 'Campus' },
  { id: 14, src: '/photos/N2.jpeg',        alt: 'Young Learners',            category: 'Campus' },
  { id: 15, src: '/photos/N3.jpeg',        alt: 'Early Childhood',           category: 'Campus' },
  { id: 16, src: '/photos/building1.jpeg', alt: 'School Building',           category: 'Campus' },
  { id: 17, src: '/photos/building2.jpeg', alt: 'School Campus',             category: 'Campus' },
  { id: 18, src: '/photos/building3.jpeg', alt: 'Campus View',               category: 'Campus' },
  { id: 19, src: '/photos/building4.jpeg', alt: 'School Grounds',            category: 'Campus' },
  { id: 20, src: '/photos/c1.jpeg',        alt: 'Classroom',                 category: 'Campus' },
  { id: 21, src: '/photos/PrincipalPhoto.jpeg', alt: 'School Life',           category: 'Campus' },
  { id: 22, src: '/photos/pk.jpeg',        alt: 'Students Playing',          category: 'Students' },
  { id: 23, src: '/photos/teachers1.jpeg', alt: 'Our Faculty',               category: 'Faculty' },
  { id: 24, src: '/photos/teachers2.jpeg', alt: 'Teaching Staff',            category: 'Faculty' },
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


export const subjectsByGrade = {
  'Nursery-V': ['English', 'Mathematics', 'Environmental Studies', 'Hindi', 'Art & Craft', 'Music', 'Physical Education'],
  'VI-VIII': ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'Sanskrit/French', 'Computer Science', 'Art & Craft', 'Music', 'Physical Education'],
  'IX-X': ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi/Sanskrit/French', 'Information Technology'],
  'XI-XII': ['Physics', 'Chemistry', 'Mathematics/Biology', 'English', 'Optional Subject (Computer Science/Economics/Psychology)'],
};

export const events = [
  { id: 1, title: 'Annual Day Function', date: '2024-03-25', type: 'upcoming', description: 'Grand cultural celebration showcasing student talents' },
  { id: 2, title: 'Sports Day', date: '2024-02-15', type: 'past', description: 'Inter-house sports competition and athletic events' },
  { id: 3, title: 'Science Exhibition', date: '4-01-2024', type: 'upcoming', description: 'Display of innovative science projects by students' },
  { id: 4, title: 'Parent-Teacher Meeting', date: '2024-04-10', type: 'upcoming', description: 'Mid-term progress discussion with parents' },
  { id: 5, title: 'Summer Camp', date: '2024-05-01', type: 'past', description: 'Fun-filled activities and learning workshops' },
  { id: 6, title: 'Independence Day', date: '2024-08-15', type: 'upcoming', description: 'Patriotic celebrations and cultural programs' },
];
