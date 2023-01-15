/*
TodoList :  todos 배열을 props로 받아온 후 이를 배열 내장 함수 map을
            사용해 여러 개의 TodoListItem 컴포넌트로 반환해 보여줌 
*/

import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

// const TodoList = () => {    
//     return (
//         <div className="TodoList">
//             <TodoListItem />
//             <TodoListItem />
//             <TodoListItem />
//         </div>
//     );
// };

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />  // props로 받아 온 onRemove 함수를 TodoListItem에 그대로 전달
            ))}
        </div>
    );
};

export default TodoList;
