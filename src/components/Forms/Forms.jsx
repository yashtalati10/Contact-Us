import React from 'react'
import Button from '../Button/Button'
import '../Button/Button.css'

const Forms = () => {
    // const submitData = (event) => {
    //     event.preventDefault()
    //     console.log(event)
    //     console.log(event.target[0])
    //     console.log(event.target[1])
    //     console.log(event.target[2])
    // }
    return (
        <>
            <form>
                <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="textt">Text</label>
                    <textarea className="form-control" id="textt" placeholder="Your message" rows={3} />
                </div>
                <div className="row">
                    {/* <Button text={'SUBMIT'} /> */}
                    <button className="btn btnblack" onClick={() => { }}>SUBMIT</button>
                </div>
            </form>
        </>
    )
}

export default Forms