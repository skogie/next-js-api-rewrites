module.exports = {
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/api/book/:id',
                    destination: '/bookstore/book/:id'
                }
            ]
        }
    }
};
