import {useState, useRef} from 'react'

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const countRef = useRef(0);
    
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const inputRef = useRef();
    const onSubmit = () => {
        if(input.name === "") {
            // 이름 입력 확인 후, DOM 요소 포커스
            if (inputRef.current.value === "") {
                inputRef.current.focus();
            }
        }
    }

    return (
        <div> 
            <div>
                <input 
                    name="name"
                    value={input.name}
                    ref={inputRef}
                    onChange={onChange} 
                    placeholder={"이름"} />
            </div>
            <div>
                <input 
                    name="birth"
                    type="date"
                    onChange={onChange} />
            </div>
            <div>
                <select 
                    name="country"
                    onChange={onChange}>
                    <option value=""></option>
                    <option value="ko">Korea</option>
                    <option value="us">USA</option>
                    <option value="uk">England</option>
                </select>
            </div>
            <div>
                <textarea 
                    name="bio"
                    value={input.bio} 
                    onChange={onChange} />
            </div>
            <div>
                {input.name} / 
                {input.birth} / 
                {input.country} /
                {input.bio}
            </div>
            <button onClick={onSubmit}>Register</button>
        </div>
    )
}

export default Register;