import { themes as prismThemes } from 'prism-react-renderer';
import { FaGithub, FaYoutube } from 'react-icons/fa';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mastering Software Development',
  tagline: 'Code Like a Ninja: Fast, Fierce, Unstoppable 🚀',
  favicon: 'img/devlite.png',

  // Set the production URL of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization settings
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
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
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
        path: 'academy/genin',
        routeBasePath: 'academy/genin',
        sidebarPath: require.resolve('./sidebarsGenin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chunin',
        path: 'academy/chunin',
        routeBasePath: 'academy/chunin',
        sidebarPath: require.resolve('./sidebarsChunin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'jounin',
        path: 'academy/jounin',
        routeBasePath: 'academy/jounin',
        sidebarPath: require.resolve('./sidebarsJounin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sannin',
        path: 'academy/sannin',
        routeBasePath: 'academy/sannin',
        sidebarPath: require.resolve('./sidebarsSannin.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kage',
        path: 'academy/kage',
        routeBasePath: 'academy/kage',
        sidebarPath: require.resolve('./sidebarsKage.js'),
      },
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/devlite.png',
    navbar: {
      title: 'DEVLITE',
      logo: {
        alt: 'My Site Logo',
        src: 'img/devlite.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Academy',
          position: 'left',
          items: [
            {
              to: 'academy/genin/intro',
              label: 'Genin',
              activeBaseRegex: '/genin/',
            },
            {
              to: 'academy/chunin/intro',
              label: 'Chunin',
              activeBaseRegex: '/chunin/',
            },
            {
              to: 'academy/jounin/intro',
              label: 'Jounin',
              activeBaseRegex: '/jounin/',
            },
            {
              to: 'academy/sannin/intro',
              label: 'Sannin',
              activeBaseRegex: '/sannin/',
            },
            {
              to: 'academy/kage/intro',
              label: 'Kage',
              activeBaseRegex: '/kage/',
            },
          ],
        },
        {
          href: 'https://github.com/masrudmubarok',
          'aria-label': 'GitHub',
          className: 'navbar__icon navbar__github',
          position: 'right',
          html: '<i class="fa fa-github"></i>',
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