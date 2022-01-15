import React from 'react'
import { AvatarBadge, Avatar } from '@chakra-ui/react'

const DMDashboard = ({name , image}) => {
    return (
        <div className="w-11/12 mx-auto mt-2 flex items-center hover:bg-[#2d2e2f] p-1 rounded-sm cursor-pointer transition-all ">
        <Avatar
        src={image}
        size="sm">
        <AvatarBadge boxSize='0.7em' bg='gray.500' />
        </Avatar>
        <p className="ml-3 text-[#8E928A] font-semibold font-sans">{name}</p>
        </div>
    )
}

export default DMDashboard
