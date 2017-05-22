module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /bbc-news/,
    handler: 'networkFirst',
    options: {
      cache:{
      name: 'bbc-cache',
      maxEnteries: 10,
      maxAgeSeconds: 300
      }
    }
  },
  {
    urlPattern: /cnn/,
    handler: 'cacheFirst',
    options: {
      cache:{
      name: 'cnn-cache',
      maxEnteries: 10,
      maxAgeSeconds: 300
       }
    }
  },
  {
    urlPattern: /mashable/,
    handler: 'fastest',
    options: {
      cache:{
      name: 'mashable',
      maxEnteries: 10,
      maxAgeSeconds: 300
      }
    }
  },
  {
    urlPattern: /fortune/,
    handler: 'cacheOnly',
    options: {
      cache:{
      name: 'fortune',
      maxEnteries: 10,
      maxAgeSeconds: 300
      }
    }
  },
  {
    urlPattern: /cnbc/,
    handler: 'networkOnly',
    options: {
      cache:{
      name: 'cnbc',
      maxEnteries: 10,
      maxAgeSeconds: 300
      }
    }
  }]
};
