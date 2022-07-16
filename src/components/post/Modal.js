import React from 'react'
import ReactDom from 'react-dom'
import "./Modal.css";


const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'beige',
  borderradius: '10px !important',
  width: '80vmin',
  height: '80vmin',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 80, 110, .4)',
  zIndex: 1000
}

export default function Modal({ justone, open, id, title, children, setIsOpen }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div id="modCont" style={MODAL_STYLES}>{children}
        <button id="btn" oonClick={() => setIsOpen(false)}>x</button>
        {/* {alert([title])}{[...id]} */}
        
        <div>
          <img
            className="modalImg"
            src={justone.imgMod}
            alt={justone.imgMod}
          />
          <div className="modalBodyCont">
            <span className="grayBody modalBody">
              {(justone.body).slice(0, 60)}
              {/* {justone.id == id ? (justone.body).slice(0, 60) : "Nothing"} */}
              </span>
              <span className="blueBody modalBody">
              {(justone.body).slice(60, 1500)}
            </span>

            <div className="blueBody modalBody spacer">
              {(justone.body1)}
            </div>            <div className="blueBody modalBody spacer">
              {(justone.body2)}
            </div>
          </div>

        </div>

      </div>
    </>,
    document.getElementById('portal')
  )
}
