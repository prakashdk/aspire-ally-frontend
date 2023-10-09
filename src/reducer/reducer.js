const initState = {
  goals: [],
  activeGoalId: -1,
  userId:"2215211b-6e33-404d-a3f0-bb89f375b493"
}

export default function goalReducer(state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case "SET_ALL_GOALS":
      return {
        ...state,
        goals: payload
      }
    case "APPEND_GOAL":
      return {
        ...state,
        goals: [...state.goals, payload]
      }
    case "SET_ACTIVE_GOAL_ID":
      return {
        ...state,
        activeGoalId: payload
      }
    case "SET_USER_ID":
      return {
        ...state,
        userId: payload
      }
    default:
      return initState
  }
  return initState
}
