import { headerStyles } from "@/constants/stylesheets/components/header-styles";
import FadeInView from "./fade-in-animated-view";
import { useAuth } from "@/providers/auth-provider";
import { baseAnimationDuration } from "@/constants/theme";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children } : HeaderProps) => {

  const { user, isAuthenticated } = useAuth();

  return (
    <FadeInView
      style={headerStyles.headerContainer}
      duration={baseAnimationDuration}
      visible={isAuthenticated}
    >
      {children}
    </FadeInView>
  );
};
export default Header;
