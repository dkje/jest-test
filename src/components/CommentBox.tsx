import React,{FormEvent, useState} from 'react';

const CommentBox:React.FC = () =>{
  const [comment, setComment] = useState<string>('');

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    // Call an action creator
    // and save the comment
    setComment('');
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  )
}

export default CommentBox;