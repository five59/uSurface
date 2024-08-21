// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'µSurface',
    description: 'Minimal Code. Maximum Experience. Craft interfaces for the smallest screens.',
    image: '/usui-icon.png',
    socials: {
      // twitter: 'nuxt_js',
      github: 'five59/uSurface',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
