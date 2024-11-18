import styles from "./page.module.css";
import MuxPlayer from "@mux/mux-player-react/lazy"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>With the correct boolean type</h1>
                <p>This will NOT loop:</p>
                <MuxPlayer playbackId="LpkfsKWW7w02VfRMSlI5ekJlFskvF4Uyk" loop={true} className="video"/>

                <h1>With the incorrect string type</h1>
                <p>This WILL loop</p>
                <MuxPlayer playbackId="LpkfsKWW7w02VfRMSlI5ekJlFskvF4Uyk" loop={"true"} className="video"/>
            </main>
        </div>
    );
}
