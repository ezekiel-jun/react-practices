const Main = () => {

    const user = {
        name: "이정환",
        isLogin: false,
    }

    if (user.isLogin) {
        return <div>로그인</div>
    } else {
        return <div>로그아웃</div>
    }

    // return (
    //     <main>
    //         {user.isLogin 
    //         ? <div>"로그인"</div> 
    //         : <div>"로그아웃"</div>
    //         }
    //     </main>
    // )
}

export default Main;