export type Track = {
  id: string
  attributes: TrackAttributes
}

export type Attachment = {
  id: string
  url: string
  addedAt: string
  contentType: string
}

export type TrackAttributes = {
  addedAt: string
  duration: number
  attachments: Attachment[]
  title: string
}

export type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

export type TrackDetailsAttributes = {
  title: string
  lyrics: string
  attachments: Attachment[]
}