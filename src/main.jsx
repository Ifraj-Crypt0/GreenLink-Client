import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './LAYOUT/Layout.jsx';
import HomePage from './PAGES/HomePage.jsx';
import BrowseTipsPage from './PAGES/BrowseTipsPage.jsx';
import ExploreGardenersPage from './PAGES/ExploreGardenersPage.jsx';
import MyTipsPage from './PAGES/MyTipsPage.jsx';
import ShareAGardenTipPage from './PAGES/ShareAGardenTipPage.jsx';
import LogInPage from './PAGES/LogInPage.jsx';
import AuthProvider from './CONTEXTS/AuthProvider.jsx';
import SignUpPage from './PAGES/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      }, {
        path: "browse-tips",
        Component: BrowseTipsPage
      }, {
        path: "explore-gardeners",
        Component: ExploreGardenersPage
      },
      {
        path: "my-tips",
        Component: MyTipsPage
      }, {
        path: "share-tip",
        Component: ShareAGardenTipPage
      }, {
        path: "logIn",
        Component: LogInPage
      }, {
        path: "signUp",
        Component: SignUpPage
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
