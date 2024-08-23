import { Card, Col, Row } from "antd";
import React from "react";

export default function CardBankDashboard() {

    return (
        <Row className="1001">
            <Col className="2001" span={6} >
                <Card style={{ width: 300, height: 120, marginBottom: `1rem`, boxShadow: `0 1px 5px rgba(0, 0, 0, .2)` }} >
                    <Card style={{ width: 50 }}></Card>
                </Card>
            </Col>
            <Col className="2002">
                
            </Col>
        </Row>
    )
}