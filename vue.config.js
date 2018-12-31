module.exports = {
    devServer: {
        proxy: {
            '/api/v1': {
                target: 'http://localhost:8000',
                // target: 'http://hyf.shangjian.tech:8000/',
            }
        }
    }
}
