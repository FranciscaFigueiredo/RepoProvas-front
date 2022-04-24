import styled from 'styled-components';
import { VscFilePdf } from 'react-icons/vsc'
import { IoLogOutOutline } from 'react-icons/io5'

const TitleApplication = styled.h1`
    display: inline-block;
    font-size: 36px;
	font-weight: bold;
	font-family: 'Lexend', sans-serif;
    text-align: center;
    
	background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(63,97,215,1) 50%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

    display : flex;
    align-items : center;
    justify-content : center;

    cursor: pointer;
`;

const TitleIcon = styled(VscFilePdf)`
    color: #3f61d7;
    font-size: 36px;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
`;

const Logout = styled(IoLogOutOutline)`
    color: #3f61d7;
    font-size: 36px;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
`;

export {
    TitleApplication,
    TitleIcon,
    Logout,
};
