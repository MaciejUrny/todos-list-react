import React from "react";
import { Button, Container } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Container>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"}&nbsp;
                ukończone
            </Button>
            <Button
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllDone}
            >
                Ukończ wszystkie
            </Button>
        </Container>
    )
);

export default Buttons;