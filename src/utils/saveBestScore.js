const saveBestScore = (level, moves, time, stars) => {
  const key = `level-${level}`;

  const old = JSON.parse(localStorage.getItem(key));

  if (!old) {
    localStorage.setItem(
      key,
      JSON.stringify({
        stars,
        moves,
        time,
      })
    );
    return;
  }

  const best = {
    stars: Math.max(old.stars, stars),
    moves: Math.min(old.moves, moves),
    time: Math.min(old.time, time),
  };

  localStorage.setItem(key, JSON.stringify(best));
};

export default saveBestScore;