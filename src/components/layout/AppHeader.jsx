import { Button, Col, Divider, Flex, Layout, Row } from 'antd'
import { useState } from 'react';



const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 100,
    paddingInline: 300,
    lineHeight: '49px',
    backgroundColor: '#e6e6e6',
};
export default function AppHeader() {
    const [size, setSize] = useState('midle')
    return (
        <Layout.Header style={headerStyle}>
                <Row>
                    <Col span={3}>LOGOBANK</Col>
                    <Col span={18}>
                        <Button type="link" size={size}>
                            Банк
                        </Button>
                        <Button type="link" size={size}>
                            Бизнес
                        </Button>
                        <Button type="link" size={size}>
                            Касса
                        </Button>
                        <Button type="link" size={size}>
                            Инвистиции
                        </Button>
                        <Button type="link" size={size}>
                            Сим-карта
                        </Button>
                        <Button type="link" size={size}>
                            Страхование
                        </Button>
                        <Button type="link" size={size}>
                            Путешествия
                        </Button>
                        <Button type="link" size={size}>
                            Город
                        </Button>
                        <Button type="link" size={size}>
                            Долями
                        </Button>
                    </Col>
                    <Col span={3}>умпалумпа</Col>
                </Row>
                <Divider style={{ margin: '0' }} />
                <Row>
                    <Col>
                        <Button type="link" size={size}>
                            Главная
                        </Button>
                        <Button type="link" size={size}>
                            Операции
                        </Button>
                        <Button type="link" size={size}>
                            Платежи
                        </Button>
                        <Button type="link" size={size}>
                            Бонусы
                        </Button>
                        <Button type="link" size={size}>
                            Кошелек
                        </Button>
                        <Button type="link" size={size}>
                            Еще
                        </Button>
                    </Col>
                </Row>   
        </Layout.Header>
    )
} 