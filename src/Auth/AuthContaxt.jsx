import { useContext } from "react";
import { exportContact } from "./CreateAuth";

const AuthContaxt = () => {
    const authInfo = useContext(exportContact)
    return authInfo;
};

export default AuthContaxt;