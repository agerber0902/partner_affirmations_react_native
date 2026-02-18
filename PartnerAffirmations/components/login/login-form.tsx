import { loginModalStyles } from "@/constants/stylesheets/modals/login-modal-styles";
import { sharedModalStyles } from "@/constants/stylesheets/modals/shared-modal-styles";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import Button from "../shared/button";

type LoginFormProps = {
  isLogin: boolean;
  toggleLoginState: () => void;
};

const LoginForm = ({ isLogin, toggleLoginState }: LoginFormProps) => {
  const styles = loginModalStyles();
  const modalStyles = sharedModalStyles();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.loginForm}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={modalStyles.modalContainer}
      >
        {!isLogin && (
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
        )}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          autoComplete="password"
        />

        <View style={styles.actions}>
          <Button title={isLogin ? "Login" : "Create"} onPress={() => {}} />

          <Pressable onPress={toggleLoginState}>
            <Text style={styles.toggleAction}>
              {isLogin ? "Create Account" : "Back to Login"}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
export default LoginForm;
