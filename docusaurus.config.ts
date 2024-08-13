import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import path from 'path';

const config: Config = {
  title: 'DS Pokémon Hacking',
  tagline: 'Guides and resources for hacking the DS Pokémon games.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ds-pokemon-hacking.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ds-pokemon-hacking', // Usually your GitHub org/user name.
  projectName: 'ds-pokemon-hacking.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DS Pokémon Hacking',
      logo: {
        alt: 'DS Pokémon Hacking Logo',
        src: 'img/kodsh.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'generation_iv_sidebar',
          position: 'left',
          label: 'Generation IV',
        },
        {
          type: 'docSidebar',
          sidebarId: 'generation_v_sidebar',
          position: 'left',
          label: 'Generation V',
        },
        {
          type: 'docSidebar',
          sidebarId: 'universal_sidebar',
          position: 'left',
          label: 'Universal',
        },
        {
          href: '/contributing',
          label: 'Contributing',
          position: 'left',
        },
        {
          href: 'https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} DS Pokémon Hacking. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['diff', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
