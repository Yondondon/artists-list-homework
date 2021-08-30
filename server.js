const express = require('express');

const app = express();

const port = process.env.PORT || 8085;

const items = [
  {
    id: 1,
    title: "The Beatles",
    description: "The Beatles were an English rock band formed in Liverpool in 1960. The group, whose best-known line-up comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr, are regarded as the most influential band of all time."
  },
  {
    id: 2,
    title: "Taylor Swift",
    description: "Taylor Swift was born in West Reading, Pennsylvania. When she was 13, her parents sold their family farm in Pennsylvania and moved to Hendersonville, Tennessee, so she could pursue a career in country music in nearby Nashville."
  },
  {
    id: 3,
    title: "Michael Joseph Jackson",
    description: "Michael Joseph Jackson (August 29, 1958 – June 25, 2009) was an American singer, songwriter, and dancer. Dubbed the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century.",

  },
  {
    id: 4,
    title: "Queen",
    description: "Queen, British rock band whose fusion of heavy metal, glam rock, and camp theatrics made it one of the most popular groups of the 1970s.",

  },
  {
    id: 5,
    title: "Beyonce",
    description: "Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups of all time.",

  },
  {
    id: 6,
    title: "Madonna",
    description: "Madonna, original name Madonna Louise Ciccone, (born August 16, 1958, Bay City, Michigan, U.S.), American singer, songwriter, actress, and entrepreneur whose immense popularity in the 1980s and '90s allowed her to achieve levels of power and control",

  },

];
app.use(express.json());

app.post('/api/artists', (req, res) => {
  if (req.body.pagination === 1) {
    res.send(items.slice(0,3))
  } else if (req.body.pagination === 2) {
    res.send(items.slice(3,6))
  } else {
    res.send([])
  }
})

app.get('/api/artists/:artistsId', (req, res) => {
  const {artistsId} = req.params;
  res.send(items.find(el => el.id === +artistsId))
})


app.listen(port, () => {
  console.log(`server listeting on port ${port}`)
})
