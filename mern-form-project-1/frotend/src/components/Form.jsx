
import React, { useState } from 'react';
import './Style.css';
//import { collection } from '../../../server/models/Users';

export default function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const collectData = async(e) => {
        e.preventDefault();

        try {
            let result = await fetch('http://localhost:3000/', {
                method: 'post',
                body: JSON.stringify({name, email, password}),
                headers:{
                    'Content-Type': 'application/json'
                },
            });

            result = await result.json;
            localStorage.setItem('user', JSON.stringify(result));

        } catch (error) {

            console.error(error);

        }

    }

  return (

    <div className='container'>

        <form onSubmit={collectData}>

            <h1 className='text-center pt-3'>SIGNUP FORM</h1>

            <div className='mb-3'>

                <label className='form-label'>Username</label><br/>
                <input type="text" className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}/>

            </div>

            <div className=''>

                <label htmlFor='form-label'>Email</label><br/>
                <input type="email" className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>

            </div>

            <div className=''>

                <label className='form-label'>Password</label><br/>
                <input type="password" className='form-control'
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>

            </div>

            <button type="submit" className='btn btn-success'>sign up</button>

        </form>


    </div>
  )
};
