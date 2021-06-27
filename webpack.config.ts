import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  target: 'node',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
    contentBase: '/dist/bundle.js',
    compress: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

export default config;
