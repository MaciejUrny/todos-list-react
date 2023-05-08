import React from "react";
import { useState } from "react";
import { Button, FormComponent, Input } from "./styled"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() === "") {
            return
        };
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <FormComponent onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                required
                autoFocus
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormComponent>
    );
};

export default Form;