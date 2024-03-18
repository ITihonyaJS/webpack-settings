import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { IBuildOptions } from './types/types'

export const buildLoaders = (
	options: IBuildOptions
): ModuleOptions['rules'] => {
	const isDev = options.mode === 'development'
	//шаг 9-й устанавливаем и настраиваем работу с scss module
	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
			},
		},
	}
	const scssLoader =
		//7-й шаг установка лоадеров для стилей
		//порядок важен!!!
		{
			test: /\.s[ac]ss$/i,
			use: [
				// Creates `style` nodes from JS strings
				// вместо 'style-loader' ставим MiniCssExtractPlugin.loader,
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				// Translates CSS into CommonJS
				cssLoaderWithModules,
				// Compiles Sass to CSS
				'sass-loader',
			],
		}
	//ts-loader умеет работать с jsx
	//если бы мы не использ typescript, ещ пришлось бы кстанавливать babel-loader
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	//порядок важен!!!
	return [scssLoader, tsLoader]
}
