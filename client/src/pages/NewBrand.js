import Header from "../components/header";
import Input from '../components/input';
import ShowBrands from '../components/showBrands';
import Footer from "../components/footer";

const NewBrand = () => {
    return (
        <div>
            <Header />
                <h1 className="border font-black text-3xl mt-3">New Brand</h1>
                <Input />
                <ShowBrands />
                <Footer />
        </div>
    )
}

export default NewBrand;