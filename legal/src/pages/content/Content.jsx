
import axios from "axios"
import { useEffect, useState } from "react";

const [data, setData] = useState([]);



useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      }
    };

    fetchData();
  }, []);

console.log(data)

const Content = () => {
    return(
        <div>
            <h1>Rick</h1>
        </div>
    )
}

export default Content;