import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText]= useState('')
    const [day,setDay]=useState('')
    const [remainder,setRemainder]=useState(false)

    const submitHandler=(e)=>{
        e.preventDefault()
        if(!text) {
            alert("Please Enter Text")
            return
        }

        onAdd({text,day,remainder})

        setText('')
        setDay('')
        setRemainder(false)

        }
    return (
        <form className='add-form' onSubmit={submitHandler}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task'
                value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Date & Time</label>
                <input type="text" placeholder='Add Day & Time'
                 value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Remainder</label>
                <input type="checkbox" 
                 value={remainder} onChange={(e)=>setRemainder(e.currentTarget.checked)} checked={remainder}/>
            </div>

            <input type="submit" value="Save Task"  className='btn btn-block'/>
            
            
        </form>
    )
}

export default AddTask
