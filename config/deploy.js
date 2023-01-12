module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'learn-ember',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
