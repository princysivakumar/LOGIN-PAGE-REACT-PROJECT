import React, { useState } from 'react';



function LoginForm({ onLogin, error }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div>

<div className=' text-center bg-slate-300 pb-2 rounded-b'>
      <div className=' text-lg font-bold'>Credentials</div>
     <div className='flex justify-around'>
     <div >
<div className=' font-semibold text-red-500'>For admin </div>
<div ><span className='font-medium'>username</span>: user1</div>
<div><span  className='font-medium'>password:</span> password1</div>
      </div>
      <div >
<div  className=' font-semibold text-red-500'>For user</div> 
<div ><span className='font-medium'>username</span>: user2</div>
<div><span className='font-medium'>password:</span> password2</div>
      </div>
     </div>
    </div>
   


    <div className=" flex flex-col h-screen justify-center items-center bg-white   ">
      <div className='border border-black rounded-lg p-5 bg-green-300'>
      <h2 className='text-xl font-bold text-center pb-4'>Login</h2>
      <form onSubmit={handleSubmit} className='text-center  '>
       <div className=' grid grid-cols-2 justify-items-center items-center'>
       <label className=' '> Username:</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
       </div>
       <div className=' grid grid-cols-2 justify-items-center items-center pt-4'>
       <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
       </div>
        {error && <div className="error text-red-500 mt-3">{error}</div>}
        <button className=' mt-6 border px-4 py-2 bg-green-700 rounded-lg' type="submit">Log in</button>
      </form>
      </div>
     
    </div>
    </div>
  );
}

export default LoginForm;