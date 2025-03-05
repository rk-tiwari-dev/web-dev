class Length {
        constructor(ft, inch) {
                this.ft = ft;
                this.in = inch;
        }

        func isvalideObject =()={
            if (this.ft < 0 || this.in < 0) {
                return false;
            }
            return true;
        }
}
