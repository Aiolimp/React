import React, { Component } from 'react'
import './index.css'
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = { name: 'tom' }
    render() {
        const { name } = this.state
        return (
            <div className='A'>
                <h3>我是A</h3>
                <h4>我的名字是:{name}</h4>
                <Provider value={name}>
                    <B></B>
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='B'>
                <h3>我是A</h3>
                <h4>我从A拿到的名字是：？？</h4>
                <C></C>
            </div>
        )
    }
}
// class C extends Component {
//     static contextType = MyContext
//     render() {
//         return (
//             <div className='C'>
//                 <h3>我是C</h3>
//                 <h4>我从A拿到的名字是：{this.context}</h4>
//             </div>
//         )
//     }
// }
function C() {
    return (
        <div className='C'>
            <h3>我是C</h3>
            <h4>我从A拿到的名字是:
                <Consumer>
                    {
                        value => {
                            return `${value}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}

/*  1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
    2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
    3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer> */