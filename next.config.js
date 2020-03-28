module.exports = {
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-next': { page: '/post', query: { title: 'hello-nextjssss' } },
      '/p/learn-next': { page: '/post', query: { title: 'learn-nextjssss' } },
      '/p/deploy-next': { page: '/post', query: { title: 'deploy-nextjssss' } },
    }
  },

  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}