import autoprefixer from "autoprefixer";
import CleanWebpackPlugin from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { Configuration, NormalModuleReplacementPlugin, ProvidePlugin } from "webpack";

export default function(env: "development" | "production"): Configuration {
    return {
        devServer: {
            historyApiFallback: true,
            port: 9000,
            publicPath: "/",
        },
        entry: "./src/scripts/main.tsx",
        mode: env,
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.ts?x$/,
                    use: "tslint-loader",
                },
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    use: "ts-loader",
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
                                plugins: () => [
                                    autoprefixer({
                                        browsers: [
                                            "last 2 versions",
                                        ],
                                    }),
                                ],
                                sourceMap: true,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    loader: "file-loader",
                    options: {
                        name: "./assets/fonts/[name]-[hash].[ext]",
                    },
                    test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                },
                {
                    loader: "file-loader",
                    options: {
                        name: "./assets/images/[name]-[hash].[ext]",
                    },
                    test: /\.(gif|png)$/,
                },
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    js: {
                        chunks: "all",
                        name: "vendor",
                        test: /node_modules/,
                    },
                },
            },
        },
        output: {
            filename: "assets/js/[name]-[hash].js",
            path: path.resolve(__dirname, "docs"),
            publicPath: "/",
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                minify: false,
                template: "./src/template.html",
            }),
            new HtmlWebpackPlugin({
                filename: "404.html",
                minify: false,
                template: "./src/template.html",
            }),
            new ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            }),
            new MiniCssExtractPlugin({
                filename: "assets/css/[name]-[hash].css",
            }),
            new CleanWebpackPlugin("./docs"),
            new CopyWebpackPlugin([
                {
                    from: "./src/CNAME",
                    to: ".",
                },
            ]),
            new NormalModuleReplacementPlugin(/(.*)CURRENT_ENV(\.*)/, (resource: any) => {
                resource.request = resource.request.replace(/CURRENT_ENV/, env);
            }),
        ],
        resolve: {
            extensions: [
                ".js",
                ".ts",
                ".tsx",
                ".scss",
                ".css",
            ],
        },
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 1000,
        },
    };
}
