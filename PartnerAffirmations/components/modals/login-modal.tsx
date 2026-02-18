import { useState } from "react";
import SharedModal from "../shared/modals/shared-modal";
import LoginForm from "../login/login-form";

const LoginModal = () => {
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
