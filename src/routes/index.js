// 路由入口文件
import Layout from '../layout/index'
import Home from '../containers/Home'
import Button from '../containers/DataEntry/ButtonPage'
import Switch from '../containers/DataEntry/SwitchPage'
import DatePicker from '../containers/DataEntry/DatePickerPage'
import Picker from '../containers/DataEntry/PickerPage'
import PickerView from '../containers/DataEntry/PickerViewPage'
import List from '../containers/DataDisplay/ListPage'
import ToastPage from '../containers/Feedback/ToastPage'

export const createRoutes = () => ({
    path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
        {path: 'index', component: Home},
        {path: '/data-entry', childRoutes: [
            {path: 'button', component: Button},
            {path: 'switch', component: Switch},
            {path: 'date-picker', component: DatePicker},
            {path: 'picker', component: Picker},
            {path: 'picker-view', component: PickerView},
        ]},
        {path: '/data-display', childRoutes: [
            {path: 'list', component: List}
        ]},
        {path: '/feedback', childRoutes: [
            {path: 'list', component: ToastPage}
        ]}
    ]
});

export default createRoutes