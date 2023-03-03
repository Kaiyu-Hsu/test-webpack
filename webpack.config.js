const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const compiler = require('vue-template-compiler')

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
                options: {
                    compilerModules: [
                        // compiler.compile(template:'Hello',
                        // opitons:{})
                    ], // vue-template-compiler modules options
                    // compilerDirectives: {}, // vue-template-compiler directives options
                }
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
                    'css-loader',
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
                                localIdentName: '[path]_[hash:base64:8]'
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
        }
    }
};