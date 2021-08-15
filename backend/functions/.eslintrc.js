module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "root": true,
  "parserOptions": {
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
  },
  "plugins": [
    "import",
    "prettier",
    "react-hooks", 
    "@typescript-eslint"
  ],
  // "include": ["src/**/*.ts", "src/**/*.js"],
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "airbnb"
  ],
  "ignorePatterns": [
    "/lib/**/*" // Ignore built files.
  ],
  "rules": {
    "import/no-cycle": [2, { "maxDepth": 1 }],
    "lines-between-class-members": "off",
    "import/export": "off",
    "import/prefer-default-export": "off",
    "import/extensions": 0,
    "consistent-return": 0,
    "no-plusplus": "off",
    "no-param-reassign": ["error", { "props": false }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "react/prop-types": "off",
    "react/no-unescaped-entities": 0,
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "printWidth": 100,
        "singleQuote": true
      }
    ],
    "no-underscore-dangle": ["error", { "allow": ["__env__"] }],
    "comma-dangle": [2, "always-multiline"] ,
  }
}
