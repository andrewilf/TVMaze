import React, {useRef} from 'react'


export default function Search(props) {
    const input = useRef()

    const search = () =>{
        console.log(input.current.value)
        props.setSearched(true)
        props.setSearchTerm((input.current.value))
    }

    return (<>
        <div className="form">

            <input name="itemName" className="invalidField" type='text' ref={input}/>
            <input type='submit' onClick={search} />

        </div>
    </>)
}