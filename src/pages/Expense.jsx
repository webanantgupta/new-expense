// import React, { useRef, useState } from 'react'
// import Navbar from '../components/Navbar'

// const Expense = () => {
//   let snoRef = useRef()
//   let nameRef = useRef()
//   let priceRef = useRef()

//   const [arr, setarr] = useState([
//     {
//       id: 1,
//       name: "Anant",
//       price: 4521
//     },
//     {
//       id: 2,
//       name: "Anand",
//       price: 4522
//     },
//     {
//       id: 3,
//       name: "Ravi",
//       price: 5221
//     },
//     {
//       id: 4,
//       name: "Avi",
//       price: 521
//     }
//   ])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let obj = {
//       id: snoRef.current.value,
//       name: nameRef.current.value,
//       price: priceRef.current.value
//     }
//     console.log(obj);

//     // spread operator is used to copy elements of array and object into new array and object

//     if (obj.id && obj.price && obj.name) {
//       setarr([...arr, obj]);
//     } else {
//       alert('All fields required');
//     }
//   }

//   const handleDelete = (ans, index) => {
//     console.log(ans,index);
//     let copyarr = [...arr]
//     copyarr.splice(index,1)
//     console.log(copyarr);
//     setarr(copyarr);
    
    
//   }
//   return (
//     <div>
//       <Navbar />
//       {/* { arr.map((obj) => {
//         return <div>
//              <p>{obj.name}</p>
//              <p>{obj.price}</p>

//         </div>
//       })} */}


//       <form style={{ width: 'max-content' }} className='d-flex m-auto gap-2 bg-dark my-3 p-3'>
//         <input type='number' placeholder='sno' ref={snoRef} />
//         <input type='text' placeholder='name' ref={nameRef} />
//         <input type='number' placeholder='price' ref={priceRef} />
//         <button onClick={handleSubmit} className='btn btn-success'>Add item</button>

//       </form>
//       <table className="table table-dark w-75 m-auto text-center">
//         <thead>
//           <tr>
//             <th scope="col">SNO</th>
//             <th scope="col">NAME</th>
//             <th scope="col">PRICE</th>
//             <th scope="col"></th>
//           </tr>
//         </thead>
//         <tbody>

//           {arr.map((obj, i) => {
//             return <tr key={obj.id}>
//               <th scope="row">{i + 1}</th>
//               <td>{obj.name}</td>
//               <td>{obj.price}</td>
//               <td><button onClick={() => handleDelete(obj,i)} className='btn btn-danger'>DELETE</button></td>
//             </tr>

//           })}
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default Expense


import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'

const Expense = () => {
    let [clicked, setClicked] = useState(false)
    let snoRef = useRef()
    let placeRef = useRef()
    let priceRef = useRef()
    let headRef = useRef()
    let [arr, setArr] = useState([
        {
            id: 1,
            place: "Coffee House",
            expense: 400,
        },
        {
            id: 2,
            place: "Mall",
            expense: 1000
        },
        {
            id: 3,
            place: "Movie",
            expense: 1000
        }
    ])

    let handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            id: snoRef.current.value,
            place: placeRef.current.value,
            expense: priceRef.current.value
        }
        console.log(obj)
        if (obj.id && obj.place && obj.expense) {

            setArr([...arr, obj])
        }
        else {
            alert('Please fill all the values')
        }
        console.log(headRef.current.innerHTML)
    }
    function handleDelete(obj, index) {
      // Method 1
        // console.log(obj, index)
        // let copyArr = [...arr]
        // console.log(copyArr)
        // copyArr.splice(index, 1)
        // console.log(copyArr)
        // setArr(copyArr)

        // Method 2 
        // let i = arr.findIndex((ele)=>ele.id==obj.id)
        // console.log(i); 

        let filter =arr.filter((ele)=> ele.id!==obj.id)
        console.log(filter);
        setArr(filter);
        
        
    }
    return (
        <>
        <Navbar/>
            <div> <h4 className='text-center'>Expense Tracker</h4></div>
            <div className='text-center'>
                <button className='rounded bg-info' onClick={() => setClicked(true)}>Add Expense</button>
            </div>
            <h1 ref={headRef}>Waah</h1>
            {clicked && <form style={{ width: "max-content" }} action="" className='bg-dark my-3 p-3 rounded m-auto d-flex gap-2 form'>
                <input type="number" name="" id="" placeholder='Enter Sno' ref={snoRef} />
                <input type="text" name="" id="" placeholder='Enter Place' ref={placeRef} />
                <input type="number" name="" id="" placeholder='Enter Expense' ref={priceRef} />
                <button className='btn btn-success' onClick={handleSubmit}>Add</button>
                <button className='bg-danger button' onClick={()=>setClicked(false)}>X</button>
            </form>}

            <table className="table table-dark w-75 m-auto text-center">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Place</th>
                        <th scope="col">Expense</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((ele, i) => {
                        return <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{ele.place}</td>
                            <td>{ele.expense}</td>
                            <td><button onClick={() => { handleDelete(ele, i) }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>

    )
}

export default Expense
