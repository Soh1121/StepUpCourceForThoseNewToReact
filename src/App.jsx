import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import "./styles.css";
import { StyledJsx } from "./components/StyledJsx";

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
            <StyledJsx />
        </div>
    );
}
