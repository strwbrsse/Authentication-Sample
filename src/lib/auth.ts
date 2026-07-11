import { authClient } from "./auth-client";

async function register(event: Event, name: string, email: string, password: string) {
    return await authClient.signUp.email({
    name, // required
    email, // required
    password, // required
});
}

async function login(event: Event, email: string, password: string) {
    return await authClient.signIn.email({
    email, // required
    password, // required
});
}