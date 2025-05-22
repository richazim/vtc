import { Input } from "@/components/ui/input"

export function ReservationTextInput({type, placeholder}: {type: string, placeholder: string}) {
  return <Input type={type} placeholder={placeholder} />
}

export default ReservationTextInput;