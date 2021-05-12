import React from "react";
import HobbyList from "../components/Home/HobbyList";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import casual from 'casual'
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  // strict comparison
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

// // shallow comparison 
//   const hobbyState = useSelector(state => ({
//     list: state.hobby.list,
//     activeId: state.hobby.activeId,
//   }), shallowEqual);

  const dispatch = useDispatch();
  console.log(hobbyList);

  const handleAddHobbyClick = () => {
    // Random a hobby object: id + title
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby: ${newId}`,
    };
    // Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  }

  return (
    <div>
      <h1>Redux hooks - Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        activeId={activeId} 
        hobbyList={hobbyList}
        onHobbyClick={handleHobbyClick} 
      />
    </div>
  );
}

export default HomePage;
