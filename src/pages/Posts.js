import LikeCounter from "../components/LikeCounter/LikeCounter";
import './Posts.css'
function Posts() {
    return (
        <>
        <h1>LASTEST POSTS</h1>
        <article>
            <div className='Posts'>
                <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="5" autor="Jan Zieliński" color="grey"></LikeCounter>
                <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="16" autor="Robert Makłowicz" color="lightgrey"></LikeCounter>
                <LikeCounter title="Pierwszy post" description="Opis naszego artykułu" count="10" autor="Patryk Lipka" color="aqua"></LikeCounter>
            </div> 
        </article>
        </>
    );
}

export default Posts;