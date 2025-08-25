import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, FC } from "react";
import { UserCard } from "../organisms/user/UserCard";

export const UserManagement: FC = memo(() => {
    const imageUrl="https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <Wrap p={{ base: 4, md: 10 }}>
            <WrapItem>
                <UserCard imageUrl={imageUrl} userName="Soh" fullName="フルネーム"></UserCard>
            </WrapItem>
        </Wrap>
    );
});
