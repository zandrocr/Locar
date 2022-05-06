import styles from '../css/loading.module.css'
import load from '../svg/loading.svg'

const Loading = () => {
    return (
    <div className={styles.loader}>
        <img src={load} alt="loading" className={styles.loading} />
    </div>
    );
}

export default Loading;