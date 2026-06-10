import { siteConfig } from "@/data/siteConfig";

export type ContentSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ContentPage = {
  title: string;
  description: string;
  seoTitle?: string;
  keywords?: string[];
  schemaType?: "AboutPage" | "Article" | "Blog" | "ContactPage" | "FAQPage" | "HowTo" | "PrivacyPolicy" | "TermsOfService" | "WebPage";
  eyebrow?: string;
  updated?: string;
  intro: string;
  sections: ContentSection[];
};

const gameName = siteConfig.name;
const contact = siteConfig.contactEmail;
const updated = "February 14, 2026";

export const pageContent = {
  about: {
    title: "About JigSolitaire",
    seoTitle: `About Us - ${gameName}`,
    description: `Learn about ${gameName}, our mission to create the ultimate free online puzzle experience, and the team behind the game.`,
    keywords: ["about JigSolitaire", "puzzle game team", "who made JigSolitaire"],
    schemaType: "AboutPage",
    intro: "Our story, mission, and the passion behind every puzzle piece.",
    sections: [
      {
        heading: "Our Story",
        body: "JigSolitaire was born from a simple idea: what if the relaxing satisfaction of jigsaw puzzles could be combined with the strategic tile-swapping of solitaire? The result is a puzzle experience that is instantly intuitive yet endlessly engaging.",
      },
      {
        heading: "Our Mission",
        body: "We believe puzzle games are more than entertainment. They can build cognitive skills, improve focus, and create moments of calm in a busy world. Our mission is to make high-quality puzzle experiences freely available to everyone, everywhere.",
      },
      {
        heading: "What Makes Us Different",
        body: "Unlike traditional jigsaw apps, JigSolitaire uses a unique tile-swapping mechanic. You work inside a clean grid, drag tiles to swap their positions, and watch correctly placed neighbors merge into groups that move together.",
      },
      {
        heading: "Key Features",
        items: [
          "Seven beautiful categories: Animals, Nature, Cities, Art, Food, Space, and Fantasy.",
          "Handcrafted levels with progressive grid difficulty.",
          "Smart tile merging when adjacent tiles are correctly placed.",
          "Smooth drag-and-drop play with satisfying visual feedback.",
          "No downloads required; play instantly in a modern browser.",
          "Free access with no account required.",
        ],
      },
      {
        heading: "Our Values",
        items: [
          "Accessibility first: clear visuals, responsive layouts, and intuitive controls.",
          "Privacy matters: no account is required and we are transparent about data and cookies.",
          "Quality over quantity: each puzzle is selected, tested, and refined for a better solve.",
        ],
      },
      {
        heading: "Get In Touch",
        body: "We love hearing from players. Send feedback, suggestions, bug reports, or partnership notes through the Contact page so we can keep improving JigSolitaire.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    seoTitle: `Accessibility Statement | ${gameName}`,
    description: `${gameName} is committed to digital accessibility. Learn about our efforts to make our puzzle game available to everyone.`,
    keywords: ["JigSolitaire accessibility", "accessible puzzle game", "web accessibility statement"],
    updated,
    intro: "Our commitment to making JigSolitaire accessible to everyone.",
    sections: [
      {
        heading: "Our Commitment",
        body: "JigSolitaire is committed to ensuring digital accessibility for people with disabilities. We strive to conform to WCAG 2.1 Level AA and continually improve the user experience for everyone.",
      },
      {
        heading: "Measures We Have Taken",
        items: [
          "Semantic HTML for clearer document structure.",
          "Keyboard access for website navigation and interactive elements.",
          "Strong color contrast for readable text and controls.",
          "Descriptive alternative text for images where appropriate.",
          "Responsive layouts that support different screen sizes and zoom levels.",
          "Clear language and consistent navigation patterns.",
        ],
      },
      {
        heading: "Game Accessibility",
        items: [
          "We are exploring high-contrast options for the game grid.",
          "We are working toward keyboard-only controls for tile swapping.",
          "We plan to improve game event feedback for assistive technologies.",
          "We are reviewing animation speed and sound feedback options.",
        ],
      },
      {
        heading: "Known Limitations",
        items: [
          "The puzzle game relies on visual perception of images and spatial relationships.",
          "Drag-and-drop interactions may be difficult for some motor-impaired players.",
          "Third-party content, including ads, may not always meet our accessibility standards.",
        ],
      },
      {
        heading: "Feedback",
        body: `If you encounter an accessibility barrier, contact us at ${contact}. We try to respond to accessibility feedback within 5 business days.`,
      },
    ],
  },
  blog: {
    title: "Blog",
    seoTitle: `Blog - Updates and Design Notes | ${gameName}`,
    description: `Read updates, design notes, strategy articles, release posts, and publishing ideas for a customizable browser game website.`,
    keywords: ["game blog", "browser game updates", "game design notes"],
    schemaType: "Blog",
    eyebrow: "Updates",
    intro: "Use this page as a simple editorial hub for release notes, design posts, strategy guides, event updates, and behind-the-scenes articles.",
    sections: [
      {
        heading: "Suggested post types",
        items: [
          "Game updates and changelogs.",
          "Beginner tips and advanced strategy articles.",
          "Seasonal events, new modes, or content drops.",
          "Design notes about rules, scoring, levels, and accessibility.",
        ],
      },
      {
        heading: "Template note",
        body: "When you add real posts, this page can become a collection index powered by Astro content collections or any CMS you prefer.",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    seoTitle: `Contact ${gameName}`,
    description: `Get in touch with the ${gameName} team for support, feedback, partnerships, accessibility concerns, or privacy questions.`,
    keywords: ["contact JigSolitaire", "JigSolitaire support", "puzzle game contact"],
    schemaType: "ContactPage",
    intro: "Have a question, suggestion, partnership idea, or policy concern? We would love to hear from you.",
    sections: [
      {
        heading: "Get In Touch",
        body: "We value every message from our community. Whether you are reporting a bug, suggesting a feature, asking about business opportunities, or following up on privacy and accessibility concerns, we aim to make it easy to reach a real person.",
      },
      {
        heading: "Contact Details",
        items: [
          `Email: ${contact}`,
          "Response time: usually within 48 hours.",
          "Availability: players worldwide.",
        ],
      },
      {
        heading: "What to Include",
        items: [
          "The page or game level you were using.",
          "Your browser, device, and operating system.",
          "A short description of what happened and what you expected.",
          "Screenshots or reproduction steps if you are reporting a bug.",
        ],
      },
      {
        heading: "Frequently Asked",
        body: "Before reaching out, you may find your answer in the FAQ page, where we collect common gameplay, compatibility, and account-free usage questions.",
      },
      {
        heading: "Support Scope",
        body: "We can help with gameplay issues, broken pages, loading problems, accessibility feedback, privacy questions, and reports about confusing content. If you are contacting us about a specific puzzle, include the category name and level title so we can reproduce the issue faster.",
      },
      {
        heading: "Advertising and Partnership Messages",
        body: "For advertising, publishing, or partnership questions, include the organization name, website, proposal summary, and the page or placement you are asking about. We review these messages carefully because the site is designed to stay family-friendly, useful, and aligned with the puzzle experience.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    seoTitle: `Cookie Policy | ${gameName}`,
    description: `Learn about the cookies ${gameName} uses, why we use them, and how to manage your cookie preferences.`,
    keywords: ["JigSolitaire cookies", "cookie policy", "cookie preferences", "tracking cookies"],
    updated,
    intro: "This Cookie Policy explains what cookies are, how JigSolitaire uses them, and how you can control your cookie preferences.",
    sections: [
      {
        heading: "What Are Cookies?",
        body: "Cookies are small text files placed on your device when you visit a website. They help websites work efficiently, remember basic choices, and provide information to site owners.",
      },
      {
        heading: "Essential Cookies",
        items: [
          "Session management as you navigate between pages.",
          "Security protections against abuse and technical threats.",
          "Core website functionality required for the site to work properly.",
        ],
      },
      {
        heading: "Analytics Cookies",
        body: "We currently do not use tracking or analytics cookies such as Google Analytics on JigSolitaire.",
      },
      {
        heading: "Advertising Cookies",
        body: "Advertising partners such as Google AdSense may use cookies to serve ads and measure ad performance. These cookies may help personalize ads based on prior visits to this or other websites.",
      },
      {
        heading: "Preference Cookies and Local Storage",
        body: "We may use browser local storage to remember choices such as sound settings and game progress so the experience feels more personalized without requiring an account.",
      },
      {
        heading: "Managing Your Preferences",
        body: "Most browsers let you block, delete, or manage cookies through browser settings. You can also opt out of personalized advertising through Google Ad Settings or industry opt-out tools.",
      },
      {
        heading: "Contact Us",
        body: `If you have questions about our use of cookies, contact us at ${contact}.`,
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    seoTitle: `Disclaimer | ${gameName}`,
    description: `Read the ${gameName} disclaimer regarding website content accuracy, external links, and general use of our free online puzzle game.`,
    keywords: ["JigSolitaire disclaimer", "website disclaimer", "legal disclaimer"],
    updated,
    intro: `The information provided by ${gameName} is for general informational and entertainment purposes only.`,
    sections: [
      {
        heading: "Game Disclaimer",
        body: "JigSolitaire is a browser-based entertainment product provided free of charge. The game is offered as is without guarantees of performance, uptime, or compatibility with every device and browser.",
      },
      {
        heading: "No Professional Advice",
        body: "Articles about cognitive benefits, educational value, and puzzle play are for informational and entertainment purposes only. They should not be treated as medical, educational, or psychological advice.",
      },
      {
        heading: "External Links Disclaimer",
        body: "The site may contain links to third-party websites, advertisements, or services. We do not control those external sites and are not responsible for their content, accuracy, policies, or availability.",
      },
      {
        heading: "Advertising Disclaimer",
        body: "JigSolitaire displays third-party advertisements to support free access. Advertisement placement does not represent endorsement or recommendation by JigSolitaire.",
      },
      {
        heading: "Errors and Omissions",
        body: "We work to keep information accurate and useful, but we cannot guarantee completeness, timeliness, or error-free content.",
      },
      {
        heading: "Contact",
        body: "If you have questions or concerns about this disclaimer, please visit the Contact page.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    seoTitle: `FAQ - ${gameName}`,
    description: `Frequently asked questions about ${gameName}. Find answers about gameplay, features, device support, and more.`,
    keywords: ["JigSolitaire FAQ", "puzzle game questions", "JigSolitaire help"],
    schemaType: "FAQPage",
    intro: "Got questions? We have answers.",
    sections: [
      {
        heading: "Is JigSolitaire really free?",
        body: "Yes. JigSolitaire is free to play with no downloads, no accounts, and no hidden paywalls.",
      },
      {
        heading: "What devices can I play on?",
        body: "JigSolitaire works in modern browsers on desktop, tablet, and mobile. The game adapts to screen size for a smoother experience.",
      },
      {
        heading: "How does tile merging work?",
        body: "When two or more adjacent tiles are both in their correct positions, they automatically merge into a group. Merged groups move together when dragged, making the puzzle easier as you progress.",
      },
      {
        heading: "How many levels are there?",
        body: "JigSolitaire includes 134 levels across seven categories: Animals, Nature, Cities, Art, Food, Space, and Fantasy. Each category uses imagery and difficulty progression designed for visual puzzle solving.",
      },
      {
        heading: "What does the difficulty progression look like?",
        body: "Early levels use smaller grids such as 3x3. As you advance, the grid grows, adding more tiles and more spatial reasoning.",
      },
      {
        heading: "Can I play offline?",
        body: "JigSolitaire requires an internet connection to load images and game assets. Once loaded, gameplay is designed to feel smooth even on slower connections.",
      },
      {
        heading: "Is my progress saved?",
        body: "Progress may depend on browser storage and the current game implementation. We recommend finishing active puzzles before closing the tab.",
      },
      {
        heading: "Is JigSolitaire safe for children?",
        body: "Yes. JigSolitaire contains no violent or inappropriate content, no chat, and no social features. It is suitable for family-friendly puzzle play.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How to Play ${gameName} - Complete Guide`,
    description: `Learn how to play ${gameName} step by step. Master tile swapping, group merging, and advanced strategies to solve puzzles faster.`,
    keywords: ["how to play JigSolitaire", "JigSolitaire guide", "puzzle game tutorial", "tile swap instructions"],
    schemaType: "HowTo",
    intro: "Everything you need to know to master JigSolitaire, from your first puzzle to advanced strategies.",
    sections: [
      {
        heading: "Getting Started",
        body: "JigSolitaire is a puzzle game where you swap tiles on a grid to restore a scrambled image. Unlike traditional jigsaw puzzles with irregular pieces, JigSolitaire uses a clean grid system that is easy to pick up and satisfying to master.",
      },
      {
        heading: "Step 1: Choose a Category",
        body: "Select from seven visual categories: Animals, Nature, Cities, Art, Food, Space, and Fantasy. Each collection uses imagery that rewards careful observation.",
      },
      {
        heading: "Step 2: Memorize the Image",
        body: "When a level starts, study the complete image carefully before the tiles scatter. Look for color zones, strong edges, and distinctive objects that can become anchors during the solve.",
      },
      {
        heading: "Step 3: Swap Tiles",
        body: "Drag any tile and drop it onto another tile to swap their positions. Keep swapping until every tile returns to its correct place. The game tracks moves and time, so efficient solving matters.",
      },
      {
        heading: "Tile Merging",
        body: "When adjacent tiles are both in their correct positions, they merge into a group. Merged groups move together as one unit, making the puzzle progressively easier as you build correct sections.",
      },
      {
        heading: "Difficulty Progression",
        body: "Early levels use small grids such as 3x3. Later levels introduce larger grids with more tiles, more image regions, and more complex spatial reasoning.",
      },
      {
        heading: "Tips and Strategies",
        items: [
          "Start with corners and edges because they have fewer possible positions.",
          "Look for distinctive features such as eyes, buildings, bright food, or high-contrast lines.",
          "Work in sections instead of randomly moving tiles across the board.",
          "Use the reference image whenever available to confirm color and shape relationships.",
          "Create merged groups early so the puzzle becomes easier as you progress.",
        ],
      },
      {
        heading: "Ready to Play?",
        body: "Now that you know the basics, open the game and start solving. The best way to learn JigSolitaire is to play a few levels and notice how tile groups form.",
      },
    ],
  },
  parents: {
    title: "Parents & Safety Guide",
    seoTitle: `Parents & Safety Guide | ${gameName}`,
    description: `${gameName} is a safe, educational, and family-friendly puzzle game. Learn how we protect children and promote healthy screen time.`,
    keywords: ["JigSolitaire for kids", "safe puzzle game", "children online safety", "educational puzzle game", "family friendly games"],
    intro: "Everything parents need to know about JigSolitaire and online safety.",
    sections: [
      {
        heading: "A Game Designed with Families in Mind",
        body: "JigSolitaire is a family-friendly puzzle game created to provide wholesome entertainment for players of all ages. Safety, education, and fun are core priorities.",
      },
      {
        heading: "Why Puzzle Games Are Great for Kids",
        items: [
          "Spatial reasoning: understanding how visual pieces fit together.",
          "Problem-solving: planning moves and testing ideas.",
          "Patience and persistence: learning that effort leads to progress.",
          "Visual memory: remembering patterns, positions, and image details.",
          "Fine motor skills: practicing hand-eye coordination through drag-and-drop play.",
          "Confidence: completing puzzles creates a sense of achievement.",
        ],
      },
      {
        heading: "Our Safety Commitments",
        items: [
          "No account creation is required to play.",
          "No chat rooms, messaging systems, or social features are included.",
          "No personal information from children is knowingly collected.",
          "No violent or inappropriate puzzle content is used.",
          "All categories feature family-friendly subjects such as animals, nature, cities, art, and food.",
        ],
      },
      {
        heading: "COPPA Awareness",
        body: "JigSolitaire is designed with children and families in mind. We do not knowingly collect personal information from children under 13, and the game works without registration or user profiles.",
      },
      {
        heading: "Tips for Parents",
        items: [
          "Play together and treat puzzles as a shared activity.",
          "Set healthy screen-time limits that fit your family routine.",
          "Use JigSolitaire as a gentle way to discuss safe internet habits.",
          "Use browser or device parental controls when appropriate.",
          "Contact us if you have questions about your child’s experience.",
        ],
      },
      {
        heading: "Have Concerns?",
        body: `Parents and guardians can contact us at ${contact}. We prioritize safety-related messages and aim to respond as quickly as possible.`,
      },
    ],
  },
  strategy: {
    title: "Strategy Guide",
    seoTitle: `JigSolitaire Strategy Guide - Solve Tile Puzzles Faster`,
    description: "Learn practical JigSolitaire strategies for reading images, building merged groups, reducing moves, and solving harder tile-swap puzzles.",
    keywords: ["JigSolitaire strategy", "tile puzzle tips", "jigsaw puzzle strategy", "solve puzzles faster"],
    schemaType: "Article",
    intro: "A practical strategy guide for players who want cleaner solves, fewer random swaps, and better visual memory.",
    sections: [
      {
        heading: "Start With Anchors",
        body: "Before moving tiles, identify anchors in the image: corners, faces, bright objects, horizon lines, strong shadows, or anything with a distinctive shape. Anchors give the board structure.",
      },
      {
        heading: "Build From Corners and Edges",
        body: "Corners and edges are easier to place because they have fewer possible neighbors. Once an outside frame starts to form, interior tiles become easier to compare.",
      },
      {
        heading: "Work by Image Zones",
        items: [
          "Group sky, grass, water, walls, food, faces, and other obvious regions mentally before exact placement.",
          "Move uncertain tiles into the correct neighborhood first.",
          "Use color transitions and object edges to refine exact positions.",
        ],
      },
      {
        heading: "Create Merged Groups Early",
        body: "Merged groups reduce puzzle complexity. Try to place adjacent tiles that clearly belong together so they lock into larger movable sections.",
      },
      {
        heading: "Avoid Random Swapping",
        body: "Every move should test a visual idea. If you do not know why two tiles should swap, pause and compare the reference image, color direction, or neighboring shapes first.",
      },
      {
        heading: "Use Mistakes as Clues",
        body: "A wrong swap is feedback. Ask whether you confused a color, rotated a mental image, or placed a texture in the right area but wrong row.",
      },
    ],
  },
  "difficulty-guide": {
    title: "Difficulty Guide",
    seoTitle: `JigSolitaire Difficulty Guide - Choose the Right Puzzle Level`,
    description: "Understand JigSolitaire difficulty, grid size, image complexity, and how to choose levels that match your skill and available time.",
    keywords: ["JigSolitaire difficulty", "puzzle difficulty guide", "choose puzzle level", "beginner puzzle levels"],
    schemaType: "Article",
    intro: "Difficulty in JigSolitaire comes from grid size, image detail, color similarity, and how many visual anchors the puzzle gives you.",
    sections: [
      {
        heading: "What Makes a Puzzle Easy",
        items: [
          "Small grids with fewer tiles.",
          "Clear subjects with strong outlines.",
          "Distinct color zones such as sky, ground, face, or object.",
          "High contrast between neighboring regions.",
        ],
      },
      {
        heading: "What Makes a Puzzle Hard",
        items: [
          "Larger grids with more possible tile positions.",
          "Repeated textures such as leaves, windows, fur, or waves.",
          "Large areas of similar color.",
          "Images with subtle gradients and few clear landmarks.",
        ],
      },
      {
        heading: "Best Levels for Beginners",
        body: "Begin with smaller grids and images that have obvious visual zones. Animal faces, colorful food, and clear city silhouettes usually make good starting points.",
      },
      {
        heading: "When to Move Up",
        body: "Try harder levels when you can solve beginner puzzles without guessing, recognize corners and edges quickly, and create merged groups deliberately.",
      },
      {
        heading: "Short Sessions",
        body: "If you only have a few minutes, choose an easier image and focus on finishing cleanly. A completed small puzzle is often more satisfying than abandoning a difficult one halfway through.",
      },
      {
        heading: "Training Routine",
        body: "Play one easy level to warm up, one medium level to practice, and one harder level to stretch your visual memory. Stop before frustration replaces focus.",
      },
    ],
  },
  "game-mechanics": {
    title: "Game Mechanics",
    seoTitle: `JigSolitaire Game Mechanics - Tile Swapping, Merging, and Progress`,
    description: "Learn how JigSolitaire works, including tile swapping, preview memory, group merging, difficulty progression, and puzzle feedback.",
    keywords: ["JigSolitaire mechanics", "tile swapping", "tile merging puzzle", "browser puzzle mechanics"],
    schemaType: "Article",
    intro: "JigSolitaire blends jigsaw-style image recognition with solitaire-like tile strategy. These are the mechanics that make the game work.",
    sections: [
      {
        heading: "Preview Memory",
        body: "Each puzzle begins with the complete image. This preview is your chance to memorize anchors, color zones, lines, and subject placement before the board scatters.",
      },
      {
        heading: "Tile Swapping",
        body: "The core move is simple: drag one tile onto another to swap their positions. Because every tile shares the same grid shape, the challenge is reading the image inside each tile.",
      },
      {
        heading: "Correct Placement",
        body: "A tile is correct when it returns to the position it occupied in the original image. The game rewards visual comparison, not physical jigsaw tabs.",
      },
      {
        heading: "Group Merging",
        body: "When neighboring tiles are both correctly placed, they merge into a group. A merged group moves as one unit, which makes progress visible and reduces the number of loose pieces.",
      },
      {
        heading: "Moves and Time",
        body: "The game can track moves and time so players can improve their solves. Faster is not always better; fewer thoughtful moves often produce a cleaner solve.",
      },
      {
        heading: "Difficulty Scaling",
        body: "As grid size increases, the number of possible tile positions grows. Larger grids ask for stronger visual memory, better organization, and more patience.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seoTitle: `Privacy Policy | ${gameName}`,
    description: `Read the ${gameName} Privacy Policy. Learn how we collect, use, and protect data when you use our free online puzzle game.`,
    keywords: ["JigSolitaire privacy policy", "data protection", "cookie policy puzzle game"],
    updated,
    intro: "At JigSolitaire, we are committed to protecting your privacy and being transparent about how data is handled.",
    sections: [
      {
        heading: "Information You Provide",
        body: "When you contact us, you may voluntarily provide your name, email address, and message content. We only collect this information when you choose to submit it.",
      },
      {
        heading: "Automatically Collected Information",
        items: [
          "Browser type and version.",
          "Operating system and device type.",
          "Pages visited and time spent on pages.",
          "Referring website or search engine.",
          "General country or region-level location.",
        ],
      },
      {
        heading: "Cookies and Similar Technologies",
        body: "We use cookies and local storage to support site functionality, preferences, ads, and game experience. See our Cookie Policy for more detail.",
      },
      {
        heading: "How We Use Information",
        items: [
          "Provide, maintain, and improve the website and game.",
          "Respond to inquiries and support requests.",
          "Analyze usage patterns and improve performance.",
          "Detect and prevent technical issues or abuse.",
          "Serve advertisements through third-party ad networks.",
          "Comply with legal obligations.",
        ],
      },
      {
        heading: "Third-Party Services",
        body: "We may use Google AdSense to display advertisements. Google may use cookies and similar technologies to serve and measure ads.",
      },
      {
        heading: "Data Sharing",
        body: "We do not sell, trade, or rent personal information. We may share limited information with service providers, where required by law, or to protect the rights and safety of JigSolitaire and its users.",
      },
      {
        heading: "Children's Privacy",
        body: "JigSolitaire is designed to be family-friendly. We do not knowingly collect personal information from children under 13. Parents can contact us if they believe a child has provided personal information.",
      },
      {
        heading: "Your Rights",
        items: [
          "Request access to personal data we hold about you.",
          "Request correction or deletion of personal data.",
          "Object to or restrict certain processing.",
          "Request data portability where applicable.",
        ],
      },
      {
        heading: "Contact Us",
        body: `If you have questions about this Privacy Policy, contact us at ${contact}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    seoTitle: `Terms of Service | ${gameName}`,
    description: `Read the ${gameName} Terms of Service. Understand the rules and guidelines for using our free online puzzle game.`,
    keywords: ["JigSolitaire terms of service", "terms and conditions", "usage agreement"],
    updated,
    intro: `Welcome to ${gameName}. By accessing or using our website and game, you agree to these Terms of Service.`,
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing JigSolitaire, you acknowledge that you have read, understood, and agree to these Terms of Service and our Privacy Policy.",
      },
      {
        heading: "Description of Service",
        body: "JigSolitaire provides a free, browser-based puzzle game where users solve jigsaw-style images by swapping tiles on a grid. The service also includes educational content, blog articles, and related resources.",
      },
      {
        heading: "User Eligibility",
        body: "JigSolitaire is available to users of all ages, but users under 13 should use the service with parental supervision.",
      },
      {
        heading: "Intellectual Property",
        body: "Game design, code, text, graphics, logos, and related content are the intellectual property of JigSolitaire or its licensors. You may access the game for personal, non-commercial use.",
      },
      {
        heading: "Acceptable Use",
        items: [
          "Do not use the service for illegal or unauthorized purposes.",
          "Do not attempt unauthorized access to systems or servers.",
          "Do not disrupt or interfere with website operation.",
          "Do not scrape, crawl, copy, redistribute, or reverse-engineer the game or content.",
          "Do not upload or transmit viruses, malware, or harmful code.",
        ],
      },
      {
        heading: "Advertisements",
        body: "JigSolitaire may display third-party advertisements, including Google AdSense ads, to keep the game free. We are not responsible for third-party ad content.",
      },
      {
        heading: "Disclaimer of Warranties",
        body: "JigSolitaire is provided as is and as available without warranties of any kind. We do not guarantee uninterrupted, error-free, or virus-free operation.",
      },
      {
        heading: "Limitation of Liability",
        body: "To the fullest extent permitted by law, JigSolitaire and its operators are not liable for indirect, incidental, special, consequential, or punitive damages related to your use of the service.",
      },
      {
        heading: "Changes to Terms",
        body: "We may update these Terms of Service at any time. Continued use of the service after changes are posted means you accept the updated terms.",
      },
      {
        heading: "Contact",
        body: `If you have questions about these Terms of Service, contact us at ${contact}.`,
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
