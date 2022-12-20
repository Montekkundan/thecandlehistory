import Image from "next/image"
import Header from "../components/Header"
import {
    ArrowLongRightIcon
  } from "@heroicons/react/24/outline";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
function history() {
    useEffect(() => {
        ScrollTrigger.defaults({
            toggleActions:"play none none reverse"
          })
          
          
          gsap.to('.img-container',{
            scale:52,
            ease:"ease",
            scrollTrigger:{
              trigger:'.video-section',
              scrub:1,
              start:"top top",
              end:"bottom",
            }
          })
          
          
          gsap.to('.right' ,{
            autoAlpha:0,
            x:500,
            duration:1.5,
            scrollTrigger:{
              start:1
            }
          })
          gsap.to('.left' ,{
            autoAlpha:0,
            x:-500,
            duration:1.5,
            scrollTrigger:{
              start:1
            }
          })
          
          
          gsap.to('.txt-bottom',{
            autoAlpha:0,
            letterSpacing:-10,
            duration:2,
            ease: "power1.out",
            scrollTrigger:{
              start:2
            }
          })
          
          
          const tl = gsap.timeline();
          
          tl.from('.left-side div',{
            y:150,
            opacity:0,
            stagger:{
              amount:.4
            },
            delay:.5
          }).from('.right-side',{opacity:0,duration:2},.5)
        //   .to('.wrapper' ,{x:-window.innerWidth,})
          
          
          
          ScrollTrigger.create({
            animation:tl,
            trigger:'.wrapper',
            start:"top top",
            end:"+=600",
            scrub:1,
          })
          
          
          
        //   gsap.utils.toArray('.col').forEach(image=>{
        //     gsap.fromTo(image,{
        //       opacity:.3,
        //       x:0
        //     },{
        //       opacity:1,
        //       x:-50,
        //       scrollTrigger:{
        //         trigger:image,
        //         start:"10%",
        //         stagger:{
        //           amount:.4
        //         }
        //       }
        //     })
        //   })
          
          const timeline = gsap.timeline();
          
          timeline.fromTo('.title span' ,{
            y:150,
            skewY:7,
            
          },{
            y:0,
            skewY:0,
            duration:1
          })
       }, []);
  return (
    <>
    <Header style="bg-transparent text-white"/>
    <div className=" wrapper">
    <section className="video-section overflow-hidden shrink-0 w-screen text-white">
        <div className="">
            <video className="h-screen object-cover relative w-screen -z-10" src="/assets/flower.mp4" autoPlay loop muted />
        </div>
        <div className="img-container">
            <Image src="/assets/window.png" alt="window" layout='fill'
    objectFit='cover' />
        </div>
        <div className="absolute top-0 h-screen w-screen flex flex-col items-center justify-center">
                <div >
                    <div className="title h-10 -left-1/4 left">
                        <span className="absolute">between</span>
                    </div>
                    <div className="title text-8xl -left-1/4 left">
                        <span className="absolute">Reality</span>
                    </div>
                    <div className="title text-8xl left-3/4 top-[50px] -z-10 right">
                        <span className="absolute">&</span>
                    </div>
                    <div className="title text-8xl left-3/4 top-[50px] right">
                        <span className="absolute">Dream</span>
                    </div>
                </div>
                <p className="translate-y-36 uppercase text-sm font-light tracking-wide txt-bottom ">
                    shots that will change your mind
                </p>
            </div>
            <div className="v_container">
                <div className="left-side" >
                    <div className="flex capitalize" >
                        <div className="text-8xl">push</div>
                        <div className="text-4xl">the</div>
                        <div className="text-8xl translate-y-20">envelope</div>
                    </div>
                    <div className="max-w-[260px]">
                        <p className="pb-4 leading-5 opacity-70">
                            Photography has become a big part of almost
                            every element of our lives.
                        </p>
                        <p className="pb-4 leading-5 opacity-70">
                            It become widespread and diverse but we know that this is still a real form of art and
                            magic.

                        </p>
                    </div>
                </div>
                <div className="right-side" >
                    <p className="text-sm flex absolute uppercase top-[45%] -left-[15%]">explore works<ArrowLongRightIcon className="w-5 h-5 translate-x-5"/> </p>
                </div>
            </div>
    </section>
    <section className="bg-[#141414] p-20 text-white overflow-hidden shrink-0 w-screen">
            <div className="flex flex-col gap-32">
                <div className="flex gap-6 relative">
                    <div className="col flex gap-6 grow-[5]">
                    <Image className="h-48 w-40 -translate-y-7"src="/assets/1.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[380px] h-[480px]" src="/assets/2.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                    <div className="m-auto grow-[1.5]">
                        <h1 className="absolute capitalize z-50 text-9xl top-0 left-[47%]">Carolina</h1>
                        <span className="uppercase text-[8px] tracking-wide opacity-70" >28 october 2021</span>
                        <div className="bg-white h-px mx-0 my-8 w-12"></div>
                        <div className="text-xs pb-4 opacity-70 leading-loose">
                            <p>
                                This series is excellently showing that ordinary
                                portrait photography still can be inspiring for you.
                            </p>
                            <p>
                                Check the shots of beautiful Caroline in hat with red and green lights.
                            </p>
                        </div>
                    </div>
                    <div className="col flex flex-wrap justify-center gap-10 grow-[4]" >
                    <Image className="w-[320px] h-[300px]" src="/assets/3.webp" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[200px] h-[200px]" src="/assets/4.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[150px]" src="/assets/5.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                </div>
                <div className="col flex gap-6 relative">
                    <div  className="flex gap-6 grow-[5]">
                    <Image className="h-48 w-40 -translate-y-7" src="/assets/p1.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[300px] h-[380px]" src="/assets/p2.webp" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                    <div className="m-auto grow-[1.5]">
                        <h1 className="absolute capitalize z-50 text-9xl top-0 left-[47%]">soul dance</h1>
                        <span className="uppercase text-[8px] tracking-wide opacity-70" >17 september 2021</span>
                        <div className="bg-white h-px mx-0 my-8 w-12"></div>
                        <div className="text-xs pb-4 opacity-70 leading-loose" >
                            <p>
                                Beautiful dance of Hanna in neon ligths with retro effect. Pink lights, pretty women
                                and sensuality.
                            </p>
                            <p>
                                Inspiring vibes and invisible beautiful soul on this shots.
                            </p>
                        </div>
                    </div>
                    <div className="col flex flex-wrap justify-center gap-10 grow-[4]">
                    <Image className="h-[300px] w-[220px]" src="/assets/p3.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="self-end w-[180px] h-[200px]" src="/assets/p4.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="translate-x-20 w-[380px] h-[400px]" src="/assets/p5.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                </div>
                <div className="col flex gap-6 relative">
                    <div className="flex gap-6 grow-[5] flex-wrap">
                    <Image className="w-[200px] h-[280px] translate-x-8" src="/assets/b1.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[180px] h-[200px] ml-20 self-center" src="/assets/b2.webp" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[280px] h-[180px]" src="/assets/b3.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    <Image className="w-[250px] h-[280px] -translate-y-8" src="/assets/b4.jpeg" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                    <div className="m-auto grow-[1.5]" >
                        <h1 className="absolute capitalize z-50 text-9xl top-[50px] left-[47%]">80's vibes</h1>
                        <span className="uppercase text-[8px] tracking-wide opacity-70">1 september 2021</span>
                        <div className="bg-white h-px mx-0 my-8 w-12"></div>
                        <div className="text-xs pb-4 opacity-70 leading-loose" >
                            <p>
                                Retro nostagia can be sweet and sour at the same time. Christina helped us to make
                                photos, that will give you this feelings.

                            </p>
                            <p>

                                Drop in past times with this collection of 80's styled photos.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <Image className="w-[400px] h-auto" src="/assets/b5.webp" alt="window" objectFit='cover' width={100} height={100}/>
                    </div>
                </div>
            </div>
    </section>
    </div>
    
    </>
  )
}

export default history