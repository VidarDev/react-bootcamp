import styled from "styled-components/native";
import { Button, TextInput, Text } from "react-native-paper";
import { useState } from "react";

const Login = () => {

    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [password, setPassword] = useState<string>("");

    function toggleSecureIcon() {
        setIsVisible(!isVisible);
    }
    return (
        <LoginView>
            <InputView>
                <LoginTextInput id="email" keyboardType="email-address" placeholder="E-mail"/>

                <LoginTextInput
                    label="Password"
                    value={password}
                    secureTextEntry={isVisible}
                    onChangeText={(value: string) => setPassword(value)}
                    autoComplete="password"
                    right={
                        <TextInput.Icon
                            onPress={toggleSecureIcon}
                            icon={isVisible ? "eye-off" : "eye"}
                        />
                    }
                />
            </InputView>

            <LoginButton textColor="white">Login</LoginButton>

            <DisclaimerText>By login you accept the Terms and Conditions.</DisclaimerText>
        </LoginView>
    );
}

const LoginView = styled.View`
    width: 100%;
    padding: 32px 16px;
    flex: 4;
    display: flex;
    align-items: center;
    gap: 32px;
`;

const InputView = styled.View`
    width: 100%;
    padding: 0 24px 16px 24px;
    display: flex;
    align-items: center;
    gap: 24px;
`;

const LoginTextInput = styled(TextInput)`
    width: 100%;
`;

const LoginButton = styled(Button)`
    width: 80%;
    background-color: #6650a4;
`;

const DisclaimerText = styled(Text)`
    color: #bdbdbd;
`;

export default Login;