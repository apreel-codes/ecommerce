import Header from "../components/header";
import Input from '../components/input';
import ShowBrands from '../components/showBrands';
import Footer from "../components/footer";

const NewBrand = () => {
    return (
        <>
            <Header />
            <p>This is New Brand page</p>
            <div className='container'>
                <Input />
            </div>
            <ShowBrands />
            <Footer />
        </>
    )
}

export default NewBrand;