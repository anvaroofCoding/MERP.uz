import { ReactNode, useEffect, useState } from 'react'

type ThemeProviderProps = {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<'light' | 'dark'>(
		(localStorage.getItem('theme') as 'light' | 'dark') || 'light'
	)

	// Sahifa yuklanganda yoki theme o‘zgarganda document.class qo‘shish
	useEffect(() => {
		const root = window.document.documentElement
		if (theme === 'dark') root.classList.add('dark')
		else root.classList.remove('dark')

		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	// children ni theme + toggleTheme bilan uzatish
	return (
		<>
			{typeof children === 'function'
				? children({ theme, toggleTheme })
				: children}
		</>
	)
}
