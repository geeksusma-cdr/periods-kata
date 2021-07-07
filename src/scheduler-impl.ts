import { Appointment } from "./appointment";
import { Scheduler } from "./scheduler";

export class SchedulerImpl implements Scheduler {

    private appointments: Array<Appointment>;

    public constructor() {
        this.appointments = new Array();
    }

    get(): Appointment[] {
        return this.appointments;
    }

    empty(): boolean {
        return this.appointments.length == 0;
    }
    add(appointment: Appointment): void {

        if (!this.hasConflicts(appointment)) {
            this.appointments.push(appointment);
            this.appointments = this.appointments.sort((a, b) => (a.getPeriod().start <= b.getPeriod().start ? -1 : 1));
        }
    }

    hasConflicts(appointment: Appointment): boolean {
        return this.appointments.findIndex(a => a.hasConflict(appointment)) >= 0;
    }
}


