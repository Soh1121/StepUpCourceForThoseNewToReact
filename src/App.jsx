import React from 'react';
import "./styles.css";

export default function App() {
    const onClickUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data);
        }).catch((err) => console.log(err));
    };
    const onClickUser1 = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
            console.log(res.data);
        }).catch((err) => console.log(err));
    };
    return (
        <div className="App">
            <h1>Hello, React!</h1>
            <p>Welcome to your React application.</p>
        </div>
    );
}
