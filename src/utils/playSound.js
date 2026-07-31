const playSound = (sound, enabled = true) => {
  if (!enabled) return;

  const audio = new Audio(sound);

  audio.volume = 0.5;

  audio.play().catch(() => {});
};

export default playSound;