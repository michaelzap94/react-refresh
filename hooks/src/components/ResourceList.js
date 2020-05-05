import React, {useState, useEffect} from 'react';
import axios from 'axios';

import getResources from './getResources';

const ResourceList = ({resource}) => {
    // const {resource} = props;
    const resources = getResources(resource);

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    );
}

// class based
// class ResourceList extends React.Component{
//     state = {resources: []};
//     componentDidMount(){
//         (async resource => {
//             const response = await axios.get(
//               `https://jsonplaceholder.typicode.com/${resource}`
//             );
    
//             this.setState({resources: response.data});
//           })(this.props.resource);
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         );
//     }
//     //called everytime after the component rerenders- either because of a parent component or setState()
//     componentDidUpdate(prevProps){
//         //we cannot just call setState() here as this will rerender the component and will call this element again which will call setState() again, INFINITE LOOP
//         //therefore check for some specific change in state and if there was a change only then do something
//         if(prevProps.resource !== this.props.resource){
//             (async resource => {
//                 const response = await axios.get(
//                   `https://jsonplaceholder.typicode.com/${resource}`
//                 );
        
//                 this.setState({resources: response.data});
//             })(this.props.resource);
//         }
//     }
// }

export default ResourceList;

