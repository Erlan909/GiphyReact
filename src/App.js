// import React, {useState} from 'react'

// export default  function App() {
//     const [count, setCount]=useState(0)
//     const [val, setVal] = useState('')
//     const[data, setData] = useState([])

//     const plus = () =>{
//       setCount(count+1)
//     }
//     const getInputValue = (e) =>{
//       e.preventDefault()
//       alert(val)
//       setVal('')
//       setData(['first','second', 'third'])
//     }

//     return(
//       <div>
//         <h1>count:{count}</h1>
//         <button onClick={()=>setCount(count-1)}>
//           -
//         </button>
//         <button onClick={plus}>
//           +
//         </button>
//         <form onSubmit={(e)=>getInputValue(e)}>
//         <input value={val} onChange={(e)=>setVal(e.target.value)}/>
//         <button>
//           search
//         </button>
//         </form>
//         {data.map(el=>{
//           return(
//             <p>{el}</p>
//           )
//         })}
//       </div>
//     )
// }



import React, { useState } from 'react'
let api = "https://api.giphy.com/v1/gifs/search?q="
let key = "&api_key=HgeGC1tK2erNUOEaws7ZJnuCAPwdfBhU"
export default function App () {

   const [input, setInput]= useState('')
   const [data, setData]= useState([])


   const searchGif= async(value)=>{
    let url = api + input +key+ '&limit=10'
    let response = await fetch(url)
    let req = await response.json()
    setData(req.data)
    console.log(req.data)
    
  
  }
  
    return (
      <div>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
         }} />
         
         <button onClick={()=>searchGif(input)}>Search</button>
         <div>
           
             
         {
           data.map((el, index)=>{
          return(
              <iframe key={index} width='200' height='150' src={el.embed_url}></iframe>
          )
          })
          }
         </div>
   
  
  
      </div>
    )
  }
  






