import { useState } from "react"

export function useTrackSelection() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

    const handleSelectedTrack = (id: string) => {
        setSelectedTrackId(id)
    }

    return {
        selectedTrackId, handleSelectedTrack
    }
}