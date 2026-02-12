import { Helmet } from "react-helmet";
import MainLayout from "./components/layouts/MainLayout";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";

function App() {
    return (
        <MainLayout>
            <Helmet>
                <title>فروشگاه استیکر برنامه نویسی</title>
            </Helmet>

            <div className="mx-auto max-w-6xl">
                <Header />
                <ProductListing />
            </div>
        </MainLayout>
    );
}

export default App;
