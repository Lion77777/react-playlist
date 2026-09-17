import { useTrack } from "../../bll/useTrack"
import styles from './TrackDetails.module.css'

type TrackDetailsProps = {
    selectedTrackId: string | null
}

export const TrackDetails = (props: TrackDetailsProps) => {
    const { selectedTrackId } = props
    const { selectedTrack } = useTrack(selectedTrackId)

    return (
        <div className={styles.track}>
            <h2>Track Information</h2>
            {!selectedTrackId && <span>No selected track</span>}
            {selectedTrackId && !selectedTrack && <span>Loading...</span>}

            {selectedTrack &&
                <div>
                    <h4>{selectedTrack.attributes.title}</h4>
                    <p>{selectedTrack.attributes.lyrics}</p>
                </div>
            }
        </div>
    )
}