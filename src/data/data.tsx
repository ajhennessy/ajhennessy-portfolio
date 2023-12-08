import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import profilepic from '../images/photo.jpg';
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
import testimonialImage from '../images/testimonial.webp';
import heroImage from '../images/updated-header-background.webp';
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'AJ Hennessy',
  description: 'Welcome to my website.',
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

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm AJ Hennessy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Kansas City-based <strong className="text-stone-100">Software Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">Burns & McDonnell</strong>, where I focus on developing robust and scalable
        solutions for everyday problems. Additionally, I am a recent graduate from the <strong>Georgia Institute of Technology</strong>, where
        I earned a <strong>Master's degree in Computer Science</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy taking my dog, <strong>Jinx</strong>, to explore Kansas City to try new foods and see
        new places.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `As a Software Developer at Burns & Mac for the past two years, 
                I have played a key role in building the technology stack from the ground up. This involved 
                developing tools that not only enhance the productivity of 800 staff members 
                but are also scalable to meet the needs of over 12,000 staff members. 
                My academic journey at Georgia Tech was specialized in Computing Systems, 
                with a strong emphasis on Artificial Intelligence through my elective coursework.`,
  aboutItems: [
    {label: 'Location', text: 'Kansas City, MO', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Graduate Study', text: 'Georgia Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Burns & McDonnell', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'HTML/CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'SQL',
        level: 6,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Azure Services',
        level: 8,
      },
      {
        name: 'Azure DevOps',
        level: 9,
      },
      {
        name: 'Docker',
        level: 6,
      },
    ],
  },
  {
    name: 'Other Skills',
    skills: [
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'C#',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'React',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
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
    title: 'Master of Science in Computer Science',
    content: (
      <p>
        <strong>GPA:</strong> 3.8
        <br />
        <strong>Languages:</strong> Python, C++, Java
        <br />
        <strong>Relevant Coursework:</strong> Graduate Algorithms, Knowledge Based Artificial Intelligence (AI), Game
        AI, Network Security, Software Architecture & Design, Software Analysis & Test
      </p>
    ),
  },
  {
    date: 'Fall 2017 - Spring 2021',
    location: 'Wichita State University',
    title: 'Bachelor of Science in Computer Science',
    content: <p></p>,
  },
  {
    date: 'Fall 2017 - Spring 2021',
    location: 'Wichita State University',
    title: 'Mathematics Minor',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan. 2022 - Current',
    location: 'Burns & McDonnell',
    title: 'Software Developer',
    content: (
      <ul className="list-disc ml-4">
        <li>
          Boosted workflow efficiency by developing web applications, achieving up to a 65% reduction in process times
          for key operations
        </li>
        <li>
          Designed and deployed full-stack solutions utilizing Angular 14 and a Python/NodeJS-based backend, which was enhanced by
          Docker for consistent, environment-agnostic deployments
        </li>
        <li>
          Managed databases and storage solutions using Azure Cosmos (transitioned from SQL Server) and Azure Blob
          storage, ensuring high availability and scalability
        </li>
        <li>
          Collaborated on the orchestration of development, testing, and production environments across Azure DevOps and
          Azure Services, facilitating seamless change management and zerodowntime deployments to production
        </li>
        <li>
          Implemented and refined the CI/CD pipeline in Azure DevOps, accelerating deployment processes by 20% and
          significantly reducing manual intervention
        </li>
        <li>
          Developed an automated testing framework as part of the CI/CD pipeline, increasing code coverage by 82% and
          substantially improving code quality
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2020 - May 2021',
    location: 'US Air Force',
    title: 'Software Developer (Senior Project)',
    content: (
      <ul className="list-disc ml-4">
        <li>
          Developed an advanced autonomous navigation system utilizing GPS and LIDAR technology to enhance terrain
          adaptability for an all-terrain robot using C++ and ROS
        </li>
        <li>
          Utilized simulation tools to rigorously test and validate code, ensuring high reliability and performance
          under diverse operational conditions
        </li>
        <li>
          Managed version control with Git, facilitating effective collaboration with team members and maintaining a
          robust codebase across multiple development phases
        </li>
      </ul>
    ),
  },
  {
    date: 'Sept. 2019 - Feb. 2020',
    location: 'Keycentrix',
    title: 'Software Developer Intern',
    content: (
      <ul className="list-disc ml-4">
        <li>
          Developed and implemented development tools and unit tests for C# applications, enhancing code coverage by 16%
        </li>
        <li>
          Utilized JIRA for managing and tracking the completion of feature requests and bug fixes, improving issue
          resolution efficiency and team agility
        </li>
      </ul>
    ),
  },
];

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
  headerText: 'Get in touch.',
  description:
    "Interested in collaborating or learning more? Reach out or connect with me on LinkedIn or GitHub. Let's talk!",
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'ajhennessy',
      href: 'https://www.linkedin.com/in/aj-hennessy',
    },
    {
      type: ContactType.Github,
      text: 'ajhennessy',
      href: 'https://github.com/ajhennessy',
    },
    {
      type: ContactType.Location,
      text: 'Kansas City, MO',
      href: 'https://www.google.com/maps/@39.0393519,-94.5385065,12z',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aj-hennessy'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ajhennessy'},
];
