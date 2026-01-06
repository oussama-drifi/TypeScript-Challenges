type Login = { type: "USER_LOGIN"; payload: [userId: number, timestamp: number] };
type Logout = { type: "USER_LOGOUT"; payload: [userId: number] };
type Error = { type: "ERROR"; payload: [message: string, code?: number] };

type Event = Login | Logout | Error;

function emit (event: Event) {

    switch (event.type) {
        case "USER_LOGIN":
            
        case "USER_LOGOUT":
        case "ERROR":
    }
}

const createEvent = (type: string, 
                        payload: [userId: number, timestamp?: number] | 
                                    [message: string, code?: number]
                        ) => {}