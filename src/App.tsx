import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<div className='bg-white  dark:bg-black'>
			<Outlet />
		</div>
	)
}

export default App
