import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeStripStyle from './src/plugins/rehype-strip-style.mjs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ModKit Documentation',
  tagline: 'inZOI ModKit creative tool guide',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  // GitHub Pages (project page): https://ejlee-inzoi.github.io/docu/
  url: 'https://ejlee-inzoi.github.io',
  baseUrl: '/docu/',

  organizationName: 'ejlee-inzoi',
  projectName: 'docu',

  // Demo-first migration from MkDocs: many internal links use MkDocs-style
  // .md paths, so don't fail the build/preview on broken links.
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Parse .md as CommonMark (lenient) and .mdx as MDX. This lets the ~1470
  // MkDocs markdown files render without MDX/JSX parsing errors.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // serve docs at the site root, like MkDocs
          sidebarPath: './sidebars.ts',
          // Strip malformed inline styles so migrated HTML compiles.
          rehypePlugins: [rehypeStripStyle],
          // No edit links during the demo migration.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'ModKit 블로그',
          blogDescription: 'inZOI ModKit 업데이트와 제작 팁',
          postsPerPage: 10,
          blogSidebarTitle: '최근 글',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'ModKit 블로그',
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ModKit Documentation',
      logo: {
        alt: 'inZOI ModKit',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/showcase',
          label: 'Start',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://playinzoi.com/',
          label: 'playinzoi.com',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} inZOI Studio, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
