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

    // 문제점: 렌더링이 발생하면 계속해서 호출이 된다
    // const getAnalyzedData = () => {
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length;
    //     const notYetDoneCount = totalCount - doneCount;
    //     return {
    //         totalCount, doneCount, notYetDoneCount
    //     }
    // }

    // const { totalCount, doneCount, notYetDoneCount } 
    //     = getAnalyzedData();

    // 해결: useMemo는 []의 값이 변경되었을 때 콜백함수를 호출한다.
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
                                {...todo} 
                                onUpdate={onUpdate}
                                onDelete={onDelete} />;
                })}
            </div>

        </div>
    )
}

export default List;