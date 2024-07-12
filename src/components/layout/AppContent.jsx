import { Card, Col, Input, Layout, Row } from 'antd'
import { Typography } from 'antd';
const { Title } = Typography;

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 100px)',
    paddingInline: 300,
    backgroundColor: '#ffffff',

};
export default function AppContent() {
    return (
        <Layout.Content style={contentStyle}>
            <Row>
                <Col style={{ padding: `1rem` }} >
                    <Title level={2}>Добрый день</Title>
                </Col>
            </Row>
            <Row >
                <Col  >
                    <Card span={4} style={{ width: 300, marginBottom: `1rem`, boxShadow: `0 1px 5px rgba(0, 0, 0, .2)` }} >
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col span={1} >
                </Col>
                <Col span={16} >
                    <Input size="large" placeholder="Basic usage" style={{textAlign:`center`}} />
                </Col>
            </Row>
            <Row >
                <Col  >
                    <Card style={{ width: 300, marginBottom: `1rem`, boxShadow: `0 1px 5px rgba(0, 0, 0, .2)` }}>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
            <Row >
                <Col  >
                    <Card style={{ width: 300, marginBottom: `1rem`, boxShadow: `0 1px 5px rgba(0, 0, 0, .2)` }}>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
            <Row >
                <Col  >
                    <Card style={{ width: 300, boxShadow: `0 1px 5px rgba(0, 0, 0, .2)` }}>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>

        </Layout.Content>
    )
}