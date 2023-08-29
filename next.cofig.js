module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_APP_SERVER: process.env.NEXT_APP_SERVER
  },
  rewrites(){
    return{
      beforeFiles: [
        {
          source: '/:path*',
          has: [{
            type: 'host',
            value: 'jobs.jlarteaga.com'
          },],
          destination: '/app/:path',
        }
      ]
    }
  }
}
