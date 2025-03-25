setTimeout(()=> {
    console.log('hello')
    setTimeout(()=>{
        console.log('hey')
        setTimeout(()=> {
            console.log('enchante')
            setTimeout(()=>{
                console.log('hi')
                setTimeout(()=>{
                    console.log('bonjour')
                }, 2000)
            }, 2000)
        }, 2000);
    }, 2000)
}, 2000);