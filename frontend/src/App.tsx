import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UsuariosPage from "./pages/UsuariosPage";
import NuevoUsuarioPage from "./pages/NuevoUsuarioPage";
import EditarMusical from "./components/usuarios/EditarMusical";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inicio" element={<UsuariosPage />} />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute>
              <UsuariosPage />
            </ProtectedRoute>
          }
        />
        <Route path="/nuevo" element={<NuevoUsuarioPage />} />
        <Route path="/musicales/editar/:id" element={<EditarMusical />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;