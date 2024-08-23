import { Button, Card, Col, Divider, Flex, Layout, Modal, Row, Tour } from 'antd'
import { useRef, useState } from 'react';



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

    //для модалки кабинета->
    const [isCardOpen, setIsCardOpen] = useState(false);
    //<-для модалки кабинета

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
                <Col span={3}>

                    <Button type="link" size={size} onClick={() => setIsCardOpen(!isCardOpen)} >
                        Кабинет
                    </Button>
                    {isCardOpen && <Card style={{ zIndex: 100 }} title="Дмитрий М.">Содержимое Card</Card>}

                </Col>

                <Divider style={{ margin: '0' }} />

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