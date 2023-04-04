// import { useHistory } from "react-router-dom";
import { useState } from "react";

function authenticateUser(userName, password) {

}

export default function Login(props) {

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");


// const history = useHistory();


const handleClick = () => {
	

	authenticateUser(userName, password);

	// history.push(`/`);
};

return (
	<div>
	<input
		type="text"
        placeholder="username"
		value={userName}
		onChange={(e) => {
		setUserName(e.target.value);
		}}
		required
	/>
	<input
		type="text"
        placeholder="password"
		value={password}
		onChange={(e) => {
		setPassword(e.target.value);
		}}
		required
	/>
	<button type="submit" onClick={handleClick}>
		{" "}
		Log In{" "}
	</button>
	</div>
);
}
