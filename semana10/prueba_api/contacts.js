import { getContactsByUser, auth, getUser} from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";;

 // Escucha el estado de autenticación
 onAuthStateChanged(auth,async (user) => {
    
      if (user) {
      } else {
        // Si el usuario no está autenticado, redirige al login
        window.location.href = "login.html";
      }
    
  });



// Cargar usuarios al cargar la página
async function loadUsers() {
    const userList = document.getElementById("contactList");
    userList.innerHTML = ""; // Limpiar la tabla
  
    const snapshot = await getContactsByUser();
    alert(snapshot.length);
    snapshot.forEach((doc) => {
      const user = doc;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.apellido}</td>
        <td>${user.fechaNacimiento}</td>
        <td>${user.telefono}</td>
      `;
      userList.appendChild(row);
    });
  }

    // Cerrar sesión
    document.getElementById("logoutButton").addEventListener("click", async () => {
        try {
          await signOut(auth);
          window.location.href = "login.html";
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      });
  
  // Cargar usuarios al cargar la página
  window.addEventListener("load", loadUsers);