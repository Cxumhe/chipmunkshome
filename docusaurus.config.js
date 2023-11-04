// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '花栗鼠的小屋',
  tagline: 'Working in Progress',
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
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  plugins: [
    'plugin-image-zoom'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
            include: ['**/*.{md,mdx}'],
            exclude: [
              '**/_*.{js,jsx,ts,tsx,md,mdx}',
              '**/_*/**',
              '**/*.test.{js,jsx,ts,tsx}',
              '**/__tests__/**',
              '**/.obsidian/**',
            ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: '花栗鼠不吃爆米',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '✏️ 笔记',
          },
          {to: '/blog', label: '🤯 想法', position: 'right'},
          {
            to: '/esssay', label: '📜 文章', position: 'right'
          },
          {
            href: 'https://travellings.link', label: '🚅 开往', position: 'right'
          },
          {
            href: 'https://github.com/Cxumhe',
            className: 'header-Github-link',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '本站',
            items: [
              {
                label: '笔记',
                to: '/docs/UI使用指南',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '文章',
                to: '/essay',
              },
            ],
          },
          {
            title: '我的',
            items: [
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/Cxumhe/',
              },
              {
                label: 'Github',
                href: 'https://github.com/Cxumhe',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '...',
                to: '/',
              },
              {
                html: '<a href= "https://docusaurus.io/zh-CN/" target= "_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cxumhe,此网站由Docusaurus构建`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
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

module.exports = config;
