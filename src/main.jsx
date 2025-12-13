import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './routes/root'
import { RootErrorBoundary } from './error-page'
import Contact from './routes/Contact'
import { getContactLoader, getSingleContact } from './contactsLoader'
import { createContactAction, deleteContactAction, editContactAction } from './contactsAction'
import EditContact from './routes/EditContact'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    ErrorBoundary: RootErrorBoundary,
    loader: getContactLoader,
    action: createContactAction,
    children: [
      {
        path: "contacts/:contactId",
        Component: Contact,
        loader: getSingleContact
      },
      {
        path: "contacts/:contactId/edit",
        Component: EditContact,
        loader: getSingleContact,
        action: editContactAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteContactAction
      },
    ],
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
