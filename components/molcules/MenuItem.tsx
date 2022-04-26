import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";

type MenuItemProps = {
  title: string;
  href: string;
};

export const MenuItem: FC<MenuItemProps> = ({ title, href }) => {
  return (
    <Text color="#666666" fontSize="18px">
      <Link href={`/${href}`}>{title}</Link>
    </Text>
  );
};
