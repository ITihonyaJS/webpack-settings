import webpack from 'webpack'
import path from 'path'
import { buildWebpack } from './config/build/buildWebpack'
import { TBuildMode } from './config/build/types/types'

interface IEnvVariables {
	mode: TBuildMode
	port: number
	analyze: boolean
}

export default (env: IEnvVariables) => {
	console.log(env, 'env')
	const paths = {
		//путь до исполняемого файла __dirname(текущая дир),"src","index.js"(склеиваем пути)
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		//куда и как будет происходить сборка
		output: path.resolve(__dirname, 'build'),
		//путь до основного html файла(id root)
		html: path.resolve(__dirname, 'public', 'index.html'),
		//путь для alias ('@')
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		paths,
		analyze: env.analyze,
	})
	return config
}
