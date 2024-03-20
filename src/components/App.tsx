import { Link, Outlet } from 'react-router-dom'
import AvatarPng from '@/assets/avatar.png' // чтобы TS корректно обрабатывал файлы с изображениями,нужно задекларировать типы в global.d.ts
import AvatarJpg from '@/assets/avatar.jpg'
import Image from '@/assets/app-image.svg'

import styles from './App.module.scss'
export const App = () => {
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
			</div>
		</>
	)
}
