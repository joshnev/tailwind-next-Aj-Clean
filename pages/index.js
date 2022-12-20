import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout title="Homepage">
      <Banner />
      <Hero />
      {/* Could this be put into a component? */}
      <h2 className="flex text-2xl font-bold font-primary mt-5 justify-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
