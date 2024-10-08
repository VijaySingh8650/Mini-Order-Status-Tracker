import { 
    Select, 
    SelectTrigger, 
    SelectValue, 
    SelectContent, 
    SelectItem 
} from "@/components/ui/select";


type TypePageProps = {
    handleValueChange : (value:string) => void;
    value: string;
}
export default function SelectBox({handleValueChange, value}:TypePageProps) {

    
  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Order Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Pending">Pending</SelectItem>
        <SelectItem value="Accepted">Accepted</SelectItem>
        <SelectItem value="Shipped">Shipped</SelectItem>
        <SelectItem value="Delivered">Delivered</SelectItem>
        <SelectItem value="Cancelled">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
}
