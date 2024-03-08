import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';
import { MyContext } from '../../Context';

function Home() {
    const { searchedProducts, searchProducts, setSearchProducts } = useContext(MyContext);

    return (
        <Layout>
            <h1>Home</h1>
            <input
            type="text"
            value={searchProducts}
            placeholder='Search products'
            className='border border-teal-700 rounded my-3 w-60 p-2 font-medium text-center focus:outline-teal-700'
            onChange={(event) => setSearchProducts(event.target.value)}
            />
            <div className='grid grid-cols-4 w-full max-w-screen-lg gap-24'>
            {
                searchedProducts?.map((item) => (
                    <Card
                    key={item.id}
                    data={item}
                    />
                ))
            }
            </div>
            
            <ProductDetail/>
        </Layout>
    )
}

export { Home }