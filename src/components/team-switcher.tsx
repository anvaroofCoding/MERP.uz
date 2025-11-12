'use client'

import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar'
import logo1 from '../assets/logo2.png'

export function TeamSwitcher() {
	const { isMobile } = useSidebar()

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size='lg'
							className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
						>
							<div className=' text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
								<img src={logo1} alt='' />
							</div>
							<div className='grid flex-1 text-left text-sm leading-tight'>
								<span className='truncate font-medium'>Metropoliten</span>
								<span className='truncate text-xs'>ERP sistemasi</span>
							</div>
						</SidebarMenuButton>
					</DropdownMenuTrigger>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}
