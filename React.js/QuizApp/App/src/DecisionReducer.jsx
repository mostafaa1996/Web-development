import { useReducer } from "react";

export default function DecisionReducer(state, action) {
  switch (action.type) {
    case "Confirm":
      return { ...state, confirmed: true, answer: action.payload.choice };
    case "ChoiceSelection":
      return {
        ...state,
        hasAchoiceBeenSelected: true,
        answer: action.payload.choice,
      };
    case "Skip":
      return { ...state, skipped: true };
    default:
      return {
        hasAchoiceBeenSelected: false,
        confirmed: false,
        answer: null,
        skipped: false,
      };
  }
}
