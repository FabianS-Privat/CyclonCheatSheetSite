// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Definitiv Guide",
  tagline: "All of Cyclon's Content in one place!",
  favicon: "img/Logo.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  plugins: ["docusaurus-plugin-image-zoom", "./src/plugins/tailwind-config.js"],

  // Set the production url of your site here
  url: "https://www.definitivguide.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Cyclon", // Usually your GitHub org/user name.
  projectName: "Definitiv Guide", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4659198126450802",
      async: true,
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-HWEWZ1PLYL",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-MLKTNZ74",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Definitiv Guide",
        logo: {
          alt: "Cyclon Logo",
          src: "/img/Logo.png",
        },
        items: [
          { to: "/builds", label: "Builds", position: "left" },
          { to: "/strats", label: "Strategies", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "left",
            label: "Layouts",
          },
          {
            html: `<img class="h-8 w-auto" src="/img/discord-icon.svg" alt="Join Discord"/>`,
            to: "https://discord.gg/EvJhCTgpnD",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Pages",
            items: [
              {
                label: "Builds",
                to: "/builds",
              },
              {
                label: "Strats",
                to: "/strats",
              },
              {
                label: "Layouts",
                to: "/docs/layout",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "YouTube",
                to: "https://www.youtube.com/@CyclonDefinitiv",
              },
              {
                label: "Twitch",
                to: "https://www.twitch.tv/cyclondefinitiv",
              },
              {
                label: "Discord",
                to: "https://discord.gg/EvJhCTgpnD",
              },
              {
                label: "X",
                to: "https://x.com/Definitiv1C",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About",
                to: "/about",
              },
              {
                label: "Privacy Policy",
                to: "/privacyPolicy",
              },
              {
                label: "Contact",
                to: "/contact",
              },
            ],
          },
        ],
        copyright: `Definitiv Guide is not affiliated with or endorsed by Grinding Gear Games or Eleventh Hour Games. Copyright © ${new Date().getFullYear()} CyclonDefinitiv Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(50, 50, 50)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
    }),
};

export default config;
