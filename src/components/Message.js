import React from 'react';

const Message = (props) => {
  const { message } = props;
  return (
    <div className="user-message">
      {message.pseudo}: {message.texte}
    </div>
  );
};

export default Message;
