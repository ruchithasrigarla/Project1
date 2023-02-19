function color()
{
    var col=["a.webp", "b.JPG","c.jpg", "d.jpg" ,"e.jpg","f.jpg", "g.webp", "h.png"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../asset/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){color()},2000)

}
