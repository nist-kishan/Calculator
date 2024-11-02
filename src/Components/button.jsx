function Button({ Keys,handleKeyPress }) {
    return <>
        {Keys.map((item, index)=>(
        <button key={index} type="button" className="btn btn-dark col-3 m-2"
        onClick={(event)=>handleKeyPress(item)}
        >{item}</button>
        ))}

    </>
}

export default Button;