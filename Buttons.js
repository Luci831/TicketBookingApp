import React from 'react';
import { useState } from 'react';
import { UserGreeting } from './Greet'
import { GuestGreeting } from './Greet'


export function LoginButton()
{
	const clickHandleer = () => {
		if (text === "Login") {
			setText("Logout");
		}
		else {
			setText("Login");
		}
		if (mess === "Please Sign Up.")
			setMess("Welcome Back");

		else
			setMess("Please Sign Up.");
	}
	const [text, setText] = useState("Login");
	const [mess, setMess] = useState("Please Sign Up.");
	return (
		<>
			<h3>{mess}</h3>
			<button onClick={clickHandleer}>{text}</button>
			
			</>
	);
}

/*function LogOutButton(props) {
	return (
		<button onClick={props.onClick}>Logout</button>
	)
}

export function Greetings(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn)
	{
		return <UserGreeting/>;
	}
	return <GuestGreeting />;
}*/