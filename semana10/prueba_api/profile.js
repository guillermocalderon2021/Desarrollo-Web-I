import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";;

 // Escucha el estado de autenticación
 onAuthStateChanged(auth, (user) => {
    
      if (user) {
        // Si el usuario está autenticado, muestra el correo
        document.getElementById("userEmail").textContent = user.email;
      } else {
        // Si el usuario no está autenticado, redirige al login
        window.location.href = "login.html";
      }
    
  });

  // Cerrar sesión
  document.getElementById("logoutButton").addEventListener("click", async () => {
    try {
      await signOut(auth);
      window.location.href = "login.html";
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  });