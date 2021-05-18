export default {
  components: true,
  server: {
    // port: 3100, // default 3000
    port: process.env.PORT || 3600,
  },
  /*
   ** Disable Nuxt asking for participation
   */
  telemetry: false,
  head: {
    titleTemplate: "Mastering Nuxt: %s",
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: ["my-style"],
    },
    meta: [
      {
        charset: "utf-8",
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    "~/plugins/maps.client",
    "~/plugins/dataApi",
    "~/plugins/auth.client",
    "~/plugins/vCalendar.client",
  ],
  modules: [
    "~/modules/auth",
    "~/modules/algolia",
    "~/modules/cloudinary",
    "@nuxtjs/cloudinary",
  ],
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  cloudinary: {
    cloudName: "nuxt-kathir-bnb",
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/nuxt-kathir-bnb/image/upload/",
    },
  },
  css: ["~/assets/sass/app.scss"],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
    },
  },
  publicRuntimeConfig: {
    auth: {
      cookieName: "idToken",
      clientId:
        "952132017083-to68rg93dp9ao68ulhim23853vhc3hvq.apps.googleusercontent.com",
    },
    algolia: {
      appId: "CRH6AJ5VNU",
      key: "ee31a7ef16046078ce766f08d1478e5e",
    },
    cloudinary: {
      apiKey: "418971391689854",
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: "CRH6AJ5VNU",
      key: "ee31a7ef16046078ce766f08d1478e5e",
    },
    cloudinary: {
      apiKey: "418971391689854",
      apiSecret: "WJ5s6YQQEyIg9ZdHAiwohbLuP3U",
    },
  },
};
