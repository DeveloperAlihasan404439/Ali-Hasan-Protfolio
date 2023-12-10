import { Outlet } from 'react-router-dom';
import Navber from '../Navber/Navber';
import backgrond  from '../assets/background.png'
const Root = () => {
    return (
        <div className="w-full text-white bg-scroll " style={{backgroundImage: `url(${backgrond})`, backgroundSize: 'cover', }}>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Root;