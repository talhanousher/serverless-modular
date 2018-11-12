const deployCommands = {
  usage: 'Helps you lay deploy in parallel or in sequence',
  lifecycleEvents: [
    'deployHandler'
  ],
  options: {
    'sm-parallel': {
      usage:
        'Specify if you want to deploy parallel '
        + '(e.g. "--parallel \'true\'" or "-p \'true\'")',
    },
    'sm-scope': {
      usage:
        'Specify if you want to deploy local features or global '
        + '(e.g. "--scope \'local\'" or "-s \'global\'")',
    },
    'sm-features': {
      usage:
        'Specify the local features you want to deploy '
        + '(e.g. "--feature \'users\'" or "-f \'users\'")',
    }
  }
};

module.exports = deployCommands;
