import { HangarActions } from '../actions/hangar.actions';
import { HangarsState } from '../state/hangars.state';
import * as hangars from '../actions/hangar.actions';
import { HangarsActionTypes } from '../actions/hangar.actions';
import { initialState } from '../state/hangars.state';
import { tassign } from 'tassign';


export function hangarReducer(state = initialState, action: hangars.HangarActions): HangarsState {

  // TODO: actualizar reducers
  switch (action.type) {
    case HangarsActionTypes.LOAD_HANGARS:
      return {
        ...state,
        loading: true
      };
    case HangarsActionTypes.LOADED_HANGARS:
      return {
        ...state,
        loading: false,
        loaded: true,
        hangars: [...action.payload],
      };
    case HangarsActionTypes.LOAD_HANGARS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload
      };
    case HangarsActionTypes.DELETE_HANGAR:
      return {
        ...state
      };
    case HangarsActionTypes.SELECT_HANGAR:
      return selectHangar(state, action);
    case HangarsActionTypes.NEW_HANGAR:
      return {
        ...state,
      };
    case HangarsActionTypes.EDIT_HANGAR:
      return editHangar(state, action);
    /* case HangarsActionTypes.SEARCH_HANGAR:
      return { ...state }; */
    case HangarsActionTypes.VALIDATION_HANGAR_NAME:
      return { ...state };
    default:
      return state;
  }
}

function selectHangar(state, action) {
  return tassign(state,
    {
      hangarSelected: action.payload
    });
}

function editHangar(state, action) {
  return tassign(state,
    {
      hangarSelected: null
    });
}
