
export const types={
    UPDATE_MEETING_MODEL:'STATE/UPDATE_MEETING_MODEL',
}

export const initialState ={
    MeetingModelVisable:false
}


  export default (state = initialState, action) => {
    switch (action.type) {
      case types.UPDATE_MEETING_MODEL:
            return { ...state,
                     MeetingModelVisable:action.bool
                   }
      default:
        return state
    }
  }

  export const actions={
      setMeetingModelVisable:(bool)=>({type:types.UPDATE_MEETING_MODEL, bool}),
  }
