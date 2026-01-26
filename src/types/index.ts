export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  relation: string;
  content: string;
  avatar?: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  type: 'notice' | 'event' | 'announcement';
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface Facility {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description?: string;
}

export interface AdmissionInfo {
  grade: string;
  ageCriteria: string;
  documents: string[];
  fees: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
  hours: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdmissionFormData {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  grade: string;
  dateOfBirth: string;
  address: string;
  message: string;
}
