export const setStorageValue = (storage, key, value) => {
    const prepareValue = JSON.stringify(value);
    storage.setItem(key, prepareValue);
};

export const getStorageValue = (storage, key) => {
    const value = storage.getItem(key) || 'null';
    const prepareValue = JSON.parse(value);
    return prepareValue;
};
