import React from 'react';
//we're using an arrow function and const variable type, a ES6 features.
const List=(props)=>{
    const list=props.listItems.map((item,index)=>{
        return (
                <li key={index}>
                <div className="row">
                <div className="col-6">
                    <h2 onClick={(event)=>props.onListItemClick(index)} style={item.done ?  {textDecoration: 'line-through', fontSize: '25px'} : {textDecoration: 'none', fontSize: '30px'}}>
                        {item.item}
                    </h2>
                    </div>
                    <div className="col-4">
                    <button className="btn btn-danger " onClick={(event)=>props.deleteListItem(index)}>
                        x
                    </button>
                    </div>
                </div>
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