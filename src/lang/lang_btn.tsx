import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSelect = () => {
	const { i18n } = useTranslation()
	const [locale, setLocale] = useState(i18n.language)

	const handleLanguageSelect = (lang: string) => {
		i18n.changeLanguage(lang)
		localStorage.setItem('lang', lang) // saqlash uchun
		setLocale(lang)
	}

	useEffect(() => {
		const savedLang = localStorage.getItem('lang')
		if (savedLang) {
			i18n.changeLanguage(savedLang)
			setLocale(savedLang)
		}
	}, [])

	return (
		<div>
			<Select value={locale} onValueChange={handleLanguageSelect}>
				<SelectTrigger>
					<SelectValue placeholder='Til tanlang' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='uz'>🇺🇿 O‘zbekcha</SelectItem>
					<SelectItem value='en'>🇬🇧 English</SelectItem>
					<SelectItem value='ru'>🇷🇺 Русский</SelectItem>
				</SelectContent>
			</Select>
			<p className='mt-2 text-sm text-gray-500'>Joriy til: {locale}</p>
		</div>
	)
}
