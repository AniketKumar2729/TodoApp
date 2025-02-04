module.exports = {
  presets: ['module:@react-native/babel-preset','nativewind/babel'],
  plugins: [
    ['module:react-native-dotenv',{
      moduleName: '@env',
        path: '.env',
    }],
    'react-native-paper/babel', // Move it outside to apply in all environments
  ],
};
