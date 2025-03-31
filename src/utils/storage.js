export default class Storage {
  constructor(type) {
    this.storage =
      (typeof window !== "undefined" && window[`${type}Storage`]) || {};
  }

  get(key) {
    if (typeof this.storage.getItem !== "function") {
      return 0;
    }

    const value = this.storage.getItem(key);

    if (value === null) {
      return [];
    }

    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  set(key, value) {
    if (!this.storage.setItem) {
      return;
    }

    this.storage.setItem(key, JSON.stringify(value));
  }
}
