export type Section = {
    text: string,
    href: string,
    description?: string,
    hoverColor?: string,
    borderColor?: string
}

export const sectionManager: Section[] = [
    {
        text: "Data Structures and Algorithms (DSA)",
        href: "blogs/DSA",
        description: "Explore fundamental and advanced data structures and algorithms with code examples, explanations, and practice problems.",
        hoverColor: "hover:bg-cyan-100"
    },
    {
        text: "System Design Concepts",
        href: "blogs/System-Design",
        description: "Understand system design basics, common patterns, high-level architectures, and case studies for scalable systems.",
        hoverColor: "hover:bg-green-100"
    },
    {
        text: "Cloud ",
        href: "blogs/Cloud",
        description: "Dive into cloud computing services, providers (AWS, Azure, GCP), and real-world cloud architecture examples.",
        hoverColor: "hover:bg-blue-100"

    },
    {
        text: "Java and Spring Framework",
        href: "blogs/Java-spring",
        description: "Learn Java programming and build enterprise-level applications using the Spring framework with best practices.",
        hoverColor: "hover:bg-red-100"
    },
    {
        text: "Database Concepts",
        href: "blogs/Database",
        description: "Master relational and NoSQL databases, query writing, indexing, transactions, and performance optimization.",
        hoverColor: "hover:bg-yellow-100"
    },
    {
        text: "DevOps Tools & pipelines",
        href: "blogs/Devops",
        description: "Understand DevOps lifecycle, automation tools, CI/CD pipelines, Docker, Kubernetes, and modern deployment workflows.",
        hoverColor: "hover:bg-violet-100"
    },
    {
        text: "Cybersecurity & Security Practices",
        href: "blogs/security",
        description: "Learn about common security threats, best practices, authentication, encryption, and web application security.",
        hoverColor: "hover:bg-fuchsia-100"
    },
    {
        text: "JavaScript for Web",
        href: "blogs/javascript",
        description: "Master the JavaScript language with tutorials on ES6+, DOM manipulation, asynchronous programming, and frameworks.",
        hoverColor: "hover:bg-slate-200"
    }
];