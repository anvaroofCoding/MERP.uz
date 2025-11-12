import { Route, Routes } from 'react-router-dom'

import AdminD from '../pages/Dashboard/Admin-Dashboard/admin-d'
import BossD from '../pages/Dashboard/Boss-Dashboard/boss-d'
import CompleksD from '../pages/Dashboard/Compleks-Dashboard/compleks-d'
import StructualD from '../pages/Dashboard/Structural-Dashboard/structual-d'
import Setting from '../pages/setting/setting'
import SidebarJsx from '../shared/Sidebar_main'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<SidebarJsx />}>
				<Route path='/Barcha Sozlamalar/Sozlamalar' element={<Setting />} />
				<Route path='/Barcha Dashboard/Raxbar Dashboard' element={<BossD />} />
				<Route
					path='/Barcha Dashboard/Kompleks Dashboard'
					element={<CompleksD />}
				/>
				<Route
					path='/Barcha Dashboard/Tarkibiy Tuzilma Dashboard'
					element={<StructualD />}
				/>
				<Route path='/Barcha Dashboard/Admin Dashboard' element={<AdminD />} />
			</Route>
		</Routes>
	)
}

export default AppRouter
