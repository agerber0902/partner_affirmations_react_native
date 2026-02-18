import { loginModalStyles } from "@/constants/stylesheets/modals/login-modal-styles";
import { Theme } from "@/constants/theme";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../shared/button";
import SharedModal from "../shared/modals/shared-modal";
import LoginForm from "../login/login-form";

type ModalProps = {
  header: string;
  modalContent: React.ReactNode;
};

const LoginModal = ({ header, modalContent }: ModalProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleLoginState = () => {
    setIsLogin(!isLogin);
  };

  return (
    <SharedModal
      header={isLogin ? "Login" : "Create Account"}
      modalContent={<LoginForm isLogin={isLogin} toggleLoginState={toggleLoginState}/>}
    />
  );
};
export default LoginModal;
