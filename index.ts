type Login = { type: "USER_LOGIN"; payload: [userId: number, timestamp: number] };
type Logout = { type: "USER_LOGOUT"; payload: [userId: number] };
type Error = { type: "ERROR"; payload: [message: string, code?: number] };

type Event = Login | Logout | Error;


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

type DrivableType = {
    stop(): void;
    drive(): void;
}

interface DrivableInterface {
    stop(): void;
    drive(speed: number): void;
}

type UserID = `UIDX-${number}`;



class Car implements DrivableInterface {
    stop(): void {
        console.log("car stoped");
    }
    drive(speed: number): void {
        console.log(`driving car with ${speed} Km/h`);
    }
}