import React from "react";
import PropTypes from "prop-types";
import './HobbyList.css'

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  activeId: PropTypes.number,
  onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const { hobbyList, activeId, onHobbyClick } = props;

  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };

  return (
    <div>
      <ul className="hobby-list">
        {hobbyList.map((hobby) => (
          <li 
            onClick={() => handleClick(hobby)} 
            key={hobby.id}
            className={hobby.id === activeId ? 'active' : ''}
          >
            {hobby.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;
