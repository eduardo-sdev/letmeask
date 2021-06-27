import { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

import { database } from '../../services/firebase'
import { Button } from '../../components/Button'

import { Container } from './styles'

export function Home() {
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }
        console.log(roomCode)

        const roomRef = await database.ref(`rooms/${roomCode}`).get()

        if (!roomRef.exists()) {
            alert('Room does not exists')
            return
        }

        if (roomRef.exists()) {
            alert('Room aleready closed')
            return
        }

        history.push(`/rooms/${roomCode}`)
    }

    return (
        <Container>
            <div id="page-auth">
                <aside>
                    <img
                        src={illustrationImg}
                        alt="ilustração simbolizando pergunta e resposta"
                    />
                    <strong>Crie salas de Q&A ao-vivo</strong>
                    <p>Tire as duvidas da sua audiencia em tempo-real :)</p>
                </aside>
                <main>
                    <div className="main-content">
                        <img src={logoImg} alt="letmeask" />
                        <button
                            className="create-room"
                            onClick={handleCreateRoom}
                        >
                            <img src={googleIconImg} alt="" />
                            Crie sua sala com o Google
                        </button>
                        <div className="separation">ou entre em uma sala</div>
                        <form onSubmit={handleJoinRoom}>
                            <input
                                type="text"
                                placeholder="Digite o código da sala"
                                onChange={event =>
                                    setRoomCode(event.target.value)
                                }
                                value={roomCode}
                            />
                            <Button type="submit">Entrar na Sala</Button>
                        </form>
                    </div>
                </main>
            </div>
        </Container>
    )
}
