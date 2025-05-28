import { account } from "@/lib/appwrite";


export async function register(email, password, name) {
  try {
    await account.create(email, password, name);
    return await login(email, password);
  } catch (error) {
    throw new Error(error.message || "Ошибка регистрации");
  }
}

export async function login(email, password) {
  try {
    const currentUser = await account.get();

    if (currentUser && currentUser.email === email) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      return currentUser;
    }

    if (currentUser) {
      await account.deleteSession("current");
    }
  } catch (error) {}

  try {
    await account.createEmailPasswordSession(email, password);
  } catch (e) {
    throw new Error("Неверный email или пароль");
  }

  const user = await account.get();
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export async function logout() {
  try {
    await account.deleteSession("current");
  } catch (e) {}

  localStorage.removeItem("user");
}

export async function getUser() {
  try {
    const user = await account.get();
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (e) {
    localStorage.removeItem("user");
    return null;
  }
}
