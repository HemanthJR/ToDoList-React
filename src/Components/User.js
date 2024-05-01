import './User.css';
function User(props) {

  return (
    

      <div className='card'>
        <div className='over-pad'>
          <div className='text'>
            <h1 className='heading'>{props.user.name}</h1>
            <p>{props.user.desc}</p>
          </div>
          <div className='btn'>
            <button type='button' className='btn btn-outline-danger' onClick={() => { props.handleDelete(props.user.id) }}>delete</button>
            <button className='btn btn-outline-primary'>Done</button>
          </div>
        </div>
      </div>
  );
}

export default User;
