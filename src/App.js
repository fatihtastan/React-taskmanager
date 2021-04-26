import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./contexts/TaskListContext";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header />
            <Search />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
