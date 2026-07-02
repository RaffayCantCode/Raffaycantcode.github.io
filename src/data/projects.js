export const projects = [
  {
    id: "nerdvault",
    title: "NerdVault Media Platform",
    type: "Full Stack Web Platform",
    image: "/src/assets/nerdvault.png",
    shortDescription: "A media discovery platform for movies, TV shows, anime, and manga.",
    description: "A media discovery platform for movies, TV shows, anime, and manga with search, watchlists, trending content, and personalized browsing. This was a passion project and is not affiliated with any course.",
    contributions: [
      "Built responsive discovery and detail views for entertainment content.",
      "Implemented watchlists, search flows, and user-focused browsing features.",
      "Improved performance and interface responsiveness for a smoother experience."
    ],
    tags: ["JavaScript", "API Integration", "Responsive UI"],
    links: [
      { text: "Open Live Site", url: "https://nerdvault.site", primary: true }
    ],
    details: "Nerdvault is my passion project, a labor of love outside of any academic coursework. I wanted to create a sleek and performant media discovery platform to easily find information on movies, TV shows, anime, and manga. <span class='highlight-text'>It challenged me to learn about third-party API integration and optimizing performance</span> for dynamic content."
  },
  {
    id: "zombie-shooter",
    title: "Nakht der Un Utoten",
    type: "Game Development",
    image: "/src/assets/zombie-shooter.png",
    video: "/src/assets/zombie-gameplay.mp4",
    videoSpeed: 3.0, // <-- You can change this number to speed up or slow down the video! (3.0 = 3x speed)
    shortDescription: "A zombie survival prototype built in Unreal Engine.",
    description: "A zombie survival prototype built in Unreal Engine with combat systems, enemy behavior, health mechanics, and player interactions. Created for my Game Design Principle course.",
    contributions: [
      "Designed and built the entire game map in Unreal Engine.",
      "Programmed the artificial intelligence (AI) behavior for the zombies.",
      "Implemented core FPS combat mechanics and player feedback loops."
    ],
    tags: ["Unreal Engine 5", "C++", "Gameplay Systems", "AI"],
    links: [
      { text: "See Videos & Documentation", url: "https://drive.google.com/drive/u/0/folders/1bL4pwMdt9cHrfYgn4VeDagw4dz4mYtwg", primary: false }
    ],
    details: "Developed as a project for the Game Design Principle course, 'Nakht der Un Utoten' allowed me to dive deep into Unreal Engine. <span class='highlight-text'>My main contributions were meticulously crafting the game map to ensure good flow and tension, and coding the AI that drives the zombies' pursuit and attack behaviors.</span>"
  },
  {
    id: "course-registration",
    title: "Course Registration System",
    type: "Web Application",
    image: "/src/assets/course_registration.png",
    shortDescription: "A university course registration platform.",
    description: "A university course registration platform with student and admin dashboards, authentication, enrollment management, waitlists, and filtering.",
    contributions: [
      "Created the entire website frontend and user interface.",
      "Handled the SQL database architecture and queries for both student and teacher portals.",
      "Built course filtering, enrollment, and waitlist workflows."
    ],
    tags: ["SQL", "MySQL", "Authentication", "Full Stack"],
    links: [
      { text: "See Project Details", url: "https://drive.google.com/drive/folders/1V8VI07qtOlmctbhiHLZIsTtu9eLaUB6m?usp=sharing", primary: false }
    ],
    details: "This project required a robust backend to handle concurrent enrollments and strict constraints. <span class='highlight-text'>I took charge of creating the website itself as well as the complete SQL handling</span>, ensuring secure and efficient data retrieval for both students managing their courses and teachers organizing their classes."
  },
  {
    id: "smartwrite",
    title: "SmartWrite AI Assistant",
    type: "Desktop Application",
    image: "/src/assets/smartwrite.png",
    shortDescription: "An AI writing assistant for real-time improvement.",
    description: "A desktop assistant for real-time writing improvement with typo detection, grammar correction, and short writing suggestions.",
    contributions: [
      "Created a simple ruleset for typo and grammar detection.",
      "Implemented a learning mechanism where the assistant improves from corrections.",
      "Designed a lightweight desktop UI that works alongside other software."
    ],
    tags: ["Python", "AI Tools", "Desktop UI"],
    links: [
      { text: "View GitHub Repository", url: "https://github.com/RaffayCantCode/SmartWrite-AI-", primary: false }
    ],
    details: "SmartWrite was an exploration into practical AI. Rather than relying on massive language models, I built it using a simple but effective ruleset. <span class='highlight-text'>The core innovation was implementing a system where the application detects its own errors or user overrides, learning from them</span> to continuously improve its suggestions over time."
  },
  {
    id: "zoltrak-tournament",
    title: "Zoltrak Tournament",
    type: "Web Application",
    image: "/src/assets/zoltrak.png",
    shortDescription: "A tournament organization and bracket management platform.",
    description: "A comprehensive tournament website created for my Web Application course.",
    contributions: [
      "Designed and developed the entire application solo.",
      "Implemented a sleek, gaming-focused user interface.",
      "Built the tournament bracket logic and user registration systems."
    ],
    tags: ["React", "Web App", "UI/UX", "Solo Project"],
    links: [
      { text: "Visit Zoltrak Tournament", url: "https://zoltraktournament.netlify.app/", primary: true }
    ],
    details: "Zoltrak Tournament is a solo project developed for my Web Application course. <span class='highlight-text'>I was responsible for the entire stack, from the initial concept and gaming-oriented design to the complex bracket management logic.</span> It stands as a testament to my ability to deliver a complete, polished web application independently."
  }
];
