'use client'
import React from 'react'
import ProfileCard from "./components/ProfileCard/ProfileCard"
import CardConfigurationProfile from "./components/CardConfigurationProfile/CardConfigurationProfile"
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ConfirmationNumberOutlined } from '@mui/icons-material';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Loader from '@/components/Loader/Loader';
const myProfilePage = () => {
    const router = useRouter()
    const { data, session, status } = useSession()
   
    return (
        <div className='mt-16 md:mt-20 h-[100vh]   relative bg-[#EDEDED]'>
            {/*TODO:SIDEBAR     */}
            <div className='bg-[#ffffff] opacity-55 absolute left-0 h-full w-1/6 hidden md:block'>
                <div className='mt-12 ml-2 px-4  opacity-100'>
                    <div className='flex gap-2 mb-12'>
                        <MenuIcon className='' />
                        <p className='font-bold'>Mi Cuenta</p>
                    </div>
                    <div className='flex items-center gap-2 relative'>
                        <ConfirmationNumberOutlined />
                        <Link href={'/ventas'}>Ventas</Link>
                        <div className='absolute w-[8px] bottom-0 left-4 h-[8px] bg-blue-500 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1250px] flex  flex-col items-center mx-auto'>
                {data ? (
                <div className='mt-10 w-full md:max-w-[481px] lg:max-w-full px-4 flex justify-center'>
                    <ProfileCard data={data}/>
                </div>
                ): (
                    <div className='w-full flex justify-center items-center h-[100vh]'>
                    <Loader/>
                    </div>
                )}
                <div className='px-4'>
                    <CardConfigurationProfile />
                </div>
            </div>
        </div>
    )
}

export default myProfilePage