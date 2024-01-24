import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
  
    return (
    <div>
        <h3>Mais informações do produto: {id}</h3>
    </div>
  )
}

export default Info