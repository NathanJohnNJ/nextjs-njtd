import './cv.css';
import CVContact from './cvContact';
import Skills from './skills';
import Education from './education';
import Work from './work';
import MoreInfo from './moreInfo';

const CV = () => {

    return (
        <div className="mainCV"
        style={{
            overflowY: "scroll"
        }}>
            <h1>NATHAN JOHN</h1>
            <h1 id="line2">H   Y   N   E   S</h1>
            <div className="line"></div>
            <div className="lineSec"></div>
            <div className="cvContent">
                <div className="leftCV">
                    <Skills />
                    <Education />
                </div>
                <div className="rightCV">
                    <Work />
                    <div className="moreInfo">
                        <MoreInfo />
                    </div>
                </div>
            </div>
            <div className="cvContentContact">
                <CVContact />
            </div>
        </div>
    )
};

export default CV;