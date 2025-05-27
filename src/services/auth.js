import { account } from "@/lib/appwrite";

export async function login(email, password) {
  await account.createEmailPasswordSession(email, password);
  const user = await account.get();
  localStorage.setItem("user", JSON.stringify(user));
}

export async function register(email, password, name) {
  await account.create("unique()", email, password, name);
  return login(email, password);
}

export async function logout() {
  await account.deleteSession("current");
  localStorage.removeItem("user");
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
