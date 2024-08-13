import React from 'react'
import { Breadcrumb, BreadcrumbItem, Row } from 'reactstrap'

const BreadCrumbs = () => {
  return (
    <Row>
        <div>
            <h4>{'Title'}</h4>
            <Breadcrumb>
                <BreadcrumbItem href='#'>Home</BreadcrumbItem>
                <BreadcrumbItem href='#'>Degree Management</BreadcrumbItem>
                <BreadcrumbItem href='#'>Stream</BreadcrumbItem>
                <BreadcrumbItem href='#'>Create</BreadcrumbItem>
            </Breadcrumb>
        </div>
    </Row>
  )
}

export default BreadCrumbs