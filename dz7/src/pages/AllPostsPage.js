import {useEffect} from "react";
import {getPostsThunk} from "../store/postsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


const AllPostsPage = () => {
    const dispatch= useDispatch()
    const {posts, loading, error}=useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPostsThunk())
    }, []);

    if(error){
        return <p>Произошла ошибка: {error}</p>
    }

    return (
        <div>
            {
                loading===false ?
                    posts?.map((items, index)=>(
                        <Link to={`/post/${items.id}`}  key={items.id}><div>{items.title}</div></Link>
                    ))
                    :
                    <h2>Загрузка...</h2>
            }
        </div>
    );
};

export default AllPostsPage;