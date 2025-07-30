import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import "./styles.css";
import { StyledJsx } from "./components/StyledJsx";
import { Emotion } from "./components/Emotion";

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
            <StyledJsx />
            <Emotion />
        </div>
    );
}
