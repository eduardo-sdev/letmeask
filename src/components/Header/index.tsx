import { useHistory, useParams } from 'react-router-dom'
import Switch from 'react-switch'

import { RoomCode } from '../../components/RoomCode'
import { Button } from '../../components/Button'

import { Container } from './styles'
import logoImg from '../../assets/images/logo.svg'
import { useTheme } from '../../hooks/useTheme'

import { database } from '../../services/firebase'

type HeaderProps = {
    codeId: string
    toggleTheme(): void
}

type RoomParams = {
    id: string
}

export function Header({ codeId }: HeaderProps) {
    const { theme, toggleTheme } = useTheme()
    const history = useHistory()
    const params = useParams<RoomParams>()
    const roomId = params.id

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })

        history.push('/')
    }

    return (
        <Container>
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <h1>{theme}</h1>
                        <RoomCode code={codeId} />
                        <Button isOutlined onClick={handleEndRoom}>
                            Encerrar sala
                        </Button>
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
