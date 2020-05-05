  
import { useState, useEffect } from 'react';
import axios from 'axios';

//The name of the functions using HOOKS have to start with Capital or useCapital
const useGetResources = resource => {
  const [resources, setResources] = useState([]);

    // const fetchResource = async resource => {
    //     const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/${resource}`
    //     );
    //     setResources(response.data);
    // };
 
    //useEffect(FUNCTION, [VALUES]) will handle both componentDidMount(run the FIRST time) and componentDidUpdate (run everytime after the component rerenders)
    useEffect(() => {
        //fetchResource(resource);
        (async resource => {
            const response = await axios.get(
              `https://jsonplaceholder.typicode.com/${resource}`
            );
            setResources(response.data);
          })(resource);
    }, [resource]);//if the values in the array change at any point. ONLY THEN we run the FUNCTION, which will rerender the component

  return resources;
};

export default useGetResources;