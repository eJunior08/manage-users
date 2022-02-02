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
          '@domain': './src/domain',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@reducer': './src/reducer',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@services': './src/services',
          '@models': './src/models',
          '@hooks': './src/hooks',
          '@test': './src/test',
          '@analytics': './src/analytics',
        },
      },
    ],
  ],
};
