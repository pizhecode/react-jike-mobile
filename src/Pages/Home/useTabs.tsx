import { useEffect, useState } from 'react'
import { ChannelItem, fetchChannelAPI } from '@/apis/list'
//把逻辑代码封装成hooks函数
function useTaps(){
    const [channels, setChannels] = useState<ChannelItem[]>([])
    useEffect(() => {
      async function getChannels() {
        try {
          const { data } = await fetchChannelAPI()
          setChannels(data.data.channels)
        } catch (error) {
          throw new Error('fetch channels error: ' + (error instanceof Error ? error.message : 'Unknown error'));
        }
      }
      getChannels()
    }, [])

    return {
        channels,
    }
}

export {useTaps}