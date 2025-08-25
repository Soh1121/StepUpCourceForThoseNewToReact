import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
    const { getUsers, users, loading } = useAllUsers();

    useEffect(() => getUsers(), []);

    const imageUrl="https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <>
            {loading ? (<Center h="100vh"><Spinner /></Center>) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard imageUrl={imageUrl} userName={user.username} fullName={user.name}></UserCard>
                        </WrapItem>
                    ))}
                </Wrap>
            )}
        </>
    );
});
