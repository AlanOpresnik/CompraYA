import React from 'react'
import ProfileCard from "./components/ProfileCard/ProfileCard"
import CardConfigurationProfile from "./components/CardConfigurationProfile/CardConfigurationProfile"

const page = () => {
    return (
        <div className='mt-24 h-[100vh] bg-[#EDEDED]'>
            <div className='max-w-[1250px] flex  flex-col items-center mx-auto'>
                <div className='mt-10'>
                   <ProfileCard/> 
                </div>
                <div>
                    <CardConfigurationProfile/>
                </div>
            </div>
        </div>
    )
}

export default page