import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/TodoForm";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="container">
      <Header />
      <ToDoForm />
      <Todos />
    </div>
  );
};

export default App;
