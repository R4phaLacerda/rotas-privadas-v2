import { Stack } from "expo-router";
import { AuthProvider } from "../../contexts/AuthContext";

export default function AuthLayout() {
return (
    <Stack
    screenOptions={{
        headerShown: false,
    }}
    >
    <Stack.Screen name="login" />
    <Stack.Screen name="register" />
    </Stack>
);
}