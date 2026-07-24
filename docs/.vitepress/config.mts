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
          { text: 'Sesión 1: AI Literacy', link: '/sesion-1' },
          { text: 'Sesión 2: Talent Acquisition', link: '/sesion-2' },
          { text: 'Sesión 3: Entrevistas', link: '/sesion-3' },
          { text: 'Sesión 4: Desempeño', link: '/sesion-4' },
          { text: 'Sesión 5: Cultura', link: '/sesion-5' }
        ]
      },
      {
        text: 'Leading HR in the Age of AI - Part 2',
        items: [
          { text: 'Sesión 1: Diagnóstico DNE', link: '/parte2-sesion-1' },
          { text: 'Sesión 2: Desarrollo 70:20:10', link: '/parte2-sesion-2' },
          { text: 'Sesión 3: HR Analytics', link: '/parte2-sesion-3' }
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

