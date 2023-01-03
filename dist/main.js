(()=>{"use strict";function e(){document.getElementsByTagName("body")[0].style.backgroundImage="url('static_files/images/background_bw.jpg')";const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home"),e.setAttribute("id","home");const t=document.createElement("p");t.classList.add("title"),t.textContent="Espressions";const n=document.createElement("h1");n.classList.add("quote"),n.textContent="Coffee, then the world.";const a=document.createElement("div");a.classList.add("timing-container");const o=document.createElement("p");o.classList.add("days"),o.textContent="We are open 7 \n days a week";const s=document.createElement("p");return s.classList.add("timing"),s.textContent="8AM - 9PM",a.append(o,s),e.append(t,n,a),e}())}function t(){const t=document.createElement("nav");t.classList.add("nav");const a=document.createElement("button");a.classList.add("button-nav","active"),a.textContent="Home",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(a),e())}));const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Carte",o.addEventListener("click",(e=>{e.target.classList.contains("active")||n(o)}));const s=document.createElement("button");return s.classList.add("button-nav"),s.textContent="Our Story",s.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(s),function(){document.getElementsByTagName("body")[0].style.backgroundImage="none";const e=document.querySelector("#main");e.textContent="",e.appendChild(function(){const e="Welcome to the Espressions! We are a locally-owned coffee bar located in the trendy neighborhood of Cooke Town, dedicated to serving the highest quality coffee and espresso drinks in a modern and energetic atmosphere.\n\n  Our coffee bar was founded in 2023 by a group of coffee enthusiasts who were passionate about creating a space where people could come and enjoy expertly crafted coffee beverages. From the beginning, we have focused on sourcing the best beans from around the world and training our baristas to be coffee artisans.\n\n  In addition to our signature espresso drinks, we also offer a range of smoothies, pastries, and other treats to enjoy. We believe in supporting our community, and that means partnering with local bakeries and suppliers to bring you the best flavors and ingredients.\n\n  We are more than just a coffee bar - we are a destination where people can come to grab a quick caffeine fix or linger and enjoy the ambiance. Whether you are a regular customer or a first-time visitor, we hope you'll join us and experience the Espressions difference.".split("\n "),t=document.createElement("div");return t.classList.add("about"),e.forEach((e=>{const n=document.createElement("p");n.textContent=e,t.appendChild(n)})),t}())}())})),t.append(a,o,s),t}function n(e){document.querySelectorAll(".button-nav").forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}!function(){const n=document.querySelector("#content");n.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("img");return n.classList.add("logo"),e.appendChild(n),e.appendChild(t()),e}()),n.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e.setAttribute("id","main"),e}()),n.appendChild(function(){const e=document.createElement("footer");return e.classList.add("footer"),e.append(t()),e}()),e()}()})();
//# sourceMappingURL=main.js.map