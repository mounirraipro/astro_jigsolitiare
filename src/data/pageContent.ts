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
const genre = siteConfig.gameGenre;
const contact = siteConfig.contactEmail;
const updated = siteConfig.legalLastUpdated;

export const pageContent = {
  about: {
    title: "About",
    seoTitle: `About ${gameName} - Reusable Game Website Template`,
    description: `Learn how ${gameName} helps you publish a customizable ${genre} website with reusable pages, policy content, and player support sections.`,
    keywords: ["game website template", "browser game starter", "game site pages"],
    schemaType: "AboutPage",
    eyebrow: "Studio Notes",
    intro: `${gameName} is a clean starting point for publishing a web-based game experience. The copy, policies, routes, and support pages are intentionally generic so you can adapt the template to a new theme without rewriting the site structure.`,
    sections: [
      {
        heading: "What this template is for",
        body: "Use it as a practical foundation for a playable game site, landing content, player guidance, family information, and basic legal pages.",
      },
      {
        heading: "Easy to customize",
        items: [
          "Update the game name, description, genre, contact email, and policy date in the site config.",
          "Replace the how-to-play instructions with the rules for your own game.",
          "Adapt blog topics, FAQ answers, and support copy without changing the layout.",
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    seoTitle: `Accessibility | ${gameName}`,
    description: `Review the accessibility goals for ${gameName}, including readable layouts, semantic structure, keyboard support, and feedback channels.`,
    keywords: ["game accessibility", "keyboard support", "accessible browser game"],
    eyebrow: "Player Access",
    updated,
    intro: `${gameName} is intended to be usable by as many players as possible. This page summarizes the accessibility practices the template is designed to support.`,
    sections: [
      {
        heading: "Our goals",
        items: [
          "Use semantic headings, links, buttons, and landmarks.",
          "Keep text readable with strong contrast and responsive layouts.",
          "Support keyboard navigation for core controls wherever possible.",
          "Avoid relying on color alone to explain game state or progress.",
        ],
      },
      {
        heading: "Feedback",
        body: `If you find a barrier, contact us at ${contact} with the page URL, browser, device, and a short description of the issue.`,
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
    title: "Contact",
    seoTitle: `Contact ${gameName} - Support and Feedback`,
    description: `Contact the ${gameName} team for support, bug reports, privacy requests, feedback, partnership notes, or template customization questions.`,
    keywords: ["game support", "contact game team", "bug report"],
    schemaType: "ContactPage",
    eyebrow: "Support",
    intro: `For questions, feedback, bug reports, partnership notes, or privacy requests, reach the team at ${contact}.`,
    sections: [
      {
        heading: "Helpful details to include",
        items: [
          "The page or game mode you were using.",
          "Your browser, device, and operating system.",
          "A short description of what happened and what you expected.",
        ],
      },
      {
        heading: "Response expectations",
        body: "This template does not include a live support desk by default. Add your preferred contact form, email workflow, or helpdesk integration before launch.",
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    seoTitle: `Cookie Policy | ${gameName}`,
    description: `Read the ${gameName} cookie policy template for analytics, local storage, preferences, consent choices, and third-party services.`,
    keywords: ["cookie policy", "game cookies", "analytics consent"],
    eyebrow: "Legal",
    updated,
    intro: "This cookie policy explains how this game site may use cookies, local storage, analytics tags, and similar technologies.",
    sections: [
      {
        heading: "How cookies may be used",
        items: [
          "Remember basic preferences and session choices.",
          "Measure site performance and game traffic.",
          "Help protect the site from abuse or technical errors.",
          "Support optional ads, embeds, or analytics when you configure them.",
        ],
      },
      {
        heading: "Your choices",
        body: "Most browsers let you block, delete, or limit cookies. Some game features or analytics may work differently when cookies are disabled.",
      },
      {
        heading: "Template reminder",
        body: "Review this policy with your actual cookie, analytics, advertising, and consent setup before publishing.",
      },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    seoTitle: `Disclaimer | ${gameName}`,
    description: `Read the ${gameName} disclaimer template covering entertainment use, availability, external links, and customization reminders.`,
    keywords: ["game disclaimer", "website disclaimer", "entertainment disclaimer"],
    eyebrow: "Legal",
    updated,
    intro: `${gameName} is provided as a general entertainment experience. This page should be adapted to match your exact product, jurisdiction, and business model.`,
    sections: [
      {
        heading: "Entertainment only",
        body: "The game and related content are offered for casual play and informational purposes. They are not professional, legal, financial, medical, or educational advice.",
      },
      {
        heading: "Availability",
        body: "We may update, pause, remove, or change features at any time. We do not guarantee uninterrupted access or error-free operation.",
      },
      {
        heading: "External links",
        body: "The site may link to third-party websites or services. Those services are controlled by their own terms and policies.",
      },
    ],
  },
  faq: {
    title: "FAQ",
    seoTitle: `FAQ - Player and Template Questions | ${gameName}`,
    description: `Find answers to common ${gameName} questions about accounts, mobile play, bug reports, customization, and future game features.`,
    keywords: ["game FAQ", "browser game questions", "game support"],
    schemaType: "FAQPage",
    eyebrow: "Help",
    intro: "Use these starter answers to explain your game, support model, accounts, progress, and browser requirements.",
    sections: [
      {
        heading: "Do I need an account?",
        body: "The template is designed to work without accounts by default, but you can add login, cloud saves, leaderboards, or subscriptions later.",
      },
      {
        heading: "Can I play on mobile?",
        body: "Yes, the site layout is intended to be responsive. Test your final game controls on phones, tablets, and desktop screens before release.",
      },
      {
        heading: "How do I report a bug?",
        body: `Send details to ${contact}, including the page, browser, device, and any steps that reproduce the problem.`,
      },
      {
        heading: "Can this template support another game?",
        body: "Yes. Update the config, replace gameplay copy, adjust routes, and connect the play page to your own game implementation.",
      },
    ],
  },
  "how-to-play": {
    title: "How To Play",
    seoTitle: `How To Play ${gameName} - Rules, Controls, and Tips`,
    description: `Learn how to explain ${gameName} rules, controls, scoring, progress, and player tips in a reusable browser game guide page.`,
    keywords: ["how to play", "game rules", "browser game controls", "game tips"],
    schemaType: "HowTo",
    eyebrow: "Guide",
    intro: "This starter guide gives you a clean structure for explaining rules, controls, scoring, and win conditions for any browser game.",
    sections: [
      {
        heading: "Goal",
        body: "Describe the player's objective in one or two sentences. Keep this section focused on what success looks like.",
      },
      {
        heading: "Controls",
        items: [
          "Explain mouse, touch, and keyboard actions.",
          "Mention any undo, reset, hint, pause, or settings controls.",
          "Call out accessibility-friendly alternatives where available.",
        ],
      },
      {
        heading: "Scoring and progress",
        body: "Replace this text with your scoring rules, level progression, timers, achievements, or completion criteria.",
      },
      {
        heading: "Tips",
        items: [
          "Start with the simplest move or decision.",
          "Encourage players to learn patterns over time.",
          "Explain one common mistake and how to avoid it.",
        ],
      },
    ],
  },
  parents: {
    title: "Parents",
    seoTitle: `Parents Guide | ${gameName}`,
    description: `Parent and guardian information for ${gameName}, including family safety, data review, contact options, and feature checks.`,
    keywords: ["parents guide", "family friendly game", "child safety game"],
    eyebrow: "Family Info",
    intro: `${gameName} is structured as a family-friendly ${genre} template. Use this page to explain age fit, safety choices, data practices, and how families can contact you.`,
    sections: [
      {
        heading: "What to review",
        items: [
          "Whether the final game includes ads, chat, accounts, purchases, or leaderboards.",
          "What data you collect and how long you keep it.",
          "How players can get help or report concerns.",
        ],
      },
      {
        heading: "Family controls",
        body: "Add any parental controls, account permissions, purchase limits, content filters, or reporting tools that your finished game supports.",
      },
      {
        heading: "Contact",
        body: `Parents and guardians can contact ${contact} with questions or requests.`,
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    seoTitle: `Privacy Policy | ${gameName}`,
    description: `Read the ${gameName} privacy policy template for data collection, gameplay information, support requests, sharing, and contact options.`,
    keywords: ["privacy policy", "game privacy", "player data"],
    eyebrow: "Legal",
    updated,
    intro: "This privacy policy is a template starting point. Update it to accurately reflect the data your finished game collects, stores, shares, and protects.",
    sections: [
      {
        heading: "Information we may collect",
        items: [
          "Basic technical data such as browser, device type, pages visited, and performance events.",
          "Gameplay information such as scores, preferences, progress, or settings if you enable those features.",
          "Contact information when a player or parent voluntarily sends a message.",
        ],
      },
      {
        heading: "How information may be used",
        items: [
          "Operate and improve the game experience.",
          "Respond to support, privacy, or safety requests.",
          "Monitor performance, prevent abuse, and understand traffic trends.",
        ],
      },
      {
        heading: "Sharing",
        body: "Only describe third-party analytics, hosting, advertising, payment, account, or support providers that are actually enabled in your production site.",
      },
      {
        heading: "Contact",
        body: `Send privacy questions or requests to ${contact}.`,
      },
    ],
  },
  terms: {
    title: "Terms",
    seoTitle: `Terms of Use | ${gameName}`,
    description: `Review the ${gameName} terms of use template for site access, accounts, purchases, intellectual property, and future updates.`,
    keywords: ["terms of use", "game terms", "website terms"],
    eyebrow: "Legal",
    updated,
    intro: `These terms explain basic rules for using ${gameName}. Replace this template with terms reviewed for your final game, region, and business model.`,
    sections: [
      {
        heading: "Use of the site",
        body: "Players should use the site lawfully, respectfully, and without attempting to disrupt, reverse engineer, scrape, or abuse the service.",
      },
      {
        heading: "Accounts and purchases",
        body: "If your final game includes accounts, subscriptions, in-app purchases, or downloadable content, add precise terms for those features.",
      },
      {
        heading: "Intellectual property",
        body: "Your game name, artwork, code, levels, and written content may be protected by intellectual property laws. Add your ownership and license details here.",
      },
      {
        heading: "Changes",
        body: "We may update the site, game, and these terms. The latest version should be posted on this page with an updated date.",
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export type PageKey = keyof typeof pageContent;
