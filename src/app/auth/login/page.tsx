'use client'
import { useTranslation } from '@/app/i18n/client'
import { WelcomeToLogin } from '@/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import logo_light from '../../../../public/assets/images/logo.png'
import logo_dark from '../../../../public/assets/images/login_bg.jpg'



const Login = () => {

    const { i18LangStatus } = useAppSelector((state) => state.langSlice)
    const {t} = useTranslation(i18LangStatus)

    const router = useRouter()

    const handleRedirection = () =>{

        router.push(`/hi/dashboard`)
    }

  return (
    <Container fluid className='m-0 p-0'>
      <Row className='m-0 p-0'>
        <Col xs='12' sm='12' md='12' lg='12' className='p-0 m-0'>
          <div className="login_card login_dark">
            {/* {t(WelcomeToLogin)}
            <button className='btn btn-primary' onClick={handleRedirection} >Dashboard</button> */}

            <div>
              <a className='logo' href='#'>
                <img className='img_fluid for_light' src={logo_light.src} alt='login page'></img>
                <img className='img_fluid for_dark' src={logo_dark.src} alt='login page'></img>
              </a>
            </div>

            <div className="login_main">
              {/* <Formik
                initialValues={}
                validationSchema={}
                onSubmit={}
              >

              </Formik> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login