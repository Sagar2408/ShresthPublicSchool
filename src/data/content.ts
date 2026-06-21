import type { NavItem, Announcement, GalleryImage, Facility, TeamMember, AdmissionInfo } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Chairman', href: '#chairman' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Academics', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  // { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Co-Curricular', href: '#cocurricular' },
  { label: 'News & Events', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const schoolInfo = {
  name: 'Shreshth Public School',
  tagline: 'Excellence in Education, Enlightenment in Life',
  board: 'CBSE',
  classes: 'Nursery to Class 5th',
  location: 'New Delhi, Delhi, India',
  phone: ['99580 50771'],
  email: 'Shreshthpublicscool@gmail.com',
  address: 'I-22a Harkesh Nagar near DDA Park New delhi-110020',
};

export const heroContent = {
  title: 'Welcome to Shreshth Public School',
  subtitle: 'Where Every Child Shines Bright',
  description: 'Nurturing young minds with quality education, holistic development, and values that build future leaders.',
  ctaPrimary: 'Admission Open',
  ctaSecondary: 'Contact Us',
};

export const aboutContent = {
  title: 'About Shreshth Public School',
  intro: 'Shreshth Public School, is a premier School committed to providing quality education that nurtures academic excellence, character development, and lifelong learning.',
  history: 'Founded with a vision to create a learning environment that fosters intellectual curiosity and moral values, Shreshth Public School has grown from a small institution to one of the most respected schools in the region. Over the years, we have consistently maintained high academic standards while embracing innovative teaching methodologies.',
  stats: [
    { value: '8+', label: 'Years of Excellence' },
    { value: '1000+', label: 'Students Graduated' },
    { value: '99%', label: 'Board Results' },
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


export const announcements: Announcement[] = [
  { id: 1, title: 'Parent Teacher Meeting scheduled on 11th July 2026 (8:30 AM to 11:30 AM)', date: '2026-07-11', type: 'event' },
];

export const galleryImages: GalleryImage[] = [
  { id: 1,  src: '/photos/K1.jpeg',        alt: 'Students in Class',        category: 'Students' },
  { id: 2,  src: '/photos/K2.jpeg',        alt: 'Classroom Activity',        category: 'Students' },
  { id: 3,  src: '/photos/K3.jpeg',        alt: 'Students Learning',         category: 'Students' },
  { id: 4,  src: '/photos/libraryphoto.jpg', alt: 'Library',                   category: 'Facilities' },
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
  { id: 16, src: '/photos/computerlabphoto.jpg',  alt: 'Computer Lab',         category: 'Facilities' },
  { id: 17, src: '/photos/teachers1.jpeg', alt: 'Our Faculty',               category: 'Faculty' },
  { id: 18, src: '/photos/teachers2.jpeg', alt: 'Teaching Staff',            category: 'Faculty' },
  { id: 19, src: '/photos/sciencelab.jpg',   alt: 'Science Lab',              category: 'Facilities' },
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
];


export const subjectsByGrade = {
  'Nursery-V': ['English', 'Mathematics', 'Environmental Studies', 'Hindi', 'Art & Craft', 'Music', 'Physical Education'],
};

export const events = [
  { id: 1, title: 'Parent Teacher Meeting', date: '2026-07-11', type: 'upcoming', description: 'Parent Teacher Meeting scheduled on 11th July 2026 from 8:30 AM to 11:30 AM. All parents are requested to attend and meet the respective class teachers to discuss student progress and academic planning.' },
];
