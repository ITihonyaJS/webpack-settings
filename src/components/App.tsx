import { Link, Outlet } from 'react-router-dom'
import AvatarPng from '@/assets/avatar.png' // чтобы TS корректно обрабатывал файлы с изображениями,нужно задекларировать типы в global.d.ts
import AvatarJpg from '@/assets/avatar.jpg'
import Image from '@/assets/app-image.svg'

import styles from './App.module.scss'
const funnnnn = () => {
	console.log('TREE SHAKING')
}
export const App = () => {
	//шаг 12-й глобальные переменные
	// if (__PLATFORM__ === 'desktop') {
	// 	funnnnn()
	// 	return <h2>IS DESKTOP</h2>
	// }
	// if (__PLATFORM__ === 'mobile') {
	// 	return <h2>IS MOBILE</h2>
	// }
	// if (__ENV_BUILD__ === 'development') {
	// 	//как пример
	// 	//devTools()
	// }

	return (
		<>
			<div className={styles.root}>
				<Link to='/about'>About</Link>
				<br />
				<Link to='/shop'>Shop</Link>
				<br />
				Hello World
			</div>
			<div>
				<img width={100} height={100} src={AvatarPng} alt='png'></img>
				<img width={100} height={100} src={AvatarJpg} alt='jpg'></img>
				<div>
					<Image style={{ color: 'green' }} width={50} height={50} />
				</div>
				<h2>Platform= {__PLATFORM__}</h2>
			</div>
		</>
	)
}
