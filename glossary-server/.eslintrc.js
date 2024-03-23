module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2021: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'prettier/prettier': ['warn', { endOfLine: 'off' }],
        'no-unused-vars': 'warn'
    }
};
