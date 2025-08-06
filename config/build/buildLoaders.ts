import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /nonde_modules/
  }

  return [
    typescriptLoader,
  ]
}