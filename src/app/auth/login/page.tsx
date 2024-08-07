'use client'
import { useTranslation } from '@/app/i18n/client'
import { Email, EmailAddress, EnterYourEmailAndPasswordToLogin, Password, RememberPassword, SignIn, SignIntoAccount, WelcomeToLogin } from '@/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'

import logo_light from '../../../../public/assets/images/logo/logo.png'
import logo_dark from '../../../../public/assets/images/logo/logo_dark.png'
import * as Yup from 'yup';
import { TextEditor } from '@/app/CommonComponents/TextEditor/page'


const Login = () => {

  const { i18LangStatus } = useAppSelector((state) => state.langSlice)
  const { t } = useTranslation(i18LangStatus)

  useEffect(() => {
    // document.body.classList.add("dark_only");

    document.body.classList.add("light_only");
  }, [])

  const router = useRouter()




  const [initialValues, setInitialValues] = useState({
    username: '',
    password: ''
  })
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required."),
  })

  const handleOnSubmit = (values: any) => {

    console.log("isFormSubmitted ?");

    router.push(`/hi/dashboard`)

  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      handleOnSubmit(values)
    },
  });



  return (
    <Container fluid className='m-0 p-0'>
      <Row className='m-0 p-0'>
        <Col xs='12' sm='12' md='12' lg='12' className='p-0 m-0'>
          <div className="login_card login_dark ">
            <div>
              <a className='logo' href='#'>
                <img className='img_fluid for_light' src={logo_light.src} alt='login page'></img>
                <img className='img_fluid for_dark' src={logo_dark.src} alt='login page'></img>
              </a>
            </div>

            <div className="login_main">
              <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  handleOnSubmit(values)
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="theme_form">
                    {/* <img src={intllogo.src} alt="intelliexams" style={{ width: "200px" }} /> */}
                    {/* {t(WelcomeToLogin)} */}

                    <h4 className='login_form_title'>{t(SignIntoAccount)}</h4>
                    <p className='login_form_desc'>{t(EnterYourEmailAndPasswordToLogin)}</p>

                    <TextEditor name={'username'} title={EmailAddress} placeholder={Email} placeOfHeading='top' inputType='text' />
                    <TextEditor name={'password'} title={Password} placeholder={Password} placeOfHeading='top' inputType='password' />

                    <Row className='mb-3'>
                      <Col xs='12' sm='12' md='12' lg='12' className='text-start d-flex align-item-center'>
                        <Input type='checkbox' className='me-3'/>
                        <Label>{t(RememberPassword)}</Label>
                      </Col>
                    </Row>
                    

                    <div className='text-center mb-3'>
                      <button type='submit' className='btn btn-sm btn-primary signin_btn' >{t(SignIn)}</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login