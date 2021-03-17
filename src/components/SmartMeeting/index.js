import React from 'react'
import './index.css'
import MeetingsSummary from './MeetingsSummary/MeetingsSummary';
import ScheduleMeeting from './ScheduleMeeting/ScheduleMeeting';

export default function SmartMeeting() {
 
    return (
        <div>
            <ScheduleMeeting/>
            <MeetingsSummary/>
        </div>
    )
}






