import {Button, InputContainer, InputField, InputLabel, TextField} from "../../utils/styles";
import styles from './index.module.scss';
import {createRef, useEffect} from "react";

export const CreateConversationForm = () => {




    return (
        <form className={styles.createConversationForm} >
            <section>
                <InputContainer backgroundColor={"#161616"}>
                    <InputLabel htmlFor="recipient">Recipient</InputLabel>
                    <InputField id="recipient"/>
                </InputContainer>
            </section>

            <section className={styles.message}>
                <InputContainer backgroundColor={"#161616"}>
                    <InputLabel htmlFor="message">Message (optional)</InputLabel>
                    <TextField id="message"/>
                </InputContainer>
            </section>

            <Button onClick={(e) => e.preventDefault()}>Create Conversation</Button>


        </form>
    )
}