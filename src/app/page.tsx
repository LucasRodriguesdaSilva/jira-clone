import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <Button >Primary</Button>
      <Button variant={"secondary"}>Seocondary</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"teritary"}>teritary</Button>
    </div>
    
  );
}
