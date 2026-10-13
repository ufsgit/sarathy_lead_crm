export class Country {
    Country_Id: number;
    Country_Name: string;
    Country_Temp: string;
    country_checkbox_view: boolean
    Brand_Id: number;
    Brand_Name: string;
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}

