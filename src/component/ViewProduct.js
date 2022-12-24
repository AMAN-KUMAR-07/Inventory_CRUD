import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useFetcher } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function getAllProduct() {
      try {
        const products = await axios.get("http://localhost:3004/products")
        // console.log(products.data);
        setProducts(products.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllProduct();
  }, [])

  const handleDelete = async id => {
    await axios.delete(`http://localhost:3004/products/${id}`);
    var newproduct = products.filter((item) => {
      // console.log(item);
      return item.id !== id;
    })
    setProducts(newproduct);
  }

  const handleAddition = async id=>{
    console.log(id);
    try{
      const products = await axios.get(`http://localhost:3004/products/${id}`)
      try{
        // console.log("data is fetched")
        // console.log(products.data);
        await axios.post(`http://localhost:3004/cart`, products.data)
        alert("Product Added to cart")
      } catch (error){
        console.log("unable to post in Cart")
      }
    } catch (error) {
      console.log("unable to fetch product");
    }
  }

  return (
    <div className='mt-5'>
      <div className='col-md-6 offset-md-3 table-responsive-sm'>
        <h1 className='text-center mb-3 bg-primary text-white'>
          List of All Products
        </h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="text-center" scope="col">Product ID</th>
              <th class="text-center" scope="col">Product Name</th>
              <th class="text-center" scope="col">Price</th>
              <th class="text-center" scope="col">Brand</th>
              <th class="text-center" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => {
                return (
                  <tr>
                    <th scope="row" class="text-center">{product.id}</th>
                    <td class="text-center">{product.prodName}</td>
                    <td class="text-center">{product.price}</td>
                    <td class="text-center">{product.Brand}</td>
                    <td class="d-flex justify-content-evenly">
                      <Link to={`/updateProduct/${product.id}`}>
                        <button type="button" class="btn btn-primary">
                          Update
                        </button>
                      </Link>
                      <button type="button" class="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                      <button type="button" class="btn btn-success" onClick={() => handleAddition(product.id)}>Add2Cart</button>
                    </td>
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
