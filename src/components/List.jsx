const List = ({ items, removeItem, editItem, markCompleted }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                {items.map((item) => {
                    console.log(item.completed)
                    const { id, title } = item
                    return (
                        <ul key={id} className="w-full">
                            <li className="flex items-center gap-2 border-b py-4 w-full">
                                <div className="w-1/2 flex gap-2 items-center">
                                <input type="checkbox" onClick={() => markCompleted(id)} />
                                <p className={ `${item.completed === true ? "line-through" : " "} w-5/6 break-words`}>
                                    {title}
                                </p>
                                </div>
                                
                                <div className="flex gap-5">
                                    <button className="bg-blue-200 px-5" type="button" onClick={() => editItem(id)}>edit</button>
                                    <button className="bg-red-300 px-5" type="button" onClick={() => removeItem(id)}>delete</button>
                                </div>
                            </li>
                        </ul>
                    )
                })}
            </div>
        </>
    );
}

export default List;