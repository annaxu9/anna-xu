import { useRouter } from 'next/router';
export default function TitleName({name, url}) {
    const router = useRouter();
    return (
        <div className='flex items-center justify-between w-full' > 
            <button className='flex-shrink-0 pr-6' onClick={() => router.back()}>
                <h1 className='text-xl font-black'>&#60;</h1>
            </button>   
            <div className='md:text-[2rem] font-black text-center flex-grow' >
                <a href={url} target="__blank">
                    <h1 >{name}</h1>
                </a>
            </div>                         
            
        </div>
    )
}