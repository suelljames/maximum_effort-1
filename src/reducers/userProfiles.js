import services from "../service";

let userId = 0;

const users = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROFILE":
      userId++;
      services.users.add({ ...action.payload });
      return [...state, { ...action.payload, _id: userId }];
    case "LOAD_PROFILE":
      if (action.payload.length > 0) {
        userId = action.payload
          .map(prfl => prfl._id)
          .reduce((max, int) => (max = max > int ? max : int));
      }
      return [...action.payload];
    case "REMOVE_PROFILE":
      services.users.delete(action.payload);
      return [...state.filter(prfl => prfl._id !== action.payload)];
    default:
      return state;
  }
};
