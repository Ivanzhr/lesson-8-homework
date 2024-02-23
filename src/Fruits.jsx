function CreateFruits({fruits}) {
    return (
        <div className="fruits">
            {fruits.map((elem, index) => { 
               return <div key={index} className="fruits_item"><img src={elem} alt="" /></div>
            })}
        </div>
    )
}

export default CreateFruits;
