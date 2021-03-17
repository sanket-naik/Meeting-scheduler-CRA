import Modal from 'antd/lib/modal/Modal';
import React, {useState} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { actions as userActions } from '../../../redux/ducks/userState';
import { Button, DatePicker, Dropdown, Menu, message, TimePicker } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons'
import moment from 'moment';
import { UnixTime } from '../../../utils/utils';

function ScheduleMeeting(props) {

    const [state, setstate] = useState({
        date:'',
        start_time:'',
        end_time:'',
        building:''
    })

    const onChange=(e)=>{
        console.log(e.key)
        setstate({...state, building:e.key})
    }

    const handleOk = () => {
        const{date, start_time, end_time, building}=state

        if(date && start_time && end_time && building){
            console.log({
                date:UnixTime(date, 'date'),
                start_time:UnixTime(start_time, 'time'),
                end_time:UnixTime(end_time, 'time'),
                building:building
            })
        }else{
            message.warning("Please fill all the fields")
        }
      };
    
      const handleCancel = () => {
        props.setMeetingModelVisable(false);
      };

      function onDateChange(date, name) {
        setstate({...state, [name]:date})
      }

      console.log(props.buildings)

      const menu = (
        <Menu onClick={onChange}>
            {
                props.buildings.map((e, index)=>(
                    <Menu.Item key={e.building_id}>
                        {e.building_name}
                    </Menu.Item>
                ))
            }
        </Menu>
      );

    return (
        <div>
            {console.log(state)}
            <Modal 
                title="Add Meeting" 
                visible={props.isModalVisible} 
                footer={[
                    <Button key="back" onClick={handleCancel}>
                      Cancel
                    </Button>,
                    <Button key="submit" type="primary"  onClick={handleOk}>
                      Next
                    </Button>]}
                >

                <div className="d-flex BlockInputs">
                    <div className="labelName">Date</div>
                    <div>
                        <DatePicker onChange={(e)=>onDateChange(e,"date")} value={state.name}/>
                    </div>
                </div>
                <div className="d-flex BlockInputs">
                    <div className="labelName">Start time</div>
                    <div>
                        <TimePicker use12Hours format="h:mm a" onChange={(e)=>onDateChange(e,"start_time")}  value={state.start_time}/>
                    </div>
                </div>
                <div className="d-flex BlockInputs">
                    <div className="labelName">End time</div>
                    <div>
                        <TimePicker use12Hours format="h:mm a" onChange={(e)=>onDateChange(e,"end_time")} value={state.end_time}/>
                    </div>
                </div>
                <div className="d-flex">
                    <Dropdown overlay={menu} trigger={['click']} >
                     <Button><PlusCircleOutlined /> Select Building</Button>
                    </Dropdown>
                    {state.building &&
                    <div className="buildingdrop">
                        Building {state.building} Selected
                    </div>}
                </div>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isModalVisible:state.userState.MeetingModelVisable,
    buildings:state.buildingsState  
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...userActions
    }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleMeeting)