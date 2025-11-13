import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { LanguageSelect } from '@/lang/lang_btn'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import user from '../../assets/test.avif'
import { useTheme } from '../../theme/useTheme'

const Setting = () => {
	const { theme, toggleTheme } = useTheme()
	const themer = localStorage.getItem('theme') || 'light'
	const { t } = useTranslation('common')

	const [notifications, setNotifications] = useState(true)
	const [voice, setVoice] = useState(false)

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
					<CardTitle>{t('theme')}</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>
						{themer == 'light' ? t('light_mode') : t('dark_mode')}{' '}
						{t('enable_mode')}
					</Label>
					<Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
				</CardContent>
			</Card>

			{/* Notification Section */}
			<Card>
				<CardHeader>
					<CardTitle>{t('notifications')}</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>{t('notificationser')}</Label>
					<Switch
						checked={notifications}
						onCheckedChange={v => {
							setNotifications(v)
						}}
					/>
				</CardContent>
			</Card>

			{/* Voice Section */}
			<Card>
				<CardHeader>
					<CardTitle>{t('sound_function')}</CardTitle>
				</CardHeader>
				<CardContent className='flex items-center justify-between'>
					<Label>{t('enable_sound')}</Label>
					<Switch
						checked={voice}
						onCheckedChange={v => {
							setVoice(v)
						}}
					/>
				</CardContent>
			</Card>

			{/* Language Section */}
			<LanguageSelect />

			{/* Profile Section */}
			<Card>
				<CardHeader>
					<CardTitle>{t('profile_info')}</CardTitle>
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
								<b>{t('first_name')}</b> {profile.firstName}
							</p>
							<p>
								<b>{t('last_name')}</b> {profile.lastName}
							</p>
							<p>
								<b>{t('middle_name')}</b> {profile.fatherName}
							</p>
							<p>
								<b>{t('age')}</b> {profile.age}
							</p>
							<p>
								<b>{t('position')}</b> {profile.position}
							</p>
						</div>
					</div>

					<Separator className='my-3' />

					<div className='space-y-2 text-sm'>
						<p>
							<b>{t('gmail')}</b> {profile.email}
						</p>
						<p>
							<b>{t('bio')}</b> {profile.bio}
						</p>
						<p>
							<b>{t('password')}</b> {profile.password}
						</p>
					</div>

					<Button variant='outline' className='mt-4'>
						{t('edit')}
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}

export default Setting
