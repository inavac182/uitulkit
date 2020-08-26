module.exports = {
  extends: 
  [
      '@commitlint/config-conventional'
  ],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [
      2,
      'always',
      [
        'button',
        'card',
        'docs',
        'icons-wrapper',
        'misc',
        'release',
        'themes',
        'grid',
        'foundation',
        'demo',
        'view',
        'text',
        'list'
      ]
    ]
  }
}
