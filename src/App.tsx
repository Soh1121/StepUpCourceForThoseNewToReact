import { UserCard } from "./components/UserCard";
import "./styles.css";
import { UserProfile } from "./types/UserProfile";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
    const { getUsers, userProfiles, loading, error } = useAllUsers();

    const onClickFetchUser = () => getUsers();

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
