module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        "eqeqeq": "error",
        "import/extensions": 0,
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "react/jsx-props-no-spreading": 0,
        "class-methods-use-this": 0,
        "react/prefer-stateless-function": 0,
        "react/jsx-fragments": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": 0,
        "no-console": [
            "warn",
            {
                "allow": ["warn", "error"]
            }
        ],
        "semi": "warn",
        "quotes": ["warn", "single"],
        "array-callback-return": [
            "warn",
            {
                "allowImplicit": true,
                "checkForEach": true
            }
        ],
        "no-trailing-spaces": "warn",
        "no-unused-vars": "warn",
        "default-case": "warn",
        "default-param-last": "warn",
        "no-alert": "warn",
        "no-constructor-return": "warn",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-new": "warn",
        "no-param-reassign": "warn",
        "no-sequences": "warn",
        "no-useless-concat": "warn",
        "prefer-promise-reject-errors": "warn",
        "require-await": "warn",
        "wrap-iife": ["warn", "inside"],
        "yoda": "warn",
        "no-shadow": "warn",
        "array-bracket-spacing": ["warn", "never"],
        "block-spacing": ["warn", "never"],
        "brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
        "capitalized-comments": ["warn"],
        "comma-dangle": ["warn", "only-multiline"],
        "comma-spacing": ["warn", {"before": false, "after": true}],
        "computed-property-spacing": ["warn", "never"],
        "eol-last": ["warn", "always"],
        "func-call-spacing": ["warn", "never"],
        "keyword-spacing": ["warn", {"before": true}],
        "line-comment-position": ["warn", {"position": "above"}],
        "lines-between-class-members": ["warn", "always"],
        "max-len": [
            "warn",
            {
                "code": 120,
                "ignoreComments": true,
                "ignoreUrls": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true
            }
        ],
        "multiline-comment-style": ["warn", "starred-block"],
        "new-cap": "warn",
        "new-parens": "warn",
        "newline-per-chained-call": ["warn", {"ignoreChainWithDepth": 3}],
        "no-bitwise": "warn",
        "no-inline-comments": "warn",
        "no-lonely-if": "warn",
        "no-multi-assign": "warn",
        "no-multiple-empty-lines": ["warn", {"max": 1}],
        "no-nested-ternary": "warn",
        "no-plusplus": "warn",
        "object-curly-spacing": ["warn", "never"],
        "object-property-newline": ["warn", {"allowAllPropertiesOnSameLine": true}],
        "key-spacing": ["warn", {"beforeColon": false, "afterColon": true}],
        "space-before-blocks": "warn",
        "space-before-function-paren": ["warn", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-in-parens": ["warn", "never"],
        "space-infix-ops": "warn",
        "arrow-parens": ["warn", "as-needed"],
        "arrow-spacing": "warn",
        "no-duplicate-imports": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "warn",
        "no-var": "warn",
        "prefer-const": "warn",
        "prefer-rest-params": "warn",
        "prefer-template": "warn",
        "template-curly-spacing": "warn"
    },
};
