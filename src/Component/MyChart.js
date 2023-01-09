import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function MyChart() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
  
 

    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products")
        const data = await response.json()
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const Loading = () => {
        return (
        <>
         Loading...
        </>
        )
    }


    const dataList = data?.products?.map((ele)=>(
        ele
    ))
    const filterProduct = (cat) =>{
        const productList = dataList
        ?.filter((x)=> x.category === cat);
        setFilter(productList);
    }
 
    const ShowProduct = () => {
        return (
            <>
                <div className='buttons justify-content-center pb-5 mb-10 '>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(dataList)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("smartphones")}>smartphones</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("laptops")}>laptops</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("fragrances")}>fragrances</button>
                    <button className='btn btn-outline-dark me-2'  onClick={()=>filterProduct("skincare")}>Electronics</button>
                </div>
                {filter?.map((product) => {
                    return (
                        <div className='row justify-content-center'>
                            <div className='col-md-2 mb-4' key={product.id}>
                                <div className="card h-100 p-4 text-center border border-secondary rounded-lg">
                                    <img src={product.image} className="card-img-top" height="250px" alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0,12)}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                            </div>
                    )
                })}
            </>
        )

    }

    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Product</h1>
                        <hr />
                    </div>
                </div>
                <div className=''>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}
