import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { UserCard } from "../organism/user/UserCard";

export const UserManegement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https:/source.unsplash.com/random"
          userName="じゃけぇ"
          fullName="Takumi Okada"
        />
      </WrapItem>
    </Wrap>
  );
});
