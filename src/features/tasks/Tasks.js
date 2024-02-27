import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {

    const {
        tasks,
        hideDone,
        toggleHideDone,
        addNewTask,
        removeTask,
        setAllDone,
        toggleTaskDone
    } = useTasks();

    return (
        <main>
            <Header
                title="Lista zadań"
            />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form
                    addNewTask={addNewTask}
                />}
            />
            <Section
                title="Lista zadań"
                body={
                    <TasksList
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />}
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone}
                    />}
            />
        </main>
    );
}

export default Tasks;
