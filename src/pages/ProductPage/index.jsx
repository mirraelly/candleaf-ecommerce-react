import ProductsData from "../../db/ProductData/index.jsx";
import { useParams } from "react-router-dom";
import ProductDetails from '../../components/ProductDetails';
import Layout from '../../layouts/FirstLayout';

function HomePage() {
  const { id } = useParams();
  const product = ProductsData.find((p) => {
    return p.id == id;
  })
  
  return (
    <Layout className='py-5 my-5'>
      <ProductDetails product={product} />
    </Layout>
  )
}

export default HomePage;