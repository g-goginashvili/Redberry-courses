import { RouterProvider } from "react-router";
import router from "./routs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderNavbar } from "./components/header-navbar/header-navbar";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderNavbar />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
