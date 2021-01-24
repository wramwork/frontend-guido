export default class StorageGateway {
  static async set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (ex) {
      console.log(ex);
    }
  }

  static get(key) {
    return localStorage.getItem(key);
  }

  static remove(key) {
    return localStorage.removeItem(key);
  }
}
