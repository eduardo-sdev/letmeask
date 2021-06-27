import Switch from 'react-switch'

import { RoomCode } from '../../components/RoomCode'

import { Container } from './styles'
import logoImg from '../../assets/images/logo.svg'
import { useTheme } from '../../hooks/useTheme'

type HeaderProps = {
    codeId: string
    toggleTheme(): void
}

export function Header({
    codeId,
}: HeaderProps) {
    const { theme, toggleTheme } = useTheme()

    return (
        <Container>
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <h1>{theme}</h1>
                        <RoomCode code={codeId} />
                        <Switch
                            onChange={toggleTheme}
                            checked={theme === 'dark'}
                            checkedIcon={true}
                            uncheckedIcon={true}
                            height={10}
                            width={40}
                            handleDiameter={20}
                            onColor="#29292e"
                            offColor="#835AFD"
                        />
                    </div>
                </div>
            </header>
        </Container>
    )
}
