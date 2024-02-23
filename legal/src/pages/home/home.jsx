import React, { useState } from 'react';
import './home.css'

const Home = () => {
    const [see, setSee] = useState(false)

    return(
        <div>
            <h1>
                <button onClick={() => setSee(true)} className="button">
                    Ver imagem
                </button>
                <div>
                {see &&
                <img src="https://ih1.redbubble.net/image.3966742997.6190/fpp,small,lustre,wall_texture,product,750x1000.jpg" alt="dog" />}
                </div>
            </h1>
        </div>
    )
}

export default Home;