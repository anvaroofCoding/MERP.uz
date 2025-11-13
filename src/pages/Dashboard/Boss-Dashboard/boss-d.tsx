import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Activity,
	FileText,
	ShoppingCart,
	User2Icon,
	Users,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import userImg from '../../../assets/test.avif'

const BossD = () => {
	const { t } = useTranslation('common')

	const stats = [
		{
			title: t('1'),
			value: '1,245',
			progress: 75,
			icon: <Users size={24} />,
		},
		{
			title: t('2'),
			value: '$12,345',
			progress: 50,
			icon: <User2Icon size={24} />,
		},
		{
			title: t('3'),
			value: '23',
			progress: 30,
			icon: <ShoppingCart size={24} />,
		},
		{
			title: t('4'),
			value: '23',
			progress: 60,
			icon: <Activity size={24} />,
		},
	]

	const users = [
		{
			name: 'Islomjon Anvarov',
			email: 'islomjon@example.com',
			status: 'Active',
		},
		{
			name: 'Abdusamadjjon Usmonov',
			email: 'abdus@example.com',
			status: 'Active',
		},
		{
			name: 'Shoxrux Xudoyberdiyev',
			email: 'shoxrux@example.com',
			status: 'Inactive',
		},
	]

	const projects = [
		{ name: 'Project A', progress: 80 },
		{ name: 'Project B', progress: 45 },
		{ name: 'Project C', progress: 60 },
		{ name: 'Project D', progress: 25 },
	]

	return (
		<div className='p-6 space-y-6'>
			{/* Top Stats */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
				{stats.map((stat, idx) => (
					<Card key={idx} className='flex flex-col justify-between'>
						<CardHeader className='flex items-center gap-2'>
							{stat.icon}
							<CardTitle>{stat.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-3xl font-bold'>{stat.value}</p>
							<Progress value={stat.progress} className='mt-2' />
						</CardContent>
					</Card>
				))}
			</div>

			<Separator />

			{/* Tabs Section */}
			<Tabs defaultValue='users' className='space-y-4'>
				<TabsList>
					<TabsTrigger value='users'>{t('5')}</TabsTrigger>
					<TabsTrigger value='projects'>{t('6')}</TabsTrigger>
					<TabsTrigger value='reports'>{t('7')}</TabsTrigger>
					<TabsTrigger value='settings'>{t('8')}</TabsTrigger>
				</TabsList>

				{/* Users Tab */}
				<TabsContent value='users'>
					<Card>
						<CardHeader>
							<CardTitle>{t('9')}</CardTitle>
						</CardHeader>
						<CardContent>
							<ScrollArea className='h-52'>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>{t('10')}</TableHead>
											<TableHead>{t('11')}</TableHead>
											<TableHead>{t('12')}</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{users.map((user, idx) => (
											<TableRow key={idx}>
												<TableCell className='flex items-center gap-2'>
													<Avatar>
														<AvatarImage src={userImg} />
														<AvatarFallback>
															{user.name
																.split(' ')
																.map(n => n[0])
																.join('')}
														</AvatarFallback>
													</Avatar>
													{user.name}
												</TableCell>
												<TableCell>{user.email}</TableCell>
												<TableCell>
													<Badge
														variant={
															user.status === 'Active' ? 'secondary' : 'outline'
														}
													>
														{user.status}
													</Badge>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</ScrollArea>
						</CardContent>
						<CardFooter>
							<Button>{t('13')}</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				{/* Projects Tab */}
				<TabsContent value='projects'>
					<Card>
						<CardHeader>
							<CardTitle>{t('14')}</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							{projects.map((proj, idx) => (
								<div key={idx} className='flex justify-between items-center'>
									<p>{proj.name}</p>
									<Progress value={proj.progress} className='w-2/3' />
								</div>
							))}
						</CardContent>
					</Card>
				</TabsContent>

				{/* Reports Tab */}
				<TabsContent value='reports'>
					<Card>
						<CardHeader>
							<CardTitle>{t('15')}</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3'>
							<div className='flex items-center justify-between'>
								<FileText className='text-2xl' />
								<p>Report A</p>
								<Progress value={70} className='w-2/3' />
							</div>
							<div className='flex items-center justify-between'>
								<FileText className='text-2xl' />
								<p>Report B</p>
								<Progress value={40} className='w-2/3' />
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				{/* Settings Tab */}
				<TabsContent value='settings'>
					<Card>
						<CardHeader>
							<CardTitle>{t('16')}</CardTitle>
						</CardHeader>
						<CardContent className='space-y-4'>
							<Button variant='outline'>{t('17')}</Button>
							<Button variant='outline'>{t('18')}</Button>
							<Button variant='outline'>{t('19')}</Button>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default BossD
