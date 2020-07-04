/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-07-06 20:35:32
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-08-10 23:05:35
 */
import Vue from 'vue'
import { AppModule } from '@/store/modules/app'

/**
 * Element 按需加载
 */
import {
  // @ts-ignore：无法被执行的代码的错误
  Scrollbar,
  Button,
  Input,
  Form,
  FormItem,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  Select,
  Breadcrumb,
  BreadcrumbItem,
  Radio,
  RadioGroup,
  RadioButton,
  DatePicker,
  Pagination,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Option,
  OptionGroup,
  Message,
  Loading,
  MessageBox,
  Notification,
  Card,
  Tooltip,
  Row,
  Col,
  Switch,
  ColorPicker,
  Progress,
  Timeline,
  TimelineItem,
  InputNumber
} from 'element-ui'

Vue.use(Button)
  .use(Input)
  .use(Form)
  .use(FormItem)
  .use(Dialog)
  .use(Dropdown)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(MenuItemGroup)
  .use(Select)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Scrollbar)
  .use(Radio)
  .use(RadioGroup)
  .use(RadioButton)
  .use(DatePicker)
  .use(Pagination)
  .use(Table)
  .use(TableColumn)
  .use(Tabs)
  .use(TabPane)
  .use(Option)
  .use(OptionGroup)
  .use(Card)
  .use(Tooltip)
  .use(Row)
  .use(Col)
  .use(Switch)
  .use(ColorPicker)
  .use(Progress)
  .use(Timeline)
  .use(TimelineItem)
  .use(InputNumber)

// 兼容通知方法
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
// Vue.prototype.$ELEMENT = { size: 'middle', zIndex: 3000 }
Vue.prototype.$ELEMENT = { size: AppModule.size, zIndex: 3000 }
