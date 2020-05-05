import React, {useState} from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    //state = {resource: 'posts'};
    //we can init as many useState(INITIAL_VALUE) as we want, to init multiple state variables
    const [resource, setResource] = useState('posts');//[resource, setResource] can be named anything | useState(INITIAL_VALUE)
    //const [count, setCount] = useState(0);// isntead of: state = {resource: 'posts', count: 0};
    return (
        <div>
            <div>
                <UserList />
                <div>
                    {/* <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
                    <button onClick={() => this.setState({resource: 'todos'})}>Todos</button> */}
                    <button onClick={() => setResource('posts')}>Posts</button>
                    <button onClick={() => setResource('todos')}>Todos</button>
                </div>
                {/* {this.state.resource} */}
                {/* {resource} */}
                <ResourceList resource={resource} />
            </div>
        </div>
    );
}

// Basic class based
// class App extends React.Component {
//   state = {resource: 'posts'};
//   render() {
//     return (
//         <div>
//           <div>
//             <div>
//                 <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
//                 <button onClick={() => this.setState({resource: 'todos'})}>Todos</button>
//             </div>
//             {this.state.resource}
//           </div>
//         </div>
//       );
//   }
// };



export default App;