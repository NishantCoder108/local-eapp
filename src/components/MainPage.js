import React, { useContext } from 'react'
import DataFile, { ContextData } from './DataFile'
import "./MainPage.css"
function MainPage() {

    const context = useContext(ContextData)
    console.log('context',context?.data[0].name)
  return (
    <div className='mainpage'>
        <h2>Welcome to E-App</h2>
        <div className='mainpage_card'> 
{
    context.data?.map((items,index) => (
        <div key={index} > 
        <h3  >{context?.data[index].name}</h3>
        <h3  >{context?.data[index].email}</h3>
        <h3 >{context?.data[index].address.street}</h3>
        <h3 >{context?.data[index].address.zipcode}</h3>
        <h3 >{context?.data[index].address.phone}</h3>
        <h3 >{context?.data[index].address.website}</h3>
        
         </div>
    ))
}
        </div>

    </div>
  )
}

export default MainPage