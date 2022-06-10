module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        eqeqeq: [2],
    },
};
