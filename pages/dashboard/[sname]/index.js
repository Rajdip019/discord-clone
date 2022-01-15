import React, { useState } from 'react'
import Document from '../../documnent'
import LeftBarDashboard from '../../components/LeftBarDashboard'
import Communitybar from '../../components/server/Communitybar'
import Navbar from '../../components/server/Navbar'
import MembersTab from '../../components/server/MembersTab'
import { useRouter } from 'next/router'
import servers from '../../../database/servers'
import MainSection from '../../components/server/MainSection'

const index = () => {
    const router = useRouter();
    const activeServer = servers.find((e) => e.name === router.query.sname);
    const [isMember, setIsMember] = useState(true)
    const handleMember = () => {
        setIsMember(!isMember)
    }
    return (
<div>
        <Document />
        <div className='flex'>
        <LeftBarDashboard />
        <Communitybar activeServer={activeServer} />
        <div className='flex flex-col'>
        <Navbar handleMember={handleMember}/>

        <div className='flex'> 
        <MainSection activeServer={activeServer} />
        {isMember ? (
            <>
            <div className='h-[95vh] w-0.5 bg-gray-600'></div>
        <MembersTab activeServer={activeServer}/>
    </>
        ) : (null)}

        </div>

        </div>
        </div>
        </div>
    )
}

export default index
