exports.config = {
  namespace: 'internalwebcomponentsrouter',
  outputTargets:[
    { 
      type: 'dist' 
    },
    { 
      type: 'www',
      serviceWorker: false
    }
  ]
};