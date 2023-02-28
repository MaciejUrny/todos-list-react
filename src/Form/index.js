import "./style.css";

const Form = () => (
    <form
        className="form">
        <div
            className="form__container">
            <input
                className="form__newTask"
                placeholder="Co jest do zrobienia?"
                required
                autoFocus
            />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </div>
    </form>
);

export default Form;