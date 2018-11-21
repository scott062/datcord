import React from 'react';
import MemberIndexItem from './member_index_item';

class MembersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchServer(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchServer(this.props.match.params.serverId);
    }
  }

  render() {
    const { members } = this.props;

    return (
      <div className='membersListContainer'>
        <h3>Members</h3>
        <ul className='membersListContainer'>
          {members.map(member => (
            <MemberIndexItem
              key={member.id}
              member = {member} />
          )
        )}
        </ul>
      </div>
    )
  }
}

export default MembersIndex;
