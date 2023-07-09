import React, { useMemo } from 'react';
import {City, selectCities} from "../stores/citySlice";
import {useAppSelector} from "../hooks/stores";

function isOverseasPostalCode(postalCode: string): boolean {
    const overseasPrefixes = ['971', '972', '973', '974', '976'];
    return overseasPrefixes.some(prefix => postalCode.startsWith(prefix));
}

export const Body: React.FC = () => {
    const cities = useAppSelector(selectCities);
    
    const {metropolisCities, overseasCities } = useMemo(() => {
        const metropolisCities: City[] = [];
        const overseasCities: City[] = [];

        cities.forEach(city => {
            if (isOverseasPostalCode(city.codePostal)) {
                overseasCities.push(city);
            } else {
                metropolisCities.push(city);
            }
        });

        return { metropolisCities, overseasCities };
    }, [cities]);

    return (
        <div>Cities</div>
    );
}

