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
      clientId: process.env.authClientId,
    },
    algolia: {
      appId: process.env.algoliaAppId,
      key: process.env.algoliaAppKey,
    },
    cloudinary: {
      apiKey: process.env.cloudinaryApiKey,
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.algoliaAppId,
      key: process.env.algoliaAppKey,
    },
    cloudinary: {
      apiKey: process.env.cloudinaryApiKey,
      apiSecret: process.env.cloudinaryApiSecret,
    },
  },
};
