import React from 'react'
import Button from '../Button/Button'
import '../bootstrap.css';
import {  MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Forms from '../Forms/Forms';
import './Body2.css'

const Body2 = () => {
  return (
    <>
      <div className="container d-flex flex-column flex-sm-row">
        <div className="col-12 col-sm-6 order-1 order-sm-2 text-center">
          <img src="./images/contactus.png" alt="Contact Us" className="imagee img-fluid" />
        </div>
        <div className="col-12 col-sm-6 order-2 order-sm-1">
          <div className="row mb-3">
            <Button text={' VIA SUPPORT CHAT'} logo={<MdMessage />} isBlack={true} />
            <Button text={' VIA CALL'} logo={<IoIosCall />} isBlack={false} />
            <Button text={' VIA EMAIL'} logo={<IoIosCall />} isBlack={true} />
          </div>
          <div className="row">
            <Forms />
          </div>
        </div>
      </div>

    </>
  )
}

export default Body2