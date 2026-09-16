import { TrackDetails } from "../TrackDetails/TrackDetails"
import { useTrackSelection } from "../../bll/useTrackSelection"
import { useTracks } from "../../bll/useTracks"
import { TrackItem } from "./TrackItem"
import style from './Playlist.module.css'

export const Playlist = () => {
    const { selectedTrackId, handleSelectedTrack } = useTrackSelection()
    const { tracks } = useTracks()

    return (
        <>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul className={style.tracks}>
                {tracks?.map(track => {
                    return (
                        <TrackItem
                            track={track}
                            isSelected={track.id === selectedTrackId}
                            key={track.id}
                            onTrackSelected={handleSelectedTrack}
                        />
                    )
                })}
            </ul>
            <TrackDetails selectedTrackId={selectedTrackId} />
        </>
    )
}