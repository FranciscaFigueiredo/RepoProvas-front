import { Link } from "react-router-dom";
import { ButtonHome } from "../styles/ButtonStyle";

export default function TeacherList({ id, name }) {
    return (
        <Link to={`/teacher/${id}`}>
            <ButtonHome>{ name }</ButtonHome>
        </Link>
    );
}
