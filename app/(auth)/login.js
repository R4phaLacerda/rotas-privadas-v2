import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, } from "react-native";
import { useAuth} from "../../contexts/AuthContext";
import { Link } from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { singIn } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);
        try {
            const result = await singIn(email, password);

            if (!result.sucess) {
                Alert.alert("Erro", result.message || "Falha ao fazer login");
            }
        } catch (error) {
            Alert.alert("Erro", "Falha ao fazer login");
        } finally {
            setLoading(false);
        }
    };

    const obj = {
        key1: "value1",
        key2: "value2"
    };

    return (
        <KeyboardAvoidingView    
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <View style={styles.content}>
                <Text style={styles.emoji}>🔐</Text>
                <Text style={styles.title}>Bem-Vindo!</Text>
                <Text style={styles.subtitle}>Faça login para continuar.</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                editable={!loading}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                editable={!loading}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
                editable={!loading}
            />

            <TouchableOpacity
                style={[styles.button, loading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={loading}
            >
            { loading ? (
                <ActivityIndicator color="#FFF" />
                ) : (
                <Text style={styles.buttonText}>Entrar</Text>
                )}
            </TouchableOpacity>
            
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Não tem conta? </Text>
                <Link href="/(auth)/register" asChild>
                    <TouchableOpacity disabled={loading}>
                    <Text style={styles.registerLink}>Cadastre-se</Text>
                    </TouchableOpacity>
                </Link>
            </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    emoji: {
        fontSize: 60,
        textAlign: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 40,   
        textAlign: "center", 
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 40,
        textAlign: "center",
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidht: 1,
        borderColor: "#ddd",
    },
    button: {
        backgroundColor: "#007aff",
        borderRadius: 8,
        padding: 15,
        alingItems: "center",
        marginTop: 10,
        minHeighth: 50,
        justifyContent: "center",
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    registerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        alingItems: "center",
    },
    registerText: {
        color: "#666",
        fontSize: 16,
    },
    registerLink: {
        color: "#007aff",
        fontSize: 14,
        fontWeight: "bold",
    },
    infoText: {
        marginTop: 30,
        textAling: "center",
        color: "#888",
        fontSize: 14,
        paddingHorizontal: 20,
    },
});

