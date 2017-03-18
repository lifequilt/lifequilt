module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    /* Advanced Rules*/
    "import/no-named-default": "off",
    "react/jsx-tag-spacing": "off",
    "react/no-array-index-key": "off",
    "no-unused-expressions": ["warn", { "allowTernary": true }],
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "arrow-parens": ["error", "as-needed"],
    "max-len": "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "no-constant-condition": "off",
    "consistent-return": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "global-require": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/require-default-props": "off",
    "react/jsx-no-bind": "off",
    "react/no-danger": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
  }
};
