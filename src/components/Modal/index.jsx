import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Box from '@mui/material/Box'
import styles from './style.module.scss'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
}

const ModalTransition = ({ open, close, text, oke }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <p>{text}</p>
          <div className={styles.btn__wrapper}>
            <button className={styles.cancel} onClick={close}>
              cancel
            </button>
            <button className={styles.oke} onClick={oke}>
              Oke
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}
export default ModalTransition
