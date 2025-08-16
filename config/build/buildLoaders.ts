import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  // если не использууем ts - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /nonde_modules/
  }

  const cssModuleLoader = {
    test: /\.s[ac]ss$/i,
    // test: /\.module\.s[ac]ss$/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64]:5' : '[hash:base64:8]'
          },
          esModule: true,
        },
      },
      "sass-loader",
    ],
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
        },
      },
      "sass-loader",
    ],
    exclude: /\.module\.scss$/,
  }

  return [
    typescriptLoader,
    cssModuleLoader,
    // cssLoader,
  ]
}