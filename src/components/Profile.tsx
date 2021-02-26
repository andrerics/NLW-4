import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/andrerics.png" alt="André Ricardo Silva" />
            <div>
                <p>
                    <strong>
                        André Ricardo Silva
                    </strong>
                    <p>
                        <img src="icons/level.svg" alt="Level" />
                        Level 1
                    </p>
                </p>
            </div>
        </div>
    );
}