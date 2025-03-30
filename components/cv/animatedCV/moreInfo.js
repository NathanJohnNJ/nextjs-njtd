import './cv.css';
import { useState } from 'react';
import Modal from 'react-modal';

const MoreInfo = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState({});
    const [modalContent, setModalContent] = useState('');

    const workHTML = `<div>In progress...</div>`
    const educationHTML = `<div>In progress...</div>`
    const statement = `<div>In progress...</div>`
    const referees = `<div>In progress...</div>`
    const work = { title: "Work Experience", secondaryTitle: "More Work Experience", html: workHTML}
    const education = { title: "Education", secondaryTitle: "Other Education", html: educationHTML}
    const personalStatement = { title: "Personal Statement", secondaryTitle: "Personal Statement", html: statement}
    const references = { title: "References", secondaryTitle: "References", html: referees}
    
    const extraInfo = [work, education, personalStatement, references]
        
    function openModal(info){
        setModalTitle(info.secondaryTitle)
        setModalContent(info.html)
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return (
        <div className="moreInfoSection">
            <h2 className="moreInfoTitle">More Info</h2>
            <ul className="list">
                {extraInfo.map((info, i) => {
                    return (
                       <li key={i} className='listItem' onClick={() => openModal(info)}><strong>{info.title}</strong></li>
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
                    <div dangerouslySetInnerHTML={{ __html:modalContent}}></div>
                </div>
            </Modal>
        </div>
    )
};

export default MoreInfo;