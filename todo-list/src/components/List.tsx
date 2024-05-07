import "./List.css"
import TodoItem from "./TodoItem";

import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {

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
                                {...todo} 
                                onUpdate={onUpdate}
                                onDelete={onDelete} />;
                })}
            </div>

        </div>
    )
}

export default List;