import { memo, FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
    onOpen: () => void;
};

export const MenuIconButton: FC<Props> = memo((props) => {
    const { onOpen } = props;
    return (
        <>
            <IconButton
                aria-label="メニューボタン"
                size="sm"
                variant="unstyled"
                display={{ base: "block", md: "none"}}
                onClick={onOpen}
            >
                <GiHamburgerMenu />
            </IconButton>
        </>
    );
});
