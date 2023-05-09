import { useState } from "react";
import { Button, FormComponent, Input } from "./styled"
import { useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormComponent onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                required
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormComponent>
    );
};

export default Form;