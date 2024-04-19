import React, { useState } from 'react'

function LoginForm() {
    const [current,setCurrent] = useState('username');

    const signInOption = (opt) => {
        setCurrent(opt);
        
    }
  return (
    <div className=' lg:w-1/3 md:w-1/2 rounded-2xl bg-white p-4 shadow-sm shadow-slate-400 border'>
      <h1 className='flex justify-center m-2 text-2xl font-bold '>Sign In to your account!</h1>
      
      <div className="m-2 my-4 flex justify-around">
        <button onClick={() => signInOption('mobile')} className={`w-1/4 py-2  font-bold  transition-all ${current==='mobile'?'bg-blue-900 text-white rounded-md':'text-blue-900'}`}>Mobile</button>
        <button onClick={() => signInOption('username')} className={`w-1/4 py-2  font-bold  transition-all ${current==='username'?'bg-blue-900 text-white rounded-md':'text-blue-900'}`}>Username</button>
        <button onClick={() => signInOption('aadhaar')} className={`w-1/4 py-2 font-bold  transition-all  ${current==='aadhaar'?'bg-blue-900 text-white rounded-md':'text-blue-900'}`}>Aadhaar</button>
      </div>
      {
            current==='mobile' && (
                <div className='m-2'>
                    <input className="p-2 w-full mt-4 mb-2 border-2 border-slate-300 rounded-lg"  placeholder='Mobile Number*' type="tel" name="" id="" />
                    <p className="text-sm mb-4 font-bold">Enter your registered Mobile number</p>
                    <button className='p-4 py-3 text-xl font-serif rounded-xl  w-full bg-green-500 text-white hover:bg-green-700 transition-all'>Next</button>
                </div>
            )
        }
        {
            current==='username' && (
                <div className='m-2'>
                    <input className="p-2 w-full border-2 border-slate-300 rounded-lg"  placeholder='Username*' type="text" name="" id="" />
                    <input className="p-2 mt-2 mb-3 w-full border-2 border-slate-300 rounded-lg"  placeholder='6 digit Security PIN*' type="password" name="" id="" />
                    <br />
                    <a className="text-sm text-blue-950 font-bold">Forgot security PIN ?</a>
                    <button className='p-4 py-3 mt-4 text-xl font-serif rounded-xl  w-full bg-green-500 text-white hover:bg-green-700 transition-all'>Next</button>
                </div>
            )
        }
        {
            current==='aadhaar' && (
                <div className='m-2'>
                    <input className="p-2 w-full my-4 border-2 border-slate-300 rounded-lg"  placeholder='Aadhaar Number*' type="password" name="" id="" />
                    <br />
                    <button className='p-4 py-3 text-xl font-serif rounded-xl  w-full bg-green-500 text-white hover:bg-green-700 transition-all'>Next</button>
                </div>
            )
        }
    </div>
  )
}

export default LoginForm
