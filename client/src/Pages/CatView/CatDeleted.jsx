import { Link, useParams } from "react-router-dom";

// /deletedcat/:id
export default function CatDeleted() {

    const { id } = useParams();

    return(
        <>
            <p>Your cat {id} was deleted</p>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    )

}