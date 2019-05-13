# React-webpack

# 包管理器使用yarn,下载后 yarn init ,然后 yarn 即可获取所有依赖

React的最新配置
* 实现需求：
  * 识别JSX文件
  * tree shaking 摇树优化 删除掉无用代码
  * PWA功能，热刷新，安装后立即接管浏览器 离线后仍让可以访问网站 还可以在手机上添加网站到桌面使用
  * CSS模块化，不怕命名冲突
  * 小图片的base64处理
  * 文件后缀省掉jsx js json等
  * 实现React懒加载，按需加载 ， 代码分割 并且支持服务端渲染
  * 支持less sass stylus等预处理
  * code spliting 优化首屏加载时间 不让一个文件体积过大
  * 提取公共代码，打包成一个chunk
  * 每个chunk有对应的chunkhash,每个文件有对应的contenthash,方便浏览器区别缓存
  * 图片压缩
  * CSS压缩
  * 增加CSS前缀 兼容各种浏览器
  * 对于各种不同文件打包输出指定文件夹下
  * 缓存babel的编译结果，加快编译速度
  * 每个入口文件，对应一个chunk，打包出来后对应一个文件 也是code spliting
  * 删除HTML文件的注释等无用内容
  * 每次编译删除旧的打包代码
  * 将CSS文件单独抽取出来
  * 让babel不仅缓存编译结果，还在第一次编译后开启多线程编译，极大加快构建速度
  * 等等....
