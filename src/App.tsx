import Layout from "./components/Layout"
import Sidenav from "./components/Sidenav"
import Mainsection from "./components/Mainsection"
import Rightbar from "./components/Rightbar"


export default function App() {
  return (
    <Layout>
      <Sidenav />
      <Mainsection />
      <Rightbar />
    </Layout>

  )
}