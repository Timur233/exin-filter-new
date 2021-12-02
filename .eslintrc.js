module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      //'plugin:vue/vue3-recommended',
      'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    "rules": {
        "max-len": ["error", 120, 4, { "ignoreComments": true }],
        "func-names": ["error", "never"],
        "indent": ["error", 4, { "SwitchCase": 1, "ignoredNodes": ["TemplateLiteral"] }],
        "key-spacing": ["error", { "align": "value" }],
        "no-multi-spaces": ["error", { "exceptions": { "VariableDeclarator": true, "ImportDeclaration": true } }],
        "no-new": "off",
        "no-param-reassign": "off",
        "linebreak-style": "off",
        "no-underscore-dangle": ["error", { "enforceInMethodNames": false, "allowAfterThis": true }],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev":      "*",
                "next":      "return"
            },
            {
                "blankLine": "always",
                "prev":      [
                    "const",
                    "let",
                    "var"
                ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev":      [
                    "const",
                    "let",
                    "var"
                ],
                "next": [
                    "const",
                    "let",
                    "var"
                ]
            },
            {
                "blankLine": "always",
                "prev":      "if",
                "next":      "*"
            },
            {
                "blankLine": "always",
                "prev":      "*",
                "next":      "if"
            },
            {
                "blankLine": "always",
                "prev":      "import",
                "next":      "*"
            },
            {
                "blankLine": "any",
                "prev":      "import",
                "next":      "import"
            },
            {
                "blankLine": "always",
                "prev":      "*",
                "next":      "export"
            }
        ],
        "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }]
    }
  }