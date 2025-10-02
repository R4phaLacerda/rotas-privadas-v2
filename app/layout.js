import { Slot } from "expo-router";
import { AuthProvider } from "./context/AuthContext";

export default function RoolLayout() {
    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}