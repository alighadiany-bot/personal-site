const items=document.querySelectorAll(".section,.work-card,.trip-card,.team-photo,.hero-copy");
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");obs.unobserve(e.target)}}),{threshold:.08});
items.forEach(x=>{x.classList.add("reveal");obs.observe(x)});
const sections=document.querySelectorAll("main section[id]"),links=document.querySelectorAll(".nav nav a");
const navObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")===`#${e.target.id}`))}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>navObs.observe(s));
