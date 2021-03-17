import React , { useState, useEffect } from 'react'
import { PageHeader, Button, Card } from 'antd';
import { PlusCircleOutlined, HddOutlined } from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta';
import { actions as userActions } from '../../../redux/ducks/userState';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function MeetingsSummary(props) {

    const [state, setstate] = useState()

    let buildings=[]
    let rooms=[]
    useEffect(() => {
        if(props.buildings){
            props.buildings.map(e=>{
                const{building_name, building_id}=e;
                buildings.push({
                    building_name, 
                    building_id
                })
                e.floors.map(r=>{
                    r.rooms.map(i=>{
                        rooms.push({
                            ...i,
                            floor_id:r.floor_id
                        })
                    })
                })
            })
        }
        console.log(rooms,rooms, '2222')
        setstate({
            buildings,
            rooms
        })
    }, [props.buildings])

    const renderContent = () => (
        <div className="cardWrap">
        <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
            avatar={
                <img height="50px" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1615806590/TASK-SHOPUP/free-building-icon-1062-thumb_k2xu5b.png" />
            }
            title="Buildings"
            description={(
                <div>Total: {state && state.buildings.length}</div>
            )}
            className="cards"
            />
            <div></div>
        </Card>
        <Card style={{ width: 300, marginTop: 16}}>
            <Meta
            avatar={
                <img height="60px" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1615806616/TASK-SHOPUP/46945-200_pnu8li.png" />
            }
            title="Rooms"
            description={(
                <>
                <div>Total: {state && state.rooms.length}</div>
                <div>Free Now: 5</div>
                </>
            )}
            className="cards"
            />
        </Card>
        <Card style={{ width: 300, marginTop: 16 }}>
            <Meta
            avatar={
                <img height="50px" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1615806655/TASK-SHOPUP/ff1c0fd449219d124b4e9cf8bf703541_ic07lt.png" />
            }
            title="Meetings"
            description={(
                <>
                <div>Today: 100</div>
                <div>Going on Now: 5</div>
                </>
            )}
            className="cards"
            />
        </Card>
        </div>
    );

    return (
        <div className="block">
            <PageHeader
                className="site-page-header-responsive mainHeader" 
                subTitle="Meeting rooms summary"
                extra={[
                    <Button key="1" type="primary" onClick={()=>props.setMeetingModelVisable(true)}>
                        <PlusCircleOutlined />Add a meeting
                    </Button>,
                ]}
                >
                {renderContent()}
            </PageHeader>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeetingsSummary)