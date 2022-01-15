import React from 'react'
import dm from "../../../database/dm"
import { Tooltip } from '@chakra-ui/react'
import DMDashboard from '../DMDashboard'

const MembersTab = ({activeServer}) => {
    // const totalMembers = activeServer.members.length
    return (
        <>
        {activeServer && (
<div className="w-[240px] bg-[#2F3136] h-[95v] ">
      
        {/* ///////////////////////Direct Message //////////////////////////////*/}
        <div className="w-11/12 mx-auto my-5 flex items-center justify-between">
            <h3 className="text-[#8E928A] text-xs font-semibold uppercase">Members - 6</h3>
            <div>
            </div>
        </div>
        {activeServer.members.map((dms) => {
            return(
        <DMDashboard 
            name = {dms.name}
            image={dms.image}
        />
            )
        })}
      </div>
        )}
        </>
    )
}

export default MembersTab
