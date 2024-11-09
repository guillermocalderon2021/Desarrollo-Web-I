import { registerUser, loginUser } from "./firebase.js";

async function register(){
    await registerUser("guillermo.calderon@udb.edu.sv","123456","admin");
}

async function login(){
    await loginUser("guillermo.calderon@udb.edu.sv","123456");
}

login();