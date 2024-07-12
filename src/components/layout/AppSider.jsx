import {Layout} from 'antd'

const siderStyle = {
    padding: '1rem',
    backgroundColor: '#ffffff',
  };
export default function AppSider(){
    return (
<Layout.Sider width="25%" style={siderStyle}>
    Sider
</Layout.Sider>
    )
}