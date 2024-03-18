import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { IBuildOptions } from './types/types'

export const buildDevServer = (
	options: IBuildOptions
): DevServerConfiguration => {
	return {
		//5-й шаг
		port: options.port ?? 3000,
		open: true,
		//шаг 10-й react-router-dom
		//чтобы работал роутинг (react-router-dom)
		//если раздавать статику через nginx(deploy), то необходимо делать проксирование index.html это важно!!!
		historyApiFallback: true,
	}
}
