"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ReservationInputProps } from "@/types/inputs";

const ReservationSelectInput = ({placeholder, items}: ReservationInputProps) => {

    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            
            <SelectContent>
                {
                    items.map((item) => (
                        <SelectItem value={item.value} key={item.value}>{item.content}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    );
};

export default ReservationSelectInput;