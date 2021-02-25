import React, { Fragment, useState , useRef } from 'react';
import debounce from 'lodash.debounce'
import search_box from '../Styles/search_box.css';
import eventBus from '../Event/Event';

function Search_Box(props) {
    
        const [SearchItem, setSearchItem] = useState("");

    const handleChange  = event => {

        const nextValue = event.target.value

        setSearchItem(nextValue)

        doSearch(nextValue)
    }


    const doSearch = useRef(

        debounce(x => {
            eventBus.dispatch("ItemSearched", {
                message: x
              });
        }, 1000)
      ).current



    return (
        <Fragment>
            <input type="text" id="fname" name="fname" placeholder="Enter your thoughts..." className="search_box" 
            onChange={handleChange}/>
        </Fragment>
    );
}

export default Search_Box;