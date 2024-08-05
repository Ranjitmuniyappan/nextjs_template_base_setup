'use client'
import { useTranslation } from '@/app/i18n/client'
import { WelcomeToDashboard } from '@/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import React from 'react'

const Dashboard = () => {

  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const {t, ready} = useTranslation(i18LangStatus)

  console.log("isItReady ? ", ready);
  
  
  
  return (
    <div>
        {t(WelcomeToDashboard)}
    </div>
  )
}

export default Dashboard