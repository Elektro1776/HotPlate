const scssParser = require('postcss-scss').parse;

// const root = postcss.parse(scss, { parser: syntax });
module.exports = {
  generateScopedName: '[name]__[local]___[hash:8]',
  extensions: ['.scss'],
  processorOpts: { parser: scssParser },
  devMode: true,
};
