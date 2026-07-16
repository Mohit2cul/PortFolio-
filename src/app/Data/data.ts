export interface Project {
    id: number;
    title: string;
    description: string;
    liveLink?: string;
    githubLink: string;
    technologies?: string[];
    learnings?: string[];
    initiator?: {
        name: string;
        link: string;
    };
}

export interface OpenSourceContribution {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface Writings {
    title: string;
    link: string;
    Date: string;
}

export const skillsData: string[] = [
    "HTML5", "CSS3", "Tailwind CSS",
    "JavaScript", "three.js", "shery.js",
    "React","Scroll Trigger", "GSAP",
    "React Router", "React Hook Form",
    "Git", "GitHub", "GitHub Actions", 
    "Vercel", "NPM", "Node.js", "Vite",
    "C","DSA", "Algorithms",
    "Python", "MS Excel",
    "PostgreSQL"
];

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Lazarev agency clone",
        description: "A clone of the Lazarev agency website, built using HTML5 CSS3 and JavaScript Gsap Scroll Trigger DOM ",
        technologies: ["JavaScript", "CSS3", "HTML5", "GSAP", "Scroll Trigger", "DOM"],
        learnings: [
            "Scroll Trigger",
            "DOM",
            "GSAP",
            "JavaScript",
        ],
        liveLink: "https://mohit2cul.github.io/Lazarev.Agency-clone/",
        githubLink: "https://github.com/Mohit2cul/Lazarev.Agency-clone"
    },
    {
        id: 2,
        title: "Obys Agency Clone",
        description: "A clone of the Obys agency website, built using HTML5 CSS3 and JavaScript Gsap Scroll Trigger DOM ",
        liveLink: "https://mohit2cul.github.io/obys-agency-clone/",
        githubLink: "https://github.com/Mohit2cul/obys-agency-clone",
        technologies: ["JavaScript", "CSS3", "HTML5", "GSAP", "Scroll Trigger", "DOM"],
        learnings: [
            "Scroll Trigger",
            "DOM",
            "GSAP",
            "JavaScript",
        ],
    },
    {
        id: 3,
        title: "Apple Vision Pro Clone",
        description: "A clone of the Apple Vision Pro website, built using HTML5 CSS3 and JavaScript Gsap Scroll Trigger DOM ",
        liveLink: "https://mohit2cul.github.io/Apple-Vision-Pro/",
        githubLink: "https://github.com/Mohit2cul/Apple-Vision-Pro",
        learnings: [
            
        ],
        technologies: ["reactJs", "Tailwind Css", "postgreSQl", "HonoJs", "prisma"],
    },
    {
        id: 4,
        title: "Instagram Page USing React.js",
        description: "A clone of the Instagram page, built using React.js,Tailwind CSS",
        githubLink: "https://github.com/Mohit2cul/instagramCloneReact",
        learnings: [
            "React.js",
            "Tailwind CSS",
            "useState",
        ],
        technologies: [
            "React.js",
            "Tailwind CSS",
        ],
    },
    {
        id: 5,
        title: "A basic E-commerce website",
        description: "A basic E-commerce website, built using React.js,Tailwind CSS",
        githubLink: "https://github.com/Mohit2cul/E-commerce",
        liveLink: "https://e-commerce-phi-lac.vercel.app/",
        learnings: [
            "React.js",
            "Tailwind CSS",
            "useState",
        ],
        technologies: [
            "React.js",
            "Tailwind CSS",
        ],
    },
];

export const OpenSourceContributions: OpenSourceContribution[] = [
    {
        id: 1,
        title: "SWOC/Leetcode-Journal",
        description: "Social Winter Of Code 2025 project.",
        image: "/githubLink.svg",
        link: "https://github.com/hanuchaudhary/Leetcode-Journal"
    },
];

export const writingsData: Writings[] = [
    {
        title: "Setting up Tailwind CSS in a dJango project on windows",
        link: "https://medium.com/@kushchaudharyog/setting-up-tailwind-css-in-a-django-project-on-windows-ffe0d2132cdc",
        Date: "Dec 26, 2024",
    },
    {
        title: "How to integrate RazorPay in Next.js 14/15 with easy steps.",
        link: "https://medium.com/@kushchaudharyog/how-to-integrate-razorpay-in-next-js-14-15-with-easy-steps-f2d80772009c",
        Date: "Jan 24, 2025",
    },
];

export const collabProjectsData: Project[] = [
    {
        id: 1,
        title: "Omaju",
        description: "A microservice-based AI orchestration hub facilitating text chat, VQA, and speech conversations. It manages multiple sub-services that communicate asynchronously to process user media inputs.",
        githubLink: "https://github.com/AdityaKatyal8899/Omaju",
        liveLink: "https://omaju-onboarding.vercel.app/",
        technologies: ["FastAPI", "Next.js", "MongoDB", "Tailwind CSS", "React"],
        learnings: [
            "Image generation model study",
            "How text based Architecture works",
            "How VQA and computer vision helps in Image recogniyion and pattern identification"
        ],
        initiator: {
            name: "Aditya Katyal",
            link: "https://www.adityakatyal.online/"
        }
    },
    {
        id: 2,
        title: "TempShare",
        description: "Secure file sharing platform with automatic expiry policies and dynamic access tokens. Files are automatically expunged from the server and CDN when the expiration time expires.",
        githubLink: "https://github.com/AdityaKatyal8899/temp-front",
        liveLink: "https://tempshare-ten.vercel.app/",
        technologies: ["Next.js", "Flask", "Cloudinary", "TypeScript", "Tailwind CSS"],
        learnings: [
            "Learned Cloud Based Retrival",
            "Auto Expiriation Time Triggering Methods"
        ],
        initiator: {
            name: "Aditya Katyal",
            link: "https://www.adityakatyal.online/"
        }
    }
];

