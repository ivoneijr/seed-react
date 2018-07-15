import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return <div>
    {JSON.stringify(message)}
  </div>;
};

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
