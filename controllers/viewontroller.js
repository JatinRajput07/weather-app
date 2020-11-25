exports.homePge = (req,res)=>{
    res.status(200).render('base')
}

exports.homePge = (req,res)=>{
    res.status(200).render('home')
}
exports.getAbout = (req,res)=>{
    res.status(200).render('about')
}

exports.getWeather = (req,res)=>{
    res.status(200).render('weather')
}