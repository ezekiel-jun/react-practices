import {useEffect} from 'react'

const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        // useEffect가 unmount 될 때 응답되는 함수를 지칭한다.
        return () => {
            console.log("unmount");
        };
    })
    return (
        <div>Even</div>
    )
}

export default Even;