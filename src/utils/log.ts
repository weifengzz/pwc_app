/**
 * Log日志封装
 * 2018-10-29
 * @author koohead
 * @description Log日志封装
 */

// 日志存放
const logs: any[] = []

// 如果日志超过200条去掉最早的那条日志
// tslint:disable-next-line:no-shadowed-variable
const add = (log: any) => {
  logs.push(log)
  if (logs.length > 200) {
    logs.shift()
  }
}

// 返回log信息
const getLogs = () => {
  return logs
}

// 获取单个日志内容
const getLog = (index: number) => {
  return logs[index]
}

// 输出信息
const log = (...args: any) => {
  add(args)
  if (__DEV__) {
    const info = args.concat()
    info[0] = '%c' + info[0]
    info.splice(1, 0, 'color: #2d8cf0')
    console.log(...info)
  }
}

// 输出警告
const logWarm = (...args: any) => {
  add(args)
  if (__DEV__) {
    const info = args.concat()
    info[0] = '%c' + info[0]
    info.splice(1, 0, 'color: #FF9900')
    console.log(...info)
  }
}

// 输出警告
const logErr = (...args: any) => {
  add(args)
  if (__DEV__) {
    const info = args.concat()
    info[0] = '%c' + info[0]
    info.splice(1, 0, 'color: #FF0000')
    console.log(...info)
  }
}

// 导出组件
export {
  getLogs,
  getLog,
  log,
  logWarm,
  logErr
}
