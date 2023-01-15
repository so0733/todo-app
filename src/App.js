import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // return <div>Todo App을 만들자!</div>;

  // return <TodoTemplate>Todo App을 만들자!</TodoTemplate>;
  
  // return (
  //   <TodoTemplate> <TodoInsert /> <TodoList /> </TodoTemplate>
  // );

  const [todos, setTodos] = useState([
    {
      id: 1, text: '리액트이 기초 알아보기', checked: true,
    },
    {
      id: 2, text: '컴포넌트 스타일링 해보기', checked: true,
    },
    {
      id: 3, text: '일정 관리 앱 만들어 보기', checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback( // todos 배열에 새 객체를 추가함
    text => {
      const todo = {
        id: nextId.current, text, checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;  // nextId 1씩 더하기
    }, [todos],
  );

  const onRemove = useCallback(
    id => { // id를 파라미터로 받아와 같은 id를 가진 항목을 todos 배열에서 지우는 함수
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos],
  );

  const onToggle = useCallback( // 수정 기능
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo,),
      );
    }, [todos],
  );

  return (
    <TodoTemplate>
      {/* <TodoInsert /> <TodoList todos={todos} /> */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
