import React, { Component } from 'react';
class App extends Component {
  // 设计状态数据

  state = {
    name: '', // 存储的是git上排名最前面的技术的名字
    url: ''   // 存储的是git上排名最前的技术的链接地址
  }
  // 界面渲染完毕之后
  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=r&sort=stars`
    // 发送请求

    fetch(url)
      .then(function (response) {
        // 响应的数据
       if(response.ok){
        return response.json()
       }else{
         throw new Error('请求出错啦:'+response.status)
       }
      }).then( (data)=> {
        // console.log('杨哥好帅哦')
        const result = data
        // 从响应的数据中找数组中的第一个数据(对象)
        const user = result.items[0]
        const name = user.name
        const url = user.html_url

        // 更新状态数据
        this.setState({
          name,
          url
        })
      }).catch(function (error) {
        console.log('请求失败:', error)
      })
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // 响应的数据
    //     //console.log(response)
    //     // 获取响应的数据
    //     const result = data
    //     // 从响应的数据中找数组中的第一个数据(对象)
    //     const user = result.items[0]
    //     const name = user.name
    //     const url = user.html_url

    //     // 更新状态数据
    //     this.setState({
    //       name,
    //       url
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('请求失败:' + error)
    //   })
  }
  render() {
    // 获取状态数据
    const { name, url } = this.state
    // 判断----状态数据是否有数据,如果没有数据就显示loading界面,如果有数据,那么就显示有数据的界面
    if (!name) {
      return (
        <h1>Loading....</h1>
      );
    } else {
      return (
        <h1>most star is <a href={url}>{name}</a></h1>
      );
    }


  }
}

export default App;


// result.items[0]
// result.item.0


// var obj={
  
// }
// console.log(obj.name) // undefined ---不是报错
// console.log(obj.name['age']) // 报错了

