module.exports = {
    plugins: [
        require.resolve('@trivago/prettier-plugin-sort-imports'),
        require.resolve('prettier-plugin-tailwindcss'),
    ],
    // printWidth: 80,
    printWidth: 100,
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
}
