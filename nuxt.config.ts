// https://nuxt.com/docs/api/configuration/nuxt-config
// install vuetify
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: {
    global:true,
    dirs:["~/components"],
  },

    //setting for enviroment variable
  runtimeConfig:{
    //for server-side
    apiSecret:process.env.NUXT_API_SECRET || "default-secret",
    //for frontend-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "xxxxxxxx",  
    }
  },

  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
