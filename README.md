# angularPack-cli
由于angularJS1配置和搭建比较繁琐，细节比较多，容易出错，所以弄了这样一个配置好的脚手架。
该脚手架使用requirejs模块化加载，路由是ui-router，已适配css和html动态加载，还配了常用的ngStorage管理本地缓存
###### 该项目内配了一些常用的angular组件，需要使用就在main.js中配置

## 目录结构说明
```
|-angularPack-cli
  |-index.html  //主载体html
  |-components  //页面html文件夹
    |-index.html
  |-css  //样式文件夹
    |-main.css
  |-img  //图片文件夹
  |-js  //脚本文件夹
    |-main.js  //全局的配置文件
    |-lib  //公用的一些js文件都这这里面
      |-angular //angular的一些组件，可以按需选用
      |-require  //require的文件夹
    |-project  //项目文件，控制器、服务、模板组件都在这里面
      |-controller  //控制器
        |-indexController.js
      |-directive  //模板组件
        |-welComeDirective.js
        |-template  //组件的静态资源，html格式的
          |-wel-come.html
      |-service  //服务文件夹
        |-apiService.js  //封装了一个promise，使用的ajax请求（如果要用还需要单独引入jquery），可以换成其他请求方式，该脚手架只是作为示范
      |-app.js  //入口文件，配置了一些angular的config，动态注入控制器、服务、模板、过滤器等等
      |-loader.js  //加载文件
      |-routes.js  //路由文件，路由都在这里面进行控制
      |-text.js  //用来动态引用html文件的
```
