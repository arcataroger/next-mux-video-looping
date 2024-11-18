import styles from "./page.module.css";
import LazyMuxPlayer from "@mux/mux-player-react/lazy"
import NotLazyMuxPlayer from "@mux/mux-player-react"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Next 15</h1>
                <h2>With the correct boolean type</h2>
                <p>This will NOT loop:</p>
                <LazyMuxPlayer playbackId="LpkfsKWW7w02VfRMSlI5ekJlFskvF4Uyk" loop={true}/>

                <h2>With the incorrect string type</h2>
                <p>This WILL loop</p>
                <LazyMuxPlayer playbackId="LpkfsKWW7w02VfRMSlI5ekJlFskvF4Uyk" loop={"true"}/>

                <h2>Not lazy player</h2>
                <p>This WILL loop too</p>
                <NotLazyMuxPlayer playbackId="LpkfsKWW7w02VfRMSlI5ekJlFskvF4Uyk" loop={true}/>
            </main>
        </div>
    );
}
