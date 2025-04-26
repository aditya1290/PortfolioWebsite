import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { listOfButtons } from '@/lib/Constants/constants';
import { MainPageButtonProps } from '@/lib/types';

export default function HomePagePhotoContent(){
    return (
        <div className="bg-[#934B00] mt-14" style={{fontFamily:"auto"}}>
            <div className="block lg:flex justify-evenly items-center h-full w-full mx-6 text-white">
                <div className="h-full w-[45vw] my-6 p-3">
                    <div>
                        <p className='font-medium text-2xl'>Hey, I am <span className='text-3xl text-[#3993DD]'>Aditya Garg</span></p>
                        <p className='font-medium font-sans text-[#3993DD] text-lg'>Focused, Passionate and Evolving.</p><br/>
                        A Software Engineer, problem solver and lifelong learner. <br />
                        I am currently working as an SDE-III at Google, where i focus on building scalable and efficient systems. With a strong foundation in data structures, algorithms, and system design, I&apos;m passionate about creating clean, maintainable, and impactful code.<br />
                        When I&apos;m not coding, you&lsquo;ll find me on the couch, learning something new, or planning my next big milestone. <br />
                        <br />
                        I&apos;m on a mission to become the best version of myself — from acing tech interviews and becoming a better developer, to build impact and provide support through tech.<br />
                        <br />
                        This website is a reflection of my journey — projects I&apos;ve built, thoughts I&apos;ve shared, and things I&apos;ve learned along the way.<br />
                        Let&apos;s connect and build something meaningful together.<br />
                    </div>

                    <div className='text-black mt-2 flex'>
                        {listOfButtons.map(x=> MainPageButton(x))}
                    </div>
                </div>
                <div className="h-[70vh] w-[40vw] m-6 relative rounded-2xl p-1 border-4 border-blue-300">
                    <div className="h-full p-1 relative w-sm">
                        <Image src="/profilePic.png" alt="profilePic" fill className='rounded-2xl p-1 border-4 border-pink-300 grayscale hover:grayscale-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MainPageButton({href, Icon, text, key}: MainPageButtonProps){
    return (
        <Button key={key} variant={"outline"} className='cursor-pointer p-3 mr-3 hover:text-blue-900 hover:underline' style={{backgroundColor:"lightgrey"}} asChild>
            <Link href={href} target='_blank' >{Icon} {text}</Link>
        </Button>
    )
}