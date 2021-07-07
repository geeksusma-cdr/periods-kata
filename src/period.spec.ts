import {Period} from "./period";

describe('Periods', () => {
    test('Should assign start and end to period when build', () => {
        //given
        let end:Date = new Date();
        let start:Date = new Date('10-10-2020');
        let expectedPeriod:Period =new Period(start,end);
        
        //when - then
        expect(new Period(start,end)).toStrictEqual(expectedPeriod);
    });

    test('Should thrown error when check overlapped and end date is before start date', () => {
        //given
        let start:Date = new Date();
        let end:Date = new Date('10-10-2020');
        let wrongPeriod:Period =new Period(start,end);
        
        //when - then
        expect(() => wrongPeriod.isOverlapped(wrongPeriod)).toThrow(RangeError("End date must be after Start date"));
    });
    
    test('Should return is overlapped when period is same', () => {
        //given
        let end:Date = new Date();
        let start:Date = new Date('10-10-2020');
        let periodToCheck:Period =new Period(start,end);
        let samePeriod:Period = new Period(start,end);

        //when
        let overlap = periodToCheck.isOverlapped(samePeriod);

        //then
        expect(overlap).toEqual(true);
    });

    test('Should return is overlapped when is fully contained in given period', () => {
        //given
        let givenPeriod:Period =new Period(new Date('10-10-2020'),new Date('10-06-2021'));
        let periodToCheck:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));
        

        //when
        let overlap = periodToCheck.isOverlapped(givenPeriod);

        //then
        expect(overlap).toEqual(true);
    });


    test('Should return is overlapped when only start date is contained in given period', () => {
        //given

        let givenPeriod:Period =new Period(new Date('10-10-2020'),new Date('10-06-2022'));
        let periodToCheck:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));
        

        //when
        let overlap = periodToCheck.isOverlapped(givenPeriod);

        //then
        expect(overlap).toEqual(true);
    });

    test('Should return is overlapped when only end date is contained in given period', () => {
        //given
        let givenPeriod:Period =new Period(new Date('10-10-2018'),new Date('10-06-2020'));
        let periodToCheck:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));
        

        //when
        let overlap = periodToCheck.isOverlapped(givenPeriod);

        //then
        expect(overlap).toEqual(true);
    });

    test('Should return no overlapped when no overlap found', () => {
        //given
        let givenPeriod:Period =new Period(new Date('10-10-2018'),new Date('11-11-2018'));
        let periodToCheck:Period = new Period(new Date('10-10-2019'),new Date('10-07-2021'));
        

        //when
        let overlap = periodToCheck.isOverlapped(givenPeriod);

        //then
        expect(overlap).toEqual(false);
    });

});