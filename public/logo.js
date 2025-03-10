// import Svg, { Defs, ClipPath, Circle, LinearGradient, Stop, G, Path } from "react-native-svg-web";
// const SvgComponent = (props) => {
//   return (
//   <Svg
//     height={props.size}
//     width={props.size}
//     viewBox="0 0 1024 1024"
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//   >
//     <Defs>
//       <ClipPath id="clipCircle">
//         <Circle cx={512} cy={512} r={465} />
//       </ClipPath>
//       <LinearGradient id="camoGrad" gradientTransform="rotate(50)">
//         <Stop offset="25%" stopColor="rgb(210,210,210)" />
//         <Stop offset="50%" stopColor="rgb(220,220,220)" />
//         <Stop offset="75%" stopColor="rgb(190,190,190)" />
//         <Stop offset="100%" stopColor="rgb(195,195,195)" />
//       </LinearGradient>
//       <LinearGradient id="camoGrad2">
//         <Stop offset="0%" stopColor="rgb(80,80,80)" />
//         <Stop offset="30%" stopColor="rgb(110,110,110)" />
//         <Stop offset="70%" stopColor="rgb(130,130,130)" />
//         <Stop offset="100%" stopColor="rgb(90,90,90)" />
//       </LinearGradient>
//       <LinearGradient id="camoGrad3" gradientTransform="rotate(95)">
//         <Stop offset="5%" stopColor="rgb(90,90,90)" />
//         <Stop offset="45%" stopColor="rgb(60,60,60)" />
//         <Stop offset="85%" stopColor="rgb(50,50,50)" />
//         <Stop offset="100%" stopColor="rgb(65,65,65)" />
//       </LinearGradient>
//       <LinearGradient id="camoGrad4" gradientTransform="rotate(105)">
//         <Stop offset="5%" stopColor="rgb(160,160,160)" />
//         <Stop offset="35%" stopColor="rgb(130,130,130)" />
//         <Stop offset="75%" stopColor="rgb(100,100,100)" />
//         <Stop offset="100%" stopColor="rgb(120,120,120)" />
//       </LinearGradient>
//       <LinearGradient id="hatGrad">
//         <Stop offset="0%" stopColor="#000000" />
//         <Stop offset="25%" stopColor="#3c3c3c" />
//         <Stop offset="50%" stopColor="#6f6f6f" />
//         <Stop offset="55%" stopColor="#6f6f6f" />
//         <Stop offset="75%" stopColor="#3c3c3c" />
//         <Stop offset="100%" stopColor="#000000" />
//       </LinearGradient>
//       <LinearGradient id="bodyGrad">
//         <Stop offset="1%" stopColor="#1f1f1f" />
//         <Stop offset="75%" stopColor="#3c3c3c" />
//       </LinearGradient>
//       <LinearGradient id="macGrad" gradientTransform="rotate(90)">
//         <Stop offset="10%" stopColor="#cfcfcf" />
//         <Stop offset="95%" stopColor="#7e7e82" />
//       </LinearGradient>
//       <LinearGradient id="faceGrad" gradientTransform="rotate(90)">
//         <Stop offset="10%" stopColor="#a9825a" />
//         <Stop offset="30%" stopColor="#c5845c" />
//         <Stop offset="80%" stopColor="#e5ac79" />
//         <Stop offset="85%" stopColor="#ffd9ae" />
//       </LinearGradient>
//       <LinearGradient id="earGrad" gradientTransform="rotate(90)">
//         <Stop offset="10%" stopColor="#ffd9ae" />
//         <Stop offset="55%" stopColor="#e5ac79" />
//       </LinearGradient>
//       <LinearGradient id="shadowGrad" gradientTransform="rotate(90)">
//         <Stop offset="0%" stopColor="#a68642" />
//         <Stop offset="90%" stopColor="#7d5524" />
//       </LinearGradient>
//       <LinearGradient id="eyeGrad" gradientTransform="rotate(90)">
//         <Stop offset="50%" stopColor="#000000" />
//         <Stop offset="75%" stopColor="#ffffff" />
//       </LinearGradient>
//       <LinearGradient id="browGrad" gradientTransform="rotate(15)">
//         <Stop offset="50%" stopColor="#4d3120" />
//         <Stop offset="75%" stopColor="#5c3b2a" />
//       </LinearGradient>
//       <LinearGradient id="noseHL" gradientTransform="rotate(90)">
//         <Stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
//         <Stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
//         <Stop offset="100%" stopColor="rgba(255,255,255,0.68)" />
//       </LinearGradient>
//       <LinearGradient id="glassesGrad" gradientTransform="rotate(90)">
//         <Stop stopColor="#202020" />
//         <Stop offset="33%" stopColor="#4a4d4d" />
//       </LinearGradient>
//       <LinearGradient id="piercingGrad" gradientTransform="rotate(90)">
//         <Stop stopColor="#0000ff" />
//         <Stop offset="33%" stopColor="#020d2f" />
//       </LinearGradient>
//     </Defs>
//     <G id="layer1">
//       <Circle
//         r={504}
//         cx={512}
//         cy={512}
//         style={{
//           stroke: "black",
//           fill: "none",
//           strokeWidth: 12,
//         }}
//       />
//       <Circle
//         r={483}
//         cx={512}
//         cy={512}
//         style={{
//           stroke: "black",
//           fill: "none",
//           strokeWidth: 8,
//         }}
//       />
//       <Circle
//         r={465}
//         cx={512}
//         cy={512}
//         style={{
//           stroke: "black",
//           fill: "none",
//           strokeWidth: 4,
//         }}
//       />
//     </G>
//     <Circle
//       id="layer2"
//       r={465}
//       cx={512}
//       cy={512}
//       style={{
//         stroke: "black",
//         fill: "black",
//       }}
//     />
//     <G id="layer3" clipPath="url(#clipCircle)">
//       <G fill="url(#camoGrad)" stroke="url(#camoGrad)">
//         <Path d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z" />
//         <Path
//           d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z"
//           transform="rotate(72 512 512)"
//         />
//         <Path
//           d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z"
//           transform="rotate(144 512 512)"
//         />
//         <Path
//           d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z"
//           transform="rotate(216 512 512)"
//         />
//         <Path
//           d="M770,420c25,50 75,-50 100,0q25,50 70,0c55,-51 55,100 30,130q-20,35 -50,20q-35,-30 -80,-5t-40,-45c-20,-50 -80,-10 -65,-100c5,-30 25,-20 35,0z"
//           transform="rotate(288 512 512)"
//         />
//       </G>
//       <G fill="url(#camoGrad2)" stroke="url(#camoGrad2)">
//         <Path d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z" />
//         <Path
//           d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z"
//           transform="rotate(60 512 512)"
//         />
//         <Path
//           d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z"
//           transform="rotate(120 512 512)"
//         />
//         <Path
//           d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z"
//           transform="rotate(180 512 512)"
//         />
//         <Path
//           d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z"
//           transform="rotate(240 512 512)"
//         />
//         <Path
//           d="M200,150c-30,-85 90,-40 110,0q60,70 90,0c35,-65 75,100 40,130c5,0 -30,30 -60,20c-60,-40 -55,75 -90,0c-50,-100 -80,25 -150,-70c0,-30 70,-5 -15,-95z"
//           transform="rotate(300 512 512)"
//         />
//       </G>
//       <G
//         clipPath="url(#clipCircle)"
//         fill="url(#camoGrad3)"
//         stroke="url(#camoGrad3)"
//       >
//         <Path d="m 350 425 c -50 -31 30 -23 32 -51 q 14 -71 50 -27 c 21 56 10 -90 67 -40 c 34 53 96 -59 104 49 c -58 89 87 60 -25 168 c -84 102 -70 -35 -162 7 c -151 41 20 -27 -44 -94 z" />
//         <Path d="m 425 565 c 41 -64 64 44 111 8 c 102 -79 23 50 84 113 c 112 20 -8 131 -81 17 c -40 -47 5 102 -48 88 c -55 19 -5 -58 -80 -78 c -72 -9 37 -80 12 -147 z" />
//       </G>
//       <G
//         clipPath="url(#clipCircle)"
//         fill="url(#camoGrad4)"
//         stroke="url(#camoGrad4)"
//       >
//         <Path d="M 270 250 c 7 -30 45 -40 55 10 s 12.5 0 64 -2 s 30 38 65 30 s 15 25 28 38 s -32 47 -50 20 s -60 15 -57 39 s -50 20 -58 0 s -32 7 -45 15 q -52 33 5 -50 q 5 -20 -20 -40 c -40 -40 -1 -18 13 -60 z" />
//         <Path
//           d="M 290 250 c 7 -30 45 -40 55 10 s 12.5 0 64 -2 s 30 38 65 30 s 15 25 28 38 s -32 47 -50 20 s -60 15 -57 39 s -50 20 -58 0 s -32 7 -45 15 q -52 33 5 -50 q 5 -20 -20 -40 c -40 -40 -1 -18 13 -60 z"
//           transform="rotate(90 512 512)"
//         />
//         <Path
//           d="M 270 250 c 7 -30 45 -40 55 10 s 12.5 0 64 -2 s 30 38 65 30 s 15 25 28 38 s -32 47 -50 20 s -60 15 -57 39 s -50 20 -58 0 s -32 7 -45 15 q -52 33 5 -50 q 5 -20 -20 -40 c -40 -40 -1 -18 13 -60 z"
//           transform="rotate(180 512 512)"
//         />
//         <Path
//           d="M 290 250 c 7 -30 45 -40 55 10 s 12.5 0 64 -2 s 30 38 65 30 s 15 25 28 38 s -32 47 -50 20 s -60 15 -57 39 s -50 20 -58 0 s -32 7 -45 15 q -52 33 5 -50 q 5 -20 -20 -40 c -40 -40 -1 -18 13 -60 z"
//           transform="rotate(270 512 512)"
//         />
//       </G>
//     </G>
//     <G transform="translate(0, 75)">
//       <G id="layer4" transform="scale(1.4)" transformOrigin="center">
//         <G id="face">
//           <G id="ears">
//             <G id="leftEar">
//               <Path
//                 id="leftOne"
//                 d="M414,310 c-25,-16 -20,25 5,52"
//                 style={{
//                   fill: "url('#faceGrad')",
//                   stroke: "url(#faceGrad)",
//                   strokeWidth: 3,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="leftTwo"
//                 d="M414,310 c-25,-16 -20,25 5,50"
//                 style={{
//                   fill: "none",
//                   stroke: "url(#earGrad)",
//                   strokeWidth: 5,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="leftThree"
//                 cx={405}
//                 cy={344}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="leftFour"
//                 cx={403}
//                 cy={340}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="leftFive"
//                 cx={401}
//                 cy={336}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="leftSix"
//                 cx={411}
//                 cy={352.25}
//                 r={5.5}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <G id="leftTragus" transform="translate(0,-1.5)">
//                 <Circle
//                   id="leftSeven"
//                   cx={411}
//                   cy={336}
//                   r={2}
//                   style={{
//                     fill: "url(#piercingGrad)",
//                     strokeWidth: 1,
//                   }}
//                   gradientUnits="userSpaceOnUse"
//                 />
//                 <Circle
//                   id="leftEight"
//                   cx={411}
//                   cy={331}
//                   r={2}
//                   style={{
//                     fill: "url(#piercingGrad)",
//                     strokeWidth: 1,
//                   }}
//                   gradientUnits="userSpaceOnUse"
//                 />
//               </G>
//               <Circle
//                 id="leftNine"
//                 cx={403}
//                 cy={312}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//             <G id="rightEar">
//               <Path
//                 id="rightOne"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M414,310 c-25,-16 -20,25 5,52"
//                 style={{
//                   fill: "url('#faceGrad')",
//                   stroke: "url(#faceGrad)",
//                   strokeWidth: 3,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="rightTwo"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M414,310 c-25,-16 -20,25 5,50"
//                 style={{
//                   fill: "none",
//                   stroke: "url(#earGrad)",
//                   strokeWidth: 5,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="rightThree"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 cx={403}
//                 cy={342}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <G id="rightTragus" transform="translate(0,-1.5)">
//                 <Circle
//                   id="rightFour"
//                   transform="scale(-1, 1)"
//                   transformOrigin="center"
//                   cx={411}
//                   cy={332}
//                   r={2}
//                   style={{
//                     fill: "url(#piercingGrad)",
//                     strokeWidth: 1,
//                   }}
//                   gradientUnits="userSpaceOnUse"
//                 />
//                 <Circle
//                   id="rightFive"
//                   transform="scale(-1, 1)"
//                   transformOrigin="center"
//                   cx={410}
//                   cy={335}
//                   r={2}
//                   style={{
//                     fill: "url(#piercingGrad)",
//                     strokeWidth: 1,
//                   }}
//                   gradientUnits="userSpaceOnUse"
//                 />
//                 <Circle
//                   id="rightSix"
//                   transform="scale(-1, 1)"
//                   transformOrigin="center"
//                   cx={410}
//                   cy={329}
//                   r={2}
//                   style={{
//                     fill: "url(#piercingGrad)",
//                     strokeWidth: 1,
//                   }}
//                   gradientUnits="userSpaceOnUse"
//                 />
//               </G>
//               <Circle
//                 id="rightSeven"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 cx={411}
//                 cy={352.25}
//                 r={5.5}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="rightEight"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 cx={406}
//                 cy={339}
//                 r={2}
//                 style={{
//                   fill: "url(#piercingGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//           </G>
//           <Path
//             id="mainFace"
//             d="M409.6,300 L512,260 L 614.4,300 Q614.4,330 606,380 H418 Q409.6,330 409.6,300"
//             style={{
//               fill: "url('#faceGrad')",
//               stroke: "url(#shadowGrad)",
//               strokeWidth: 2,
//             }}
//             gradientUnits="userSpaceOnUse"
//           />
//           <G id="eyes">
//             <G id="left" transform="translate(-1,1) rotate(5, 512, 358.4)">
//               <Path
//                 id="leftEyeOne"
//                 d="M439.5,338 q20,-25 50,-2 q-25,30 -48, 1"
//                 style={{
//                   fill: "#ffffff",
//                   stroke: "#ffffff",
//                   strokeWidth: 1,
//                   opacity: 0.35,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="leftEyeTwo"
//                 d="M441,339 Q462,313 492,336 Q462,356 441, 339"
//                 style={{
//                   fill: "#efefef",
//                   stroke: "url(#eyeGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="leftEyeThree"
//                 cx={467}
//                 cy={336}
//                 r={8.5}
//                 style={{
//                   fill: "black",
//                   stroke: "#0e2089",
//                   strokeWidth: 4.5,
//                 }}
//               />
//               <Circle
//                 id="leftEyeFour"
//                 cx={469}
//                 cy={342}
//                 r={3.5}
//                 style={{
//                   fill: "white",
//                   strokeWidth: 0,
//                 }}
//               />
//               <Circle
//                 id="leftEyeFive"
//                 cx={468.5}
//                 cy={341}
//                 r={4.5}
//                 style={{
//                   fill: "rgba(255,255,255,0.4)",
//                   strokeWidth: 0,
//                 }}
//               />
//               <Path
//                 id="leftLash"
//                 d="M440,337Q440,338,436,335L446,333Q446,334,442,331L452,329Q452,330,448,327L458,325Q473,317,493,337Q466,312,441,339Z "
//                 style={{
//                   fill: "#black",
//                   stroke: "black",
//                   strokeWidth: 1.1,
//                   opacity: 0.95,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//             <G id="right" transform="translate(1,1) rotate(-5, 512, 358.4)">
//               <Path
//                 id="rightEyeOne"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M439.5,338 q20,-25 50,-2 q-25,30 -48, 1 "
//                 style={{
//                   fill: "#ffffff",
//                   stroke: "#ffffff",
//                   strokeWidth: 1,
//                   opacity: 0.35,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="rightEyetwo"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M441,339 Q462,313 492,336 Q462,356 441, 339"
//                 style={{
//                   fill: "#efefef",
//                   stroke: "url(#eyeGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="rightEyeThree"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 cx={467}
//                 cy={336}
//                 r={8.5}
//                 style={{
//                   fill: "black",
//                   stroke: "#0e2089",
//                   strokeWidth: 4.5,
//                 }}
//               />
//               <Circle
//                 id="rightEyeFour"
//                 cx={469}
//                 cy={342}
//                 r={3.5}
//                 style={{
//                   fill: "white",
//                   strokeWidth: 0,
//                 }}
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//               />
//               <Circle
//                 id="rightEyeFive"
//                 cx={468.5}
//                 cy={341}
//                 r={4.5}
//                 style={{
//                   fill: "rgba(255,255,255,0.4)",
//                   strokeWidth: 0,
//                 }}
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//               />
//               <Path
//                 id="rightLash"
//                 transform="scale(-1 1)"
//                 transformOrigin="center"
//                 d="M440,337Q440,338,436,335L446,333Q446,334,442,331L452,329Q452,330,448,327L458,325Q473,317,493,337Q466,312,441,339Z"
//                 style={{
//                   fill: "#black",
//                   stroke: "black",
//                   strokeWidth: 1,
//                   opacity: 0.95,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//             <G id="brows" transform="translate(0,-0.25)">
//               <Path
//                 id="leftBrow"
//                 d="M426,317 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -5,1 q2,-2 8,-3 q-3,-1 -5,0 q2,-2 8,-2 q-3,-1 -5,0 q3,0 7,0 q-2,-2 -5,-2 q5,-2 15,2 q-6,-3 -8,-4 q3,-1 15,3 q-6,-3 -8,-4 q5,-2 15,4 q-6,-3 -3,-3 q3,-2 13,5 q-3,-4 -4,-4 q2,-1 5,4 q-1,-2 -1,-3 q1,-1 4,2 q1,-2 0,-2 q2,-1 4,4 q1,-2 1,-4 q1,-1 3,6 q1,-2 0,-4 q1,-2 2,5 q1,5 -1,8 q-35 -10 -48, -6z"
//                 style={{
//                   fill: "url(#browGrad)",
//                   stroke: "url(#browGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="rightBrow"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M426,317 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -6,1 q2,-2 8,-3 q-3,-1 -5,1 q2,-2 8,-3 q-3,-1 -5,0 q2,-2 8,-2 q-3,-1 -5,0 q3,0 7,0 q-2,-2 -5,-2 q5,-2 15,2 q-6,-3 -8,-4 q3,-1 15,3 q-6,-3 -8,-4 q5,-2 15,4 q-6,-3 -3,-3 q3,-2 13,5 q-3,-4 -4,-4 q2,-1 5,4 q-1,-2 -1,-3 q1,-1 4,2 q1,-2 0,-2 q2,-1 4,4 q1,-2 1,-4 q1,-1 3,6 q1,-2 0,-4 q1,-2 2,5 q1,5 -1,8 q-35 -10 -48, -6z"
//                 style={{
//                   fill: "url(#browGrad)",
//                   stroke: "url(#browGrad)",
//                   strokeWidth: 1,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//           </G>
//           <G id="noseDetail">
//             <Path
//               id="nose"
//               d="M500,350 c-15,20 38,20 24,0"
//               style={{
//                 fill: "none",
//                 strokeWidth: 2,
//                 stroke: "#222222",
//                 opacity: 0.15,
//                 strokeLinecap: "round",
//               }}
//             />
//             <Path
//               id="noseHighlight"
//               d="M500,355 c12,-15 0,-30 12,-32v44"
//               fill="url(#noseHL)"
//               stroke="none"
//             />
//             <Path
//               id="noseHighlight"
//               d="M500,355 c12,-15 0,-30 12,-32v44"
//               fill="url(#noseHL)"
//               stroke="none"
//               transform="scale(-1,1)"
//               transformOrigin="center"
//             />
//           </G>
//           <Path
//             id="noseShadow"
//             d="M493,355          c19,-16 0,-35 19,-38          c19,3 0,22 19,38"
//             style={{
//               fill: "none",
//               strokeWidth: 7.5,
//               stroke: "#5c3b2a",
//               opacity: 0.25,
//               strokeLinecap: "round",
//             }}
//           />
//           <Path
//             id="glasses"
//             d="M420,310 Q460,308 495,315C500,310 525,310 530,315Q563,308 605,310 L609,308L608,313L604,316Q602,345 589,358Q549,362 534,354C527,348 527,334 525,326 C521,312 503,312 499,326M525.5,330L526,316"
//             style={{
//               fill: "none",
//               stroke: "url(#glassesGrad)",
//               strokeWidth: 10,
//             }}
//           />
//           <Path
//             id="glasses"
//             d="M420,310 Q460,308 495,315C500,310 525,310 530,315Q563,308 605,310 L609,308L608,313L604,316Q602,345 589,358Q549,362 534,354C527,348 527,334 525,326 C521,312 503,312 499,326M525.5,330L526,316"
//             style={{
//               fill: "none",
//               stroke: "url(#glassesGrad)",
//               strokeWidth: 10,
//             }}
//             transform="scale(-1, 1)"
//             transformOrigin="center"
//           />
//           <Path
//             id="nosePiercing"
//             d="M500,355 c -11,-5 -10,15 0,9"
//             style={{
//               fill: "none",
//               strokeWidth: 2,
//               stroke: "#2c205d",
//               strokeLinecap: "round",
//             }}
//           />
//         </G>
//         <G id="hat">
//           <Path
//             id="mainHat"
//             d="M414,270 c-10,-105 206,-105 198,-10 l-3,28 c-8,-35 -186,-35 -192,0z"
//             style={{
//               fill: "url('#hatGrad')",
//               stroke: "url(#hatGrad)",
//               strokeWidth: 1,
//             }}
//             gradientUnits="userSpaceOnUse"
//           />
//           <Path
//             id="peak"
//             d="M410,300 c-20,-50 236,-50 206,0 l-4,5 c2,-27 -198,-27 -192,0z"
//             style={{
//               fill: "#050505",
//               stroke: "#000000",
//               strokeWidth: 1,
//             }}
//             gradientUnits="userSpaceOnUse"
//           />
//         </G>
//         <G id="shoulders" transform="translate(0,4)">
//           <Path
//             id="leftShoulder"
//             d="M340,515 q0,-50 40,-60 l0,60"
//             style={{
//               fill: "url('#bodyGrad')",
//               stroke: "url(#bodyGrad)",
//               strokeWidth: 1,
//             }}
//             gradientUnits="userSpaceOnUse"
//           />
//           <Path
//             id="rightShoulder"
//             transform="scale(-1, 1)"
//             transformOrigin="center"
//             d="M340,515 q0,-50 40,-60 l0,60"
//             style={{
//               fill: "url('#bodyGrad')",
//               stroke: "url(#bodyGrad)",
//               strokeWidth: 1,
//             }}
//             gradientUnits="userSpaceOnUse"
//           />
//         </G>
//         <G id="mac">
//           <Path
//             id="macPath"
//             d="M387.5,515 c-10,0 -10,0 -12,-10 l-15,-140 c0,-10 0,-10 15,-10 l275,0 c15,0 15,0 15,10 l-15,140 c0,10 0,10 -15,10z"
//             style={{
//               fill: "url('#macGrad')",
//               stroke: "url(#macGrad)",
//               strokeWidth: 1,
//             }}
//             gradientUnits="userSpaceOnUse"
//             transform="translate(0,4)"
//           />
//           <G
//             id="raspberry"
//             transform="scale(0.9) translate(0,-20)"
//             transformOrigin="center"
//           >
//             <G id="raspLeaves">
//               <Path
//                 id="leftLeaf"
//                 d="M510,430 q-20,5 -25,-15 q35,0 30,15"
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 1,
//                   stroke: "#efefef",
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Path
//                 id="rightLeaf"
//                 transform="scale(-1, 1)"
//                 transformOrigin="center"
//                 d="M510,430 q-20,5 -25,-15 q35,0 30,15"
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 1,
//                   stroke: "#efefef",
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//             <G id="raspMain">
//               <Circle
//                 id="raspberry1"
//                 cx={497.5}
//                 cy={438}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry2"
//                 cx={510}
//                 cy={437.5}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry3"
//                 cx={495}
//                 cy={450}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry4"
//                 cx={507}
//                 cy={447}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry5"
//                 cx={500}
//                 cy={462.5}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry6"
//                 cx={510}
//                 cy={460}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry7"
//                 cx={512}
//                 cy={470}
//                 r={8}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//             <G
//               id="raspMain2"
//               transform="scale(-1, 1)"
//               transformOrigin="center"
//             >
//               <Circle
//                 id="raspberry8"
//                 cx={497.5}
//                 cy={438}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry9"
//                 cx={510}
//                 cy={437.5}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry10"
//                 cx={495}
//                 cy={450}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry11"
//                 cx={507}
//                 cy={447}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry12"
//                 cx={500}
//                 cy={462.5}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//               <Circle
//                 id="raspberry13"
//                 cx={510}
//                 cy={460}
//                 r={9}
//                 style={{
//                   fill: "#efefef",
//                   strokeWidth: 0,
//                 }}
//                 gradientUnits="userSpaceOnUse"
//               />
//             </G>
//           </G>
//         </G>
//       </G>
//     </G>
//     <G
//       id="layer5"
//       fill="none"
//       stroke="#ffffff"
//       strokeWidth={13}
//       strokeLinecap="round"
//       transform="scale(1.25)"
//       transformOrigin="center"
//     >
//       <G>
//         <Path
//           id="n"
//           d="M200 698v-125c0 -15 25 -30 45 -15l60,80v-87 M238 698v-87l60,80c20,15 45,0 45,-15v-125"
//           stroke="#333333"
//           transform="translate(-5,5)"
//           strokeOpacity={0.35}
//           strokeWidth={14.5}
//         />
//         <Path
//           id="n"
//           d="M200 698v-125c0 -15 25 -30 45 -15l60,80v-87 M238 698v-87l60,80c20,15 45,0 45,-15v-125"
//         />
//       </G>
//       <G>
//         <Path
//           id="n"
//           d="M438 551h40c12.5 0 25 12.5 25 25v68c0 71 -140 71 -140 3 M438 590 h20 c5 0 10 5 10 10 v37 c0 38 -68 38 -68 10"
//           stroke="#333333"
//           transform="translate(-5,5)"
//           strokeOpacity={0.35}
//           strokeWidth={14.5}
//         />
//         <Path
//           id="j"
//           d="M438 551h40c12.5 0 25 12.5 25 25v68c0 71 -140 71 -140 3 M438 590 h20 c5 0 10 5 10 10 v37 c0 38 -68 38 -68 10"
//         />
//       </G>
//       <G>
//         <Path
//           id="n"
//           d="M522.5 551h145 M522.5 590 h40c5 0 10 5 10 10 v98 M617.5 698v-98c0 -5 5 -10 10 -10h40"
//           stroke="#333333"
//           transform="translate(-5,5)"
//           strokeOpacity={0.35}
//           strokeWidth={14.5}
//         />
//         <Path
//           id="t"
//           d="M522.5 551h145 M522.5 590 h40c5 0 10 5 10 10 v98 M617.5 698v-98c0 -5 5 -10 10 -10h40"
//         />
//       </G>
//       <G>
//         <Path
//           id="n"
//           d="M727,551h30c95,15 95,130 15,146h-50c-35,0 -35,0 -35,-35v-76c0,-35 0,-35 35,-35z M732 588 h5c 70,5 70,75 -5,70h-5v-70z"
//           stroke="#333333"
//           transform="translate(-5,5)"
//           strokeOpacity={0.35}
//           strokeWidth={14.5}
//         />
//         <Path
//           id="d"
//           d="M727,551h30c95,15 95,130 15,146h-50c-35,0 -35,0 -35,-35v-76c0,-35 0,-35 35,-35z M732 588 h5c 70,5 70,75 -5,70h-5v-70z"
//         />
//       </G>
//     </G>
//   </Svg>
// )
// }
// export default SvgComponent
