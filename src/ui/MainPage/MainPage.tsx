import { PageTitle } from "../PagetTitle/PageTitle"
import { Playlist } from "../Playlist/Playlist"

export const MainPage = () => {
  return (
    <>
      <PageTitle title="Musicfun Player" />
      <Playlist />
    </>
  )
}