module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb','plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'no-console': ['off'],
    'react/jsx-props-no-spreading': ['warn'],
  },
  settings: {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src"]]
      }
    }
  }
};
