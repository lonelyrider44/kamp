export class JMBG {
    private str: string = "";
    private valid: boolean = false;
    private date_str: string = "";
    private str_godina: string = "";
    private str_mesec: string = "";
    private str_dan: string = "";
    private pol_id: number = -1;

    constructor(jmbg: string) {
        if (jmbg.length != 13) {
            this.valid = false;
            this.date_str = "";
            this.pol_id = -1;
            return;
        }

        /*
        A B V G D Đ E Ž Z I J K L
        A B C D E F G H I J K L M
        L = 11 - (( 7*(A+E) + 6*(B+Ž) + 5*(V+Z) + 4*(G+I) + 3*(D+J) + 2*(Đ+K) ) % 11)
        */
        var A = +jmbg[0];
        var B = +jmbg[1];
        var C = +jmbg[2];
        var D = +jmbg[3];
        var E = +jmbg[4];
        var F = +jmbg[5];
        var G = +jmbg[6];
        var H = +jmbg[7];
        var I = +jmbg[8];
        var J = +jmbg[9];
        var K = +jmbg[10];
        var L = +jmbg[11];
        var M = +jmbg[12];

        let kk = 11 - ((7 * (+A + +G) + 6 * (+B + +H) + 5 * (+C + +I) + 4 * (+D + +J) + 3 * (+E + +K) + 2 * (+F + +L)) % 11);
        if (kk > 9) kk = 0;
        if (kk == M) {
            var dd = jmbg.substring(0, 2);
            var mm = jmbg.substring(2, 4);
            var ggg = jmbg.substring(4, 7);
            ggg = (+ggg < 100) ? ("2" + ggg) : ("1" + ggg)
            var rr = jmbg.substring(7, 9);
            var bbb = jmbg.substring(9, 12);
            var k = jmbg.substring(12, 13);
            let pol = (+bbb < 500) ? 1 : 2;

            this.valid = true;
            this.str_godina = ggg;
            this.str_mesec = mm;
            this.str_dan = dd;
            this.pol_id = pol;
            this.date_str = dd + "." + mm + "." + ggg + ".";
        }
    }

    is_valid(){ return this.valid; }
    get_godina(){ return this.str_godina; }
    get_mesec(){ return this.str_mesec; }
    get_dan(){ return this.str_dan; }
    get_date_str(){ return this.date_str; }
    get_pol_id(){ return this.pol_id; }


}
