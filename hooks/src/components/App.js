import React, {useState} from 'react';

const App = () => {
    //state = {resource: 'posts'};
    const [resource, setResource] = useState('posts');
    return (
        <div>
            <div>
            <div>
                {/* <button onClick={() => this.setState({resource: 'posts'})}>Posts</button>
                <button onClick={() => this.setState({resource: 'todos'})}>Todos</button> */}
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            {/* {this.state.resource} */}
            {resource}
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