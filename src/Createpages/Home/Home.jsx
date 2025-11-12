import Layout from "../../Layout/Layout";
import HeroSection from "../../Herosection/HeroSection";
import Category from "../../Category/Category";
import HomePageProductCard from "../../Homepageproductcard/Homeproductcard";
import Track from "../../Track/Track";
import Testimonial from "../../Testimonial/Testimonal";
import HomeCardNext from "../../HomeCardNext/HomeCardNext";
import Banner from "../../Banner/Banner";
import VideoBanner from "../../VideoBanner/VideoBanner";
import HalfImageBanner from "../../HalfImageBanner/HalfImageBanner";
// import ImageBanner from "../../ImageBanner/ImageBanner";



const HomePages = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <VideoBanner />
      <HomePageProductCard />
      {/* <ImageBanner /> */}
      <HalfImageBanner />
      <HomeCardNext />
      <Banner />
      <Track />
      <Testimonial />
    </Layout>
  )
}

export default HomePages;