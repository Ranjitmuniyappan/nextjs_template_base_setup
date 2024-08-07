import { useTranslation } from '@/app/i18n/client';
import { useAppSelector } from '@/Redux/Hooks';
import { ErrorMessage } from 'formik';
import { title } from 'process'
import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

interface TextEditorProps {
    name: string;
    inputType:string;
    title: string;
    placeholder?: string;
    readonly?: boolean;
    values?: string;
    placeOfHeading?: string;
}

const TopHeader: React.FC<TextEditorProps> = ({ name, inputType, title, placeholder, readonly, values,  }) => {
    return (
        <Row>
            <Col xs='12' sm='12' md='12' lg='12'>
                <Label>{title}</Label>
                <Input name={name} placeholder={placeholder} defaultValue={values} disabled={readonly} type={inputType}/>
                <ErrorMessage className='text-danger' name={name} component={'span'} />
            </Col>
        </Row>
    )
}

const LeftHeader: React.FC<TextEditorProps> = ({ name, title, placeholder, readonly, values,  inputType }) => {
    return (
        <Row>
            <Col xs='4' sm='4' md='4' lg='4'>
                <Label>{title} :</Label>
            </Col>
            <Col xs='8' sm='8' md='8' lg='8'>
                <Input name={name} placeholder={placeholder} defaultValue={values} disabled={readonly} type={inputType}/>
                <ErrorMessage name={name} component={'span'} />
            </Col>
        </Row>
    )
}

export const TextEditor: React.FC<TextEditorProps> = ({ name, title, placeholder, readonly, values, placeOfHeading, inputType }) => {

    const { i18LangStatus } = useAppSelector((state) => state.langSlice)
    const {t} = useTranslation(i18LangStatus)

    return (
        <FormGroup>
            {placeOfHeading == 'top' ?
                <TopHeader name={name} title={t(title)} placeholder={placeholder ? t(placeholder) : ''} readonly={readonly} values={values} placeOfHeading={placeholder} inputType={inputType}/> :
                <LeftHeader name={name} title={t(title)} placeholder={placeholder ? t(placeholder) : ''} readonly={readonly} values={values} placeOfHeading={placeholder} inputType={inputType}/>
            }
        </FormGroup>
    )
}
