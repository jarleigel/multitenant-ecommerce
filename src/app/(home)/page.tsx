import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';


export default function Home() {

  return (
    <div className='p-30'>

   <div className='flex flex-col gap-y-4'>
   <div>
    <Button variant="elevated">
      Jeg er en button
    </Button>
   </div>
   <div>
    <Input placeholder='Jeg er en input' />
   </div>
   <div>
    <Progress value={33} />
   </div>
   <div>
    <Textarea placeholder="Jeg er et tekstområde.." />
   </div>
   <div>
    <Checkbox />
   </div>
   </div>
    </div>
  );
}
