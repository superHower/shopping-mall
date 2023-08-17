// 按需导入
import Vue from 'vue'
import { Tab, Tabs, Checkbox, Dialog, ActionSheet, Icon, Search, Swipe, SwipeItem, Grid, GridItem, Toast, Button, Switch, Rate, Tabbar, TabbarItem, NavBar } from 'vant'

Vue.use(Toast) // 轻提示
Vue.use(Icon) // 图标库

// 导航组件
Vue.use(NavBar) // 顶部返回栏

Vue.use(Tabbar) // 底部栏
Vue.use(TabbarItem) // 底部项

Vue.use(Grid) // Gird宫格
Vue.use(GridItem) // Gird宫格项

Vue.use(Tab) // 标签页
Vue.use(Tabs) // 标签项

// 反馈组件
Vue.use(Swipe) // 轮播图
Vue.use(SwipeItem) // 轮播项

Vue.use(Dialog) // 页面弹出模态框
Vue.use(ActionSheet) // 底部弹出模态面板

// 表单组件
Vue.use(Search) // 搜索栏
Vue.use(Rate) // 五星评价
Vue.use(Button) // 按钮库
Vue.use(Checkbox) // 多选框
Vue.use(Switch) // 开关
