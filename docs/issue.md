# 项目进行过程中遇到的一些问题及学习笔记记录

1. 安装 react-router-dom 之后编辑器提示 `Could not find a declaration file for module 'react-router-dom'`

问题原因：react-router-dom包默认是不带ts提示的，需要安装对应的类型声明包。

解决方案：安装 `@types/react-router-dom`

2. react-router的使用

如果是web应用，引入的是react-router-dom

以如下的形式在入口文件中声明，即可在应用中使用react-router的方法实现路由切换了：

```tsx
ReactDOM.render(
	<Router basename='vite-react-zhihu'>
		<Route path="/home/index" component={HomeIndex} />
		<Route path="/msg/index" component={MsgIndex} />
		<Route path="/user/index" component={UserIndex} />
	</Router>
)
```

3. vite中使用css module

在 vite.config.js 中配置引入方式，可支持驼峰/驼峰或其他/短横线/短横线或其他四个值 ：

```ts
import { defineConfig } from 'vite'

export default defineConfig({
	css:{
		modules: {  // css module配置
			localsConvention: 'camelCaseOnly'  // 如果类名为  .tab-item, 使用时要写成 styles.tabItem
		}
	}
})

```

页面中使用：

```tsx
export default function Tabbar() {
	return (
		<div className={styles.tabbarComp}>
		</div>
	)
}
```

4. 模拟接口使用[fastmock](https://www.fastmock.site/#/project/17ad4659e546df135e2027055aba5443)实现

5. [使用vercel部署服务端应用](https://blog.csdn.net/u012961419/article/details/112369710)

6. 移动端适配

`npm i amfe-flexible autprefixer postcss-pxtorem -D`

根目录下新建 postcss.config.css，添加如下内容：

```js
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
            unitPrecision: 5
        }
    }
}
```

7. 如何在使用 useState hook时声明数据类型

```tsx
const [ list, setList ] = useState<any[]>([])
```

表示 `list` 变量类型为 `any[]`, 默认值为 `[]`


