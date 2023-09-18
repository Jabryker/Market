import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Layout from "./Layout/Layout"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  )
}

export default App
