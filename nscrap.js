// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const puppeteer = require('puppeteer');
//const fs = require('fs');

// Create a Write Stream 
//var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");
var url= 'http://web.archive.org/web/20220313073224/https://medialabgroup.co.uk/';


request(url, (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was success ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

       var img4= $("img").each((index, image)=>{

            var img = $(image).attr('src');

            
            return img;
        });
/*
        var img5= $("img").each((index, image)=>{
//data-srcset"
            var img = $(image).find('srcset');

            
            return img;
        });
*/
        var icon1= $("link").each((index, rel)=>{

            var ic = $(rel);
            //console.log(ic);
            return ic;
        });
        

        var meta1= $("meta").each((index, meta)=>{

            var metacontent = $(meta);
            //console.log(ic);
            return metacontent;
        });

        var path1= $("path").each((index, svg)=>{

            var path = $(svg).find('.logo');

            //console.log(ic);
            return path;
        });


//var img1= img3.split('\n');
//console.log(icon1[28]);
//console.log(meta1[3].attribs.content);




let k=0;
var FirstImg;
var imag1;
while(k<img4.length){
    imag1= img4[k].attribs.src;
    if(imag1!=null)
    {
        imag1 = imag1.replace('/_static/images/toolbar/', '');
        imag1= imag1.replace('/_static/images/', '');
        imag1= imag1.replace('http://archiveteam.org/images/', '');
        FirstImg= imag1;
        break;
    }
    else{
        k=k+1;
    }

}
console.log("First Image: ", FirstImg);




//console.log(img4);
var FirstImgLogo;
let j=0;
var imag;
while(j<img4.length)
{
    imag= img4[j].attribs.src;
    if(imag.includes('logo')==true)
    {
        imag = imag.replace('/_static/images/toolbar/', '');
        imag= imag.replace('/_static/images/', '');
        imag= imag.replace('http://archiveteam.org/images/', '');
        FirstImgLogo= imag;
        break;
    }
    
    else{
        console.log("not found");
        j=j+1;
    }
}
console.log("First Image Logo: ", FirstImgLogo);



let i=0;
let Favicon;
while(i<icon1.length){
    if(icon1[i].attribs.rel=='icon')
    {
        Favicon=icon1[i].attribs.href;
        break;
        
    }
    else{
        i= i+1;
    }
}
console.log("Favicon: ", Favicon);


var Meta;
let L=0;
var meta2;
while(L<meta1.length)
{
    meta2= meta1[L].attribs.content;
    if((meta2 || []).includes('logo'))
    {
        meta2 = meta1[L].attribs.content;
        Meta= meta2;
        break;
    }
    
    else{
        L=L+1;
    }
}
console.log("Meta: ", Meta); 


let M=0;
let Svg;
while(M<path1.length){
    if(path1[M].attribs.d!=null)
    {
        Svg=path1[M].attribs.d;
        break;
        
    }
    else{
        M= M+1;
    }
}
console.log("Svg: ", Svg);
    
}  
    
    
    
    else{
        console.log("Request Failed ");
    }

});


