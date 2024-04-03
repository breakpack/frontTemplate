import * as s from "./styleComponent.tsx"
import * as x from "../post/styleComponent.tsx"
import { Link } from 'react-router-dom';
import login_background from "../img/login_background.png";
import axios from "axios";
import React from "react";

function Login() {
    const Check = async (e) => {
        const topDiv = e.currentTarget.parentElement.parentElement;
        const id = topDiv.children[3].children[0].children[0].value;
        const pw = topDiv.children[3].children[1].children[0].value;
        const data = {'id':id, 'pw':pw};
        const url = "/api/login";
        const config = {"Content-Type": 'application/json'};

        await axios.post(url, data, config)
        .then(res=>{hackcheck(res.data.valid)})
    }

    const hackcheck = (r) => {
        if(!r){
            alert("정상적인 로그인");
        }
        else{
            alert("해킹시도 감지");
        }
    }

    return (
                <x.Container>
                    <s.Theme>
                        <s.Background src={login_background}/>
                    </s.Theme>
                    <s.Content>
                        <s.Welcome>Welcome</s.Welcome>
                        <s.Title>Flask Post Validation</s.Title>
                        <s.SubTitle>Welcome. Please log in with your email address.</s.SubTitle>
                        <s.Target>
                            <s.INPUT>
                                <s.ID
                                    placeholder="example@gmail.com"
                                    type="email"
                                    pattern=".+\.com"
                                    id="userID"
                                    name="userID"
                                    required
                                />
                            </s.INPUT>
                            <s.INPUT>
                                <s.PW placeholder="Password" type="password" id="password" name="password" required />
                            </s.INPUT>
                        </s.Target>
                        <Link to="/post">
                            <s.Btn onClick={(e)=>{Check(e)}}>Login</s.Btn>
                        </Link>
                    </s.Content>
                </x.Container>
    );
}
export default Login;
