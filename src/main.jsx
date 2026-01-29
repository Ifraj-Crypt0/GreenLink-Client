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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
