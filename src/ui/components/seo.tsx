import Head from "next/head";

interface Props {
title: string;
description: string;

}

const Seo = ({title, description }: Props ) => {
    return ( 
    
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name={description} content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
    </div>

     );
}
 
export default Seo;