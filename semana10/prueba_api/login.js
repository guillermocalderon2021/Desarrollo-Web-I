import { registerUser, loginUser } from "./firebase.js";

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
  
    try {
      const status=await registerUser(email,password,"normal");
      if(status){
        alert("Usuario registrado exitosamente");
      }
      else{
        alert("Ya existe un usuario con este nombre");
      }
  
      
    } catch (error) {
      console.error("Error en el registro:", error.message);
    }
  });
  
  // Inicio de Sesión
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const user=await loginUser(email,password);
      alert("Inicio de sesión exitoso"+ user.role);
      window.location.href = "profile.html";
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
    }
  });

  