export default function CalculationUrban(rows){
    var pcr=[]
    const Average = (arr) => {
        var sum = 0;
        for(var i =0;i<arr.length;i++) sum = sum + parseInt(arr[i])
        return(sum/arr.length)
    }
    const interpolation = (n,a,b,x,y)=>{
        return((((a-n)*y)+((n-b)*x))/(a-b));
    }
    const ratingCalc = (cracks, rav, pot, dep,rut) => {
        var rating = [];
        if(cracks > 15) rating.push(1);
        else if (cracks < 5) rating.push(interpolation(cracks,5,0,2.1,3));
        else rating.push(interpolation(cracks,15,5,1.1,2));
        if(rav > 10) rating.push(1*0.75);
        else if (rav < 5) rating.push(interpolation(rav,5,0,2.1,3)*0.75);
        else rating.push(interpolation(rav,10,5,1.1,2)*0.75);
        if(pot > 0.5) rating.push(1*0.5);
        else if (pot < 0) rating.push(interpolation(pot,0,0,2.1,3)*0.5);
        else rating.push(interpolation(pot,0.5,0,1.1,2)*0.5);
        if(dep > 5) rating.push(1*0.75);
        else if (dep < 1) rating.push(interpolation(dep,1,0,2.1,3)*0.75);
        else rating.push(interpolation(dep,5,1,1.1,2)*0.75);
        if(rut > 10) rating.push(1);
        else if (rut < 5) rating.push(interpolation(rut,5,0,2.1,3));
        else rating.push(interpolation(rut,10,5,1.1,2));
        return rating;
    }
    rows.map(async(row)=>{
        var roadLength = row.eChainage - row.sChainage;
        var rating;
        Promise.all([Average(row.cracks.split(",")),Average(row.rav.split(",")),Average(row.pot.split(",")),Average(row.dep.split(",")),Average(row.rut.split(","))])
            .then((avgValues)=>{
                var rating = ratingCalc(avgValues[0], avgValues[1], avgValues[2], avgValues[3], avgValues[4]);
                if(rating) pcr.push(Average(rating))
            })
    })
    if(pcr != []) return pcr;
}