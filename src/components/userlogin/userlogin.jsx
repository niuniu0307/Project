import React from "react";
import { useState } from "react";
import axios from 'axios'
import Background from "../../asset/images/userlogin/background.png"
import '../userlogin/userlogin.css'

const UserLogin = () => {
    // const [data,setData] = useState({account:"",password:"" ,isRemember:false})
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(username)

    // var Doaccount = (e) => {
    //     setData({
    //         ...data,
    //         account : e.target.value
    //     })

    // }

    // var Dopassword = (e) =>{
    //     setData({
    //         ...data,
    //         password:e.target.value
    //     })
    // }

    // var Doremember = (e) => {
    //    const newremember = {...data}
    //    newremember.isRemember = e.target.checked ? 1 : 0
    //    setData(newremember)
    // //    console.log(newremember)
    // }

    var Dologin = async (event) => {
        try {
            const response = await axios.post('http://localhost:8000/member', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    return (
        <React.Fragment>
            <div style={{
                backgroundImage: `url(${Background})`,
                width: '100%',
                backgroundSize: 'cover'
            }}>

                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="d-flex justify-content-center mb-5 mt-5">
                            <div className="userlogin">
                                <h2 className="d-flex justify-content-center">會員登入</h2>
                                <h4 className="d-flex justify-content-center mb-2">______________________________</h4>
                                <form>
                                    <br />
                                    <br />
                                    <div className="mb-3">
                                        <i className="fa-solid fa-circle-user"></i>&emsp;<input type="text" className="account"
                                            id="Inputaccount" value={username} placeholder="請輸入帳號" onChange={e => setUsername(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="mb-3">
                                        <i className="fa-solid fa-lock"></i>&emsp;<input type="password" className="password"
                                            id="InputPassword" value={password} onChange={e => setPassword(e.target.value)} placeholder="請輸入密碼(6-20英數字)" />
                                    </div>
                                    <div className="mb-3 form-check" >
                                        <input type="checkbox" className="form-check-input" id="Check" />
                                        {/* onChange={Doremember} checked={data.isRemember} */}
                                        <label className="form-check-label" for="Check" style={{ fontSize: "14px" }}>記住我</label>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center mb-5">
                                        <button className="login" type="submit" method="post" value="" onClick={Dologin}>登入</button>
                                    </div>
                                </form>
                                <div className="d-flex justify-content-center mb-3">
                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <h5>註冊帳號&emsp;｜</h5>
                                    </a>
                                    <a href="#" style={{ textDecoration: 'none' }}>
                                        <h5>&emsp;忘記密碼</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <br />
        </React.Fragment>


    )
}

export default UserLogin