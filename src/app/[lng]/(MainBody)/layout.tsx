import { Header } from '@/Layout/Header/Header'
import Store from '@/Redux/Store'
import React from 'react'
import { Provider } from 'react-redux'

export default function RootLayout({children}:{ children: React.ReactNode}) {
  return (
    // <Provider store={Store}>
        <div>
            <Header/>
            <div className="page_body_wrapper">

                <div className="page_body">
                    {children}
                </div>
            </div>
        </div>

    // </Provider>
  )
}

