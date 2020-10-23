import React from 'react';

const Input=(props)=>{
    return (
        <form onSubmit={(event)=>props.onInputSubmit(event)}>
            <div className="form-group">
                <label htmlFor="listInput">
                    Email address
                </label>
                <input type="text" className="form-control"  placeholder="Add new todo" value={props.value} onChange={(event)=>props.onInputChange(event.target.value)}/>
                <button className="btn btn-primary" type="submit">
                    Add Item
                </button>
            </div>
        </form>
    );
}

export default Input;