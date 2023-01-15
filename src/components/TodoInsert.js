// TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
import React, { useState, useCallback } from "react";
import { MdQueue } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(   // onSubmit 이벤트 설정하기
        e => {
            onInsert(value);
            setValue('');   // value 값 초기화

            // submit 이벤트는 브라우저에서 새로고침을 발생시킴
            // 이를 방지하기 위해 이 함수를 호출함
            e.preventDefault();
        }, [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요. " value={value} onChange={onChange} />
            <button type="submit">
                <MdQueue />
            </button>
        </form>
    );
};

export default TodoInsert;
