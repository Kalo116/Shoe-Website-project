import { MainSection } from './main-section/mainSection.component';
import { PopularProducts } from './popular-products-section/popularProducts.component';
import { AboutSection } from './about-us-section/about.component';
import { FeatureProductSection } from './future-product-section/featureProduct.component';
import { CommentSection } from './comment-section/comment.component';
import { SubscribeSection } from './subscribe-section/subscribe.component';


export const HomePage = () => {
    return (
        <>
            <MainSection />
            <PopularProducts />
            <AboutSection />
            <FeatureProductSection />
            <CommentSection />
            <SubscribeSection />
        </>
    );
};