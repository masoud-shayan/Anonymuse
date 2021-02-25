import React from 'react';

function List_Item(props) {
    return (
        <a href={props.link}>
            <h5>{props.title}</h5>
            <p>{props.snippet}</p>
        </a>
    );
}

export default List_Item;