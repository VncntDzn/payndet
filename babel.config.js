module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          components: './src/components',
          nav: './src/nav',
          screens: './src/screens',
          store: './src/store',
          hooks: './src/hooks',
          utils: './src/utils',
        },
      },
    ],
    'module:react-native-dotenv',
  ],
};
