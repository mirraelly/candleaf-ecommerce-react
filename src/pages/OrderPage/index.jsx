import SecondLayout from "../../layouts/SecondLayout/SecondLayoutContainer.jsx";
import OrderDetails from "../../components/OrderDetails/index.jsx";
import Logo from "../../components/Logo/index.jsx";

function HomePage() {

  return (
    <SecondLayout>
      <Logo />
      <OrderDetails />
    </SecondLayout>
  )
}

export default HomePage;