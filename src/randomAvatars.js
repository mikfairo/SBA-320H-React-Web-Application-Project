async function getRandomUrl() {
  try {

    const response = await fetch('http://localhost:3000/get_random_seed')
    const data = await response.json()
    const seed = data.seed[0]
    const url = `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`;
    console.log(url)
    return url;
  } catch {
    const seed = Math.random()
    const url = `https://api.dicebear.com/9.x/notionists/svg?seed=${seed}`;
    return url
  }
}

export { getRandomUrl };
