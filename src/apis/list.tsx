import { http } from '@/utils'
import type { ResType } from './shared'


// 定义具体的接口类型
export type ChannelItem = {
    id: number; name: string
}
type ChannelRes = {
    channels: { id: number; name: string }[]
}
// 请求频道列表
export function fetchChannelAPI() {
    return http.request<ResType<ChannelRes>>({
      url: '/channels',
    })
}