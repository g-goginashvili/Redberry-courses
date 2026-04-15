import { RouterProvider } from "react-router";
import router from "./routs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeaderNavbar } from "./components/header-navbar/header-navbar";
import { Footer } from "./components/footer/footer";
import { Box } from "@mui/material";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderNavbar />
      <Box>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
