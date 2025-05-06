import NavBar from "../components/NavBar";
import Header from "../components/Header"
import ProductList from "../components/ProductList";
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <NavBar />
                <Header />
                <ProductList />
                <Footer />
            </div>
        </>
    )
}