import { useState } from "preact/hooks";
import "./Login.less"
import { TextInput } from "./TextInput";
import { chatService } from "./ChatService";
import { IconButton } from "./IconButton";

export function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    function loginRegister() {
        if (register)
            chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else
            chatService.send({ type: "login", email, password, staySignedIn: true });
    }



    function toggleTheme() {

        let htmlElement = document.documentElement;

        htmlElement.classList.toggle("theme-light");

        if (htmlElement.classList.contains("theme-light")) {
            localStorage["theme"] = "light";
        } else {
            localStorage["theme"] = "dark";
        }


    }

    return <div class="Login">
        <span class="logo" onClick={toggleTheme}>🗪</span>
        <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} onEnter={loginRegister} />
        <TextInput type="password" placeholder="Password" value={password} onChange={setPassword} onEnter={loginRegister} />
        {register && <TextInput type="text" placeholder="Display Name (Agent Smith)" value={displayName} onEnter={loginRegister}
            onChange={setDisplayName} />}

        {register ?
            <IconButton iconName="" text="Register" onClick={loginRegister} />
            :
            <IconButton iconName="login" text="Login" onClick={loginRegister} />
        }

        <p>{register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}>
                {register ? "Login" : "Register"}
            </a>
        </p>
    </div>
}