import React, { useState } from 'react';
import './home.css'

const Home = () => {
    const [n, setn] = useState(0)
    const [see, setSee] = useState(false)
console.log(n)
    return(
        <div>
            <h1>
                <button onClick={() => {setSee(true); 
                {n===0 && setn(+1)}
                } } className="button">
                    Ver imagem
                </button>
                {
                    n>0 && <button onClick={() => {setSee(false);setn(0)}} className="button">
                    Apagar Imagem
                </button>
                }
                
                <div>
                {see &&
                <img src="https://ih1.redbubble.net/image.3966742997.6190/fpp,small,lustre,wall_texture,product,750x1000.jpg" alt="dog" />}
                </div>
            </h1>
        </div>
    )
}

export default Home;