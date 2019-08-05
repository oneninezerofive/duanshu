module.exports = {
  presets: [
    '@vue/app'
  ],
  'presets': [['env', { 'modules': false }]],
  'plugins': [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
