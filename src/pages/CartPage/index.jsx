import ProductsData from "../../db/ProductData/index.jsx";
import { useParams } from "react-router-dom";
import CartItems from "../../components/CartItems/index.jsx";
import Layout from '../../layout';

function HomePage() {
  const { id } = useParams();
  const product = ProductsData.find((p) => {
    return p.id == id;
  })
  
  return (
    <Layout className='py-5 my-5'>
      <CartItems product={product} />
    </Layout>
  )
}

export default HomePage;