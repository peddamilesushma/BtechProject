
const interpolation = (n,a,b,x,y)=>{
    return((((a-n)*y)+((n-b)*x))/(a-b));
}
function summation(arr){
    var sum = 0
    for(let i=0;i<arr.length;i++) sum = sum + parseInt(arr[i])
    return sum
}
function calculation(result){
    var detuct =[]
    const lcracking={0:0,0.1:4.08,0.2:4.29,0.3:4.72,0.4:5.58,0.5:6.44,0.6:7.51,0.7:8.37,0.8:9.44,0.9:10.09,1:10.94,2:17.38,3:21.24,4:23.82,5:26.18,6:27.9,7:29.61,8:30.9,9:32.19,10:33.26,20:41.2,30:46.14,40:49.57,50:52.58,60:54.72,70:57.08,80:59.01,90:60.52,100:61.59}
    const mcracking={0:0,0.1:6.87,0.2:10.52,0.3:12.66,0.4:14.81,0.5:16.31,0.6:17.6,0.7:18.88,0.8:20.39,0.9:20.82,1:21.67,2:28.33,3:32.62,4:36.05,5:38.63,6:40.77,7:42.49,8:44.21,9:45.49,10:47,20:56.01,30:61.16,40:65.02,50:68.03,60:70.6,70:72.75,80:74.68,90:76.39,100:77.9}
    const hcracking={0:0,0.1:12.88,0.2:16.31,0.3:18.67,0.4:20.6,0.5:22.53,0.6:24.46,0.7:25.97,0.8:27.9,0.9:29.18,1:30.47,2:40.56,3:46.35,4:50.21,5:53.43,6:56.01,7:57.73,8:59.44,9:60.94,10:62.23,20:71.03,30:75.97,40:79.61,50:82.4,60:84.76,70:86.7,80:88.63,90:89.91,100:91.2}
    const lpotholeDensity={0:0,0.1:2.2,0.2:6,0.3:8.6,0.4:10.8,0.5:13,0.6:15,0.7:16.8,0.8:18.4,0.9:20.2,1:21.2,2:30.6,3:36.8,4:41.6,5:45.6,6:48.8,7:51.2,8:53.4,9:55.6,10:57.4,20:70,30:77.6,40:82.8,50:87.2,60:90.2,70:93.2,80:95.6,90:98.2,100:99.4}
    const mpotholeDensity={0:0,0.1:6,0.2:11,0.3:14.8,0.4:18.4,0.5:21.4,0.6:24.4,0.7:27,0.8:29.6,0.9:31.8,1:33.8,2:48.8,3:57.8,4:65.2,5:71,6:75.6,7:80.4,8:84.2,9:87.6,10:90,20:100,30:100,40:100,50:100,60:100,70:100,80:100,90:100,100:100}
    const hpotholeDensity={0:0,0.1:20,0.2:27.4,0.3:32.6,0.4:37.2,0.5:40.8,0.6:44.2,0.7:47.2,0.8:50.2,0.9:52.4,1:54.6,2:70.2,3:79.8,4:86.6,5:91.8,6:96,7:100,8:100,9:100,10:100,20:100,30:100,40:100,50:100,60:100,70:100,80:100,90:100,100:100}
    const lpatchDensity ={0:0,0.1:0,0.2:0,0.3:0,0.4:0.81,0.5:1.22,0.6:1.42,0.7:1.83,0.8:2.23,0.9:2.43,1:2.64,2:5.07,3:6.9,4:8.72,5:10.55,6:11.97,7:13.39,8:14.6,9:15.62,10:16.63,20:23.33,30:27.59,40:30.83,50:33.27,60:100,70:100,80:100,90:100,100:100}
    const mpatchDensity ={0:0,0.1:2.84,0.2:4.26,0.3:5.27,0.4:6.29,0.5:7.3,0.6:7.91,0.7:8.52,0.8:8.92,0.9:9.53,1:10.14,2:14.4,3:17.44,4:20.08,5:22.31,6:24.75,7:26.77,8:28.4,9:30.02,10:31.64,20:41.58,30:48.28,40:53.75,50:58.01,60:100,70:100,80:100,90:100,100:100}
    const hpatchDensity ={0:0,0.1:6.49,0.2:8.72,0.3:11.36,0.4:13.59,0.5:15.21,0.6:16.43,0.7:17.44,0.8:18.26,0.9:19.07,1:19.88,2:25.76,3:30.22,4:34.28,5:37.93,6:41.18,7:44.02,8:46.65,9:49.29,10:51.72,20:67.34,30:74.24,40:77.69,50:80.32,60:100,70:100,80:100,90:100,100:100}
    const mravelingDensity={0:0,0.1:4.13,0.2:5.44,0.3:6.19,0.4:6.94,0.5:7.5,0.6:7.69,0.7:7.88,0.8:8.07,0.9:8.26,1:8.44,2:10.13,3:11.26,4:12.38,5:13.32,6:14.26,7:15.38,8:16.32,9:17.26,10:18.01,20:24.77,30:29.08,40:32.27,50:34.9,60:37.15,70:39.02,80:41.09,90:42.4,100:43.9}
    const hravelingDensity={0:0,0.1:6.38,0.2:9.01,0.3:10.32,0.4:11.44,0.5:12.57,0.6:13.51,0.7:14.26,0.8:15.01,0.9:15.57,1:15.95,2:20.83,3:24.39,4:27.77,5:30.58,6:33.4,7:35.65,8:37.71,9:40.15,10:41.84,20:55.53,30:61.91,40:66.04,50:69.04,60:71.67,70:73.73,80:75.42,90:76.74,100:77.86}
    const ldepression ={0:0,0.1:4.25,0.2:4.25,0.3:4.25,0.4:4.25,0.5:4.25,0.6:4.25,0.7:4.25,0.8:4.46,0.9:4.46,1:4.46,2:5.52,3:7.01,4:8.7,5:10.4,6:11.46,7:12.95,8:14.44,9:16.14,10:17.83,20:30.15,30:36.09,40:39.92,50:42.25,60:43.74,70:45.22,80:46.5,90:47.56,100:48.2}
    const mdepression ={0:0,0.1:8.07,0.2:8.07,0.3:8.07,0.4:8.28,0.5:8.28,0.6:8.28,0.7:8.49,0.8:8.49,0.9:8.7,1:8.92,2:11.46,3:13.8,4:16.35,5:18.68,6:20.81,7:23.14,8:25.48,9:28.03,10:30.15,20:43.1,30:50.32,40:53.5,50:55.63,60:57.11,70:58.17,80:59.02,90:59.66,100:60.51}
    const hdepression ={0:0,0.1:12.1,0.2:13.38,0.3:14.23,0.4:14.86,0.5:15.29,0.6:15.71,0.7:16.14,0.8:16.56,0.9:16.77,1:17.2,2:20.81,3:24.63,4:27.81,5:31,6:33.97,7:36.73,8:39.28,9:42.04,10:43.95,20:56.9,30:63.06,40:66.67,50:68.79,60:70.49,70:71.76,80:72.82,90:73.89,100:74.73}
    const ledge={0:0,0.1:0,0.2:1.27,0.3:1.91,0.4:2.12,0.5:2.34,0.6:2.55,0.7:2.76,0.8:2.97,0.9:2.97,1:3.18,2:4.46,3:5.31,4:6.16,5:7.22,6:8.28,7:9.13,8:9.98,9:10.4,10:11.04,20:14.44}
    const medge={0:0,0.1:4.03,0.2:4.46,0.3:5.1,0.4:5.55,0.5:5.94,0.6:6.58,0.7:7.01,0.8:7.43,0.9:7.86,1:8.28,2:11.89,3:14.23,4:16.35,5:18.26,6:19.96,7:21.02,8:22.08,9:23.14,10:23.57,20:27.81}
    const hedge={0:0,0.1:7.01,0.2:8.92,0.3:9.98,0.4:10.62,0.5:11.25,0.6:11.68,0.7:12.1,0.8:12.74,0.9:13.38,1:13.8,2:19.75,3:23.78,4:27.18,5:30.15,6:32.7,7:35.03,8:36.52,9:38.22,10:13.49,20:45.86}
    if(result.lcracks < 1){
        var a =(Math.ceil((result.lcracks)*10))/10
        var b =(Math.floor((result.lcracks)*10))/10
        if(a==b) detuct.push(lcracking[result.lcracks])
        else detuct.push(interpolation(result.lcracks,a,b,lcracking[a],lcracking[b]));
    }
    else if(result.lcracks >= 1 && result.lcracks < 10){
        var a =Math.ceil(result.lcracks)
        var b =Math.floor(result.lcracks)
        if(a==b) detuct.push(lcracking[result.lcracks])
        else detuct.push(interpolation(result.lcracks,a,b,lcracking[a],lcracking[b]));
    }
    else if(result.lcracks >= 10){
        var a =(Math.ceil(result.lcracks/10))*10
        var b =(Math.floor(result.lcracks/10))*10
        if(a==b) detuct.push(lcracking[result.lcracks])
        else detuct.push(interpolation(result.lcracks,a,b,lcracking[a],lcracking[b]));
    }
    if(result.mcracks < 1){
        var a =(Math.ceil((result.mcracks)*10))/10
        var b =(Math.floor((result.mcracks)*10))/10
        if(a==b) detuct.push(mcracking[result.mcracks])
        else detuct.push(interpolation(result.mcracks,a,b,mcracking[a],mcracking[b]));
    }
    else if(result.mcracks >= 1 && result.mcracks < 10){
        var a =Math.ceil(result.mcracks)
        var b =Math.floor(result.mcracks)
        if(a==b) detuct.push(mcracking[result.mcracks])
        else detuct.push(interpolation(result.mcracks,a,b,mcracking[a],mcracking[b]));
    }
    else if(result.mcracks >= 10){
        var a =(Math.ceil(result.mcracks/10))*10
        var b =(Math.floor(result.mcracks/10))*10
        if(a==b) detuct.push(mcracking[result.mcracks])
        else detuct.push(interpolation(result.mcracks,a,b,mcracking[a],mcracking[b]));
    }
    if(result.hcracks < 1){
        var a =(Math.ceil((result.hcracks)*10))/10
        var b =(Math.floor((result.hcracks)*10))/10
        if(a==b) detuct.push(hcracking[result.hcracks])
        else detuct.push(interpolation(result.hcracks,a,b,hcracking[a],hcracking[b]));
    }
    else if(result.hcracks >= 1 && result.hcracks < 10){
        var a =Math.ceil(result.hcracks)
        var b =Math.floor(result.hcracks)
        if(a==b) detuct.push(hcracking[result.hcracks])
        else detuct.push(interpolation(result.hcracks,a,b,hcracking[a],hcracking[b]));
    }
    else if(result.hcracks >= 10){
        var a =(Math.ceil(result.hcracks/10))*10
        var b =(Math.floor(result.hcracks/10))*10
        if(a==b) detuct.push(hcracking[result.hcracks])
        else detuct.push(interpolation(result.hcracks,a,b,hcracking[a],hcracking[b]));
    }
    if(result.lpot < 1){
        var a =(Math.ceil((result.lpot)*10))/10
        var b =(Math.floor((result.lpot)*10))/10
        if(a==b) detuct.push(lpotholeDensity[result.lpot])
        else detuct.push(interpolation(result.lpot,a,b,lpotholeDensity[a],lpotholeDensity[b]));
    }
    else if(result.lpot >= 1 && result.lpot < 10){
        var a =Math.ceil(result.lpot)
        var b =Math.floor(result.lpot)
        if(a==b) detuct.push(lpotholeDensity[result.lpot])
        else detuct.push(interpolation(result.lpot,a,b,lpotholeDensity[a],lpotholeDensity[b]));
    }
    else if(result.lpot >= 10){
        var a =(Math.ceil(result.lpot/10))*10
        var b =(Math.floor(result.lpot/10))*10
        if(a==b) detuct.push(lpotholeDensity[result.lpot])
        else detuct.push(interpolation(result.lpot,a,b,lpotholeDensity[a],lpotholeDensity[b]));
    }
    if(result.mpot < 1){
        var a =(Math.ceil((result.mpot)*10))/10
        var b =(Math.floor((result.mpot)*10))/10
        if(a==b) detuct.push(mpotholeDensity[result.mpot])
        else detuct.push(interpolation(result.mpot,a,b,mpotholeDensity[a],mpotholeDensity[b]));
    }
    else if(result.mpot >= 1 && result.mpot < 10){
        var a =Math.ceil(result.mpot)
        var b =Math.floor(result.mpot)
        if(a==b) detuct.push(mpotholeDensity[result.mpot])
        else detuct.push(interpolation(result.mpot,a,b,mpotholeDensity[a],mpotholeDensity[b]));
    }
    else if(result.mpot >= 10){
        var a =(Math.ceil(result.mpot/10))*10
        var b =(Math.floor(result.mpot/10))*10
        if(a==b) detuct.push(mpotholeDensity[result.mpot])
        else detuct.push(interpolation(result.mpot,a,b,mpotholeDensity[a],mpotholeDensity[b]));
    }
    if(result.hpot < 1){
        var a =(Math.ceil((result.hpot)*10))/10
        var b =(Math.floor((result.hpot)*10))/10
        if(a==b) detuct.push(hpotholeDensity[result.hpot])
        else detuct.push(interpolation(result.hpot,a,b,hpotholeDensity[a],hpotholeDensity[b]));
    }
    else if(result.hpot >= 1 && result.hpot < 10){
        var a =Math.ceil(result.hpot)
        var b =Math.floor(result.hpot)
        if(a==b) detuct.push(hpotholeDensity[result.hpot])
        else detuct.push(interpolation(result.hpot,a,b,hpotholeDensity[a],hpotholeDensity[b]));
    }
    else if(result.hpot >= 10){
        var a =(Math.ceil(result.hpot/10))*10
        var b =(Math.floor(result.hpot/10))*10
        if(a==b) detuct.push(hpotholeDensity[result.hpot])
        else detuct.push(interpolation(result.hpot,a,b,hpotholeDensity[a],hpotholeDensity[b]));
    }
    if(result.lpatch < 1){
        var a =(Math.ceil((result.lpatch)*10))/10
        var b =(Math.floor((result.lpatch)*10))/10
        if(a==b) detuct.push(lpatchDensity[result.lpatch])
        else detuct.push(interpolation(result.lpatch,a,b,lpatchDensity[a],lpatchDensity[b]));
    }
    else if(result.lpatch >= 1 && result.lpatch < 10){
        var a =Math.ceil(result.lpatch)
        var b =Math.floor(result.lpatch)
        if(a==b) detuct.push(lpatchDensity[result.lpatch])
        else detuct.push(interpolation(result.lpatch,a,b,lpatchDensity[a],lpatchDensity[b]));
    }
    else if(result.lpatch >= 10){
        var a =(Math.ceil(result.lpatch/10))*10
        var b =(Math.floor(result.lpatch/10))*10
        if(a==b) detuct.push(lpatchDensity[result.lpatch])
        else detuct.push(interpolation(result.lpatch,a,b,lpatchDensity[a],lpatchDensity[b]));
    }
    if(result.mpatch < 1){
        var a =(Math.ceil((result.mpatch)*10))/10
        var b =(Math.floor((result.mpatch)*10))/10
        if(a==b) detuct.push(mpatchDensity[result.mpatch])
        else detuct.push(interpolation(result.mpatch,a,b,mpatchDensity[a],mpatchDensity[b]));
    }
    else if(result.mpatch >= 1 && result.mpatch < 10){
        var a =Math.ceil(result.mpatch)
        var b =Math.floor(result.mpatch)
        if(a==b) detuct.push(mpatchDensity[result.mpatch])
        else detuct.push(interpolation(result.mpatch,a,b,mpatchDensity[a],mpatchDensity[b]));
    }
    else if(result.mpatch >= 10){
        var a =(Math.ceil(result.mpatch/10))*10
        var b =(Math.floor(result.mpatch/10))*10
        if(a==b) detuct.push(mpatchDensity[result.mpatch])
        else detuct.push(interpolation(result.mpatch,a,b,mpatchDensity[a],mpatchDensity[b]));
    }
    if(result.hpatch < 1){
        var a =(Math.ceil((result.hpatch)*10))/10
        var b =(Math.floor((result.hpatch)*10))/10
        if(a==b) detuct.push(hpatchDensity[result.hpatch])
        else detuct.push(interpolation(result.hpatch,a,b,hpatchDensity[a],hpatchDensity[b]));
    }
    else if(result.hpatch >= 1 && result.hpatch < 10){
        var a =Math.ceil(result.hpatch)
        var b =Math.floor(result.hpatch)
        if(a==b) detuct.push(hpatchDensity[result.hpatch])
        else detuct.push(interpolation(result.hpatch,a,b,hpatchDensity[a],hpatchDensity[b]));
    }
    else if(result.hpatch >= 10){
        var a =(Math.ceil(result.hpatch/10))*10
        var b =(Math.floor(result.hpatch/10))*10
        if(a==b) detuct.push(hpatchDensity[result.hpatch])
        else detuct.push(interpolation(result.hpatch,a,b,hpatchDensity[a],hpatchDensity[b]));
    }
    if(result.mrav < 1){
        var a =(Math.ceil((result.mrav)*10))/10
        var b =(Math.floor((result.mrav)*10))/10
        if(a==b) detuct.push(mravelingDensity[result.mrav])
        else detuct.push(interpolation(result.mrav,a,b,mravelingDensity[a],mravelingDensity[b]));
    }
    else if(result.mrav >= 1 && result.mrav < 10){
        var a =Math.ceil(result.mrav)
        var b =Math.floor(result.mrav)
        if(a==b) detuct.push(mravelingDensity[result.mrav])
        else detuct.push(interpolation(result.rav,a,b,mravelingDensity[a],mravelingDensity[b]));
    }
    else if(result.mrav >= 10){
        var a =(Math.ceil(result.mrav/10))*10
        var b =(Math.floor(result.mrav/10))*10
        if(a==b) detuct.push(mravelingDensity[result.mrav])
        else detuct.push(interpolation(result.mrav,a,b,mravelingDensity[a],mravelingDensity[b]));
    }
    if(result.hrav < 1){
        var a =(Math.ceil((result.hrav)*10))/10
        var b =(Math.floor((result.hrav)*10))/10
        if(a==b) detuct.push(hravelingDensity[result.hrav])
        else detuct.push(interpolation(result.hrav,a,b,hravelingDensity[a],hravelingDensity[b]));
    }
    else if(result.hrav >= 1 && result.hrav < 10){
        var a =Math.ceil(result.hrav)
        var b =Math.floor(result.hrav)
        if(a==b) detuct.push(hravelingDensity[result.hrav])
        else detuct.push(interpolation(result.hrav,a,b,hravelingDensity[a],hravelingDensity[b]));
    }
    else if(result.hrav >= 10){
        var a =(Math.ceil(result.hrav/10))*10
        var b =(Math.floor(result.hrav/10))*10
        if(a==b) detuct.push(hravelingDensity[result.hrav])
        else detuct.push(interpolation(result.hrav,a,b,hravelingDensity[a],hravelingDensity[b]));
    }
    if(result.ldep < 1){
        var a =(Math.ceil((result.ldep)*10))/10
        var b =(Math.floor((result.ldep)*10))/10
        if(a==b) detuct.push(ldepression[result.ldep])
        else detuct.push(interpolation(result.ldep,a,b,ldepression[a],ldepression[b]));
    }
    else if(result.ldep >= 1 && result.ldep < 10){
        var a =Math.ceil(result.ldep)
        var b =Math.floor(result.ldep)
        if(a==b) detuct.push(ldepression[result.ldep])
        else detuct.push(interpolation(result.ldep,a,b,ldepression[a],ldepression[b]));
    }
    else if(result.ldep >= 10){
        var a =(Math.ceil(result.ldep/10))*10
        var b =(Math.floor(result.ldep/10))*10
        if(a==b) detuct.push(ldepression[result.ldep])
        else detuct.push(interpolation(result.ldep,a,b,ldepression[a],ldepression[b]));
    }
    if(result.mdep < 1){
        var a =(Math.ceil((result.mdep)*10))/10
        var b =(Math.floor((result.mdep)*10))/10
        if(a==b) detuct.push(mdepression[result.mdep])
        else detuct.push(interpolation(result.mdep,a,b,mdepression[a],mdepression[b]));
    }
    else if(result.mdep >= 1 && result.mdep < 10){
        var a =Math.ceil(result.mdep)
        var b =Math.floor(result.mdep)
        if(a==b) detuct.push(mdepression[result.mdep])
        else detuct.push(interpolation(result.mdep,a,b,mdepression[a],mdepression[b]));
    }
    else if(result.mdep >= 10){
        var a =(Math.ceil(result.mdep/10))*10
        var b =(Math.floor(result.mdep/10))*10
        if(a==b) detuct.push(mdepression[result.mdep])
        else detuct.push(interpolation(result.mdep,a,b,mdepression[a],mdepression[b]));
    }
    if(result.hdep < 1){
        var a =(Math.ceil((result.hdep)*10))/10
        var b =(Math.floor((result.hdep)*10))/10
        if(a==b) detuct.push(hdepression[result.hdep])
        else detuct.push(interpolation(result.hdep,a,b,hdepression[a],hdepression[b]));
    }
    else if(result.hdep >= 1 && result.hdep < 10){
        var a =Math.ceil(result.hdep)
        var b =Math.floor(result.hdep)
        if(a==b) detuct.push(hdepression[result.hdep])
        else detuct.push(interpolation(result.hdep,a,b,hdepression[a],hdepression[b]));
    }
    else if(result.hdep >= 10){
        var a =(Math.ceil(result.hdep/10))*10
        var b =(Math.floor(result.hdep/10))*10
        if(a==b) detuct.push(hdepression[result.hdep])
        else detuct.push(interpolation(result.hdep,a,b,hdepression[a],hdepression[b]));
    }
    if(result.ledge < 1){
        var a =(Math.ceil((result.ledge)*10))/10
        var b =(Math.floor((result.ledge)*10))/10
        if(a==b) detuct.push(ledge[result.ledge])
        else detuct.push(interpolation(result.ledge,a,b,ledge[a],ledge[b]));
    }
    else if(result.ledge >= 1 && result.ledge < 10){
        var a =Math.ceil(result.ledge)
        var b =Math.floor(result.ledge)
        if(a==b) detuct.push(ledge[result.ledge])
        else detuct.push(interpolation(result.ledge,a,b,ledge[a],ledge[b]));
    }
    else if(result.ledge >= 10){
        var a =(Math.ceil(result.ledge/10))*10
        var b =(Math.floor(result.ledge/10))*10
        if(a==b) detuct.push(ledge[result.ledge])
        else detuct.push(interpolation(result.ledge,a,b,ledge[a],ledge[b]));
    }
    if(result.medge < 1){
        var a =(Math.ceil((result.medge)*10))/10
        var b =(Math.floor((result.medge)*10))/10
        if(a==b) detuct.push(medge[result.medge])
        else detuct.push(interpolation(result.medge,a,b,medge[a],medge[b]));
    }
    else if(result.medge >= 1 && result.medge < 10){
        var a =Math.ceil(result.medge)
        var b =Math.floor(result.medge)
        if(a==b) detuct.push(medge[result.medge])
        else detuct.push(interpolation(result.medge,a,b,medge[a],medge[b]));
    }
    else if(result.medge >= 10){
        var a =(Math.ceil(result.medge/10))*10
        var b =(Math.floor(result.medge/10))*10
        if(a==b) detuct.push(medge[result.medge])
        else detuct.push(interpolation(result.medge,a,b,medge[a],medge[b]));
    }
    if(result.hedge < 1){
        var a =(Math.ceil((result.hedge)*10))/10
        var b =(Math.floor((result.hedge)*10))/10
        if(a==b) detuct.push(hedge[result.hedge])
        else detuct.push(interpolation(result.hedge,a,b,hedge[a],hedge[b]));
    }
    else if(result.hedge >= 1 && result.hedge < 10){
        var a =Math.ceil(result.hedge)
        var b =Math.floor(result.hedge)
        if(a==b) detuct.push(hedge[result.hedge])
        else detuct.push(interpolation(result.hedge,a,b,hedge[a],hedge[b]));
    }
    else if(result.hedge >= 10){
        var a =(Math.ceil(result.hedge/10))*10
        var b =(Math.floor(result.hedge/10))*10
        if(a==b) detuct.push(hedge[result.hedge])
        else detuct.push(interpolation(result.hedge,a,b,hedge[a],hedge[b]));
    }
    return detuct
}
export default function Astm(rows){
    console.log("details",rows)
    const deductValue={1:{0:0,10:10,20:20,30:30,40:40,50:50,60:60,70:70,80:80,90:90,100:100,110:100,120:100,130:100,140:100,150:100,160:100,170:100,180:100,190:100,200:100},
                        2:{0:0,10:7.5,20:14.5,30:22,40:29.5,50:37,60:44,70:51,80:57.5,90:64,100:69.5,110:75,120:80,130:85,140:89,150:93,160:96,170:99,180:100,190:100,200:100},
                        3:{0:0,10:4,20:11,30:18,40:25,50:32,60:38.5,70:45,80:51,90:57,100:63,110:68.5,120:74,130:78.5,140:83,150:87,160:90,170:94,180:97,190:100,200:100},
                        4:{0:0,10:2,20:6,30:13,40:19.5,50:26,60:32.5,70:39,80:45.5,90:51.5,100:57.5,110:63,120:68,130:73,140:77.5,150:82,160:86,170:90,180:93,190:96,200:97},
                        5:{0:0,10:0,20:4,30:9,40:15,50:21,60:26.5,70:32.5,80:38,90:43,100:49,110:54,120:59,130:63,140:68,150:73,160:77,170:81,180:84,190:86,200:87},
                        6:{0:0,10:0,20:4,30:9,40:15,50:21,60:26.5,70:32.5,80:38,90:43,100:49,110:54,120:59,130:63,140:68,150:73,160:77,170:81,180:84,190:86,200:87}
                        }
    var pci=[]

    rows.map((row)=>{
        var total = []
        var cdv =[]
        var area = (row.eChainage - row.sChainage)*0.0375
        var result1
        if(row) result1={lcracks:summation(row.lcracks.split(","))/area,mcracks:summation(row.mcracks.split(","))/area,hcracks:summation(row.hcracks.split(","))/area,lpot:summation(row.lpot.split(","))/area,mpot:summation(row.mpot.split(","))/area,hpot:summation(row.hpot.split(","))/area,lpatch:summation(row.lpatch.split(","))/area,mpatch:summation(row.mpatch.split(","))/area,hpatch:summation(row.hpatch.split(","))/area,mrav:summation(row.mrav.split(","))/area,hrav:summation(row.hrav.split(","))/area,ldep:summation(row.ldep.split(","))/area,mdep:summation(row.mdep.split(","))/area,hdep:summation(row.hdep.split(","))/area,ledge:summation(row.ledge.split(","))/area,medge:summation(row.medge.split(","))/area,hedge:summation(row.hedge.split(","))/area}
        console.log("mahi",result1)
        var detuct = calculation(result1);
        detuct.sort(function(a, b) {
            return b - a;
        })
        var m = 1 + ((9/98)*(100-Math.max(...detuct)))
        console.log("m",m)
        if(m>=15){
            for(let i=15;i<15;i++){
                if(i==15) total.push(summation(detuct))
                else total.push(summation(detuct.slice(0,i))+2*(15-i))
            }
        }
        else if(Math.ceil(m)==Math.floor(m)){
            for(let j=0;j<=Math.ceil(m);j++){
                total.push(summation(detuct.slice(0,Math.floor(m)-j))+2*(15+j-Math.ceil(m)))
            }
        }
        else{
            for(let j=0;j<Math.ceil(m);j++){
                if(j==0) total.push(summation(detuct.slice(0,Math.floor(m)))+(detuct[Math.floor(m)]*(m-Math.floor(m)))+2*(15-Math.ceil(m)))
                else total.push(summation(detuct.slice(0,Math.floor(m)-j+1))+2*(15+j-Math.ceil(m)))
            }
        } 
        for(let i=total.length;i>0;i--){
            var a =(Math.ceil(total[total.length-i]/10))*10
            var b =(Math.floor(total[total.length-i]/10))*10
            if(i>6){
                if(a==b) cdv.push(deductValue[6][total[total.length-i]])
                else cdv.push(interpolation(total[total.length-i],a,b,deductValue[6][a],deductValue[6][b]));
            }
            else {
                if(a==b) cdv.push(deductValue[i][total[total.length-i]])
                else cdv.push(interpolation(total[total.length-i],a,b,deductValue[i][a],deductValue[i][b]));
            }
        }
        console.log("deduct",detuct)
        console.log("total",total)
        console.log("cdv",cdv)
        pci.push(100 - (Math.max(...cdv)))
    })
    return pci

}