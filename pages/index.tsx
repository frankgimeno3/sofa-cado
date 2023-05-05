import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Layout from '../components/ui/layout/layout/Layout'
import { MainBannerHomeSection } from '../components/ui/sections/home/MainBannerHomeSection'
import { CityPreview } from '../components/ui/sections/home/CityPreview'

import { GetStaticProps } from 'next';
import Page from '../components/ui/blueprints/Page';
import ProductCard from '../components/ui/blueprints/ProductCard';
import { getProducts, Product } from '../lib/products';

interface HomePageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(process.env.REVALIDATE_SECONDS),
  };
};
const HomePage: React.FC<HomePageProps> = ({ products }) => {
  console.log('[HomePage] render:', products);
  return (
        <Layout title="Frankgualada">
    <Page title="Indoor Plants">
         <NextSeo
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      title="Frankgualada - City Recreation"
      description="Phershian is a strategic and financial consultancy for small and medium-sized companies that defines, designs and implements strategies and solutions that generate impact and measurable results. Our services are Business Valuation, Due Diligence, Operational and Financial Restructuring, Refinancing and Insolvencies, Strategic Consulting, Sustainable and Corporate Finance, Business Transformation, Board of Directors and Shareholders Services."
      canonical={process.env.NEXT_PUBLIC_WEBSITE_URL}
      openGraph={{
        type: 'website',
        locale: 'en_GB',
        url: process.env.NEXT_PUBLIC_WEBSITE_URL,
        siteName: 'Frankgualada',
        title: 'Frankgualada - City recreation',
        description: 'This project ressembles a city, with citizens, their homes, and the places where they work, also including public facilities like a hospital, a park, and a city hall. Each citizen has a private profile, including some of their personal information, and their current location (based on a programmed behaviour).',
        images: [
          {
            url: process.env.NEXT_PUBLIC_WEBSITE_URL + '/img/seoImages/backgroundLogo2.jpeg',
            alt: 'Frankgualada Logo',
            type: 'image/jpeg',
          }
        ],
      }}
    />
      <MainBannerHomeSection />
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
    </Layout>
  );
};

export default HomePage;
  