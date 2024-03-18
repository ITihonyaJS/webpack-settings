import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'
export const App = () => {
	return (
		<div className={styles.root}>
			<Link to='/about'>About</Link>
			<br />
			<Link to='/shop'>Shop</Link>
			<br />
			Hello World
			<Outlet />
		</div>
	)
}
