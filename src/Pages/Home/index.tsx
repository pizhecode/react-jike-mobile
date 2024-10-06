import { Tabs } from 'antd-mobile'
import './style.css'
import { useTaps } from './useTabs'


const Home = () => {
  const { channels } = useTaps()
  
  return (
    <div className="tabContainer">
      <Tabs defaultActiveKey="0">
      {channels.map((item) => (
        <Tabs.Tab title={item.name} key={item.id}>
          <div className="listContainer">
             {/* HomeList列表 */}
          </div>
        </Tabs.Tab>
      ))}
    </Tabs>
    </div>
  )
}

export default Home