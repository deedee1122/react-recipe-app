import React, {useRef} from 'react'

const Searchbar = ({setQ}) => {
    let input = useRef()
  return (
    <form className="d-flex justify-content-center"  onSubmit={e=>{
        e.preventDefault()
        setQ(input.current.value)
    }}>
        <input ref={input} type="text" placeholder='search for recipe' className="form-control w-50"/>
    </form>
  )
}

export default Searchbar