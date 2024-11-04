function pause(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}


pause(2000).then(() => console.log("2 seconds have passed"));