import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
//анализирует размер главного bandle.js(build/main.....js)
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { IBuildOptions } from './types/types'

export const buildPlugins = ({
	mode,
	paths,
	analyze,
}: IBuildOptions): Configuration['plugins'] => {
	const isDev = mode === 'development'
	const isProd = mode === 'production'
	const plugins: Configuration['plugins'] = [
		//3-й шаг.Подставляет скрипты которые получаются в результате сборки в наш html
		new HtmlWebpackPlugin({
			//путь до основного html файла(id root)
			// template: path.resolve(__dirname, 'public', 'index.html'),
			template: paths.html,
		}),
	]
	if (isDev) {
		//default плагин для отображения процесса сборки в процентах.new указываем для того чтобы нам получить объект.В продакшене не рекменд,т.к. сильно замедляет сборку!!!
		plugins.push(new webpack.ProgressPlugin())
	}
	if (isProd) {
		//8-й шаг устанавливаем плагин чтобы вынести scss файлы при сборке в отдельную папку и файл для удобства
		plugins.push(
			new MiniCssExtractPlugin({
				//добавляем опции,например для того как будут выглядеть файлы сcss после сборки
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		)
	}
	if (analyze) {
		//шаг 10-й анализируем размер bandle после сборки проекта в prod
		//в dev режиме нет смысла,т.к. bandle всё равно не минимизирован
		plugins.push(new BundleAnalyzerPlugin())
	}
	return plugins
}
