"use strict";(self.webpackChunkwater_tracker_project=self.webpackChunkwater_tracker_project||[]).push([[549],{5608:(A,e,n)=>{n.d(e,{F:()=>i,z:()=>c});var r,t,a=n(168),s=n(5867),d=n(8612);const i=s.ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);\n  transition: all ",";\n  font-size: 16px;\n  line-height: calc(20 / 16);\n  font-weight: 500;\n  text-align: center;\n  background-color: ",";\n  color: #fff;\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);\n  }\n  &:active {\n    box-shadow: none;\n  }\n  &:disabled {\n    background-color: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: calc(24 / 18);\n  }\n"])),d.Z.animation.cubicBezier,d.Z.colors.primaryAccent,d.Z.colors.secondaryBlue),c=(0,s.ZP)(i)(t||(t=(0,a.Z)(["\n  width: 280px;\n  height: 36px;\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n    line-height: calc(24 / 18);\n    width: 336px;\n    height: 44px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 384px;\n    height: 44px;\n  }\n"])))},9780:(A,e,n)=>{n.d(e,{r:()=>i});var r,t=n(168),a=n(1087),s=n(5867),d=n(8612);const i=(0,s.ZP)(a.rU)(r||(r=(0,t.Z)(["\n  font-size: 16px;\n  line-height: calc(20 / 16);\n  color: ",";\n  text-decoration: none;\n  &:hover {\n    color: ",";\n    transition: color 0.3s ease;\n  }\n"])),d.Z.colors.primaryAccent,d.Z.colors.secondaryYellow)},7722:(A,e,n)=>{n.r(e),n.d(e,{default:()=>B});var r=n(9434),t=n(5705),a=n(1397),s=n(5608),d=n(9780),i=n(4981),c=n(6892),o=n(9588),p=n(8010),x=n(9804),l=n(5579),m=n(8414),w=n(926),h=n(4467),v=n(9526),b=n(5164),f=n(2507),g=n(98),u=n(3976),V=n(184);const B=()=>{const A=(0,r.I0)(),e=(0,r.v9)(u.x),{values:n,touched:B,errors:j,handleSubmit:Y,handleChange:y,handleBlur:P,setFieldValue:Q}=(0,t.TA)({initialValues:{email:"",password:"",repeatPassword:"",strengthScore:0},validationSchema:f.JJ,onSubmit:e=>{const{email:n,password:r}=e;A((0,a.rv)({email:n,password:r}))}});return(0,V.jsx)(v.Z,{children:(0,V.jsxs)(c.B,{onSubmit:Y,children:[(0,V.jsx)(i.Dx,{children:"Sign Up"}),(0,V.jsxs)(p.l,{children:["Enter your email",(0,V.jsx)(o.I,{type:"email",name:"email",value:n.email,onChange:y,onBlur:P,placeholder:"Email",$error:B.email&&j.email}),B.email&&j.email&&(0,V.jsx)(x.p,{children:j.email})]}),(0,V.jsxs)(p.l,{children:["Enter your password",(0,V.jsxs)(h.T,{children:[(0,V.jsx)(m.Z,{name:"password",value:n.password,onChange:A=>{const e=A.target.value,n=(0,g._D)(e);Q("password",e),Q("strengthScore",n)},onBlur:P,placeholder:"Password",$error:B.password&&j.password}),n.password&&(0,V.jsx)(w.Z,{score:n.strengthScore,password:n.password})]}),n.password&&(0,V.jsx)(l.k,{$score:n.strengthScore}),B.password&&j.password&&(0,V.jsx)(x.p,{children:j.password})]}),(0,V.jsxs)(p.l,{children:["Repeat password",(0,V.jsx)(m.Z,{name:"repeatPassword",value:n.repeatPassword,onChange:y,onBlur:P,placeholder:"Repeat password",$error:B.repeatPassword&&j.repeatPassword}),B.repeatPassword&&j.repeatPassword&&(0,V.jsx)(x.p,{children:j.repeatPassword})]}),(0,V.jsxs)(s.z,{type:"submit",disabled:e,children:["Sign up ",e&&(0,V.jsx)(b.l,{})]}),(0,V.jsx)(d.r,{to:"/signin",children:"Sign in"})]})})}},9526:(A,e,n)=>{n.d(e,{Z:()=>u});var r=n(168),t=n(5867);const a=n.p+"static/media/bg-mobile-2x.3a860bc486e5da924db8.png";var s;const d=t.ZP.div(s||(s=(0,r.Z)(["\n  display: flex;\n  position: relative;\n  picture {\n    z-index: -1;\n  }\n  form {\n    width: 100%;\n    max-width: 280px;\n  }\n  @media screen and (max-width: 767px) {\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n    background-image: url(",");\n  }\n\n  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),\n    (max-width: 767px) and (min-resolution: 192dpi) {\n    background-image: url(",");\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1439px) {\n    form {\n      width: 50%;\n      max-width: 336px;\n    }\n    picture {\n      position: absolute;\n      right: 0;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    form {\n      width: 33.3%;\n      max-width: 384px;\n    }\n    picture {\n      width: 58.1%;\n    }\n  }\n"])),"data:image/png;base64,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",a),i=n.p+"static/media/bottle-desk-1x.4ae12cf6afa588f739f5.webp",c=n.p+"static/media/bottle-desk-2x.d80a1a9762530141121a.webp",o=n.p+"static/media/bottle-tab-1x.975c800991b86f43bea4.webp",p=n.p+"static/media/bottle-tab-2x.0a5d27344a2b0f64027e.webp",x=n.p+"static/media/bottle-mob-1x.5633cc05eacb44f0afad.webp",l=n.p+"static/media/bottle-mob-2x.20338c1e04efd07969bb.webp",m=n.p+"static/media/bottle-desk-1x.abfbe239550c8bdcad14.png",w=n.p+"static/media/bottle-desk-2x.48c8622f4a853db99060.png",h=n.p+"static/media/bottle-tab-1x.c411274ae3ca19605efe.png",v=n.p+"static/media/bottle-tab-2x.019ac4ad93cc4f45efcd.png",b=n.p+"static/media/bottle-mob-1x.61472a60a11845c5980d.png",f=n.p+"static/media/bottle-mob-2x.67678305699754b34c12.png";var g=n(184);const u=A=>{let{children:e}=A;return(0,g.jsx)("section",{className:"container",children:(0,g.jsxs)(d,{children:[(0,g.jsxs)("picture",{children:[(0,g.jsx)("source",{media:"(min-width: 1440px)",srcSet:"".concat(i," 1x, ").concat(c," 2x"),type:"image/webp"}),(0,g.jsx)("source",{media:"(min-width: 1440px)",srcSet:"".concat(m," 1x, ").concat(w," 2x"),type:"image/png"}),(0,g.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(o," 1x, ").concat(p," 2x"),type:"image/webp"}),(0,g.jsx)("source",{media:"(min-width: 768px)",srcSet:"".concat(h," 1x, ").concat(v," 2x"),type:"image/png"}),(0,g.jsx)("source",{media:"(max-width: 767px)",srcSet:"".concat(x," 1x, ").concat(l," 2x"),type:"image/webp"}),(0,g.jsx)("source",{media:"(max-width: 767px)",srcSet:"".concat(b," 1x, ").concat(f," 2x"),type:"image/png"}),(0,g.jsx)("img",{src:m,alt:"Responsive"})]}),e]})})}},6892:(A,e,n)=>{n.d(e,{B:()=>a});var r,t=n(168);const a=n(5867).ZP.form(r||(r=(0,t.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 16px;\n  width: 280px;\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 384px;\n  }\n"])))},8010:(A,e,n)=>{n.d(e,{l:()=>d});var r,t=n(168),a=n(5867),s=n(8612);const d=a.ZP.label(r||(r=(0,t.Z)(["\n  font-size: 18px;\n  line-height: calc(24 / 18);\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  width: 100%;\n"])),s.Z.colors.primaryDark)},5164:(A,e,n)=>{n.d(e,{l:()=>c});var r,t,a=n(168),s=n(8612),d=n(5867);const i=(0,d.F4)(r||(r=(0,a.Z)(["\n 0% { transform: rotate(0deg)}\n 100% { transform: rotate(360deg)}\n"]))),c=d.ZP.div(t||(t=(0,a.Z)(["\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 4px solid ",";\n  border-color: "," transparent\n    "," transparent;\n  animation: "," 1.2s linear infinite;\n"])),s.Z.colors.secondaryLightBlue,s.Z.colors.secondaryLightBlue,s.Z.colors.secondaryLightBlue,i)},3976:(A,e,n)=>{n.d(e,{x:()=>r});const r=A=>A.root.isLoading}}]);
//# sourceMappingURL=549.1e285313.chunk.js.map