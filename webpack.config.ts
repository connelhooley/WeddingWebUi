import path from "path";
import { Configuration, ProvidePlugin } from "webpack";
import autoprefixer from "autoprefixer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default {
    mode: "development",
    entry: "./src/scripts/main.tsx",
    output: {
        filename: "assets/js/[name]-[hash].js",
        path: path.resolve(__dirname, "docs"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "last 2 versions"
                                    ],
                                })
                            ],
                        },
                    },
                    {
                        loader: "sass-loader", 
                        options: { 
                            sourceMap: true 
                        },
                    }
                ],
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/fonts/[name]-[hash].[ext]",
                },
            },
            {
                test: /\.(gif|png)$/,
                loader: "file-loader",
                options: {
                    name: "./assets/images/[name]-[hash].[ext]",
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                js: {
                    test: /node_modules/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        },
    },
    resolve: {
        extensions: [
            ".js",
            ".ts",
            ".tsx",
            ".scss",
        ],
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        port: 9000,
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/template.html",
            minify: false,
            chunks: [
                "vendor",
                "main",
            ],
        }),
        new HtmlWebpackPlugin({
            filename: "404.html",
            template: "./src/template.html",
            minify: false,
            chunks: [
                "vendor",
                "main",
            ],
        }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name]-[hash].css",
        }),
        new CleanWebpackPlugin("./docs"),
        new CopyWebpackPlugin([
            {
                from:'./src/CNAME',
                to:'.'
            }
        ])
    ],
} as Configuration;
