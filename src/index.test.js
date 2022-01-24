const { onPostBuild } = require('./index');

onPostBuild({
  constants: {
    URL: 'https://deploy-preview-133--publit-webshop.netlify.app',
  },
  inputs: {
    audits: [
      {
        path: '/sv/webshop/w_2',
      },
    ],
  },
});
