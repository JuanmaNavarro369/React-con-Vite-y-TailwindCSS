import {useState, useEffect } from 'react';
import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';
import { ProductDetail } from '../../Components/ProductDetail';

function Home() {

    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setCards(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Layout>
                Home
                <div className='grid grid-cols-4 w-full max-w-screen-lg gap-3'>
                {
                    cards?.map((card) => (
                        <Card
                        key={card.id}
                        data={card}
                        />
                    ))
                }
                </div>
                
                <ProductDetail/>
            </Layout>
        </>
    )
}

export { Home }