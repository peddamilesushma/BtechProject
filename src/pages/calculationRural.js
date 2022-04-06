export default function CalculationRural(rows){
    var pcr=[]
    const Average = (arr) => {
        var sum = 0;
        for(var i =0;i<arr.length;i++) sum = sum + parseInt(arr[i])
        return(sum/arr.length)
    }
    const interpolation = (n,a,b,x,y)=>{
        return((((a-n)*y)+((n-b)*x))/(a-b));
    }
    const ratingCalc = (cracks, rav, pot, patch, dep) => {
        var rating = [];
        if(cracks > 20) rating.push(1);
        else if (cracks < 10) rating.push(interpolation(cracks,10,0,2.1,3));
        else rating.push(interpolation(cracks,20,10,1.1,2));
        if(rav > 20) rating.push(1*0.75);
        else if (rav < 10) rating.push(interpolation(rav,10,0,2.1,3)*0.75);
        else rating.push(interpolation(rav,20,10,1.1,2)*0.75);
        if(pot > 1) rating.push(1*0.5);
        else if (pot < 0.5) rating.push(interpolation(pot,0.5,0,2.1,3)*0.5);
        else rating.push(interpolation(pot,1,0.5,1.1,2)*0.5);
        if(patch > 20) rating.push(1*0.75);
        else if (patch < 5) rating.push(interpolation(patch,5,0,2.1,3)*0.75);
        else rating.push(interpolation(patch,20,5,1.1,2)*0.75);
        if(dep > 5) rating.push(1*0.75);
        else if (dep < 2) rating.push(interpolation(dep,2,0,2.1,3)*0.75);
        else rating.push(interpolation(dep,5,2,1.1,2)*0.75);
        return rating;
    }
    rows.map(async(row)=>{
        var roadLength = row.eChainage - row.sChainage;
        var rating;
        Promise.all([Average(row.cracks.split(",")),Average(row.rav.split(",")),Average(row.pot.split(",")),Average(row.patch.split(",")),Average(row.dep.split(","))])
            .then((avgValues)=>{
                var rating = ratingCalc(avgValues[0], avgValues[1], avgValues[2], avgValues[3], avgValues[4]);
                if(rating) pcr.push(Average(rating))
            })
    })
    if(pcr != []) return pcr;
}
