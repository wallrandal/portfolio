module.exports = {
    base: '/cv/',
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
        ]
    },
    indentedSyntax: true,
    plugins: ['social-share'],
    
}