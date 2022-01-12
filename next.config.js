const path = require('path')

module.exports = {
    env: {

        GRAPH_URL: process.env.GRAPH_URL,

    

    },

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}