import { Client, Databases, Account, Storage } from 'appwrite'

const client = new Client()
client
  .setEndpoint('https://[твій-endpoint].appwrite.io/v1') // заміни на свій
  .setProject('[твій_project_id]')

export const databases = new Databases(client)
export const account = new Account(client)
export const storage = new Storage(client)
