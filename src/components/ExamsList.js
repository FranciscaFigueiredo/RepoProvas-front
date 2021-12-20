import { ButtonHome } from "../styles/ButtonStyle";

export default function ExamsList({ name, link }) {
    return (
        <a href={link}>
            <ButtonHome>{ name }</ButtonHome>
        </a>
    );
}
