import Banner from '@components/Home/Banner';
import ProductFeed from '@components/Product/ProductFeed';
import { useQuery } from 'react-query';
import { getAllProducts, getCategories } from 'src/utils/api';

export default function Home(props) {
  const { data: products, isLoading } = useQuery('products', getAllProducts, {
    initialData: props.products,
  });


  const { data: categories } = useQuery(
    'categories',
    getCategories,
    {
      initialData: props.categories,
    }
  );
  return (
    <>
      <Banner />
      <ProductFeed products={products} categories={categories} />
    </>
  );
}
