//шаг 8-й добавляем scss module
//создаём данный файл global.d.ts с декларациями типов
declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}
