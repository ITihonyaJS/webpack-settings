import { PluginItem } from '@babel/core'

//шаг 16-й Babel(как альтернатива ts-loader) + plugin для него
//Создаём плагин для удаления атрибутов data-testid при продакшен сборке
//атрибуты были созданы для тестирования приложения и режиме разработки они нужны и важны,но вот в продакшене они не нужны

//Для использования и создания plugin необходимо установить типы npm i @types/babel__core
export const removeDataTestIdPlugin = (): PluginItem => {
	return {
		visitor: {
			Program(path, state) {
				//те элементы(props) которые нужно недопустить в прод сборку(data-testid)
				const forbiddenProps = state.opts.props || []
				//ищем наши data-testid
				path.traverse({
					JSXIdentifier(current) {
						//ищем ноду,чтобы убедится что это именно data-testid
						const nodeName = current.node.name
						if (forbiddenProps.includes(nodeName)) {
							//если убедились и нашли...удаляем
							current.parentPath.remove()
						}
					},
				})
			},
		},
	}
}
