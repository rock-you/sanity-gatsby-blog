export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eaa26014db290fc245e5517',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9p73j7o7',
                  apiId: 'c1bc7537-93e8-4416-87c5-ee168c84f776'
                },
                {
                  buildHookId: '5eaa2601a58b29e2d046e516',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b9tdak6f',
                  apiId: 'c7de53ad-c6c5-4199-9c3e-95004fd13cac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rock-you/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b9tdak6f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
