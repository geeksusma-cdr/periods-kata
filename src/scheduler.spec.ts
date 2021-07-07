import { Appointment } from "./appointment";
import { Period } from "./period";
import { SchedulerImpl } from "./scheduler-impl";

describe('Appointments', () => {

   /* test('Should return empty when no appointments scheduled', () => {
        //given
        let schedule = new SchedulerImpl();

        //when
        let empty = schedule.empty();

        //then
        expect(empty).toEqual(true);
    });

    test('Should return not empty when appointments scheduled', () => {
        //given
        let schedule = new SchedulerImpl();
        schedule.add(new Appointment(new Period(new Date("10-10-2020"), new Date("10-10-2021"))));

        //when
        let empty = schedule.empty();

        //then
        expect(empty).toEqual(false);
    });

    test('Should skip appointment when conflicts', () => {
        //given
        let schedule = new SchedulerImpl();
        let scheduledAppointment = new Appointment(new Period(new Date("10-10-2019"), new Date("10-07-2021")));
        schedule.add(scheduledAppointment);

        //when
        schedule.add(new Appointment(new Period(new Date("10-10-2018"), new Date("10-06-2020"))))

        //then
        let scheduledAppointments: Array<Appointment> = schedule.get();
        expect(scheduledAppointments).toContain(scheduledAppointment);
        expect(scheduledAppointments.length).toEqual(1);

    });*/

    test('Should add ordered appointment by start date when no conflicts', () => {
        //given
        let schedule = new SchedulerImpl();
        let scheduledAppointment = new Appointment(new Period(new Date("10-10-2019"), new Date("10-07-2021")));
        let mustBeTheFirstAppointment = new Appointment(new Period(new Date("10-10-2018"), new Date("10-11-2018")));

        schedule.add(scheduledAppointment);

        //when
        schedule.add(mustBeTheFirstAppointment);

        //then
        let scheduledAppointments: Array<Appointment> = schedule.get();
        expect(scheduledAppointments).toEqual(new Array<Appointment>(mustBeTheFirstAppointment, scheduledAppointment));

    });



});