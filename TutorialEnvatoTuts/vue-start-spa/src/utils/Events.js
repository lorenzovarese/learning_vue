const events = new Map();

export default {
    $on(event, callback) {
        if(!events.has(event)) {
            events.set(event, []);
        }

        events.get(event).push(callback);
    },

    $off(event, callback) {
            throw new Error(`Event ${event} doesn't exist.`);
    },

    $emit(event, data) {
        if(events.has(event)) {
            events.get(event).forEach(callback => callback(data));
        }
    }
}