const profile = {
    username: "Jacob",
    playTime: 300,

    getInfo() {
        return `${profile.username} has ${profile.playTime} active hours!`
    },
    changeUsername(newName) {
        profile.username = newName;
        // return profile.username;  // повернення зміни ім'я
    },
    updatePlayTime(hours) {
        profile.playTime += hours;
        // return profile.playTime;  // повернення зміни часу
    },
}   

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"