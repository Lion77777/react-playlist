import type { Track } from "../../dal/types"
import styles from './TrackItem.module.css'
import clsx from 'clsx'

type TrackItemProps = {
    track: Track
    isSelected: boolean
    onTrackSelected: (id: string) => void
}

export const TrackItem = (props: TrackItemProps) => {
    const { track, isSelected, onTrackSelected } = props

    const style = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected
    })

    const handleClick = () => {
        onTrackSelected(track.id)
    }

    return (
        <li className={style}>
            <div onClick={handleClick}>{track.attributes.title}</div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    )
}