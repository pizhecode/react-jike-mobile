import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router'


//测试接口
import {fetchChannelAPI} from '@/apis/list'
fetchChannelAPI().then((res) => {
  console.log(res.data.data.channels)
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)