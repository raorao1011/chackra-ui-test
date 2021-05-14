import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean; //文字入力してボタン活性化
  loading?: boolean; //読み込み中フラグ
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
