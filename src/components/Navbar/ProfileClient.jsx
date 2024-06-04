'use client';

import { Avatar } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ProfileClient() {
  const { data } = useSession()
  
  return (
    data ? (
      <>
        <Link href={'/my-profile'} className='flex items-center gap-1 text-sm'>
          <Avatar sx={{ width: 25, height: 25 }} alt="Remy Sharp" src={data.user?.image ? data.user?.image : ""} />
          <p>{data.user?.name}</p>
        </Link>
        <div className='flex items-center gap-6'>
          <Link href={'/mis-compras'}>Favoritos</Link>
        </div>
      </>
    ) : (
      <>
        <Link href={'/register'} className='flex items-center gap-1 md:text-xs lg:text-sm'>
          Crear una cuenta
        </Link>
        <Link href={'/login'} className='flex items-center gap-1 md:text-xs lg:text-sm'>
          Iniciar sesion
        </Link>

      </>
    )

  );
}