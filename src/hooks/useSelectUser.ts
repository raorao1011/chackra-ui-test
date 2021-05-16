import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User> | undefined;
  onOpen: () => void;
};

//選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users?.find((user) => user.id === id);
    //finfメソッドはもし条件に合うものがあったらそれをreturnするから、
    //undefinedの可能性が含まれている だから targetUser! でこっちから縛ってあげる
    setSelectedUser(targetUser!);
    //?? 左辺がnull or undefinedなら左を実行
    //逆に今回の場合はidは絶対に一致する全手だから非nullアサーション演算子で
    //setSelectedUser(targetUser!);でもよい！
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
