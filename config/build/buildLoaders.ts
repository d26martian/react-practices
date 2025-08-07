import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

  // если не использууем ts - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /nonde_modules/
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ],
  }

  return [
    typescriptLoader,
    cssLoader
  ]
}