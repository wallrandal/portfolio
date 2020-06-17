module.exports = {
    base: '/portfolio/',
    title: 'Wallace Randal',
    description: 'Meu portfolio e Currículo',
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
}