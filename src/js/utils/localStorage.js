// 'lastResponses' is the key, have to be saved in the localStorage.
export class LocalStorageResponses {
    static getLocalStorage() {
        // Getting the data from the localStorage and making a stringify
        const items = JSON.parse(localStorage.getItem('lastResponses'));

        /* This evaluate if the localStorage is empty 
            and it will by true have to return a simple array
        */
        if (!items) {
            return [];
        }

        // If this localstorage have items it's going to be returned
        return items;
    }

    static setLocalStorage(data) {
        // First we have to get the past data without updates
        const items = this.getLocalStorage();

        // push on the current items
        items.push(data);

        // And a deploy in the local storage with his key
        localStorage.setItem('lastResponses', JSON.stringify(items));
    }
}
