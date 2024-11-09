import { registerUser } from "./firebase.js";

async function register(){
    await registerUser("calderon1410@gmail.com","123456");
}

register();