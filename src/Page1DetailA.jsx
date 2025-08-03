import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>Page1DetailAページです</h1>
        </div>
    );
};
