import type { UserConfig } from './types'

export const defaultConfig: UserConfig = {
  title: 'KDnotes',
  description: 'Mostly nothing, or about nothing.',
  url: 'https://kdnotes.com',
  locale: 'en',

  author: {
    name: 'Your Name',
  },

  navigation: [
    { title: 'Essays', url: '/posts' },
    { title: 'Notes', url: '/notes' },
    { title: 'Archive', url: '/archive' },
    { title: 'About', url: '/about' },
  ],

  footerLinks: [
    { title: 'Now', url: '/now' },
    { title: 'Patrika', url: 'https://github.com/thelocalhoststudio/patrika' },
    { title: 'RSS', url: '/rss.xml' },
  ],

  social: [],

  heroText: 'Mostly nothing, or about nothing.',
  tagline: 'Plus · Ça · Change',
  postsPerPage: 10,
  recentPosts: 5,
  showLogo: false,

  // Generic, no assumed keys — real indexes are configured per-site (see config.yaml).
  browse: {
    years: true,
    indexes: [],
  },
}