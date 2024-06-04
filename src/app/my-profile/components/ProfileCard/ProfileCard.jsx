"use client"
import { Avatar, useMediaQuery, useTheme } from '@mui/material'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ProfileCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    console.log(data)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobile ? 360 : 500,
        bgcolor: 'background.paper',
        borderRadius: '0.55rem',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div className='bg-white p-9 w-full sm:min-w-[481px] lg:w-[700px] rounded-lg '>
            <div className='flex gap-6'>
                <Avatar className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]' alt={data.user?.name} src={data.user.image ? data.user.image : data.user.name} />
                <div className=''>
                    <h4 className='font-semibold text-xl mb-1'>{data.user.name}</h4>
                    <p className='text-sm opacity-55'>{data.user.email}</p>
                    <div className='flex w-full gap-6'>
                        <p className='text-xs mt-2 hidden md:block font-semibold text-blue-500'>Editar Informacion de la cuenta</p>
                        <p className='text-xs mt-2 block md:hidden font-semibold text-blue-500'>Editar </p>
                        <button onClick={handleOpen} className='text-xs mt-2 font-semibold text-red-500'>Cerrar sesion</button>
                    </div>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h5" className='font-semibold flex items-center gap-1'>
                            <ReportProblemIcon fontSize='medium' className='text-red-500' /> Estas seguro ?
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Estas apunto de cerrar la sesion de tu cuenta, Quieres continuar?
                        </Typography>
                        <div className='flex gap-4 mt-4'>
                        <Button onClick={() => signOut({ callbackUrl: '/' })} variant='contained' className='main-color'>Si, cerrar sesion</Button>
                            <Button onClick={handleClose} variant='outlined' className='border-red-500 text-red-500 '>No, cancelar</Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default ProfileCard