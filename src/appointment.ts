import { Period } from "./period";

export class Appointment {

    private period: Period;

    public constructor(period:Period) {
        this.period = period;   
    }

    hasConflict(appointment: Appointment) {
       return this.period.isOverlapped(appointment.period);
    }

    getPeriod():Period {
        return this.period;
    }

}