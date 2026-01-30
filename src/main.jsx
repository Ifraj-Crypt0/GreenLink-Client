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
import PrivateRouter from './CONTEXTS/PrivateRouter.jsx';
import LearnMore from './PAGES/LearnMore.jsx';
import ErrorPage from './PAGES/ErrorPage.jsx';
import FixAGardenTip from './PAGES/FixAGardenTip.jsx';


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
        loader: () => fetch("http://localhost:3000/posts"),
        Component: BrowseTipsPage
      }, {
        path: "explore-gardeners",
        loader: () => fetch("http://localhost:3000/posts"),
        Component: ExploreGardenersPage
      }, {
        path: `fixTips/:id`,
        element: <PrivateRouter><FixAGardenTip></FixAGardenTip></PrivateRouter>
      },
      {
        path: "my-tips",
        element: <PrivateRouter><MyTipsPage></MyTipsPage></PrivateRouter>
      }, {
        path: "share-tip",
        element: <PrivateRouter><ShareAGardenTipPage></ShareAGardenTipPage></PrivateRouter>
      }, {
        path: "logIn",
        Component: LogInPage
      }, {
        path: "signUp",
        Component: SignUpPage
      },
      {
        path: "learn-more",
        Component: LearnMore
      }, {
        path: "*",
        Component: ErrorPage
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
