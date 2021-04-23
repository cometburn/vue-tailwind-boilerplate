module.exports = {
  publicPath: '/',
  devServer: {
    host: 'localhost',
    port: 6999,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/variables.scss";',
      },
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
      ],
    },
    themeColor: '#1da025',
  },
}
