import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState, VFC } from "react";

import { LoginUser } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: LoginUser | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = (props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setUserEmail(user?.email ?? "");
    setUserPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.target.value);

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setUserPhone(e.target.value);

  const onClickUpdate = () => alert();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="none"
      autoFocus={false}
      // motionPreset="slideInBottom" 多分バージョンの関係で使えないかもframerとのね
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={userName}
                onChange={onChangeUserName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onChangeName}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={userEmail}
                onChange={onChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={userPhone}
                onChange={onChangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
