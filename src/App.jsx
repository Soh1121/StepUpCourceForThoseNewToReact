import { useState } from 'react';
import { ChildArea } from './ChildArea';
import "./styles.css";

export default function App() {
    console.log("App");
    const [count, setCount] = useState(0);

    const onClickCountUp = () => {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <input type="text" />
            <br />
            <br />
            <button type="button">表示</button>
            <ChildArea />
        </div>
    );
}
