const indexAccess = () => {

  type ContactStatus = "active" | "inactive" | "new";

  interface Address {
    street: string;
    province: string;
    postalCode: string;
  }

  interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
  }

type Awesome = Contact["address"]["postalCode"]

interface ContactEvent {
    contactId: Contact["id"]; // referencje do interfejsu Contact i id property
}

interface ContactDeletedEvent extends ContactEvent {
}

interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}



// below function explanation:
// - defined a generic type T using the keyof constraint
// - use this generic type  as a type to the first parameter to the method (eventName)
// eventName accepts the string containing the name of any of the properties you can find
// on the ContactEvents type.
// - second parameter is a function which accept a single parameter, and that parameter
// matches the type of the property indicated by the first parameter eventName

function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
) {
    if (eventName === "statusChanged") {
      // dlatego, że TS już ogarnął, że to jest typ ContactStatusChangedEvent, to musimy przekazać odpowiedni parametr do handlera
        handler({ contactId: 1, oldStatus: "active", newStatus: "inactive" })
    }
}

// here I call the method and asked to handle the statusChange eventName
// magic happens in the second parameter. Notice how TS has determined the type of this event parameter.
// is ContactStatusChangedEvent even if I didn't specify it in this call...
// That's because I used index access of the ContactEvents type to figure it out on its on

handleEvent("statusChanged", evt => evt)

// index access technique can provide really advanced type checking!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}