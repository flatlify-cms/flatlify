require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        targets: {
          node: '10',
        },
      },
    ],
    'react',
    'stage-1',
    'es2015',
  ],
});

require('./server/index');
