import React, {createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ProductContext = createContext()
toast.configure();
const ProductContextProvider  = props => {
    const [products] = useState([
        {
          _id: 1,
          title: 'Simple Product 1',
          src: 'product-1',
          state: false,
          star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
          newprice: 30,
          oldprice:45,
          review: 5,
          count: 1  
        },
        {
            _id: 2,
            title: 'Simple Product 2',
            src: 'product-2',
            state: true,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
            newprice: 50,
            newprice: 150,
            oldprice:180,
            review: 15,
            count: 1  
          },
          {
            _id: 3,
            title: 'Simple Product 3',
            src: 'product-3',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-half', 'fa fa-star-o'],
            newprice: 55,
            oldprice:60,
            review:20,
            count: 1  
          },
          {
            _id: 4,
            title: 'Simple Product 4',
            src: 'product-4',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            newprice: 40,
            oldprice:50,
            review: 10,
            count: 1  
          },
          {
            _id: 5,
            title: 'Simple Product 5',
            src: 'product-5',
            state: true,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o', 'fa fa-star-o'],
            newprice: 70,
            oldprice:120,
            review: 14,
            count: 1  
          },
          {
            _id: 6,
            title: 'Simple Product 6',
            src: 'product-6',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            newprice: 22,
            oldprice:30,
            review: 12,
            count: 1  
          },
          {
            _id: 7,
            title: 'Simple Product 7',
            src: 'product-7',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
            newprice: 78,
            oldprice:98,
            review: 7,
            count: 1  
          },
          {
            _id: 8,
            title: 'Simple Product 8',
            src: 'product-8',
            state: true,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-half', 'fa fa-star-o'],
            newprice: 44,
            oldprice:56,
            review: 9,
            count: 1  
          },
          {
            _id: 9,
            title: 'Simple Product 9',
            src: 'product-9',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-half'],
            newprice: 69,
            oldprice:96,
            review: 17,
            count: 1  
          },
          {
            _id: 10,
            title: 'Simple Product 10',
            src: 'product-10',
            state: false,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            newprice: 47,
            oldprice:60,
            review: 13,
            count: 1  
          },
          {
            _id: 11,
            title: 'Simple Product 11',
            src: 'product-11',
            state: true,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
            newprice: 45,
            oldprice:55,
            count: 1  
          },
          {
            _id: 12,
            title: 'Simple Product 12',
            src: 'product-12',
            state: true,
            star: ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star-o'],
            newprice: 50,
            oldprice:80,
            review: 17,
            count: 1  
          },
    ])
    //add to cart
    const [cart, setCart] = useState([])
    const addToCart = id => {
      const check = cart.every(c => c._id !== id);
      if(check) {
        const data = products.filter(pr => pr._id === id);
        toast.success('The Product Added to cart', {position: toast.POSITION.TOP_CENTER})
        setCart([...data, ...cart])

      }else {
        toast.warning('The Product has been Added to cart', {position: toast.POSITION.TOP_CENTER})
      }
    }
    //increment
    const increment = id => {
      cart.forEach(pr => {
        if(pr._id === id) {
          pr.count === 1 ? pr.count = 1 : pr.count -= 1 ;
        }
      })
      setCart([...cart])
      getTotal()
    }
    //descrement
    const decrement = id => {
      cart.forEach(pr => {
        if(pr._id === id) {
          pr.count += 1;
        }
      })
      setCart([...cart])
      getTotal()
    }
    //delete 
    const Delete = id => {
      const newCart= cart.filter(pr => pr._id !== id);

      setCart([...newCart])
      getTotal()
    }
    const [total , setTotal] = useState(0)
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.newprice * item.count)
      }, 0)
      
      setTotal(res)
    }
  

    return (
        <>
            <ProductContext.Provider value={{products, addToCart, cart, increment, decrement, Delete, total, getTotal}}>
                {props.children}
            </ProductContext.Provider>
        </>
    );
}
export default ProductContextProvider