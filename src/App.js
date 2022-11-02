import './App.css';

function App() {
  return (
    <div className='container bg-blue-200 min-h-screen min-w-full flex justify-center items-center py-14'>
      <div className='rounded-2xl w-80 h-fit bg-white shadow-md p-4'>
        <img className='rounded-xl mb-8 w-auto' src='./img/image-qr-code.png' alt='' />
        <h1 className='text-xl font-bold text-center text-zinc-800 mb-6'>Improve your front-end <br/> skills by building project</h1>
        <h3 className='text-md text-zinc-500 font-normal text-center mb-6'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h3>
      </div>
    </div>
  );
}

export default App;
