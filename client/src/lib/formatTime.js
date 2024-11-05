export function formatTime(postTime) {
    const msDif = Date.now() - (new Date(postTime));
    const minDif = Math.floor(msDif / (1000 * 60)); 
    const hourDif = Math.floor((msDif / (1000 * 60 * 60)));

    if (minDif < 1) {
        return 'Just now';
    } else if (minDif === 1){
        return minDif + ' minute ago';
    } else if (minDif < 60){
        return minDif + ' minutes ago';
    } else if (hourDif === 1){
        return hourDif + ' hour ago';
    } else if (hourDif <= 23){
        return hourDif + ' hours ago';
    } else if (hourDif >= 24 && hourDif < 48){
        return 1 + ' day ago';
    }
    return Math.floor(hourDif / 24) + ' days ago';
}