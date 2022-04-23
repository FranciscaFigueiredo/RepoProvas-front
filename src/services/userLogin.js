import { useEffect, useState } from "react";

function UserLoginValidation() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));   
    }, [user]);
    
    return {
        user,
    };
}

export {
    UserLoginValidation
}
