// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hi,I'm Pi Chen.",
  tagline: 'A ambitious full-stack learner.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://cxumhe.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SENNIER', // Usually your GitHub org/user name.
  projectName: 'chipmunks.attic', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          blogSidebarTitle: '近期blog',
          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chipmunks Home',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Note',
          },
          {to: '/blog', label: 'Thinking', position: 'right'},
          {
            to: '/esssay', label: 'Essay', position: 'right'
          },
          {
            href: 'https://travellings.link', label: 'Portal', position: 'right'
          },
          {
            href: 'https://github.com/Cxumhe',
            className: 'header-Github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: ' ',
            items: [
              {
                html: `<a href='https://docusaurus.io/' target='_blank'><img class="atelier-union" src="/img/atelier-union.svg" alt="" /></a>`,
              },
              {
                html: `<div class="buildwith__title">Powered by</div><a style="display: flex; justify-content: center;" href='https://docusaurus.io/' target='_blank'><img class="buildwith" src="/img/buildwith1.png" alt="" /></a>`,
              },
            ],
          },
        ],
        copyright: `@${new Date().getFullYear()} Cxumhe. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '5CIJFZZGYR',
  
        // Public API key: it is safe to commit it
        apiKey: '0ee3e10d11e8771ed9a36cbc449ff6d0',
  
        indexName: 'cxumhe',
        

      },

    }),
};

export default config;
