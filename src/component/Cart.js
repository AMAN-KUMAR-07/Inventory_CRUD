import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Cart = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    async function getAllCart(){
      try{
        const products = await axios.get("http://localhost:3004/cart")
        setProducts(products.data)
      } catch (error) {
        console.log("Something is wrong");
      }
    }
    getAllCart();
  },[])

  return (
    <div className='mt-5'>
      <div className='col-md-6 offset-md-3 table-responsive-sm'>
        <h1 className='text-center mb-3 bg-primary text-white'>
            My Cart
        </h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              {/* <th class="text-center" scope="col">Product ID</th> */}
              <th class="text-center" scope="col">Product Name</th>
              <th class="text-center" scope="col">Brand</th>
              <th class="text-center" scope="col">Price</th>
              
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => {
                return (
                  <tr>
                    {/* <th scope="row" class="text-center">{product.id}</th> */}
                    <td class="text-center">{product.prodName}</td>
                    <td class="text-center">{product.Brand}</td>
                    <td class="text-center">{product.price}</td>
                    
                  </tr>
                )
              }
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart