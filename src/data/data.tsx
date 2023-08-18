import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  //FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import {resumeData} from './resumeData';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Austin Warnock | Software Developer',
  description: "Hello World! Welcome to my personal website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm ${resumeData.main.name}.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a {resumeData.main.address.city} based <strong className="text-stone-100">{resumeData.main.occupation}</strong>. {resumeData.main.description}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        {resumeData.main.hobbies}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: resumeData.main.bio,
  aboutItems: [
    {label: 'Location', text: 'Kansas City, MO', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Interests', text: 'Music, Home Labbing, Camping', Icon: SparklesIcon},
    {label: 'Undergraduate Study', text: 'University of Oklahoma', Icon: AcademicCapIcon},
    {label: 'Graduate Study', text: ' Georgia Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Burns & McDonnell', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = resumeData.resume.skills;

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Fall 2021 - Fall 2023',
    location: 'Georgia Institute of Technology',
    title: 'Master of Science in Computer Science - Specialization in Machine Learning',
    content: <p>
      <strong>Relevant Courses:</strong> Machine Learning, Data & Visual Analytics, Machine Learning for Trading, Computer Networks, Introduction to Information Security
    </p>,
  },
  {
    date: 'Fall 2017 - Sping 2021',
    location: 'The University of Oklahoma',
    title: 'Bachelor of Science in Computer Science',
    content: <p><strong>Relevant Courses: </strong>Data Structures, Discrete Math, Data Networks, Software Engineering, Human Computer Interaction, Database Management Systems</p>,
  },
  {
    date: 'Fall 2017 - Sping 2021',
    location: 'The University of Oklahoma',
    title: 'Bachelor of Arts in Music',
    content: <p><strong>Relevant Courses: </strong>Music Theory, Music History, Musicology</p>,
  },
  {
    date: 'Fall 2017 - Sping 2021',
    location: 'The University of Oklahoma',
    title: 'Minor Mathematics',
    content: <p><strong>Relevant Courses: </strong>Calculus I-III, Linear Algebra, Differential Equations, Graph Theory</p>,
  },
];

export const experience: TimelineItem[] = resumeData.resume.work.map((item) => (
  {
    date: item.years,
    location: item.company,
    title: item.title,
    content: (
      <p style={{whiteSpace: 'pre-line'}}>
        {item.description.join("\n\n")}
      </p>
    )
  }
  ));

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Let's talk",
  description: 'Whether you have a question or just want to say hi, I will try my best to get back to you!',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@austinwarnock.tech',
      href: 'mailto:contact@austinwarnock.tech',
    },
    {
      type: ContactType.Location,
      text: 'Kansas City, MO',
      href: 'https://goo.gl/maps/PuZ4ivcXuuAuBSUM9',
    },
    {
      type: ContactType.Github,
      text: 'austinwarnock',
      href: 'https://github.com/austinwarnock',
    },
  ],
};

/**
 * Leadership and Awards section
 */
export const awards: TimelineItem[] = resumeData.resume.awards
export const leadership: TimelineItem[] = resumeData.resume.leadership

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/austinwarnock'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/austin-warnock/'},
];
