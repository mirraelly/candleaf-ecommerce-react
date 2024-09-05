import Layout2Container from "../../layoutSec/Layout2container.jsx";
import OrderDetails from "../../components/OrderDetails/index.jsx";
import Logo from "../../components/Logo/index.jsx";


function HomePage() {

  return (
    <Layout2Container>
      <Logo />
      <OrderDetails />
    </Layout2Container>
  )
}

export default HomePage;