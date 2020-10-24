const initialState = {
  patients: [],
  students:[]
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'HELP_ME_LIST':
      return {
        ...state,
        ...payload
      }
    case "ADD_PATIENT":
      console.log(state);
      const { patients } = state;
      patients.push(payload);
      return {
        ...state,
      };  
    default:
      return state;
  }
}
