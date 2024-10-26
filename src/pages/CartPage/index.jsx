// import { useParams } from "react-router-dom";
import CartItems from "../../components/CartItems/index.jsx";
import Layout from "../../layouts/FirstLayout";

function CartPage() {
  // const { id } = useParams();

  return (
    <Layout className="p-md-5 m-md-5 pt-5 mt-5">
      <CartItems />
    </Layout>
  );
}

export default CartPage;
