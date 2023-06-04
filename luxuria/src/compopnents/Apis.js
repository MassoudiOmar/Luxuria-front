import axios from 'axios'

const getProducts = "https://dummyjson.com/products"
const getCategories = "https://dummyjson.com/products/categories"

const functions = {

    getProductsByCategory:   async(category,setState)=>{
        await axios.get(`http://localhost:5000/api/products/getProductsbycategory/${category}`).then((response)=>{setState(response.data)}).catch((err)=>{console.log(err)})
    }
    ,
    getProductslimit:  async(num,setState)=>{
        await axios.get(`http://localhost:5000/api/products/getProductslimit/${num}`).then((response)=>{setState(response.data)}).catch((err)=>{console.log(err)})
    },
    getProdByName :  async(name,setState)=>{
        await axios.get(`http://localhost:5000/api/products/getProdByName/${name}`).then((response)=>{setState(response.data)}).catch((err)=>{console.log(err)})
    }
}
export default functions