export interface Profile {
  dateOfBirth: Date
  pictureUrl: string
}

export interface Contact {
  name: string
  email: string
  profile: Profile
}

export interface ContactList {
  contacts: Contact[]
}
