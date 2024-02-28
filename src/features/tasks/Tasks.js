import Form from "./Form";
import Buttons from "./Buttons";
import TasksList from "./TasksList";
import Section from "../../common/Section";
import Header from "../../common/Header";



function Tasks() {
    return (
        <main>
            <Header
                title="Lista zadań"
            />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form
                />}
            />
            <Section
                title="Lista zadań"
                body={
                    <TasksList />
                }
                extraHeaderContent={
                    <Buttons />
                }
            />
        </main>
    );
}

export default Tasks;
