import { ButtonPage } from "../styles/ButtonStyle";
import { Input } from "../styles/InputStyle";

export default function SaveExam() {
    function sendExam(event) {
        event.preventdefault();
        
    }
    return (
        <div>
            <h1>Cadastre sua prova aqui!</h1>
            <form onSubmit={sendExam}>
                <Input type='text' placeholder='nome' />
                <Input type='text' placeholder='link' />
                <Input type='text' placeholder='professor' />
                <Input type='text' placeholder='categoria' />
                <Input type='text' placeholder='disciplina' />
                <ButtonPage type='submit'>Enviar</ButtonPage>
            </form>
        </div>
    );
}
