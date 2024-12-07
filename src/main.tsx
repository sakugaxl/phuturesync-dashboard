import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Ensure app mounts safely
try {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } else {
    throw new Error("Root element not found.");
  }
} catch (error) {
  console.error("Error mounting React app:", error);
}
