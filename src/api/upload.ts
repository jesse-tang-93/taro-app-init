import Taro from '@tarojs/taro'
import { useGet } from '@/utils/request'

export const getOssPrams = async (): Promise<any> => {
  try {
    return await useGet('/media/getOssParams')
  } catch (error) { }
}
export const uploadFile = async (filePath: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 统一文件格式  photo/2023-6-18/time.xxx
      let timer = new Date()
      let address = `${timer.getFullYear()}-${timer.getMonth() + 1}-${timer.getDate()}`
      // 文件后缀名
      const fileLocalName = filePath.substr(filePath.lastIndexOf('.'))
      address = `home/${address}/`
      const allFilePath = `${address}${timer.getTime()}${fileLocalName}`
      const res = await getOssPrams()
      const { policy, OSSAccessKeyId, signature } = res.data
      const ossUrl = 'https://miaoo-oss.oss-cn-chengdu.aliyuncs.com'
      Taro.uploadFile({
        url: ossUrl,
        filePath,
        name: 'file',
        formData: {
          key: allFilePath,
          policy,
          OSSAccessKeyId,
          signature,
          success_action_status: '200', // 让服务端返回200,不然，默认会返回204
        },
        success(res) {
          if (res.statusCode === 200) {
            console.log('上传成功')
            console.log(ossUrl + '/' + allFilePath)
            resolve(ossUrl + '/' + allFilePath)
          }

        },
      })
    } catch (error) { }
  })

}
