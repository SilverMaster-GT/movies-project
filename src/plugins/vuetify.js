/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Components
import { VBtn } from 'vuetify/components'

export default createVuetify({
  aliases: {
    VBtnAlt: VBtn,
  },
  // https://next.vuetifyjs.com/features/global-configuration/
  defaults: {
    global: {
      rounded: 'xs',
      backgroundColor: '#f1f1f1',
    },
    // VAppBar: {
    //   flat: true,
    // },
    // VBtn: {
    //   color: 'primary',
    //   height: 44,
    //   minWidth: 190,
    // },
    VBtnAlt: {
      color: 'primary',
      height: 48,
      minWidth: 190,
      variant: 'outlined',
    },
    VSheet: {
      color: '#212121',
    },
  },
  // https://next.vuetifyjs.com/features/theme/
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: '#1697f6',
        },
      },
    },
  },
})
