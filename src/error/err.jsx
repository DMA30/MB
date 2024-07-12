import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Error = () => {
  return (
    <div>
      <Row>
        <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
          <Card className="text-center">
            <CardBody className="p-5">
              <div className="display-1 fs-error text-dark">404</div>
              <p className="lead mt-4 text-800 text-sans-serif font-weight-semi-bold">
                Страница, которую вы запрашиваете, не существует.
              </p>
              <Link className="btn btn-primary btn-sm mt-3" to="/">
                Перейти на главную
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
  )
};

export default Error;