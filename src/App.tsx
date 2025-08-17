import { useState } from "react";
import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { UserProfile } from "./types/UserProfile";

export default function App() {
    const [userProfiles, setUserProfile] = useState<Array<UserProfile>>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onClickFetchUser = () => {
        setLoading(true);

        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
            const data = res.data.map((user: User): UserProfile => ({
                id: user.id,
                name: `${user.name}(${user.username})`,
                email: user.email,
                address: `${user.address.city} ${user.address.suite} ${user.address.street}`,
            }));
            setUserProfile(data);
        }).catch(() => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="App">
            <button type="button" onClick={onClickFetchUser}>データ取得</button>
            <br />
            {error ? (
                <p style={{ color: "red" }}>データの取得に失敗しました</p>
            ) : loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {userProfiles.map((user: UserProfile) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </>
            )}
        </div>
    );
}
