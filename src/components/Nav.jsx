import './Nav.scss';
import classNames from 'classnames';

export default function Nav(props) {
  const navClass = classNames('header', {
    'header--light': props.light,
    'header--dark': props.dark
 });

  return (
    <nav className={navClass}>
      <h1>BitCafe</h1>
    </nav>
  )
}