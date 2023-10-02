const initState = {
  goals: [],
  activeGoalId: -1
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
    default:
      return initState
  }
  return initState
}
