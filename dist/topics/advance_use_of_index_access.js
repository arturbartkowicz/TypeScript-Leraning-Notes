"use strict";
const indexAccess = () => {
    function getValue(source, propertyName) {
        return source[propertyName];
    }
    function handleEvent(eventName, handler) {
        if (eventName === "statusChanged") {
            handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" });
        }
    }
    handleEvent("statusChanged", evt => evt);
};
//# sourceMappingURL=advance_use_of_index_access.js.map