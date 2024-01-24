import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    const {id} = useParams();

    const url = "http://localhost:3000/products/"+id;

    const {data: product} = useFetch(url)
    return (
        <>
            <h5>ID do produto: {id}</h5>
            <h3>{product && product.name}</h3>
            <h3>R$ - {product && product.price}</h3>
            {product && <Link to={`/products/${product.id}/info`}>Mais informações...</Link>}
        </>
    )
}

export default Product