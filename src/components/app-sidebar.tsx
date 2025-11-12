'use client'

import {
	BookOpen,
	ChartNoAxesCombined,
	Gauge,
	Map,
	PieChart,
	ScanSearch,
	Settings2,
	UserLock,
} from 'lucide-react'
import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { NavProjects } from '@/components/nav-projects'
import { NavUser } from '@/components/nav-user'
import { TeamSwitcher } from '@/components/team-switcher'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar'
import test from '../assets/test.avif'

const data = {
	user: {
		name: 'Islomjon Anvarov',
		email: 'islomanvarov05@gmail.com',
		avatar: test,
	},
	navMain: [
		{
			title: 'Barcha Dashboard',
			url: '#',
			icon: Gauge,
			isActive: true,
			items: [
				{
					title: 'Raxbar Dashboard',
					url: '/Barcha Dashboard/Raxbar Dashboard',
				},
				{
					title: 'Kompleks Dashboard',
					url: '/Barcha Dashboard/Kompleks Dashboard',
				},
				{
					title: 'Tarkibiy Tuzilma Dashboard',
					url: '/Barcha Dashboard/Tarkibiy Tuzilma Dashboard',
				},
				{
					title: 'Admin Dashboard',
					url: '/Barcha Dashboard/Admin Dashboard',
				},
			],
		},
		{
			title: 'Monitoring',
			url: '#',
			icon: ChartNoAxesCombined,
			items: [
				{
					title: 'Metropoliten Monitoring',
					url: '#',
				},
				{
					title: 'Kompleks Monitoring',
					url: '#',
				},
			],
		},
		{
			title: 'Hujjatlar',
			url: '#',
			icon: BookOpen,
			items: [
				{
					title: 'Nizom va Struktura',
					url: '#',
				},
				{
					title: 'Kompleks hujjatlari',
					url: '#',
				},
				{
					title: 'Tarkibiy Tuzilma hujjatlari',
					url: '#',
				},
				{
					title: 'Changelog',
					url: '#',
				},
			],
		},
		{
			title: 'Administrator uchun',
			url: '#',
			icon: UserLock,
			items: [
				{
					title: "Bir martalik o'zgarishlar",
					url: '#',
				},
				{
					title: "Yangiliklar qo'shish",
					url: '#',
				},
			],
		},
		{
			title: 'Barcha Sozlamalar',
			url: '#',
			icon: Settings2,
			items: [
				{
					title: 'Sozlamalar',
					url: '/Barcha Sozlamalar/Sozlamalar',
				},
				{
					title: 'Foydali Havolalar',
					url: '#',
				},
			],
		},
	],
	projects: [
		{
			name: "Komplekslar ko'rsatkichlari",
			url: '#',
			icon: PieChart,
		},
		{
			name: 'Komplekslar haqida',
			url: '#',
			icon: ScanSearch,
		},
		{
			name: 'Tuzilma haqida',
			url: '#',
			icon: Map,
		},
		{
			name: 'Dastur haqida',
			url: '#',
			icon: Map,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
