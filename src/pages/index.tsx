import Seo from "@/ui/components/seo";
import { Button } from "@/ui/design-system/typograph/button";
import { Typography } from "@/ui/design-system/typograph/typography";



export default function Home() {
  return (
    <div>
      <Seo title="Coders NexTailds"  description="description"/>
      <Button/>
      <Typography variant="h1" theme="primary">
        Welcome to Coders NexTailds 
        </Typography>
        <Typography variant="h2" >
        Welcome to Coders NexTailds 
        </Typography>
    </div>
  );
} 
