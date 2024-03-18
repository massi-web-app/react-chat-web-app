import {FC, PropsWithChildren} from "react";
import {ModalContainerStyle, ModalContextBodyStyle, ModalHeaderStyle} from "../../utils/styles";

export const ModalHeader: FC<PropsWithChildren> = ({children}) => {
    return (
        <ModalHeaderStyle>{children}</ModalHeaderStyle>
    )
}


export const ModalContentBody: FC<PropsWithChildren> = ({children}) => {

    return (
        <ModalContextBodyStyle>
            {children}
        </ModalContextBodyStyle>
    )
}

export const ModalContainer:FC<PropsWithChildren> =({children})=>{
return <ModalContainerStyle>
    {children}
</ModalContainerStyle>
}