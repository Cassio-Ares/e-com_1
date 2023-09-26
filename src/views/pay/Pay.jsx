import React from 'react'
import Header from '../../assets/Header'
import Main_pay from '../components_pay/Main_pay'
import { useParams } from 'react-router-dom'

const Pay = ({data}) => {
  const {ItemId} = useParams()

  const showItem = data.find((product) => product.id == ItemId)


  return (
    <div>
        <Header/>
        <Main_pay data={showItem}/>
    </div>
  )
}

export default Pay