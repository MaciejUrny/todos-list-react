import { selectTasks, setAllTaskDone, toggleHideDone } from "../tasksSlice";
import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <Container>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"}&nbsp;
                    ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(setAllTaskDone())}
                >
                    Ukończ wszystkie
                </Button>
            </Container>
        )
    )
};

export default Buttons;