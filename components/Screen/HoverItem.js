import styles from './HoverItem.module.css';

export default function HoverItem(props) {
    return (
        <div className={styles['hover-item']}>
            {props.children}
        </div>
    );
}
