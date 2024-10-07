import Seo from "@/ui/components/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typograph/typography";
import { RiUser6Fill } from "react-icons/ri";



export default function Home() {
  return (
    <div>
      <Seo title="Coders NexTailds"  description="description"/>
      <Spinner/>
     
     
      <div className="flex flex-wrap gap-8 items-center justify-center py-16">
        <Button size="small" icon={{icon: RiUser6Fill}} iconPosition="left">Accent</Button>
        <Button variant="secondary" isloading >Secondary</Button> 
        <Button variant="outline" >Outline</Button>
        <Button variant="disabled" disabled>Disabled</Button>

        <Button size="small" variant="ico" iconTheme="gray" icon={{icon: RiUser6Fill}}/>

      <Typography variant="h1" theme="primary">
        Welcome to Coders NexTailds 
        </Typography>
        <Typography variant="h2" >
        Welcome to Coders NexTailds 
        </Typography> 
       {/*Logo */}
        <div className="space-y-4">
          <Typography variant="caption3"  weight="medium">
          Logo
          </Typography> 
          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
           <Logo size="very-small"/>
           <Logo size="small"/>
           <Logo />
           <Logo size="large"/>
          </div>
        </div>

        {/*Avatar*/}
        <div className="space-y-4">
          <Typography variant="caption3"  weight="medium">
          Avatar
          </Typography> 
          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
           <Avatar size="small" src="/assets/images/daniel.png" alt="Avatar de Daniel Linciln"/>
           <Avatar size="large" src="" alt=""/>
          
          </div>
        </div>

    </div>
    </div>
  );
} 
