'use strict';
updateActiveTime();

function updateActiveTime () {
  setInterval (getActiveTime, 1000);
  getActiveTime();
}

function getActiveTime () {
  const currentTime = new Date ();
  getCurrentHour ();
  getCurrentMinutes ();
  getCurrentSeconds ();
  function getCurrentHour () {
    const hour = document.querySelector ('.clock__arrow--hours');
    return (hour.style.transform = `rotate(${currentTime.getHours() * 30}deg)`);
  }
  function getCurrentMinutes () {
    const minutes = document.querySelector ('.clock__arrow--minutes');
    return (minutes.style.transform = `rotate(${currentTime.getMinutes() * 6}deg)`);
  }
  function getCurrentSeconds () {
    const seconds = document.querySelector ('.clock__arrow--seconds');
    return (seconds.style.transform = `rotate(${currentTime.getSeconds() * 6}deg)`);
  }
}
