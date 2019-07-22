import ReactDOM from 'react-dom';
import ModalJsx from './Modal';

const Modal = props => ReactDOM.createPortal(
  ModalJsx(props),
  document.querySelector('#modal'),
);

export default Modal;
