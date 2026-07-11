import { authClient } from "./auth-client";

export async function register(name: string, email: string, password: string) {
    return await authClient.signUp.email({
    name, // required
    email, // required
    password, // required
});
}

export async function login(email: string, password: string) {
    return await authClient.signIn.email({
    email, // required
    password, // required
});
}