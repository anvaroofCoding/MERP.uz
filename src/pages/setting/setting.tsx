import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import user from '../../assets/test.avif'
import { useTheme } from '../../theme/useTheme'

const Setting = () => {
	const { theme, toggleTheme } = useTheme()
	const themer = localStorage.getItem('theme') || 'light'

	const [notifications, setNotifications] = useState(true)
	const [voice, setVoice] = useState(false)
	const [locale, setLocale] = useState('uz')

	const handleLanguageSelect = (lang: string) => {
		setLocale(lang)
		console.log('Language selected:', lang)
	}

	const profile = {
		firstName: 'Islomjon',
		lastName: 'Anvarov',
		fatherName: 'Toxir o‘g‘li',
		age: 20,
		position: 'Frontend Developer Intern',
		email: 'islomjon@example.com',
		bio: 'Men React va Next.js bilan ishlovchi frontend dasturchiman.',
		password: '********',
		image: user,
	}

	return (
		<div className='p-6 space-y-6'>
			<Card>
				<CardHeader>
					<CardTitle>Mavzuni belgilang</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>
						{themer == 'light' ? 'Oq rangli' : 'Qora rangli'} rejimni yoqish
					</Label>
					<Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
				</CardContent>
			</Card>

			{/* Notification Section */}
			<Card>
				<CardHeader>
					<CardTitle>Bildirishnomalar (Notifications)</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>Bildirishnomalarni yoqish/o‘chirish</Label>
					<Switch
						checked={notifications}
						onCheckedChange={v => {
							setNotifications(v)
							console.log('Notifications:', v)
						}}
					/>
				</CardContent>
			</Card>

			{/* Voice Section */}
			<Card>
				<CardHeader>
					<CardTitle>Ovoz funksiyasi</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>Ovozli funksiyani yoqish/o‘chirish</Label>
					<Switch
						checked={voice}
						onCheckedChange={v => {
							setVoice(v)
							console.log('Voice:', v)
						}}
					/>
				</CardContent>
			</Card>

			{/* Language Section */}
			<Card>
				<CardHeader>
					<CardTitle>Til sozlamalari</CardTitle>
				</CardHeader>
				<CardContent>
					<Dialog>
						<DialogTrigger asChild>
							<Button variant='outline'>Tilni tanlash</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Tilni tanlang</DialogTitle>
							</DialogHeader>
							<div className='space-y-3'>
								<Button
									onClick={() => handleLanguageSelect('uz')}
									className='w-full'
								>
									O‘zbek
								</Button>
								<Button
									onClick={() => handleLanguageSelect('en')}
									className='w-full'
								>
									English
								</Button>
								<Button
									onClick={() => handleLanguageSelect('ru')}
									className='w-full'
								>
									Русский
								</Button>
							</div>
						</DialogContent>
					</Dialog>
					<p className='mt-3 text-sm text-gray-500'>
						Joriy til: {locale.toUpperCase()}
					</p>
				</CardContent>
			</Card>

			{/* Profile Section */}
			<Card>
				<CardHeader>
					<CardTitle>Profil ma’lumotlari</CardTitle>
				</CardHeader>
				<CardContent>
					<div className='flex items-center gap-4 mb-4'>
						<img
							src={profile.image}
							alt='Profile'
							className='w-20 h-20 rounded-full object-cover border'
						/>
						<div>
							<p>
								<b>Ism:</b> {profile.firstName}
							</p>
							<p>
								<b>Familiya:</b> {profile.lastName}
							</p>
							<p>
								<b>Otasining ismi:</b> {profile.fatherName}
							</p>
							<p>
								<b>Yosh:</b> {profile.age}
							</p>
							<p>
								<b>Lavozim:</b> {profile.position}
							</p>
						</div>
					</div>

					<Separator className='my-3' />

					<div className='space-y-2 text-sm'>
						<p>
							<b>Gmail:</b> {profile.email}
						</p>
						<p>
							<b>Bio:</b> {profile.bio}
						</p>
						<p>
							<b>Parol:</b> {profile.password}
						</p>
					</div>

					<Button variant='outline' className='mt-4'>
						Tahrirlash
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}

export default Setting
