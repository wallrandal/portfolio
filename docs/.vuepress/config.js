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
          '/professional/sobre',
          '/blog/letramento',
          '/blog/politicas_publicas',
        ]
    },
    indentedSyntax: true,
    plugins: ['social-share'],
    
}