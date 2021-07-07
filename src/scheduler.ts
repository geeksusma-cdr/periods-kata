import { Appointment } from "./appointment";

export interface Scheduler {
    empty(): boolean;

    add(appointment: Appointment): void;

    get():Array<Appointment>;
}