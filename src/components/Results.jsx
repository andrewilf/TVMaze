import React, {useEffect} from 'react'
import Result from './Result'
import './../App.css'

export default function Results(props) {
    console.log(props.data)
    let Shows = ""
    //useEffect(() => {
        Shows = props.data.map((element) => {
            let img = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
            
            if (element.show.image !== null){
                img = element.show.image.medium
            }
            console.log(img)
            return <div className="result">
                <Result src={img} alt={element.show.name} title={element.show.name}/>
            </div>
        })
   // }, [props.data])
    

    

    return (<>
        {Shows}
    </>)
}