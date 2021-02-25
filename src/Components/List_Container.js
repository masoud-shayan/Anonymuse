import React, {Fragment, useEffect , useState} from 'react';
import eventBus from '../Event/Event';
import list_container from '../Styles/list_container.css';
import List_Item from './List_Item'
import axios from 'axios';

function List_Container(props) {

    const [response, setresponse] = useState([]);




    useEffect(() => {
    eventBus.on("ItemSearched", (data) => CallApi(data));

    });

    
    const CallApi = async (query) => {


        console.log(query.message)

        if( query.message == []){
            setresponse([]);
            // eventBus.remove("ItemSearched");

            return
        }
    
        const result = await axios(
            `https://www.googleapis.com/customsearch/v1?key=AIzaSyD1nMsveW7_Gsqe1o8MjJOJ49j-f3QUBNE&cx=f8ec77f678f85c037&q=${query.message}`

          );

          setresponse(result.data.items);

          console.log(result.data.items)
    }


    useEffect(function () {
        eventBus.remove("ItemSearched");
      }, []);


    return (
        <div className="list_container">
            {response.length > 0 ?

             response.map((data,id)=>{
                //  return <p key={id}>{data.title}</p>
                return <List_Item key={id} {...data}></List_Item>

                
                }) 
             
             : <div>nothing to show</div>}  
        </div>
    );
}

export default List_Container;