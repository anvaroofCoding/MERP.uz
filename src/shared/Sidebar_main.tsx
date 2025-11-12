import { AppSidebar } from '@/components/app-sidebar'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { useLocation } from 'react-router-dom'
import App from '../App'

export default function SidebarJsx() {
	const location = useLocation() // 🔹 location hook
	const paths = location.pathname

	const decoded = decodeURIComponent(paths)
	const parts = decoded.split('/')

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
					<div className='flex items-center gap-2 px-4'>
						<SidebarTrigger className='-ml-1' />
						<Separator
							orientation='vertical'
							className='mr-2 data-[orientation=vertical]:h-4'
						/>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem className='hidden md:block'>
									<BreadcrumbLink href={paths}>{parts[1]}</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator className='hidden md:block' />
								<BreadcrumbItem>
									<BreadcrumbPage>{parts[2]}</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
					<App />
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
