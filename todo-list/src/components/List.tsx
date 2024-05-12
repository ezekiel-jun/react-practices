import "./List.css"
import TodoItem from "./TodoItem";

import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
    // 앞에서 객체가 아닌 array로 넘김으로 객체구조분해할당이 아니라 바로 받는다
    const todos = useContext(TodoStateContext)
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos = getFilteredData();

    const { totalCount, doneCount, notYetDoneCount } 
        = useMemo(() => {
            const totalCount = todos.length;
            const doneCount = todos.filter((todo) => todo.isDone).length;
            const notYetDoneCount = totalCount - doneCount;
            return {
                totalCount, doneCount, notYetDoneCount
            }
        }, todos)

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>
                total: {totalCount}, 
                done: {doneCount},
                not yet: {notYetDoneCount}
            </div>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="Search place..."
            />

            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <TodoItem 
                                key={todo.id} 
                                {...todo} />;
                })}
            </div>

        </div>
    )
}

export default List;