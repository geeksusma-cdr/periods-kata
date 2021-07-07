import { Appointment } from "./appointment";
import { Period } from "./period";

describe('Appointments', () => {
        
    test('Should return has conflicts when appointment period overlaps', () => {
        //given
        let containedPeriod:Period =new Period(new Date('10-10-2018'),new Date('10-06-2020'));
        let alreadyBookedPeriod:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));

        let bookedAppointment = new Appointment(alreadyBookedPeriod);
        let secondAppointment = new Appointment(containedPeriod);

        //when
        let conflict = bookedAppointment.hasConflict(secondAppointment);

        //then
        expect(conflict).toEqual(true);
    });

    test('Should return no conflicts when appointment period does not overlaps', () => {
        //given
        let anotherPeriod:Period =new Period(new Date('10-10-2018'),new Date('10-11-2018'));
        let alreadyBookedPeriod:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));

        let bookedAppointment = new Appointment(alreadyBookedPeriod);
        let secondAppointment = new Appointment(anotherPeriod);

        //when
        let conflict = bookedAppointment.hasConflict(secondAppointment);

        //then
        expect(conflict).toEqual(false);
    });

});