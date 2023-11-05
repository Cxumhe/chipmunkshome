<h1 align="center">ChaoXingAutoSign</h1>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![Licence](https://img.shields.io/github/license/cxOrz/chaoxing-sign-cli?style=for-the-badge)

[UI](http://8.130.17.240/)

快速介绍
## 功能
普通签到、拍照签到、手势签到、位置签到、签到码签到、二维码签到（10秒变换不影响）。
## 特别提醒 📄
1. 所有用户数据均以cookies形式存储在本地，服务器不会保存用户账户密码。因此清除浏览器的浏览记录响应账户会被清除。
2. 感谢原作者提供项目以供学习，本服务器根据原项目进行修改部署，原项目地址：[GitHub - cxOrz/chaoxing-sign-cli: 超星学习通签到Nodejs程序。支持普通签到、拍照签到、手势签到、位置签到、二维码签到，支持自动监测。](https://github.com/cxOrz/chaoxing-sign-cli)
3. 以下是三种需要特别注意的三种签到。
### 二维码签到 

在运行之前需要做些准备，请找一位挚友，拍一张二维码的照片（无所谓几秒一变），
1.  ==推荐== 用第三方二维码识别器识别二维码获得原始数据，得到一个字符串，复制其中的 `enc` 参数值，例如 `1D0A628CK317F44CCC378M5KD92`，询问时填入。![[6241381E6EE1D673C941485848F65201.png]]
2. 直接在网站上传二维码图片，会自动识别并填入`enc` ，但耗时较长（约30s）。使用腾讯的OCR通用文字识别api北京节点，但不知道响应时间为什么这么长。

### 位置签到

#### 快速查找
[百度拾取坐标系统](https://api.map.baidu.com/lbsapi/getpoint/index.html)
115.488954,38.857897一教
保定市莲池区大禹路河北农业大学

根据运行时的提示输入**经纬度**和**详细地址**，经纬度在这里获取 [百度拾取坐标系统](https://api.map.baidu.com/lbsapi/getpoint/index.html)，点击某位置，经纬度将出现在网页右上方，复制该值，询问时填入。详细地址将显示在教师端。

### 拍照签到

普通和拍照，普通将直接签不使用图片。