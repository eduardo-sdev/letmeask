import { useHistory } from "react-router-dom";
import { useAuth } from '../hooks/useAuth'

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push("/rooms/new");
    }

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={illustrationImg}
                    alt="ilustração simbolizando pergunta e resposta"
                />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separation">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na Sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
