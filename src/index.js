import React from 'react';
import ReactDOM from 'react-dom';
//faker is a 3th party library that will generate random data
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

//Components are passed in as <CommentDetail/> instead of {CommentDetail}

//FUNCTIONAL component
const App = () => {
    return  (
        <div className="ui container comments">
          <ApprovalCard>
            <div>
              <h4>Warning!</h4>
              Are you sure you want to do this?
            </div>
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Sam"
              timeAgo="Today at 4:45PM"
              content="Nice blog post"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Alex"
              timeAgo="Today at 2:00AM"
              content="I like the subject"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
    
          <ApprovalCard>
            <CommentDetail
              author="Jane"
              timeAgo="Yesterday at 5:00PM"
              content="I like the writing"
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
        </div>
      );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);