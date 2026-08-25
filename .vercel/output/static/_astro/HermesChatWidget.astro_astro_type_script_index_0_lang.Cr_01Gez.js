const b=document.getElementById("hermes-launcher-btn"),r=document.getElementById("hermes-chat-drawer"),f=document.getElementById("hermes-close-btn"),v=document.getElementById("hermes-clear-btn"),y=document.getElementById("hermes-form"),t=document.getElementById("hermes-input"),s=document.getElementById("hermes-messages"),d=document.getElementById("hermes-char-count"),l=document.getElementById("hermes-send-btn");let i=[],c=!1;const x=()=>{r&&(r.classList.remove("translate-y-8","opacity-0","pointer-events-none"),r.classList.add("translate-y-0","opacity-100","pointer-events-auto"),t?.focus())},p=()=>{r&&(r.classList.remove("translate-y-0","opacity-100","pointer-events-auto"),r.classList.add("translate-y-8","opacity-0","pointer-events-none"))};b?.addEventListener("click",()=>{r?.classList.contains("opacity-100")?p():x()});f?.addEventListener("click",p);v?.addEventListener("click",()=>{i=[],s&&(s.innerHTML=`
        <div class="flex items-start gap-2.5">
          <div class="w-6 h-6 rounded bg-slate-800 light:bg-slate-200 text-amber-400 light:text-amber-600 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
            H
          </div>
          <div class="p-3.5 rounded-xl rounded-tl-none bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800 leading-relaxed max-w-[88%] space-y-2">
            <p>Conversation history cleared. Ask me anything about Robiul's infrastructure experience or projects!</p>
          </div>
        </div>
      `)});t?.addEventListener("input",()=>{d&&t&&(d.textContent=`${t.value.length}/350`)});document.querySelectorAll(".hermes-chip").forEach(e=>{e.addEventListener("click",()=>{const n=e.textContent?.trim();n&&t&&(t.value=n,h(n))})});const o=(e,n)=>{if(!s)return;const a=document.createElement("div");a.className="flex items-start gap-2.5"+(e==="user"?" justify-end":""),e==="assistant"?a.innerHTML=`
        <div class="w-6 h-6 rounded bg-slate-800 light:bg-slate-200 text-amber-400 light:text-amber-600 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
          H
        </div>
        <div class="p-3.5 rounded-xl rounded-tl-none bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-200 light:text-slate-800 leading-relaxed max-w-[88%]">
          ${g(n)}
        </div>
      `:a.innerHTML=`
        <div class="p-3.5 rounded-xl rounded-tr-none bg-amber-500 text-slate-950 font-medium leading-relaxed max-w-[88%]">
          ${g(n)}
        </div>
      `,s.appendChild(a),s.scrollTop=s.scrollHeight},E=()=>{const e=document.createElement("div");return e.id="hermes-loading",e.className="flex items-start gap-2.5",e.innerHTML=`
      <div class="w-6 h-6 rounded bg-slate-800 light:bg-slate-200 text-amber-400 light:text-amber-600 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
        H
      </div>
      <div class="p-3.5 rounded-xl rounded-tl-none bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-400 leading-relaxed flex items-center gap-1.5 font-mono text-[11px]">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-100"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-200"></span>
        <span class="ml-1 text-slate-400">Processing query...</span>
      </div>
    `,s?.appendChild(e),s&&(s.scrollTop=s.scrollHeight),e},g=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),h=async e=>{if(!e.trim()||c)return;c=!0,l&&(l.disabled=!0),t&&(t.value=""),d&&(d.textContent="0/350"),o("user",e);const n=E();try{const a=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,history:i})}),m=await a.json();if(n.remove(),!a.ok)o("assistant",m.error||"Server error occurred. Please try again.");else{const u=m.reply||"No response returned.";o("assistant",u),i.push({role:"user",content:e}),i.push({role:"assistant",content:u})}}catch{n.remove(),o("assistant","Network error connecting to Hermes demo service. Please check your connection.")}finally{c=!1,l&&(l.disabled=!1),t?.focus()}};y?.addEventListener("submit",e=>{e.preventDefault(),t&&h(t.value)});
