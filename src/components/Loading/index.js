import Lottie from 'lottie-react'
import React, { useContext } from 'react'
import loadingImage from '../../assets/images/loading.json'
import './styles.css'
import UserContext from '../../context/UserContext'

export default function Loading() {
  const {loading} = useContext(UserContext)

    return (
      <div style={{display: loading === true ? 'flex' : 'none'}} className="loading">
          <Lottie className="loading-image" animationData={loadingImage} />
      </div>
    )
  
}
