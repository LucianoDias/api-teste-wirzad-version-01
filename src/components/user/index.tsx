import { Children, ReactNode } from "react";

interface UserProps {
    name: string,
    children?: ReactNode
}


export const User = ({name}: UserProps) => {
    return(
        <div>
            <h1>Seja Bem vido!</h1>
            <p>Usuário: {name} </p>
            {Children &&    <div></div>}
        </div>
    );
}