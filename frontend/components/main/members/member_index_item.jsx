import React from 'react';

const MemberIndexItem = ({member}) => {
  return (
    <li className='memberIndexItem'>
      <img src={member.photo_url}
        alt={member.username}
        title={member.username}/>
      <span>{member.username}</span>
    </li>
  )
}

export default MemberIndexItem;
