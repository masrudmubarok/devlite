// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Master Software Development',
  tagline: 'From Zero to Hero 🚀',
  favicon: 'img/devlite.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'docs', // omitted => default instance
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'genin',
        path: 'genin',
        routeBasePath: 'genin',
        sidebarPath: require.resolve('./sidebarsGenin.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chunin',
        path: 'chunin',
        routeBasePath: 'chunin',
        sidebarPath: require.resolve('./sidebarsChunin.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jounin',
        path: 'jounin',
        routeBasePath: 'jounin',
        sidebarPath: require.resolve('./sidebarsJounin.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sannin',
        path: 'sannin',
        routeBasePath: 'sannin',
        sidebarPath: require.resolve('./sidebarsSannin.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kage',
        path: 'kage',
        routeBasePath: 'kage',
        sidebarPath: require.resolve('./sidebarsKage.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/devlite.png',
      navbar: {
        title: 'DEVLITE',
        logo: {
          alt: 'My Site Logo',
          src: 'img/devlite.png',
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            docId: 'intro',
            label: 'Docs',
          },
          {
            to: '/genin/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Genin',
            activeBaseRegex: `/genin/`,
          },
          {
            to: '/chunin/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Chunin',
            activeBaseRegex: `/chunin/`,
          },
          {
            to: '/jounin/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Jounin',
            activeBaseRegex: `/jounin/`,
          },
          {
            to: '/sannin/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Sannin',
            activeBaseRegex: `/sannin/`,
          },
          {
            to: '/kage/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Kage',
            activeBaseRegex: `/kage/`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
