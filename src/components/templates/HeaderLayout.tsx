import { memo, ReactNode, VFC } from "react";

import { Header } from "../organism/Layout/Header";

type Props = {
  children: ReactNode; //タグで囲った要素を渡していける型の要素
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
