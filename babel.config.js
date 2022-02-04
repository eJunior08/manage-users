module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@assets': './src/assets',
          '@contexts': './src/contexts',
          '@shared': './src/shared',
          '@reducer': './src/reducer',
          '@router': './src/router',
          '@domain': './src/domain',
          '@models': './src/models',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
