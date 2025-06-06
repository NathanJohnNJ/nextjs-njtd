'use client';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

export default function AnimatedLogo(props){
  const { size, showLinks, setShowLinks } = props;
  const { scrollYProgress } = useScroll();
  let startAnimation;
  if(typeof window !== "undefined"){
   startAnimation = document.getElementById('startAnimation')
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.15 && latest < 0.155){
      startAnimation.beginElement()
    }else {
    }
  })
  
  return(
    <motion.svg id="animatedLogo" height={size} width={size} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" onClick={() => {setShowLinks(!showLinks)}} className="z-50 firstLogo transition-all scale-[90%] hover:scale-[95%]">
      <defs>
        <clipPath id="clipCircle">
          <circle cx="512" cy="512" r="465"/>
        </clipPath>
        <clipPath id="camoClip">
          <path d="M 0 0 H 1024 V 1024 H0 V0z M 412 257 C 461 232 358 184 408 157 Q 458 132 405 86 C 342 29 496 41 534 51 Q 582 66 555 100 Q 525 135 553 180 T 510 222 C 477 221 500 312 411 291 C 361 281 391 267 412 257 Z M 683 298 C 729 328 719 215 767 244 Q 814 275 827 206 C 845 123 912 263 922 301 Q 933 350 890 343 Q 845 335 820 382 T 762 365 C 747 336 679 402 653 314 C 637 266 664 285 683 298 Z M 783 553 C 780 608 873 543 872 599 Q 868 655 935 632 C 1015 606 928 734 900 762 Q 863 796 847 755 Q 832 712 779 714 T 764 655 C 782 628 691 602 754 535 C 788 497 785 530 783 553 Z M 612 767 C 563 792 666 840 617 867 Q 566 892 620 938 C 682 995 528 983 489 973 Q 442 958 469 924 Q 499 889 471 844 T 514 802 C 547 804 524 712 613 733 C 663 744 633 757 612 767 Z M 341 726 C 295 696 305 809 257 780 Q 210 749 197 819 C 179 901 112 761 101 723 Q 91 674 134 681 Q 179 689 204 642 T 262 659 C 277 688 345 622 371 710 C 387 759 360 739 341 726 Z M 241 471 C 244 416 151 481 152 425 Q 156 369 89 393 C 9 418 96 290 124 262 Q 161 228 177 269 Q 192 312 245 310 T 260 369 C 242 396 333 422 270 489 C 236 527 239 494 241 471 Z" transform="rotate(40 512 512)" clipRule="evenodd"/>
        </clipPath>
        <linearGradient id="camoGrad" gradientTransform="rotate(50)">
          <stop offset="25%" stopColor="rgb(210,210,210)" />
          <stop offset="50%" stopColor="rgb(220,220,220)" />
          <stop offset="75%" stopColor="rgb(190,190,190)" />
          <stop offset="100%" stopColor="rgb(195,195,195)" />
        </linearGradient>
        <linearGradient id="camoGrad2">
          <stop offset="0%" stopColor="rgb(80,80,80)" />
          <stop offset="30%" stopColor="rgb(110,110,110)" />
          <stop offset="70%" stopColor="rgb(130,130,130)" />
          <stop offset="100%" stopColor="rgb(90,90,90)" />
        </linearGradient>
        <linearGradient id="camoGrad3" gradientTransform="rotate(95)">
          <stop offset="5%" stopColor="rgb(90,90,90)" />
          <stop offset="45%" stopColor="rgb(60,60,60)" />
          <stop offset="85%" stopColor="rgb(50,50,50)" />
          <stop offset="100%" stopColor="rgb(65,65,65)" />
        </linearGradient>
        <linearGradient id="camoGrad4" gradientTransform="rotate(105)">
          <stop offset="5%" stopColor="rgb(160,160,160)" />
          <stop offset="35%" stopColor="rgb(130,130,130)" />
          <stop offset="75%" stopColor="rgb(100,100,100)" />
          <stop offset="100%" stopColor="rgb(120,120,120)" />
        </linearGradient>
        <linearGradient id="hatGrad">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="25%" stopColor="#3c3c3c" />
          <stop offset="50%" stopColor="#6f6f6f" />
          <stop offset="55%" stopColor="#6f6f6f" />
          <stop offset="75%" stopColor="#3c3c3c" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="bodyGrad">
          <stop offset="1%" stopColor="#1f1f1f" />
          <stop offset="75%" stopColor="#3c3c3c" />
        </linearGradient>
        <linearGradient id="macGrad" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#cfcfcf" />
          <stop offset="95%" stopColor="#7e7e82" />
        </linearGradient>
        <linearGradient id="faceGrad" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#a9825a" />
          <stop offset="30%" stopColor="#c5845c" />
          <stop offset="80%" stopColor="#e5ac79" />
          <stop offset="85%" stopColor="#ffd9ae" />
        </linearGradient>
        <linearGradient id="earGrad" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#ffd9ae" />
          <stop offset="55%" stopColor="#e5ac79" />
        </linearGradient>
        <linearGradient id="shadowGrad" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#a68642" />
          <stop offset="90%" stopColor="#7d5524" />
        </linearGradient>
        <linearGradient id="eyeGrad" gradientTransform="rotate(90)">
          <stop offset="50%" stopColor="#000000" />
          <stop offset="75%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="browGrad" gradientTransform="rotate(15)">
          <stop offset="50%" stopColor="#4d3120" />
          <stop offset="75%" stopColor="#5c3b2a" />
        </linearGradient>
        <linearGradient id="noseHL" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.68)" />
        </linearGradient>
        <linearGradient id="glassesGrad" gradientTransform="rotate(90)">
          <stop stopColor="#202020" />
          <stop offset="33%" stopColor="#4a4d4d" />
        </linearGradient>
        <linearGradient id="piercingGrad" gradientTransform="rotate(90)">
          <stop stopColor="#0000ff" />
          <stop offset="33%" stopColor="#020d2f" />
        </linearGradient>
      </defs>


      <g id="layer1">
        <circle r="504" cx="512" cy="512" stroke="black" fill="none" strokeWidth="12px" transformOrigin="center" transform="scale(0)">
          <animateTransform id="circleAnim1" attributeType="XML" attributeName="transform" type="scale" to="1" dur="2s" begin="0s" repeatCount="1" fill="freeze" />     
        </circle>
        <circle r="483" cx="512" cy="512" stroke="black" fill="none" strokeWidth="8px" transformOrigin="center" transform="scale(0)">
          <animateTransform id="circleAnim2" attributeType="XML" attributeName="transform" type="scale" to="1" dur="0.8s" begin="circleAnim1.end-1s" repeatCount="1" fill="freeze" />     
        </circle>
      </g>

      <circle id="layer2" r="465" cx="512" cy="512" stroke="none" fill="black">
          <animate id="circleAnim4" attributeName="fill-opacity" values="0;0.5" dur="8s" begin="0s" repeatCount="1" fill="freeze" />
      </circle>

      <g id="layer3" clipPath="url(#clipCircle)"> 
        <g fillOpacity="0" strokeWidth="0" >
          <path d="M 139 234 C 144 265 255 250 176 305 C 147 316 183 367 150 362 C 136 357 116 306 80 340 C 10 409 -1 588 85 696 C 114 707 156 604 165 699 C 160 730 222 724 201 751 C 190 760 136 752 147 800 C 172 895 321 994 458 974 C 482 954 414 866 500 906 C 525 926 551 869 563 901 C 566 915 532 958 579 972 C 674 998 834 918 885 790 C 880 759 770 774 847 719 C 877 708 841 657 874 662 C 888 667 908 718 944 684 C 1014 615 1025 436 939 328 C 910 317 868 420 859 325 C 864 294 802 300 823 273 C 834 264 888 272 877 224 C 852 129 703 30 566 50 C 542 70 610 158 524 118 C 499 98 473 155 461 123 C 458 109 492 66 445 52 C 350 26 190 106 139 234 Z" fill="rgba(25, 25, 25, 0.8)" stroke="rgba(25, 25, 25, 0.8)" />
          <animate id="strokeAnim" attributeName="stroke-dasharray" values="0% 100%;100% 0%" dur="1.5s" begin="2s" repeatCount="1" calcMode="linear"/>
          <animate attributeName="fill-opacity" values="0;1" dur="2s" begin="2s" repeatCount="1" fill="freeze" />
          <animate attributeName="stroke-width" values="5;1" dur="2s" begin="2s" repeatCount="1" fill="freeze" />
        </g>
        <g fillOpacity="0" strokeWidth="0" fill="url(#camoGrad)" stroke="url(#camoGrad)" transformOrigin="center" transform="rotate(-45) scale(1.3)">
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(60 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(120 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(180 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(240 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(300 512 512)" />
          <animate id="strokeAnim1" attributeName="stroke-dasharray" values="0% 100%;100% 0%" dur="2s" begin="3s" repeatCount="1" calcMode="linear"/>
          <animate attributeName="fill-opacity" values="0;1" dur="3s" begin="3s" repeatCount="1" fill="freeze" />
          <animate attributeName="stroke-width" values="5;1" dur="3s" begin="3s" repeatCount="1" fill="freeze" />
        </g>
        <g fillOpacity="0" strokeWidth="0" fill="url(#camoGrad2)" stroke="url(#camoGrad2)">
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(60 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(120 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(180 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(240 512 512)" />
          <path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" transform="rotate(300 512 512)" />
          <animate id="strokeAnim2" attributeName="stroke-dasharray" values="0% 100%;100% 0%" dur="1.5s" repeatCount="1" calcMode="linear" begin="strokeAnim1.end-1s" />
          <animate attributeName="fill-opacity" from="0" to="1" dur="2s" begin="strokeAnim1.end-0.5s" repeatCount="1" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" values="5;1" dur="2s" begin="strokeAnim1.end-1s" repeatCount="1" fill="freeze" />
        </g>
        <g clipPath="url(#clipCircle)" fillOpacity="0" strokeWidth="0" fill="url(#camoGrad3)" stroke="url(#camoGrad3)">
          <path d="M 437 321 C 474 302 397 266 434 246 Q 472 227 432 193 C 385 150 500 159 529 166 Q 565 178 544 203 Q 522 229 543 263 T 511 295 C 486 294 503 362 436 346 C 399 339 421 328 437 321 Z M 640 352 C 675 374 667 289 703 311 Q 739 334 748 283 C 762 220 812 325 820 354 Q 828 391 796 385 Q 762 379 743 415 T 700 402 C 688 380 637 430 618 364 C 606 328 626 342 640 352 Z M 715 543 C 713 584 783 535 782 577 Q 779 619 829 602 C 889 583 824 679 803 700 Q 775 725 763 694 Q 752 662 712 664 T 701 619 C 715 599 646 580 694 529 C 719 501 717 526 715 543 Z M 587 703 C 550 722 628 758 591 778 Q 553 797 593 832 C 640 874 524 865 495 858 Q 460 847 480 821 Q 502 795 481 761 T 514 730 C 538 731 521 662 588 678 C 625 686 603 696 587 703 Z M 384 673 C 349 650 357 735 321 713 Q 286 690 276 742 C 262 804 212 699 204 670 Q 196 634 229 639 Q 262 645 281 610 T 325 622 C 336 644 387 595 406 661 C 418 697 398 682 384 673 Z M 309 481 C 311 440 241 489 242 447 Q 245 405 195 423 C 135 442 200 346 221 325 Q 249 299 261 330 Q 272 362 312 361 T 323 405 C 310 425 378 445 331 495 C 305 523 307 499 309 481 Z" transformOrigin="center" transform="scale(1)" />
          <animate id="strokeAnim4" attributeName="stroke-dasharray" values="0% 100%;100% 0%" dur="1.5s" repeatCount="1" calcMode="linear" begin="strokeAnim3.end-2s" />
          <animate attributeName="fill-opacity" from="0" to="1" dur="2s" begin="strokeAnim3.end-1s" repeatCount="1" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" values="5;1" dur="2s" begin="strokeAnim3.end-2s" repeatCount="1" fill="freeze" />
        </g>
        <g clipPath="url(#clipCircle)" fillOpacity="0" strokeWidth="0" fill="url(#camoGrad4)" stroke="url(#camoGrad4)">
          <path d="M 475 201 C 514 172 558 267 509 294 Q 456 327 526 353 C 592 382 484 374 456 425 C 428 468 379 421 406 383 C 439 336 301 356 359 307 C 427 250 291 293 379 204 C 443 144 404 244 475 201 ZM 800 635 C 805 683 701 674 702 618 Q 700 556 643 604 C 585 647 646 557 615 507 C 592 461 657 442 677 485 C 701 537 753 407 766 482 C 782 569 812 430 845 551 C 865 636 798 552 800 635 ZM 261 700 C 217 680 277 595 325 624 Q 380 653 367 579 C 359 508 406 606 465 604 C 516 607 500 673 453 668 C 396 663 482 773 411 747 C 328 717 433 813 312 781 C 228 756 334 740 261 700 Z" />
          <path d="M 368 423 C 448 551 481 363 571 337 C 669 292 565 412 693 396 C 770 397 703 440 661 432 C 510 437 657 560 634 651 C 624 758 572 608 522 727 C 483 793 479 713 507 681 C 578 548 398 614 331 548 C 243 486 399 516 321 413 C 283 346 354 383 368 423Z" stroke="#eaeaea" fill="#eaeaea" />
          <animate id="strokeAnim3" attributeName="stroke-dasharray" values="0% 100%;100% 0%" dur="1.5s" repeatCount="1" calcMode="linear" begin="strokeAnim2.end-2s" />
          <animate attributeName="fill-opacity" from="0" to="1" dur="2s" begin="strokeAnim2.end-1s" repeatCount="1" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" values="5;1" dur="2s" begin="strokeAnim2.end-2s" repeatCount="1" fill="freeze" />
        </g>
      </g>
        

      <g transform="translate(0, 75)" transformOrigin="center">
      <g id="layer4" transform="scale(0)" opacity="0" transformOrigin="center">
        <g id="face">
          <g id="ears">
            <g id="leftEar">
              <path id="leftOne" d="M414,310 c-25,-16 -20,25 5,52" fill="url('#faceGrad')" stroke="url(#faceGrad)" strokeWidth="3" />
              <path id="leftTwo" d="M414,310 c-25,-16 -20,25 5,50" fill="none" stroke="url(#earGrad)" strokeWidth="5" /> 
              <circle id="leftThree" cx="405" cy="344" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   />  
              <circle id="leftFour" cx="403" cy="340" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   />  
              <circle id="leftFive" cx="401" cy="336" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   /> 
              <circle id="leftSix" cx="411" cy="352.25" r="5.5" fill="url(#piercingGrad)" strokeWidth="1px"   />
              <g id="leftTragus" transform="translate(0,-1.5)">
                <circle id="leftSeven" cx="411" cy="336" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   /> 
                <circle id="leftEight" cx="411" cy="331" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   /> 
              </g>
              <circle id="leftNine" cx="403" cy="312" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   /> 
            </g>
            <g id="rightEar">
              <path id="rightOne" d="M 610 310 c 25 -16 20 25 -5 52" fill="url('#faceGrad')" stroke="url(#faceGrad)" strokeWidth="3" />
              <path id="rightTwo" d="M 610 310 c 25 -16 20 25 -5 50" fill="none" stroke="url(#earGrad)" strokeWidth="5" />  
              <circle id="rightThree" cx="616" cy="343" r="2" fill="url(#piercingGrad)" strokeWidth="1px"  /> 
              <g id="rightTragus" transform="translate(0,-1.5)">
                <circle id="rightFour" cx="612.5" cy="332" r="2" fill="url(#piercingGrad)" strokeWidth="1px"  />
                <circle id="rightFive" cx="614" cy="335" r="2" fill="url(#piercingGrad)" strokeWidth="1px"  />
                <circle id="rightSix" cx="614" cy="329" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   />
              </g>
              <circle id="rightSeven" cx="610" cy="352.25" r="5.5" fill="url(#piercingGrad)" strokeWidth="1px"  />
              <circle id="rightEight" cx="619" cy="338" r="2" fill="url(#piercingGrad)" strokeWidth="1px"   />
            </g>
          </g>
          <path id="mainFace" d="M409.6,300 L512,260 L 614.4,300 Q614.4,330 606,380 H418 Q409.6,330 409.6,300" fill="url('#faceGrad')" stroke="url(#shadowGrad)" strokeWidth="2" />
          <g id="eyes" >
            <g id="left" transform="translate(-1,1) rotate(5, 512, 358.4)">
              <path id="leftEyeOne" d="M439.5,338 q20,-25 50,-2 q-25,30 -48, 1" fill="#ffffff" stroke="#ffffff" strokeWidth="1" opacity="0.35" />
              <path id="leftEyeTwo" d="M441,339 Q462,313 492,336 Q462,356 441, 339" fill="#efefef" stroke="url(#eyeGrad)" strokeWidth="1" /> 
              <circle id="leftEyeThree" cx="467" cy="336" r="8.5" fill="black" stroke="#0e2089" strokeWidth="4.5"/>
              <circle id="leftEyeFour" cx="469" cy="342" r="3.5" fill="white" strokeWidth="0"/>
              <circle id="leftEyeFive" cx="468.5" cy="341" r="4.5" fill="rgba(255,255,255,0.4)" strokeWidth="0"/>
              <path id="leftLash" d="M440,337Q440,338,436,335L446,333Q446,334,442,331L452,329Q452,330,448,327L458,325Q473,317,493,337Q466,312,441,339Z " fill="#black" stroke="black" strokeWidth="1.1" opacity="0.95" />
            </g>
            <g id="right" transform="translate(1,1) rotate(-5, 512, 358.4)">
              <path id="rightEyeOne" d="M 584.5 338 q -20 -25 -50 -2 q 25 30 48 1" fill="#ffffff" stroke="#ffffff" strokeWidth="1" opacity="0.35" />
              <path id="rightEyetwo" d="m 583 339 q -21 -26 -51 -3 q 30 20 51 3" fill="#efefef" stroke="url(#eyeGrad)" strokeWidth="1" />   
              <circle id="rightEyeThree"  cx="558" cy="336" r="8.5" fill="black" stroke="#0e2089" strokeWidth="4.5"/>
              <circle id="rightEyeFour" cx="555" cy="342" r="3.5" fill="white" strokeWidth="0" />
              <circle id="rightEyeFive" cx="555.5" cy="341" r="4.5" fill="rgba(255,255,255,0.4)" strokeWidth="0" />
              <path id="rightLash" d="M 584 337 Q 584 338 588 335 L 578 333 Q 578 334 582 331 L 572 329 Q 572 330 576 327 L 566 325 Q 551 317 531 337 Q 558 312 583 339 Z" fill="black" stroke="black" strokeWidth="1" opacity="0.95" />
            </g>
            <g id="brows" transform="translate(0,-0.25)">
              <path id="leftBrow" d="M426,317 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -5,1 q2,-2 8,-3 q-3,-1 -5,0 q2,-2 8,-2 q-3,-1 -5,0 q3,0 7,0 q-2,-2 -5,-2 q5,-2 15,2 q-6,-3 -8,-4 q3,-1 15,3 q-6,-3 -8,-4 q5,-2 15,4 q-6,-3 -3,-3 q3,-2 13,5 q-3,-4 -4,-4 q2,-1 5,4 q-1,-2 -1,-3 q1,-1 4,2 q1,-2 0,-2 q2,-1 4,4 q1,-2 1,-4 q1,-1 3,6 q1,-2 0,-4 q1,-2 2,5 q1,5 -1,8 q-35 -10 -48, -6z" fill="url(#browGrad)" stroke="url(#browGrad)" strokeWidth="1"  />
              <path id="rightBrow" d="M 598 317 q -2 -2 -8 -3 q 3 -1 6 1 q -2 -2 -8 -3 q 3 -1 6 1 q -2 -2 -8 -3 q 3 -1 6 1 q -2 -2 -8 -3 q 3 -1 5 1 q -2 -2 -8 -3 q 3 -1 5 0 q -2 -2 -8 -2 q 3 -1 5 0 q -3 -0 -7 -0 q 2 -2 5 -2 q -5 -2 -15 2 q 6 -3 8 -4 q -3 -1 -15 3 q 6 -3 8 -4 q -5 -2 -15 4 q 6 -3 3 -3 q -3 -2 -13 5 q 3 -4 4 -4 q -2 -1 -5 4 q 1 -2 1 -3 q -1 -1 -4 2 q -1 -2 0 -2 q -2 -1 -4 4 q -1 -2 -1 -4 q -1 -1 -3 6 q -1 -2 0 -4 q -1 -2 -2 5 q -1 5 1 8 q 35 -10 48 -6 z" fill="url(#browGrad)" stroke="url(#browGrad)" strokeWidth="1"  />
            </g>
          </g>
        <g id="noseDetail">
          <path id="nose" d="M 499 339 Q 502 346 499 350 C 485 370 539 370 525 350 Q 522 346 525 339" fill="none" strokeWidth="3" stroke="#5c3b2a" opacity="0.15" strokeLinecap="round" />
          <path id="noseHighlight" d="M 490 363 C 519 351 500 325 512 322 V 375z" fill="url(#noseHL)" stroke="none" />
          <path id="noseHighlight" d="M 534 363 C 505 351 524 325 512 322 V 375z" fill="url(#noseHL)" stroke="none" />
          <path id="noseShadow" d="M493,355 c19,-16 0,-35 19,-38 c19,3 0,22 19,38" fill="none" strokeWidth="7.5" stroke="#5c3b2a" opacity="0.25" strokeLinecap="round" />
        </g>
          <path id="glasses" d="M420,310 Q460,308 495,315C500,310 525,310 530,315Q563,308 605,310 L609,308L608,313L604,316Q602,345 589,358Q549,362 534,354C527,348 527,334 525,326 C521,312 503,312 499,326M525.5,330L526,316" fill="none" stroke="url(#glassesGrad)"  strokeWidth="10" />
          <path id="glasses" d="M 604 310 Q 564 308 529 315 C 524 310 499 310 494 315 Q 461 308 419 310 L 415 308 L 416 313 L 420 316 Q 422 345 435 358 Q 475 362 490 354 C 497 348 497 334 499 326 C 503 312 521 312 525 326 M 498.5 330 L 498 316" fill="none" stroke="url(#glassesGrad)" strokeWidth="10"/>
          <path id="nosePiercing" d="M500,355 c -11,-5 -10,15 0,9" fill="none" strokeWidth="2" stroke="#2c205d" strokeLinecap="round" />
        </g>
        <g id="hat" >
          <path id="mainHat" d="M414,270 c-10,-105 206,-105 198,-10 l-3,28 c-8,-35 -186,-35 -192,0z" fill="url('#hatGrad')" stroke="url(#hatGrad)" strokeWidth="1" />
          <path id="peak" d="M410,300 c-20,-50 236,-50 206,0 l-4,5 c2,-27 -198,-27 -192,0z" fill="#050505" stroke="#000000" strokeWidth="1" />
        </g>
        <g id="shoulders" transform="translate(0,4)">
          <path id="leftShoulder" d="M340,515 q0,-50 40,-60 l0,60" fill="url('#bodyGrad')" stroke="url(#bodyGrad)" strokeWidth="1" />
          <path id="rightShoulder" d="M 684 515 q 0 -50 -40 -60 l -0 60" fill="url('#bodyGrad')" stroke="url(#bodyGrad)" strokeWidth="1" />
        </g>
        <g id="mac" >
          <path id="macPath" d="M387.5,515 c-10,0 -10,0 -12,-10 l-15,-140 c0,-10 0,-10 15,-10 l275,0 c15,0 15,0 15,10 l-15,140 c0,10 0,10 -15,10z" fill="url('#macGrad')" stroke="url(#macGrad)" strokeWidth="1"  transform="translate(0,4)"/>
          <g id="raspberry" transform="scale(0.9) translate(0,-20)" transformOrigin="center">
            <g id="raspLeaves">
              <path id="leftLeaf" d="M510,430 q-20,5 -25,-15 q35,0 30,15" fill="#efefef" strokeWidth="1" stroke="#efefef"  />
              <path id="rightLeaf" d="M514 430 q 20 5 25 -15 q -35 -0 -30 15" fill="#efefef" strokeWidth="1" stroke="#efefef"  />
            </g>
            <g id="raspMain">
              <circle id="raspberry1" cx="497.5" cy="438" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry2" cx="510" cy="437.5" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry3" cx="495" cy="450" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry4" cx="507" cy="447" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry5" cx="500" cy="462.5" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry6" cx="510" cy="460" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry7" cx="512" cy="470" r="8" fill="#efefef" strokeWidth="0" />
            </g>
            <g id="raspMain2">
              <circle id="raspberry8" cx="526.5" cy="438" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry9" cx="520" cy="437.5" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry10" cx="529" cy="450" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry11" cx="517" cy="447" r="9" fill="#efefef" strokeWidth="0" />
              <circle id="raspberry12" cx="524" cy="462.5" r="9" fill="#efefef" strokeWidth="0" />
            </g>
          </g>
        </g>
        <animate attributeName="opacity" from="0" to="1" dur="2s" begin="strokeAnim4.end" repeatCount="1" fill="freeze" calcMode="linear" />
        <animateTransform id="meAnim" attributeType="XML" attributeName="transform" type="scale" values="0;1.4" dur="2s" begin="strokeAnim4.end" repeatCount="1" fill="freeze" />   
        <animateTransform id="meTransY" target="layer4" attributeType="XML" attributeName="transform" type="translate" values="0,75;0,-75" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />  
        <animateTransform id="meTransYBack" target="layer4" attributeType="XML" attributeName="transform" type="translate" values="0,-75;0,75" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
      </g>
        <animateTransform id="meShrink" attributeType="XML" attributeName="transform" type="scale" values="1.4;1" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
        <animateTransform id="meGrow" attributeType="XML" attributeName="transform" type="scale" values="1;1.4" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" /> 
      </g>

      <g id="layer5" fill="none" stroke="#ffffff"  strokeWidth="13" strokeLinecap="round" transform="scale(1.18)" transformOrigin="center" strokeDasharray="0% 100%">
        <path id="darkNJ" d="M 190 720 V 575 C 190 557 218 540 241 557 L 310 647 V 548 M 227 720 V 620 L 296 710 C 319 728 347 710 347 693 V 548 M 433 551 H 478 C 493 551 508 566 508 581 V 664 C 510 746 368 746 366 664 M 433 588 H 458 C 464 588 470 594 470 600 V 664 C 467 697 405 697 402 664"  stroke="#333333" transform="translate(-5,5)"  strokeWidth="0" >
          <animate id="animN" attributeName="stroke-dasharray" to="100% 0%" dur="3.5s"  begin="meAnim.end-1s" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="14.5" dur="1.5s"  begin="meAnim.end-1.5s" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 319 482 V 482 C 500 482 500 482 500 482 L 700 482V 482 M 319 482 V 482L 500 482 C 510 482 550 482 600 482 V 482M 319 482 H 319 C 319 482 326 482 326 482 V 482 C 328 482 330 482 340 482M 319 482 H 458 C 464 482 470 482 470 482 V 482 C 467 482 405 482 700 482" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="80" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 190 720 V 575 C 190 557 218 540 241 557 L 310 647 V 547 M 227 720 V 620 L 296 710 C 319 728 347 710 347 693 V 548M 433 551 H 478 C 493 551 508 566 508 581 V 664 C 510 746 368 746 366 664M 433 588 H 458 C 464 588 470 594 470 600 V 664 C 467 697 405 697 402 664" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="14.5" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
        </path>
        <path id="darkTD" d="M 527.5 551 H 672.5 M 527.5 588 H 571 C 576 588 581 593 581 598 V 720M 619.5 720 V 598 C 619.5 593 624.5 588 629.5 588 H 673M 733 551 H 763 C 858 566 858 705 778 726 H 728 C 693 726 693 726 693 691 V 586 C 693 551 693 551 733 551 M 743 589 H 748 C 813 594 816 688 743 683 H 738 C 734 683 734 683 734 679 V 593 C 734 589 734 589 743 589" stroke="#333333" transform="translate(-5,5)" strokeWidth="0" >
          <animate attributeName="stroke-dasharray" to="100% 0%" dur="3.5s" begin="meAnim.end-1s" fill="freeze" calcMode="linear"/>
          <animate attributeName="stroke-width" to="14.5" dur="1.5s" begin="meAnim.end-1.5s" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 319 602 H 700 M 319 602 H 700 C 700 602 700 602 700 602 V 602 M 319 602 V 602 C 319 602 319 602 319 602 H 700M 319 722 H 351 C 351 722 351 722 351 722 H 700 C 700 722 700 722 700 722 V 722 C 700 722 700 722 700 722 M 319 722 H 700 C 700 722 700 722 700 722 H 700 C 700 722 700 722 700 722 V 722 C 700 722 700 722 700 722" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="80" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 527.5 551 H 672.5 M 527.5 588 H 571 C 576 588 581 593 581 598 V 720 M 619.5 720 V 598 C 619.5 593 624.5 588 629.5 588 H 673 M 733 551 H 763C 858 566 858 705 778 726 H 728 C 693 726 693 726 693 691 V 586 C 693 551 693 551 733 551 M 743 589 H 748 C 813 594 816 688 743 683 H 738 C 734 683 734 683 734 679 V 593 C 734 589 734 589 743 589" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="14.5" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
        </path>
        <path id="lightNJ" d="M 190 720 V 575 C 190 557 218 540 241 557 L 310 647 V 548 M 227 720 V 620 L 296 710 C 319 728 347 710 347 693 V 548 M 433 551 H 478 C 493 551 508 566 508 581 V 664 C 510 746 368 746 366 664 M 433 588 H 458 C 464 588 470 594 470 600 V 664 C 467 697 405 697 402 664" strokeWidth="0" >
          <animate id="animN" attributeName="stroke-dasharray" to="100% 0%" dur="3.5s" begin="meAnim.end-1s" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="13" dur="1.5s" begin="meAnim.end-1.5s" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 319 482 V 482 C 500 482 500 482 500 482 L 700 482V 482 M 319 482 V 482L 500 482 C 510 482 550 482 600 482 V 482M 319 482 H 319 C 319 482 326 482 326 482 V 482 C 328 482 330 482 340 482M 319 482 H 458 C 464 482 470 482 470 482 V 482 C 467 482 405 482 700 482" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="80" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 190 720 V 575 C 190 557 218 540 241 557 L 310 647 V 547 M 227 720 V 620 L 296 710 C 319 728 347 710 347 693 V 548M 433 551 H 478 C 493 551 508 566 508 581 V 664 C 510 746 368 746 366 664M 433 588 H 458 C 464 588 470 594 470 600 V 664 C 467 697 405 697 402 664" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="13" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
        </path>
        <path id="lightTD" d="M 527.5 551 H 672.5 M 527.5 588 H 571 C 576 588 581 593 581 598 V 720M 619.5 720 V 598 C 619.5 593 624.5 588 629.5 588 H 673M 733 551 H 763 C 858 566 858 705 778 726 H 728 C 693 726 693 726 693 691 V 586 C 693 551 693 551 733 551 M 743 589 H 748 C 813 594 816 688 743 683 H 738 C 734 683 734 683 734 679 V 593 C 734 589 734 589 743 589" strokeWidth="0" >
          <animate attributeName="stroke-dasharray" to="100% 0%" dur="3.5s" begin="meAnim.end-1s" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="13" dur="1.5s" begin="meAnim.end-1.5s" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 319 602 H 700 M 319 602 H 700 C 700 602 700 602 700 602 V 602 M 319 602 V 602 C 319 602 319 602 319 602 H 700M 319 722 H 351 C 351 722 351 722 351 722 H 700 C 700 722 700 722 700 722 V 722 C 700 722 700 722 700 722 M 319 722 H 700 C 700 722 700 722 700 722 H 700 C 700 722 700 722 700 722 V 722 C 700 722 700 722 700 722" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="80" dur="1.5s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="d" to="M 527.5 551 H 672.5 M 527.5 588 H 571 C 576 588 581 593 581 598 V 720 M 619.5 720 V 598 C 619.5 593 624.5 588 629.5 588 H 673M 733 551 H 763 C 858 566 858 705 778 726 H 728 C 693 726 693 726 693 691 V 586 C 693 551 693 551 733 551M 743 589 H 748 C 813 594 816 688 743 683 H 738 C 734 683 734 683 734 679 V 593 C 734 589 734 589 743 589" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
          <animate attributeName="stroke-width" to="13" dur="1.5s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
        </path>
      </g>
      <circle cx="512" cy="512" r="512" stroke="none" fill="transparent">
        <animate id="startAnimation" attributeName="r" to="0" dur="0.001s" begin="click" fill="freeze" calcMode="linear" />
        <animate attributeName="r" to="512" dur="0.001s" begin="reverseAnimation.begin" fill="freeze" calcMode="linear" />
      </circle>
      <circle cx="512" cy="512" r="0" stroke="none" fill="transparent">
        <animate attributeName="r" to="512" dur="0.001s" begin="startAnimation.begin" fill="freeze" calcMode="linear" />
        <animate id="reverseAnimation" attributeName="r" to="0" dur="0.001s" begin="click" fill="freeze" calcMode="linear" />
      </circle>
    </motion.svg>
  )
}
