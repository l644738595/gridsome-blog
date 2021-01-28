// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Portfolio",
  siteUrl: `https://www.itsnwa.com`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['categorie', 'journal', 'project'],
        singleTypes: ['setting'],
      }
    }
  ],
  templates: {
    StrapiJournal: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ],
    StrapiProject: [
      {
        path: '/project/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
  }
}
