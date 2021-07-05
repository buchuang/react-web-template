const path = require("path")
const srcPathAbsolute = path.join(__dirname, "src")
module.exports = ({ config, env, mspEnv }) => {
  const port = 8005
  const publicPath = `http://127.0.0.1:${port}/`
  // 设置项目URL
  config.output.publicPath(publicPath)
  // 设置项目端口
  config.devServer.host("127.0.0.1")
  config.devServer.port(port)
  config.plugin("mf").tap(args => {
    args[0] = {
      ...args[0],
      name: "mspReactProject",
      remotes: {
        "@msp/react-base": "mspReactBase@http://localhost:9200/msp.js"
      },
      exposes: {
        "./container/App": "src/container/App"
      },
      shared: {},
      // 被远程引入的文件名
      filename: "msp.js"
    }
    return args
  })
  // 配置 index.html
  config.plugin("html").tap(args => {
    args[0] = {
      ...args[0],
      ...{
        // head 的 title
        title: "测试",
        // 远程调用项目的文件链接
        files: {}
      }
    }
    return args
  })
  config.resolve.alias.set("@", path.resolve("./", "src"))
  config.resolve.alias.set("images", `${srcPathAbsolute}/images/`)
}
