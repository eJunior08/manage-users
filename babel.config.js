module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@shared': './src/shared',
          '@router': './src/router',
          '@domain': './src/domain',
          '@models': './src/models',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
