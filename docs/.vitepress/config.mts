import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hr-bootcamp-workbook/',
  title: "HR AI Workshop",
  description: "Taller práctico para líderes de RRHH sobre Inteligencia Artificial",
  lang: 'es-ES',
  themeConfig: {
    logo: '/logo.avif',
    siteTitle: false,
    nav: [
      { text: 'Inicio', link: '/' },
    ],
    
    sidebar: [
      {
        text: 'Leading HR in the Age of AI',
        items: [
          { text: 'Syllabus y Estructura', link: '/' },
          { text: 'Sesión 1: AI Literacy', link: '/sesion-1' },
          { text: 'Sesión 2: Talent Acquisition', link: '/sesion-2' },
          { text: 'Sesión 3: Entrevistas', link: '/sesion-3' },
          { text: 'Sesión 4: Desempeño', link: '/sesion-4' },
          { text: 'Sesión 5: Cultura', link: '/sesion-5' }
        ]
      }
    ],

    outline: {
      level: 2,
      label: 'En esta página'
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Diseñado para uso educativo.',
      copyright: 'Copyright © 2024 Leading HR in the Age of AI'
    }
  }
})

