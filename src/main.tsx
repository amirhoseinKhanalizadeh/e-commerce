import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QueryProvider from "./ReactQuery/QueryProvider.tsx";
import ReduxProvider from "./Redux/ReduxProvider.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store.ts";
import { createBrowserRouter } from "react-router";
import CartComponent from "./components/CartComponent.tsx";
import { RouterProvider } from "react-router";
import NotFoundPage from "./components/NotFoundPage.tsx";
import ProductPage from "./components/ProductPage.tsx";
import { NuqsAdapter } from "nuqs/adapters/react";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "cart", element: <CartComponent /> },
      { path: "product/:productId", element: <ProductPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <NuqsAdapter>
          <QueryProvider>
            <RouterProvider router={router} />
          </QueryProvider>
        </NuqsAdapter>
      </PersistGate>
    </ReduxProvider>
  </StrictMode>
);
