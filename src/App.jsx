import React, { useState } from 'react';
import "./styles.css";

export default function App() {
    console.log("App");
    const [count, setCount] = useState(0);

    const onClickCountUp = () => {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <h1>Hello, React!</h1>
            <p>Welcome to your React application.</p>
            <p>{count}</p>
            <button type="button" onClick={onClickCountUp}>カウントアップ</button>
        </div>
    );
}
