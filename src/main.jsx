import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './routes/root'
import { RootErrorBoundary } from './error-page'
import Contact from './routes/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        path: "contacts/:contactId",
        Component: Contact
      },
    ],
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
