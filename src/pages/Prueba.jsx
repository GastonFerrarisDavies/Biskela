import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient.js'



export default function Prueba() {

    const [fetchError, setFetchError] = useState(null);
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchProds = async () => {
            let { data: Producto, error } = await supabase
            .from('Producto')
            .select('*')

            if (error) {
                setFetchError(error)
                console.log(fetchError)
            }
            else {
                setData(Producto)
                console.log(Producto)
            }
        }
        fetchProds()
    }, [])
  return (
    <>
      <h1>Prueba</h1>
      <div>
        {data.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
        ))}
        </div>
    </>
  )
}