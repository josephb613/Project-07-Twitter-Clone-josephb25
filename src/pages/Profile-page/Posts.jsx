import { useParams } from "react-router-dom";


function Posts() {
    const { id } = useParams()

    return (

        <div>
            <h1>lorem {id}</h1>
        </div>
    );
}

export default Posts;