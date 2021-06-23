import { useAuth } from '../hooks/useAuth'

import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import "../styles/auth.scss";

export function NewRoom() {
    const { user } = useAuth();

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

                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar Sala</Button>
                    </form>
                    <p>
                        Quer entra em uma sala existente?
                        <Link to="/">click aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
