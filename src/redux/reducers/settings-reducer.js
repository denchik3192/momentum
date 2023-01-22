const TOGGLE_SETTING = "INCREMENT";
const ADD_SETTINGS = "ADD_SETTINGS";
// const DECREMENT = 'DECREMENT';

const initialState = {
  generalSettings: [
    { id: 1, name: "time", checked: true },
    { id: 2, name: "date", checked: false },
    { id: 3, name: "greeting", checked: true },
    { id: 4, name: "focus", checked: true },
    { id: 5, name: "qoutes", checked: true },
    { id: 6, name: "audio", checked: true },
    { id: 7, name: "Weather", checked: true },
  ],
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SETTING:
      return {
        ...state,
        generalSettings: state.generalSettings.filter(item => {
            if(item.id === action.payload) {
                item.checked = !item.checked
            }
            return item;
        })
      }

      case ADD_SETTINGS:
      return {
        ...state, 
        generalSettings: [...state.generalSettings, ...action.payload]
      }
    default:
      return state;
  }
}

export const toggleSettingAction = (payload) => ({ type: TOGGLE_SETTING, payload });
export const addSettingAction = (payload) => ({ type: TOGGLE_SETTING, payload });


export const fetchSettings = () => {
    return (dispatch) => {
        fetch('url')
        .then(response => response.json())
        .then(result => dispatch(addSettingAction(result)))
    }
}

