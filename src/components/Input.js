import React from 'react';

const Input=(props)=>{
    return (
        <form onSubmit={props.onInputSubmit}>
            <div className="form-group">
                <label htmlFor="listInput">
                    Email address
                </label>
                <input type="text" className="form-control" id="listIemInput" placeholder="Add new todo" value={props.value} onChange={props.onInputChange}/>
                <button className="btn btn-primary" type="submit">
                    Add Item
                </button>
            </div>
        </form>
    );
}

export default Input;