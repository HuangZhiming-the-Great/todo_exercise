import React from 'react';
//we're using an arrow function and const variable type, a ES6 features.
const List=(props)=>{
    const list=props.listItems.map((item,index)=>{
        return (
                <li key={index}>
                    <h2 onClick={()=>props.onListItemClick(index)} style={item.done ?  {textDecoration: 'line-through', fontSize: '25px'} : {textDecoration: 'none', fontSize: '30px'}}>
                        {item.item}
                    </h2>
                    <button className="btn btn-danger " onClick={()=>props.deleteListItem(index)}>
                        x
                    </button>
                </li>
        );
    });

    return (
        <div>
            <ul>
                {
                    list
                }
            </ul>
        </div>
    );
}

List.defaultProps={
    listItems:[{item:" First thing to do",done:false}]
}

export default List;