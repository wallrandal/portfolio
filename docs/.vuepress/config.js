module.exports = {
    base: '/portfolio/',
    title: 'Wallace Randal',
    description: 'My awesome portfolio blog',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/', indentedSyntax: true },
          { text: 'Sobre', link: '/professional/sobre' },
          { text: 'Blog', link: '/blog/' },
        ],
        sidebar: [
          {
            title: 'Profissional',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 1,    // optional, defaults to 1
            children: [
              '/professional/sobre'
            ]
          },
          {
            title: 'Blog',
            children: [ 
              '/blog/letramento',
              '/blog/politicas_publicas'
            ]
          }
        ],
    },
    indentedSyntax: true,
    plugins: ['social-share'],
    
}