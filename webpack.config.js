const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const cssLoaderOptions = {
    modules: {
        localIdentName: '[path][name]__[local]-[hash:base64:5]',
        getLocalIdent: (context, localIdentName, localName, options) => {
            // `context` 是 CSS 文件的上下文，例如文件路径
            // `localIdentName` 是预设的类名名称
            // `localName` 是实际的类名
            // `options` 是 CSS Loader 的选项

            // return // hash 化後的 id
        },
    }
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: './dist',
        open: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/, // 哪些模組要使用
                loader: 'vue-loader', // 要做哪些處理
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: cssLoaderOptions
                    },
                    'sass-loader'
                ]
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // enable CSS Modules
                            modules: {
                                // customize generated class names
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        },
        fallback: {
            path: require.resolve('path-browserify')
        },
    }
};