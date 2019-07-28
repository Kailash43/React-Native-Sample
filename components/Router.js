import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './auth/Login';
import AddEmployee from './Employees/AddEmployee';
import EmployeeList from './Employees/EmployeeList';

function RouterComponent() {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login"
                    component={Login}
                    title="login" />
                </Scene>
                <Scene key="main">
                    <Scene key="employee"
                    onRight={() => Actions.Addemployee()}
                    rightTitle="ADD"
                    component={EmployeeList}
                    title="Employee" />
                    <Scene key="Addemployee"
                    component={AddEmployee}
                    title="Employee" />
                </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent