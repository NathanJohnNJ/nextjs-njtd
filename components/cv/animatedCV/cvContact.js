import './cv.css';
import phone from './images/phone.png';
import email from './images/email.png';
import git from './images/github.png';
import linkedin from './images/linkedin.png';
import home from './images/address.png';
import web from './images/website.png';
import Modal from 'react-modal';
import { useState } from 'react';

const CVContact = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal(){
        setModalIsOpen(true)
    }
    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <div className="cvContact">
            <div className="cvContactTitle">
                <span className="cvContactListTitle">Contact</span>
            </div>
            <div className="address" onClick={openModal}>
                <img src={home} alt="Address" className="contactImg"></img>
                <span className="contactListItem">Great Sankey, Warrington, WA5</span>
            </div>
            <div className="phone">
                <img src={phone} alt="Phone" className="contactImg"></img>
                <a className="contactListItem" href="tel:+447359235700">+44 7359235700</a>
            </div>
            <div className="email">
                <img src={email} alt="Email" className="contactImg"></img>
                <a className="contactListItem" href="mailto:nj@njtd.xyz">nj@njtd.xyz</a>
            </div>
            <div className="web">
                <img src={web} alt="WWW" className="contactImg"></img>
                <a className="contactListItem" href="https://www.njtd.xyz" target="_blank" rel="noreferrer">www.njtd.xyz</a>
            </div>
            <div className="git">
                <img src={git} alt="GitHub" className="contactImg"></img>
                <a className="contactListItem" href="https://www.github.com/NathanJohnNJ" target="_blank" rel="noreferrer">www.github.com/NathanJohnNJ</a>
            </div>
            <div className="linked">
                <img src={linkedin} alt="LinkedIn" className="contactImg"></img>
                <a className="contactListItem" href="https://www.linkedin.com/in/nathanjohnnj" target="_blank" rel="noreferrer">www.linkedin.com/in/nathanjohnnj</a>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="mapModal"
                >
                <div className="mapModalDiv">
                    <div className="close" onClick={closeModal}></div>
                    <iframe title="My Location" width="600" height="800" className="map" loading="lazy" allowfullscreen src="https://storage.googleapis.com/maps-solutions-czgorco3yq/locator-plus/yfyn/locator-plus.html"></iframe>
                </div>
            </Modal>
        </div>
    )
};

export default CVContact;