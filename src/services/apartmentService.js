import { databases, ID } from "@/lib/appwrite";
import { APPWRITE_DB, COLLECTION_ID } from "@/lib/config.js";
import { Query } from "appwrite";

// Отримати всі квартири
export async function getApartments(filters = []) {
  try {
    const response = await databases.listDocuments(
      APPWRITE_DB,
      COLLECTION_ID,
      filters // можеш передавати [Query.equal("city", "Kyiv"), ...]
    );
    return response.documents;
  } catch (error) {
    console.error("Error fetching apartments:", error);
    return [];
  }
}

// Отримати квартиру по ID
export async function getApartmentById(id) {
  try {
    return await databases.getDocument(APPWRITE_DB, COLLECTION_ID, id);
  } catch (error) {
    console.error("Error fetching apartment by ID:", error);
    return null;
  }
}

// Створити нову квартиру
export async function createApartment(data) {
  try {
    return await databases.createDocument(
      APPWRITE_DB,
      COLLECTION_ID,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error("Error creating apartment:", error);
    throw error;
  }
}

// Оновити квартиру
export async function updateApartment(id, data) {
  try {
    return await databases.updateDocument(
      APPWRITE_DB,
      COLLECTION_ID,
      id,
      data
    );
  } catch (error) {
    console.error("Error updating apartment:", error);
    throw error;
  }
}

// Видалити квартиру
export async function deleteApartment(id) {
  try {
    return await databases.deleteDocument(APPWRITE_DB, COLLECTION_ID, id);
  } catch (error) {
    console.error("Error deleting apartment:", error);
    throw error;
  }
}

// TODO: Write functions to create, update, delete and get apartment/apartments
