import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'やみすきーはぶ',
  tagline: 'やみのみすきー、やみすきー。病みと闇が好き。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hub.yami.ski',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yamisskey', // Usually your GitHub org/user name.
  projectName: 'hub.yami.ski', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'jp',
    locales: ['jp'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/ogBanner.gif',
    navbar: {
      title: 'yamisskey',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'やみすきーについて',
        },
        {to: '/blog', label: 'ブログ', position: 'left'},
        {
          href: 'https://github.com/yamisskey',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '利用規約',
              to: '/docs/term',
            },
            {
              label: 'プライバシーポリシー',
              to: '/docs/privacy',
            },
            {
              label: 'モデレーション原則',
              to: '/docs/moderation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Misskey',
              href: 'https://yami.ski/',
            },
            {
              label: 'Element',
              href: 'https://element.yami.ski',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/yamisskey',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'CTF',
              href: 'https://ctf.yami.ski/',
            },
            {
              label: 'SearXNG',
              href: 'https://search.yami.ski',
            },
            {
              label: 'Jitsi',
              href: 'https://jitsi.yami.ski',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yamisskey, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
