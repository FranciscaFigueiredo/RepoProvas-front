import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { HeaderContainer } from "../styles/ContainerStyle";
import { Logout, TitleApplication, TitleIcon } from "../styles/Header/style";

export function Header() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function logoutUser() {
        setUser(null);
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <HeaderContainer>
            <TitleApplication><TitleIcon /> RepoProvas</TitleApplication>
            {
                user ?
                    <Logout onClick={ logoutUser } />
                : ''
            }
        </HeaderContainer>
    );
}
