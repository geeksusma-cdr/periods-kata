"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var period_1 = require("./period");
describe('Periods', function () {
    test('Should assign start and end to period when build', function () {
        //given
        var end = new Date();
        var start = new Date('10-10-2020');
        var expectedPeriod = new period_1.Period(start, end);
        //when - then
        expect(new period_1.Period(start, end)).toStrictEqual(expectedPeriod);
    });
    test('Should thrown error when check overlapped and end date is before start date', function () {
        //given
        var start = new Date();
        var end = new Date('10-10-2020');
        var wrongPeriod = new period_1.Period(start, end);
        //when - then
        expect(function () { return wrongPeriod.isOverlapped(wrongPeriod); }).toThrow(RangeError("End date must be after Start date"));
    });
    test('Should return is overlapped when period is same', function () {
        //given
        var end = new Date();
        var start = new Date('10-10-2020');
        var periodToCheck = new period_1.Period(start, end);
        var samePeriod = new period_1.Period(start, end);
        //when
        var overlap = periodToCheck.isOverlapped(samePeriod);
        //then
        expect(overlap).toEqual(true);
    });
    test('Should return is overlapped when is fully contained in given period', function () {
        //given
        var givenPeriod = new period_1.Period(new Date('10-10-2020'), new Date('10-06-2021'));
        var periodToCheck = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        //when
        var overlap = periodToCheck.isOverlapped(givenPeriod);
        //then
        expect(overlap).toEqual(true);
    });
    test('Should return is overlapped when only start date is contained in given period', function () {
        //given
        var givenPeriod = new period_1.Period(new Date('10-10-2020'), new Date('10-06-2022'));
        var periodToCheck = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        //when
        var overlap = periodToCheck.isOverlapped(givenPeriod);
        //then
        expect(overlap).toEqual(true);
    });
    test('Should return is overlapped when only end date is contained in given period', function () {
        //given
        var givenPeriod = new period_1.Period(new Date('10-10-2018'), new Date('10-06-2020'));
        var periodToCheck = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        //when
        var overlap = periodToCheck.isOverlapped(givenPeriod);
        //then
        expect(overlap).toEqual(true);
    });
    test('Should return no overlapped when no overlap found', function () {
        //given
        var givenPeriod = new period_1.Period(new Date('10-10-2018'), new Date('11-11-2018'));
        var periodToCheck = new period_1.Period(new Date('10-10-2019'), new Date('10-07-2021'));
        //when
        var overlap = periodToCheck.isOverlapped(givenPeriod);
        //then
        expect(overlap).toEqual(false);
    });
});
