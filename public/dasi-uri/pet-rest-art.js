/* Articulated resting poses. Coordinates describe joints, not a rotated sitting sprite. */
window.PetRestArt=(function(){
 var dog=[
 [205,302,65,60,160,239,-8,185,338,240,340,267,339,282,340,0],
 [215,315,75,48,154,264,-17,172,346,234,350,279,344,302,348,0],
 [223,338,86,33,145,302,-12,161,365,216,365,290,363,316,364,0],
 [227,347,94,38,137,324,-29,174,365,205,349,284,365,317,352,.55],
 [228,343,96,47,132,332,-48,187,316,213,303,277,309,302,316,1]
 ];
 var cat=[
 [214,306,62,60,162,246,-5,182,350,229,351,266,350,282,351,0],
 [219,325,74,40,153,278,-15,174,356,219,357,285,355,304,355,0],
 [225,344,87,28,146,315,-10,167,363,209,362,286,362,314,361,0],
 [229,350,95,34,139,332,-28,174,365,211,354,285,365,320,354,.48],
 [230,345,99,42,132,336,-43,185,325,210,312,279,318,305,324,1]
 ];
 function mix(a,b,t){return a.map(function(v,i){return v+(b[i]-v)*t})}
 function pose(L,p){var arr=L.sp==='cat'?cat:dog,i=Math.min(3,Math.floor(p));return mix(arr[i],arr[i+1],Math.min(1,p-i))}
 // Each silhouette has its own shoulder, chest and hip line.
 var dogBodies=[
 [ .45,-.63, .97,-.45, 1,.18, 1,.72, .53,1, -.05,1, -.56,1, -1,.65, -1,.12, -1,-.47, -.65,-1, -.2,-1 ],
 [ .39,-.73, .93,-.56, 1,.05, 1,.63, .57,1, .05,1, -.58,1, -1,.67, -1,.19, -1,-.53, -.67,-1, -.19,-1 ],
 [ .34,-.72, .88,-.85, .98,-.36, 1,.34, .83,.92, .21,.95, -.41,.97, -.92,.88, -.99,.37, -1,-.27, -.77,-1, -.37,-.92 ],
 [ .37,-.72, .91,-.78, 1,-.24, 1,.53, .67,.94, .13,.96, -.51,1, -.91,.81, -.99,.24, -1,-.41, -.71,-.95, -.27,-.89 ],
 [ .27,-.92, .86,-1, .97,-.33, 1,.29, .75,.91, .17,.98, -.38,1, -.94,.86, -1,.28, -1,-.31, -.66,-.85, -.29,-.91 ]
 ];
 function dogBody(p,cx,cy,rx,ry){
 var i=Math.min(3,Math.floor(p)),points=mix(dogBodies[i],dogBodies[i+1],p-i);
 // Start and end at the same interpolated shoulder point for a clean seam.
 var d='M'+(cx+points[22]*rx)+' '+(cy+points[23]*ry);
 for(var j=0;j<points.length;j+=2){
 if(j%6===0)d+=' C';
 d+=(cx+points[j]*rx)+' '+(cy+points[j+1]*ry)+' ';
 }
 return '<path d="'+d+'Z"/>';
 }
 function dark(hex){return '#'+hex.slice(1).match(/../g).map(function(n){return Math.round(parseInt(n,16)*.83).toString(16).padStart(2,'0')}).join('')}
 function art(L,p,hand,blink,portraitOnly,guardian){
 var q=pose(L,Math.max(0,Math.min(4,p))),cat=L.sp==='cat',fur=/^#[0-9a-f]{6}$/i.test(L.fur||'')?L.fur:'#e2b48a';
 var cx=q[0],cy=q[1],rx=q[2]*(L.body==='long'?1.1:L.body==='slim'?.9:1),ry=q[3]*(L.body==='fluffy'?1.12:1),belly=q[15];
 var petScale=guardian?.76:1;
 var petX=guardian?91:0;
 // Keep the pet on the mat as the pose changes.
 var petY=guardian?378-petScale*(cy+ry):0;
 var bodyShape=cat?'<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'"/>':dogBody(Math.max(0,Math.min(4,p)),cx,cy,rx,ry);
 function limb(x,y,endx,endy,far){return '<path d="M'+x+' '+y+' Q'+(x-13)+' '+(endy-4)+' '+endx+' '+endy+'" fill="none" stroke="'+(far?'#b6a08c':'url(#coat)')+'" stroke-width="'+(cat?17:22)+'" stroke-linecap="round"/><ellipse cx="'+endx+'" cy="'+endy+'" rx="14" ry="9" fill="url(#coat)"/><path d="M'+(endx-4)+' '+(endy+2)+'v4m6-4v4" stroke="#a58e80" stroke-width="1" fill="none"/>'}
 var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+(portraitOnly?'60 225 310 165':'0 0 400 480')+'" role="img" aria-label="'+(cat?'고양이':'강아지')+'가 '+(['앉아 손에 기대는','몸을 낮추는','앞다리를 펴고 엎드리는','옆으로 누워 쉬는','배를 보이며 편히 쉬는'][Math.round(p)])+' 모습"><defs><linearGradient id="skyrest" x2="0" y2="1"><stop stop-color="#e5ede6"/><stop offset="1" stop-color="#fff6db"/></linearGradient><radialGradient id="coat" cx=".3" cy=".2" r=".9"><stop stop-color="'+fur+'"/><stop offset="1" stop-color="'+dark(fur)+'"/></radialGradient><radialGradient id="sunrest"><stop stop-color="#fffbea"/><stop offset="1" stop-color="#fffbea" stop-opacity="0"/></radialGradient><filter id="softrest"><feGaussianBlur stdDeviation="4"/></filter><clipPath id="bodyrest">'+bodyShape+'</clipPath></defs>';
 if(!portraitOnly)s+='<path fill="url(#skyrest)" d="M0 0h400v480H0z"/><circle cx="295" cy="127" r="170" fill="url(#sunrest)"/><g opacity=".35" fill="#91ad98"><ellipse cx="15" cy="140" rx="45" ry="130"/><ellipse cx="387" cy="128" rx="30" ry="150"/></g><path d="M0 292Q100 257 206 283T400 276V480H0" fill="#d8dfbf"/><path d="M0 360Q140 315 400 347V480H0" fill="#e8e5c8"/><g fill="#fff8e5" opacity=".8"><circle cx="43" cy="288" r="3"/><circle cx="331" cy="273" r="2"/><circle cx="357" cy="311" r="4"/></g><ellipse cx="220" cy="383" rx="158" ry="40" fill="#d2bba0" opacity=".28" filter="url(#softrest)"/><path d="M40 355Q191 328 355 354L369 409Q220 439 45 409Z" fill="#f9efdf" stroke="#e4d3bf"/><path d="M58 399Q206 427 355 400" fill="none" stroke="#eadbc9" stroke-dasharray="2 5"/>';
 if(guardian)s+='<ellipse cx="114" cy="376" rx="37" ry="8" fill="#b99d83" opacity=".24"/><ellipse cx="'+(petX+cx*petScale)+'" cy="377" rx="'+(rx*petScale+11)+'" ry="9" fill="#b99d83" opacity=".24"/>';
 s+='<g transform="translate('+petX+' '+petY+') scale('+petScale+')">';
 var tail=cat
   ?'Q355 '+(cy+45)+' 347 '+(cy-36)+' Q342 '+(cy-68)+' 323 '+(cy-39)
   :'C'+(cx+rx+8)+' '+(cy+12)+' '+(cx+rx+49)+' '+(cy+13)+' '+(cx+rx+48)+' '+(cy-21);
 s+='<path d="M'+(cx+rx-12)+' '+cy+' '+tail+'" fill="none" stroke="'+fur+'" stroke-width="'+(cat?16:18)+'" stroke-linecap="round"/>';
 var farPaws=limb(cx-28,cy+5,q[9],q[10]-18*belly,true)+limb(cx+44,cy+10,q[13],q[14]-20*belly,true);
 var raised=cat?0:Math.max(0,(belly-.45)/.55);
 s+='<g opacity="'+(1-raised)+'">'+farPaws+'</g>';
 s+='<g fill="url(#coat)" stroke="#9d8270" stroke-opacity=".23" stroke-width="1.3">'+bodyShape+'</g>';
 if(L.pat&&L.pat!=='none')s+='<g clip-path="url(#bodyrest)" opacity=".65" fill="'+(L.pat==='tux'||L.pat==='blaze'?'#fff7e8':'#765443')+'">'+(L.pat==='stripe'?'<path d="M218 '+(cy-ry)+'q-2 17 10 28q7-18 2-28m19 4q1 15 10 24q8-12 4-23m-63 7q-8 12-4 24q10-7 12-20"/>':'<ellipse cx="265" cy="'+(cy-16)+'" rx="35" ry="26"/><ellipse cx="181" cy="'+(cy+18)+'" rx="21" ry="30"/>')+'</g>';
 s+='<ellipse cx="'+(cx-1)+'" cy="'+(cy+9)+'" rx="'+(rx*.65)+'" ry="'+(ry*(.17+.57*belly))+'" fill="#fff0de" opacity="'+(.25+.7*belly)+'"/>';
 s+='<path d="M'+(cx-28)+' '+(cy-ry+10)+'q23-8 45-3M'+(cx+rx-18)+' '+(cy+6)+'q3 13-8 21" stroke="#fff7e7" stroke-opacity=".45" stroke-width="2" stroke-linecap="round" fill="none"/>';

 if(raised>0)s+='<g opacity="'+raised+'">'+farPaws+'</g>';
 s+='<g class="rest-paw-near">'+limb(cx-37,cy+5,q[7],q[8],false)+'</g>'+limb(cx+48,cy+11,q[11],q[12],false);
 if(belly>.3)s+='<g fill="#c3938d" opacity="'+(belly*.6)+'"><ellipse cx="'+q[7]+'" cy="'+q[8]+'" rx="6" ry="4"/><ellipse cx="'+q[11]+'" cy="'+q[12]+'" rx="6" ry="4"/></g>';
 s+='<g transform="translate('+q[4]+' '+q[5]+') rotate('+q[6]+')">';
 if(cat||L.ear==='up')s+='<path d="M-35-17L-34-64-7-40M13-40L43-61 39-10" fill="'+fur+'" stroke="#b29784" stroke-width="1.3"/><path d="M-29-26L-28-52-13-37M22-37L36-50 34-25" fill="#dcb6ac"/>';
 else s+='<path d="M-27-38C-45-47-58-32-60-12C-63 4-58 24-47 25C-38 23-32 7-29-7ZM24-39C45-48 56-32 58-16C61-1 57 16 48 20C40 23 33 7 29-7Z" fill="url(#coat)" stroke="#a88972" stroke-opacity=".45" stroke-width="2"/>';
 if(!cat)s+='<path d="M-38-15C-38-36-23-46-4-45C17-47 36-37 40-17C44-4 39 12 33 21C28 31 15 35 1 35C-16 35-29 29-35 18C-40 8-41-3-38-15Z" fill="url(#coat)" stroke="#a98c75" stroke-opacity=".35" stroke-width="1.4"/><path d="M-26 12C-23 3-12 2-3 7C4 2 20 2 26 10C34 22 20 32 2 33C-14 33-31 25-26 12Z" fill="#fff1df"/>';
 else s+='<path d="M-40-17Q-40-48 0-45Q42-47 43-10Q45 29 2 34Q-39 32-40-17Z" fill="url(#coat)" stroke="#a98c75" stroke-opacity=".3" stroke-width="1.2"/><ellipse cy="16" rx="'+(cat?22:29)+'" ry="18" fill="#fff1df"/>';
 if(blink||hand||p>1)s+='<path d="M-26-4Q-18 3-10-4M12-4Q20 3 28-4" stroke="#51473e" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
 else s+='<g fill="#473f37"><ellipse cx="-18" cy="-5" rx="3.6" ry="4.7"/><ellipse cx="20" cy="-5" rx="3.6" ry="4.7"/></g><g fill="#fff"><circle cx="-19" cy="-7" r="1.2"/><circle cx="19" cy="-7" r="1.2"/></g>';
 s+='<g fill="none" stroke="#b0977e" stroke-opacity=".5" stroke-width="1"><path d="M-28-29l5 2m-12 8l4 1m53-10l5-2m7 13l4-2M-22 25l4 2m35-1l4-2"/></g>';
 s+='<path d="M-5 10Q0 7 6 10L1 15Z" fill="'+(cat?'#bc8982':'#55473e')+'"/><path d="M1 15v6m0-1q-7 6-12 0m12 0q6 6 11 0" stroke="#866b5b" stroke-width="1.3" fill="none"/><g stroke="#c6ab92" fill="none" stroke-width="1">'+(cat?'<path d="M-15 14l-35-5m36 10l-37 3m67-8l34-5m-34 10l37 3"/>':'<path d="M-30-27l7-4m48 3l7 3M-35 5l5 3"/>')+'</g></g>';
 s+='</g>';
 var guardianY=246;
 var guardianTilt=hand?12:6;
 if(guardian)s+='<g role="img" aria-label="내 아바타" transform="translate(61 '+guardianY+') rotate('+guardianTilt+' 50 125)">'+guardian.art+'</g>';
 if(hand){
 // Anchor the fingertips to the forehead in the head's own coordinates.
 var angle=q[6]*Math.PI/180,contactX=cat?-5:1,contactY=cat?-39:-41;
 var x=petX+petScale*(q[4]+contactX*Math.cos(angle)-contactY*Math.sin(angle));
 var y=petY+petScale*(q[5]+contactX*Math.sin(angle)+contactY*Math.cos(angle));
 if(guardian){
 var shoulderX=145,shoulderY=guardianY+85,wristX=x-38,wristY=y-5;
 var arm='M'+shoulderX+' '+shoulderY+' Q'+(shoulderX+25)+' '+(shoulderY-1)+' '+wristX+' '+wristY;
 s+='<path d="'+arm+'" stroke="#000" stroke-opacity=".12" stroke-width="16" stroke-linecap="round" fill="none"/>'+
 '<path d="'+arm+'" stroke="'+guardian.shirt+'" stroke-width="13" stroke-linecap="round" fill="none"/>';
 }
 s+='<g transform="translate('+x+' '+y+') '+(guardian?'scale(.68)':'rotate(9)')+'" stroke-linecap="round" stroke-linejoin="round">'+
 (guardian?'':'<path d="M-152-26C-116-34-84-33-56-22L-47-10L-56 3C-87-1-118 7-152 13Z" fill="#93aaa0" stroke="#758d83" stroke-width="1.4"/>')+
 '<path d="M-56-22C-47-23-39-24-31-21L-11-15C-7-14-7-10-11-9L-26-12L-5-6C0-5 0-1-5 0L-22-4L-9 1C-5 2-6 6-10 6L-27 1C-31 8-37 10-43 6L-53 0L-60-1Z" fill="'+(guardian?guardian.skin:'#edc4ab')+'" stroke="#a87d66" stroke-width="1.2"/>'+
 '<path d="M-43-9C-37-9-33-5-32-1M-54-19L-58-4" fill="none" stroke="#bd927b" stroke-width="1"/>'+
 '<path d="M-47-19C-40-20-34-19-28-17" fill="none" stroke="#f9dfca" stroke-width="1.5"/>'+
 '</g>';
 }
 if(!portraitOnly)s+='<g fill="#b0bb8c" opacity=".75"><path d="M24 443q-4-20 5-29q9 17-5 29m350-9q-8-20 1-30q11 18-1 30"/></g>';return s+'</svg>';
 }
 return {svg:art,pose:pose};
})();
