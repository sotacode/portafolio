import Image from 'next/image'
import React from 'react'

export const LogoSotaCode = () => {
  return (
    <div style={{display: 'flex'}}>
        <Image src="/extenselogo.png" alt="SotaCode" width={200} height={40} />
    </div>
  )
}
