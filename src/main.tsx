import '@/styles/globals.css'
import '@radix-ui/themes/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRouter from './routing/router'
import { ThemeProvider } from './theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AppRouter />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
