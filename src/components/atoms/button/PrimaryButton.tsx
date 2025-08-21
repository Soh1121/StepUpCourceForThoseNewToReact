import { Button } from "@chakra-ui/react";
import { Props } from "framer-motion/types/types";
import { memo, FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const PrimaryButton: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>{children}</Button>
    );
});
