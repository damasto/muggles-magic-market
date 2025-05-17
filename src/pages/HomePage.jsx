import NavBar from "../components/NavBar";
import Header from "../components/Header"
import ProductList from "../components/ProductList";
import DiscountBanner from "../components/DiscountBanner"
import CategoryCards from "../components/CategoryCards"

export default function HomePage() {
    return (
        <>
        <NavBar/>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <Header />
                <ProductList />
                <DiscountBanner />
                <CategoryCards />
            </div>
        </>
    )
}