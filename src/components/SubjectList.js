import { Link } from "react-router-dom";
import { ButtonHome } from "../styles/ButtonStyle";

export default function SubjectList({ id, name }) {
    return (
        <Link to={`/subject/${id}`}>
            <ButtonHome>{ name }</ButtonHome>
        </Link>
    );
}
