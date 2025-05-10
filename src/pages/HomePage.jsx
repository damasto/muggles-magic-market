import NavBar from "../components/NavBar";
import Header from "../components/Header"
import ProductList from "../components/ProductList";
import DiscountBanner from "../components/DiscountBanner"
import CategoryCards from "../components/CategoryCards"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <NavBar />
                <Header />
                <ProductList />
                <DiscountBanner />
                <CategoryCards />
                <Footer />
            </div>
        </>
    )
}