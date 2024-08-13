import React from 'react'
import { Col, Row } from 'reactstrap'
import BreadCrumbs from './BreadCrumbs'
import HeaderMenu from './HeaderMenu'

export const Header = () => {
  return (
    <Row>
        <Col>
            <BreadCrumbs/>
        </Col>
        <Col  xs='8' sm='6' md='6' lg='6'>
            <HeaderMenu/>
        </Col>
    </Row>
  )
}
