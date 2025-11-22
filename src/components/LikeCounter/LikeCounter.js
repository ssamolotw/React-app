import { useState, useEffect } from 'react';
import '../LikeCounter/LikeCounter.css';

// function like(props) - zapis zwykły
// function like(tile, description) - zapis skrócony
function LikeCounter({title, description, count, autor,color}) {
    const [likes, setLikes] = useState(+count); // paresInt(count)
    const handleLike = () => {
        setLikes(likes +1);
    }

    useEffect(() => {
        console.log("use effect odpolony");
    }, [likes]);

    useEffect(() =>{
        //document.title = `${likes} liczba lików dla posta`;
        if (likes > 20) {
            document.title = `${likes} Jesteś viralem`;
        } else {
            document.title = `${likes} słaby jesteś`;
        }
    }, [likes])
    const handleDislike = () => {
        if (likes < 1) {
            return;
        }
        setLikes(likes - 1);
    }
    const counterStyle = {
        color: likes>5 ? "red" : "black",
        fontWeight: "bold",
        fontSize: "20px"
    }


    return(
        <div className='post' style={{backgroundColor: color}}>
            <p style={counterStyle} >Liczba lików {likes}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{autor}</p>
            <div className='actions'>
                <button onClick={handleLike} > Polub</button>
                <button onClick={handleDislike}> DisLike</button>
            </div>


        </div>
    );
}
export default LikeCounter;