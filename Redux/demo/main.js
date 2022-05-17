console.log(window.Redux);
// SETUP REDUX STORE
const { createStore } = window.Redux;
// state
const initialState = ['Listen to music'];

// reducer
const hobbyReducer = (state = initialState, action) => {
  return state;
};
// store
const store = createStore(hobbyReducer);

// RENDER REDUX HOBBY LIST
const renderHobbyList = (hobbyList) => {
  if (Array.isArray(hobbyList) || hobbyList.length === 0) return;
  const ulElement = document.querySelector('#hobbyListId');
  if (!ulElement) return;
  //reset previous content of ul
  ulElement.innerHTML = '';

  for (const hobby of hobbyList) {
    const liElement = document.createElement('li');
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

//Render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

//Handle form submit
const hobbyFormElement = document.querySelector('#hobbyFormId');
if (hobbyFormElement) {
  const handleFormSubmit = (e) => {
    //prevent browser from reloading
    e.preventDefault();

    const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
    if (!hobbyTextId) return;

    console.log('SUBMIT', hobbyTextElement.value);

    const action = {
      type: '',
      payload: hobbyTextElement.value,
    };
    store.dispatch(action);
  };
  hobbyFormElement.addEventListener('submit', handleFormSubmit);
}
store.subscribe(() =>
{
  
})