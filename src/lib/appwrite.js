import { Client, Account, Databases, Storage } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT } from "./config.js";

export const client = new Client();

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID } from "appwrite";
