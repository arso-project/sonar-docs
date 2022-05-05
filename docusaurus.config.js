const p = require('path')
module.exports = {
  title: 'Sonar',
  tagline: 'A peer to peer database and search engine',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'arso-project', // Usually your GitHub org/user name.
  projectName: 'sonar', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula')
    },
    navbar: {
      title: 'Sonar',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/intro-start',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          to: 'api',
          label: 'API',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/arso-project/sonar',
          label: 'Github',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} arso collective`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/arso-project/sonar-docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/arso-project/sonar-docs/edit/master/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    // [
    //   'docusaurus-plugin-typedoc-api',
    //   {
    //     minimal: false,
    //     typedocOptions: {
    //       logLevel: 'Verbose',
    //       excludePrivate: true
    //     },
    //     // projectRoot: p.join(__dirname, '..', 'sonar'),
    //     // exclude: ['**/examples/**', '**/dist/**'],
    //     // packages: [
    //     //   { path: 'packages/client', entry: 'index.ts' },
    //     //   { path: 'packages/react', entry: 'index.ts' }
    //     // ]
    //     projectRoot: p.join(__dirname, '..', 'sonar'),
    //     packages: ['packages/client'],
    //     // packages: [
    //     //   {
    //     //     path: '.',
    //     //     entry: 'index.ts',
    //     //     label: 'Client'
    //     //   }
    //     // ],
    //     // Monorepo
    //     // packages: ['packages/client'],
    //     // Polyrepo
    //     // packages: [
    //     //   { path: 'packages/client', entry: 'index.ts' },
    //     //   { path: 'packages/react', entry: 'index.ts' }
    //     // ],
    //   }
    // ]
  ]
}
