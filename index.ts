type Login = { type: "USER_LOGIN"; payload: [userId: number, timestamp: number] };
type Logout = { type: "USER_LOGOUT"; payload: [userId: number] };
type Error = { type: "ERROR"; payload: [message: string, code?: number] };

type Event = Login | Logout | Error;



// function createEvent(
//     type: "USER_LOGIN",
//     payload: [number, number]
// ): { type: "USER_LOGIN"; payload: [number, number] }

// function createEvent(
//     type: "USER_LOGOUT",
//     payload: [number]
// ): { type: "USER_LOGOUT"; payload: [number] }

// function createEvent(
//     type: "ERROR",
//     payload: [string, number?]
// ): { type: "ERROR"; payload: [string, number?] }

// // Implementation signature
// function createEvent(
//     type: Event["type"],
//     payload: Event["payload"]
// ): Event {
//     return  { type, payload }
// }

class Singleton {
    static instance:Singleton
    private constructor (){}

    public static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}


abstract class Drivable {
    abstract stop(): void;
    abstract drive(): void;
}

