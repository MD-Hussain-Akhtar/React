import { useContext, useState } from "react";
import UserContext from "./UserContex";

function Login() {
    const [username, setUsername] = useState(''); // Fix useState for username
    const [password, setPassword] = useState(''); // Fix useState for password
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;