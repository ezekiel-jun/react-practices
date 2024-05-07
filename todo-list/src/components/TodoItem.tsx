import "./TodoItem.css"
import { memo } from 'react'

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input 
                type="checkbox"
                checked={isDone} 
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>DEL</button>
        </div>
    )
}

// 고차 컴포넌트 (HOC) -> 
// 문제점. memo() 를 위해 props 비교내 객체비교를 
// 우회하기 위한 불필요한 HOC 생성 
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // True 응답 시, 리렌더링 방지
//     // False 응답 시, 리렌더링 함
//
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;
//
//     return true;
// });

// 해결 -> props 내 객체타입으로 전달 받는 함수타입은 useCallback()으로 처리
export default memo(TodoItem);