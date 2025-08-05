// plugins/vuetify.ts
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineNuxtPlugin } from 'nuxt/app'
import { VCalendar } from 'vuetify/labs/VCalendar'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components: {
      VCalendar,
    },
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})
