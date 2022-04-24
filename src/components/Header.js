import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { HeaderContainer } from "../styles/ContainerStyle";
import { Logout, TitleApplication, TitleIcon } from "../styles/Header/style";

export function Header() {
    const { user } = useContext(UserContext);

    console.log(user);

    return (
        <HeaderContainer>
            <TitleApplication><TitleIcon /> RepoProvas</TitleApplication>
            {
                user ?
                    <Logout />
                : ''
            }
        </HeaderContainer>
    );
}
