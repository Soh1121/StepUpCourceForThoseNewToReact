import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getUsers, users, loading } = useAllUsers();
    const { onSelectUser, selectedUser} = useSelectUser();
    const { loginUser } = useLoginUser();

    useEffect(() => getUsers(), []);

    const onClickUser = useCallback((id: number) => {
        onSelectUser({ id, users, onOpen });
    }, [users, onSelectUser, onOpen]);

    const imageUrl="https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <>
            {loading ? (<Center h="100vh"><Spinner /></Center>) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard id={user.id} imageUrl={imageUrl} userName={user.username} fullName={user.name} onClick={onClickUser}></UserCard>
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserDetailModal user={selectedUser} isOpen={isOpen} isAdmin={loginUser?.isAdmin} onClose={onClose} />
        </>
    );
});
