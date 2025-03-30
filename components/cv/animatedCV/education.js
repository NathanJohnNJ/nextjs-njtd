import './cv.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Education = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState({});
    const [modalProvider, setModalProvider] = useState("")
    const [modalContent, setModalContent] = useState('');

    const masters = `<div>
    <div className="dblList">
    <ul className="list">
        <li>HTML/CSS</li>
        <li>Javascript</li>
    </ul>
    <ul className="list">
        <li>JSON</li>
        <li>API’s</li>
    </ul>
    </div>
    <ul>
        <li>Back-End Development:
            <div className="dblList">
                <ul className="list">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
                <ul className="list">
                    <li>NodeJS/NPM</li>
                    <li>Express</li>
                </ul>
            </div>
        </li>
        <li>Front-End Development:
            <div className="dblList">
                <ul className="list">
                    <li>ReactJS</li>
                </ul>
                <ul>
                    <li>NodeJS/NPM</li>
                </ul>
            </div>
        </li>
        <li>Full-Stack</li>
    </ul>
</div>
`
const userSkills = `<div>Upon completion of this introductory course, I received the following certification:<ul><li>Improving Productivity Using IT</li><li>Website Software</li><li>Using Collaborative Technologies</li></ul><br>The main languages covered on this course were:<ul><li>HTML</li><li>CSS</li><li>Python</li></ul></div>`

const college = `<div className="colleges"><div className="priestley">Whilst attending Priestley College I studied:<ul><li>Mathematics - <strong>A</strong></li><li>Further Mathematics - <strong>A</strong></li><li>Accounts - <strong>B</strong></li><li>Financial Studies - <strong>B</strong></li></ul></div><div className="hairdressing">When studying to be a hairdresser I was enrolled with Go Smart Training where I studied:<ul><li>NVQ Level 2 in Hairdressig - <strong>Distinction</strong></li></ul></div><div className="riverside">I also attended Riverside College where I studied:<ul><li>NVQ Level 3 in Media & Theatrical Hair & Makeup - <strong>Distinction</strong></li></ul></div></div>`

const school = `<div>Whilst attending St. Gregory's RCHS I gained GCSE's in:<ul><li>Mathematics - <strong>A*</strong></li><li>English Language - <strong>A</strong></li><li>English Literature - <strong>A</strong></li><li>ICT (Dual Award) - <strong>A/B</strong></li><li>Applied Sciences (Dual Award) - <strong>A/B</strong></li><li>Drama - <strong>B</strong></li><li>Music - <strong>B</strong></li><li>Religious Studies - <strong>C</strong></li></ul></div>`
    
    const bootcamp = { date: "2023", course: "Master: Coding Bootcamp", provider: "Code Nation", html: masters}
    const cert = {date: "2023", course: "Certificate in IT User Skills (Open Systems and Enterprise)", provider: "Code Nation", html: userSkills}
    const asLevels = {date: '2009', course: "AS Level’s including Mathematics & Further Mathematics", provider: 'Priestley College', html: college}
    const GCSEs = {date: "2008", course: "GCSE's including Applied ICT (Dual Award)", provider: "St. Gregory's RCHS", html: school}
    
    const newEducation = [bootcamp, cert, asLevels, GCSEs]
        
    function openModal(course){
        setModalTitle(course.course)
        setModalContent(course.html)
        setModalProvider(course.provider)
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div className="education">
            <h2 className="eduTitle">Relevant Education</h2>
            <ul className="list">
                {newEducation.map((course, i) => {
                    return (
                       <li key={i} className='listItem' onClick={() => openModal(course)}><strong>{course.date} - </strong>{course.course} - {course.provider}</li>
                    )
                })}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="cvModal"
                >
                <div className="mainModalDiv">
                    <div className="close" onClick={closeModal}></div>
                    <h1 className="mTitle">{modalTitle}</h1>
                    <h2 className="providerTitle">{modalProvider}</h2>
                    <div dangerouslySetInnerHTML={{ __html:modalContent}}></div>
                </div>
            </Modal>
        </div>
    )
};

export default Education;