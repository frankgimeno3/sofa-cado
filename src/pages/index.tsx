import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Layout from '../components/ui/layout/layout/Layout'
import { MainBannerHomeSection } from '../components/ui/sections/home/MainBannerHomeSection'
import { CityPreview } from '../components/ui/sections/home/CityPreview'



export default function Home() {
  return (
    <>
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
    <Layout title="Frankgualada">
      <MainBannerHomeSection />
    </Layout>

  </>
  )
}
