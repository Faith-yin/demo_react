/*
 * @author: 殷鹏飞
 * @Date: 2020-04-14 13:55:05
 * @information: APP
 */
import React from 'react';
import '../style/App.scss'
import 'rsuite/dist/styles/rsuite-default.css';

import Topbar from '../components/Topbar.jsx'
import Navigationbar from '../components/Navigationbar.jsx'
import SongCard from '../components/SongCard.jsx'
import Adv from '../components/Adv.jsx'
import NewSong from '../components/NewSong';
import RadioCard from '../components/RadioCard';
import Link from '../components/Link.jsx'
import Footer from '../components/Footer.jsx'


class App extends React.Component {
  render() {
    return (
      <div id="App">
        {/* 顶部栏 */}
        <Topbar></Topbar>
        {/* 导航栏 */}
        <Navigationbar></Navigationbar>
        {/* 中间歌单部分 */}
        <SongCard></SongCard>
        {/* 广告横幅位 */}
        <Adv imgSource='https://adsfile.kugou.com/8f30ef49f8fb242d4ec935e748610142.jpg'></Adv>
        {/* 新手首发部分 */}
        <NewSong></NewSong>
        {/* 广告横幅位 */}
        <Adv imgSource='https://adsfile.kugou.com/5c12de72ba68a5ac0c2abefa911d8b54.jpg'></Adv>
        {/* 热门电台部分 */}
        <RadioCard></RadioCard>
        {/* 广告横幅位 */}
        <Adv imgSource='https://adsfile.kugou.com/4dbf23659748a2c592fe6fac4cf2aff6.jpg'></Adv>
        {/* 友情链接 */}
        <Link></Link>
        {/* 底部信息 */}
        <Footer></Footer>
      </div>
    )
  }
}



export default App;
