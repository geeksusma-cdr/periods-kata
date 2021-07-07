"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appointment_1 = require("./appointment");
var period_1 = require("./period");
describe('Appointments', function () {
    test('Should return has conflicts when appointment period overlaps', function () {
        //given
        var containedPeriod = new period_1.Period(new Date('10-10-2018'), new Date('10-06-2020'));
        var alreadyBookedPeriod = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        var bookedAppointment = new appointment_1.Appointment(alreadyBookedPeriod);
        var secondAppointment = new appointment_1.Appointment(containedPeriod);
        //when
        var conflict = bookedAppointment.hasConflict(secondAppointment);
        //then
        expect(conflict).toEqual(true);
    });
    test('Should return no conflicts when appointment period does not overlaps', function () {
        //given
        var anotherPeriod = new period_1.Period(new Date('10-10-2018'), new Date('10-11-2018'));
        var alreadyBookedPeriod = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        var bookedAppointment = new appointment_1.Appointment(alreadyBookedPeriod);
        var secondAppointment = new appointment_1.Appointment(anotherPeriod);
        //when
        var conflict = bookedAppointment.hasConflict(secondAppointment);
        //then
        expect(conflict).toEqual(false);
    });
});
