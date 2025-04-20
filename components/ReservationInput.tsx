"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ReservationInput = ({placeholder, items} : {placeholder: string, items: any}) => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {
                    items.map((item, id) => (
                        <SelectItem value={item.value} key={id}>{item.item}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
};

export default ReservationInput;