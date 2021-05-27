第一步下载了一个插件
yarn global add parcel
parcle --version //查看该版本号
pyarn global add parcel@1.12.3 //安装指定版本号
parcel src/index.html //将路径输入，启动插件
string[0],charCodeAt()//使用这个用于查看该字段使用的是什么字符，得出它的字符编码
replace//只会将第一个执行但是添加正则就将所有的回车都变成 br
string = string.replace(/\n/g,'<br>')

# 部署方式

每次改完代码，必须运行这一行，才能正确的请求 JS 和 CSS

```
parcel build src/index.html --public-url .
```
