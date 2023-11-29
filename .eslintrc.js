module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
 "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: false,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "type",
          "builtin",
          "object",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
  },
}
