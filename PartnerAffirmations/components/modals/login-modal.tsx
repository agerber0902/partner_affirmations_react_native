import { useState } from "react";
import SharedModal from "../shared/modals/shared-modal";
import LoginForm from "../login/login-form";
import { useAuth } from "@/providers/auth-provider";

const LoginModal = () => {
  const { authLoading, isAuthenticated } = useAuth();

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleLoginState = () => {
    setIsLogin(!isLogin);
  };

  return (
    <SharedModal
      isVisible={!isAuthenticated && !authLoading}
      header={isLogin ? "Login" : "Create Account"}
      modalContent={
        <LoginForm isLogin={isLogin} toggleLoginState={toggleLoginState} />
      }
    />
  );
};
export default LoginModal;
