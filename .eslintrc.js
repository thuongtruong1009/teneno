module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    ignorePatterns: ['.eslintrc.js'],
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended',
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        "vue",
        "@typescript-eslint",
        '@typescript-eslint/eslint-plugin'
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/explicit-member-accessibility": 0,
        'prettier/prettier': ['off', { singleQuote: true }],
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-var-requires": 0
    },
    overrides: [{
        files: [
            "cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"
        ],
        extends: [
            "plugin:cypress/recommended"
        ]
    }]
}
