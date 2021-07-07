export class Period {

    isOverlapped(period: Period): boolean {
        if (this.end < this.start) {
            throw new RangeError("End date must be after Start date");
        }
        return this.equals(period) || this.isBetween(period.start) || this.isBetween(period.end) || this.isWithinPeriod(period);
    }

    start: Date;
    end: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    public equals(obj: Period): boolean {
        return this.start === obj.start && this.end === obj.end;
    }

    private isWithinPeriod(obj: Period): boolean {
        return this.start < obj.start && this.end > obj.end;
    }

    private isBetween(dateToCheck: Date) {
        return this.start< dateToCheck && this.end > dateToCheck;
    }
}