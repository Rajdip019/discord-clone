import React, { useState } from 'react'
import Document from '../documnent'
import LeftBarDashboard from '../components/LeftBarDashboard'
import FriendBardDashboard from '../components/FriendBardDashboard'
import NavbarDashboard from '../components/NavbarDashboard'
import ActiveNowDashboard from '../components/ActiveNowDashboard'
import OnlineDashboard from '../components/OnlineDashboard'
import AllDashboard from '../components/AllDashboard'
import PendingDashboard from '../components/PendingDashboard'
import SuggestionsDashboard from '../components/SuggestionsDashboard'
import BlockedDashboard from '../components/BlockedDashboard'
import AddFriendDashboard from '../components/AddFriendDashboard'

const dashboard = () => {
    const [state, setState] = useState("online");

    const hadleState = (newState) => {
        setState(newState)
    }
    return (
        <div>
        <Document />
        <div className='flex'>
        <LeftBarDashboard />
        <FriendBardDashboard />
        <div className='flex flex-col'>
        <NavbarDashboard hadleState = {hadleState}/>

        <div className='flex'> 
        {state === "online" && (
        <OnlineDashboard />
        )}
        {state === "all" && (
        <AllDashboard />
        )}
        {state === "pending" && (
        <PendingDashboard />
        )}
        {state === "suggestion" && (
        <SuggestionsDashboard />
        )}
        {state === "blocked" && (
        <BlockedDashboard />
        )}
        {state === "add" && (
        <AddFriendDashboard />
        )}
        <div className='h-[95vh] w-0.5 bg-gray-600'></div>
        <ActiveNowDashboard />
        </div>

        </div>
        </div>
        </div>
    )
}

export default dashboard
