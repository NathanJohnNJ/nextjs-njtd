import './cv.css';
import { useState } from 'react';
import Modal from 'react-modal';

const Work = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState({});
    const [modalCompany, setModalCompany] = useState("")
    const [modalContent, setModalContent] = useState('');

    const blank = ``
    const contact = `<div><ul><li>Team Manager</li><li>Supervisor</li><li>Floor Walker</li><li>Complaints Handler</li><li>Customer Care Advisor</li><li>Telesales/Aftersales</li></ul></div>`
    const hmua = `<div><ul><li>Setting my own targets</li><li>Analysing my own KPIs</li><li>Keeping track of my own stock</li><li>Managing my own column</li><li>Managing my own marketing</li></ul></div>`
    const njtd = { date: "May 2022 – Present", role: "Freelance Software Developer/Full-Stack Developer", company: "NJTD", html: blank}
    const restart = { date: "December 2021 – March 2023", role: "", company: "Restart Scheme, Ingeus", html: blank}
    const callCentre = { date: "April 2017 - December 2021 ", role: "Various Contact Centre roles across the north of England", company: "Various Employers", html: contact}
    const njhmua = { date: "December 2009 – April 2017", role: "Freelance Hair & Make-Up Artist", company: "Nathan John HMUA", html: hmua}

    const workExp = [njtd, restart, callCentre, njhmua]
        
    function openModal(role){
        setModalTitle(role.role)
        setModalContent(role.html)
        setModalCompany(role.company)
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div className="workExperience">
            <h2 className="workTitle">Work Experience</h2>
            <ul className="list">
                {workExp.map((role, i) => {
                    return (
                       <li key={i} className='listItem' onClick={() => openModal(role)}><strong>{role.date} - </strong>{role.role} - {role.company}</li>
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
                    <h2 className="companyTitle">{modalCompany}</h2>
                    <div dangerouslySetInnerHTML={{ __html:modalContent}}></div>
                </div>
            </Modal>
        </div>
    )
};

export default Work;