import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10);
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChange = () => {
    setItemsList(current => [...current, item]);
    setItem("");
  }

  const handleRemoveData = (index) => {
    const arr = [...itemsList.slice(0, index), ...itemsList.slice(index+1)]
    setItemsList(arr);
    console.log(index);
  }

  return (
    <div>
      <h1 className='text-center mt-20 text-blue-700 text-5xl'>Hello World! {count}</h1>
      <div className="mt-6 mx-10">
          <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your Task</label>
          <input type="text" id="data" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type here" required onChange={e => setItem(e.target.value)} value={item}/>
      </div>
      <div className="my-10 flex flex-col items-center justify-center">
        <button className="bg-blue-700 text-white px-5 py-2 rounded-lg" onClick={handleChange}>Submit</button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ul className='space-y-2'>
          {itemsList.map((element, index) => (
            <li key={index} className='flex space-x-3'>
              <p>{element}</p>
              <button className='px-2 py-1 bg-red-500 text-white' onClick={() => handleRemoveData(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
