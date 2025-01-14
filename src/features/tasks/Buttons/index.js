import { selectAreTasksEmpty, selectIsEveryTasksDone, setAllTaskDone, toggleHideDone, selectHideDone } from "../tasksSlice";
import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch();

    return (
        <Container>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"}&nbsp;
                        ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllTaskDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Container>
    )
};

export default Buttons;