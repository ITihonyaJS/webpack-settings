interface IBuildPath {
	entry: string
	html: string
	output: string
	src: string
}

export type TBuildMode = 'production' | 'development'

export interface IBuildOptions {
	mode: TBuildMode
	port: number
	paths: IBuildPath
	analyze: boolean
}
