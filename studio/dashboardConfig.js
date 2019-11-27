export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dde888dbe513e17c032069b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3d17paz4',
                  apiId: '19c5003c-28cc-47f7-831a-08fe74276530'
                },
                {
                  buildHookId: '5dde888dd8f6252f511ad103',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dc3uamq8',
                  apiId: '1248baff-c8d1-4b61-940f-e2f228861295'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcopilastri/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dc3uamq8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
