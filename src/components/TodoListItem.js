// TodoListItem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트
import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdDeleteForever,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>   {/* 삭제 함수 호출해 삭제 */}
                <MdDeleteForever />
            </div>
        </div>
    );
};

export default TodoListItem;
