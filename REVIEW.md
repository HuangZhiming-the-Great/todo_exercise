# 初学者做一个React（-Redux）todo 应用
- 需要掌握的必要技能及程度：
    1. 对react有一定的了解，知道如何写最基本的无状态组件和普通组件。
    2. 对redux有一定的了解，大致清楚redux里关于store、state、action、actionCreate、reducer这些概念。
    3. 对基本的HTML css javascript 大致能看明白，基本上不感觉陌生。
    4. 能够在自己使用的开发平台上进行一些如环境安装和配置的操作。
    5. 其它
- 如果在进行过程中出现进度跟不上，或者感到陌生，可以先参考如下资料：
    1. [react官方教你快速构建一个react app开发环境的方法](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
    2. [一个最简单的readux例子](https://github.com/jackielii/simplest-redux-example)

## 配置环境
    > 我是在ubuntu VScode 里进行作业的，所以下面的操作默认是这个环境，如果是其它系统请自行设置环境，不过一般来说可以参考第一个参考资料解决问题。

- 在安装了nodejs和yarn的条件下，打开terminal，键入如下代码：
    ```bash
    npx create-react-app todo//你的app名字
    cd todo
    yarn start
    ```
    > 执行这一步时请保证网络通畅，基本上能够调出浏览器并打开localhost:3000的欢迎页面，那么配置react开发环境的这一步就成功了。 如果出现问题，就需要自行解决下。

## 开发的第一步
- 我们需要一个Hello World!来鼓舞士气：
    1. 用VSCode打开todo（app名字）作为项目。
    2. 进入到我们的todo项目下的src文件夹下，会看到App.js，打开并编辑。
    3. 更改其中App()函数的代码为如下：
        ```code
            function App() {
                return (
                    <h1>
                        Hello World!
                    </h1>
                );
            }
        ```
        保存后，再看看浏览器页面是否出现了hello world的字样:-)

## 接下来开始小白装逼之旅：
- 在src文件夹下新建components文件夹
    > 这个文件夹用来保存我们的React组件
    1. 新建ToDoApp.js, List.js, Input.js三个文件：
        > ToDoApp将要引用List Input这两个组件。
    2. 在ToDoApp.js里我们需要创建React组件。
        ```javascript
        import React from 'react';//引入react
        //下面的两个组件将会在之后编写具体内容。
        import List from './List';//引入我们创建的list组件
        import Input from './Input';//引入我们创建的input组件
        class ToDoApp extends React.Component{
            constructor(props){
                super(props);
            }

            render(){
                return (
                    <div>
                        {/*用来输入将要做的事情*/}
                        <Input />
                        {/*用来显示将要做的事情*/}
                        <List />
                    </div>
                );
            }
        }
        export default ToDoApp;//导出该组件，用来给App.js引用。
        ```