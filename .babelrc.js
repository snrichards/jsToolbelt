const plugins = [
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-syntax-object-rest-spread',
];

if (process.env.NODE_ENV === 'test') {
  plugins.push('transform-es2015-modules-commonjs');
}

module.exports = {
  plugins,
  presets: [
    '@babel/stage-2',
    [
      '@babel/env',
      {
        modules: false,
        target: {
          browsers: 'ie >= 11',
        },
      },
    ],
  ],
};