function getRandomUrl() {
  const seed = String(Math.random());
  const url = `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`;
  return url;
}

export { getRandomUrl };
