import {useState} from 'react'

// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능하다.
// 2. 리액트 훅은 조건부로 호출 할 수 없다.
     // 훅 호출 순서가 꼬일 수 있기 때문이다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
//   - 용례: state와 onChange()는 항상 사용하므로 function으로 합쳐볼 수 있다. 
//   - 커스텀 훅은 use로 시작하는 function을 만들면 된다. -> 내부적으로 use로 
//     시작하면 커스텀 훅으로 만들어주기 때문이다.

function useInput() {

    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

const HookExam = () => {

    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange}/>
            <input value={input2} onChange={onChange2}/>
        </div>
    )
}

export default HookExam;