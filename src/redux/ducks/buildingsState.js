
export const types={
    UPDATE_BUILDINGS:'STATE/UPDATE_BUILDINGS',
}

export const initialState =[
  {
      building_name:'building 1',
      building_id:'building_1',
      floors:[
          {
              floor_name:'Floor 1',
              floor_id:'floor_1',
              rooms:[
                  {
                      room_name:'Punjab 1',
                      room_id:'punjab_1',
                      bookings:[
                          {
                              date:'12/02/2021',
                              start_time:'3323',
                              end_time:'22333',
                              status:'booked'
                          }
                      ]
                  },
                  {
                      room_name:'Tamil Nadu 1',
                      room_id:'tamil_nadu_1',
                      bookings:[]
                  },
                   {
                      room_name:'Kaveri 1',
                      room_id:'kaveri_1',
                      bookings:[
                          {
                              date:'13/02/2021',
                              start_time:'3323',
                              end_time:'22333',
                              status:'booked'
                          }
                      ]
                  }
              ],

          }
      ]

  },
  {
    building_name:'building 2',
    building_id:'building_2',
    floors:[
        {
            floor_name:'Floor 1',
            floor_id:'floor_1',
            rooms:[
                {
                    room_name:'Bihar',
                    room_id:'bihar',
                    bookings:[
                        {
                            date:'12/02/2021',
                            start_time:'3323',
                            end_time:'22333',
                            status:'booked'
                        }
                    ]
                },
                {
                    room_name:'Maharastra',
                    room_id:'maharastra',
                    bookings:[]
                }
            ],

        }
    ]

}
]


  export default (state = initialState, action) => {
    switch (action.type) {
      case types.UPDATE_BUILDINGS:
            return { ...state,
                     ...action.data
                   }
      default:
        return state
    }
  }

  export const actions={
      updateBuildings:(data)=>({type:types.UPDATE_BUILDINGS, data}),
  }
