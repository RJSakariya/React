import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';

export default function Cards() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
                setLoading(false);
                console.log(products)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [products]);
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                {loading ?
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="primary" xs={6} />
                        </Card.Body>
                    </Card> : products.map((product) => (
                        <Card style={{ width: '18rem' }} className='m-2' key={product.id}>
                            <div style={{ height: 180,width:270, display:'flex',alignItems:"center",justifyContent:'center' }} className='mt-4'>
                                <Card.Img variant="top" src={product.image} style={{height:'fit-content',width:'fit-content',maxHeight:180 ,maxWidth:270}} />
                            </div>
                            <Card.Body>
                                <Card.Title style={{height:50,overflow:'hidden'}}>{product.title}</Card.Title>
                                <Card.Text style={{height:100,overflow:'hidden'}}>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary">{product.price} $</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
