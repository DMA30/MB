import Layout from "antd/es/layout/layout";
import AppSider from "./components/layout/AppSider";
import React from "react";
import AppContent from "./components/layout/AppContent";
import AppHeader from "./components/layout/AppHeader";
export default function Main() {
    return (
        <Layout>
            <AppHeader />
            <Layout>
                {/* <AppSider /> */}
                <AppContent />
            </Layout>
        </Layout>
    )
}