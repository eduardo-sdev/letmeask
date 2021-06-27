import { createContext, useState, useEffect, ReactNode } from 'react'

type ThemeContextProps = 'light' | 'dark'

type ThemeContextProviderProps = {
    children: ReactNode
}

type ThemeContextType = {
    theme: ThemeContextProps
    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider(props: ThemeContextProviderProps) {
    const [ currentTheme, setCurrentTheme ] = useState<ThemeContextProps>(() => {
        const storagedTheme = localStorage.getItem('theme')

        return (storagedTheme ??'light') as ThemeContextProps

    })

    useEffect(() => {
        localStorage.setItem('theme', currentTheme)

    }, [currentTheme])

    function toggleTheme() {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')

    }

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

