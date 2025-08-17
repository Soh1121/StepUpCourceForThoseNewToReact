import { useState } from "react";
import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { UserProfile } from "./types/UserProfile";

const user = {
    id: 1,
    name: "Soh",
    email: "123@example.com",
    address: "ADDRESS"
};

export default function App() {
    const [userProfiles, setUserProfile] = useState<Array<UserProfile>>([]);

    const onClickFetchUser = () => {
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
            const data = res.data.map((user: User): UserProfile => ({
                id: user.id,
                name: `${user.name}(${user.username})`,
                email: user.email,
                address: `${user.address.city} ${user.address.suite} ${user.address.street}`,
            }));
            setUserProfile(data);
        });
    };

    return (
        <div className="App">
            <button type="button" onClick={onClickFetchUser}>データ取得</button>
            {userProfiles.map((user: UserProfile) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}
