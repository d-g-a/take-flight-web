import React, { useEffect, useRef } from "react";
import { TScrollStyled } from "./style";
import ZaccMilne from "../../images/Zacc_Milne_Take_Flight_Teacher.jpg"
//import { TweenMax } from "gsap/TweenMax";
import {gsap} from 'gsap'

export const TeachersScrollTwo = () => {

    const loadingWrapper = useRef()
    const loadingInnerContent = useRef()

    useEffect(() => {
        window.addEventListener("load",() => {
            console.log('Page loads')
            // let loadingWrapper = document.getElementsByClassName("loading-wrapper"),
            //  loadingInnerContent = document.getElementsByClassName("loading-inner-content")[0]
             console.log('step 2')
            loadingInnerContent.addEventListener("mousemove touchmove", (e) => {
                console.log('step 3')
                if(e.clientX > loadingWrapper.offsetWidth() / 2 ){
                    gsap.TweenLite.to(loadingWrapper, 2, {
                        scrollTo: {
                            x: "+=175"
                        },
                        ease: "power2"
                    })
                }else{
                    gsap.TweenLite.to(loadingWrapper, 2,{
                        scrollTo: {
                            x: "-=175"
                        },
                        ease: "power2"
                    })
                }
            })
        })
    }, []);

    useEffect(() => {
        window.onload(() => {
            console.log('loading')
        })
    })

  return( 
  <TScrollStyled>
      <div className="loading-wrapper" ref={loadingWrapper}>
        <div className="loading-inner-content" ref={loadingInnerContent}>
            <div className="box box-1">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-2">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-3">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-4">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-5">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-6">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-7">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-8">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-9">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
            <div className="box box-10">
                <div className="box-content"> 
                    <img  src={ZaccMilne} alt="ZacMilne" />
                </div>
            </div>
        </div>
      </div>
    </TScrollStyled>);
};

