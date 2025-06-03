import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

const musicCategories = [
    {
    name: "UltraFunk",
    tracks: [
      {
        title: "Funk Of Galactico",
        src: "https://widget.deezer.com/widget/dark/track/2717384722?tracklist=false",
      },
      {
            title: "Funk Infernal",
            src: "https://widget.deezer.com/widget/dark/track/2997709741?tracklist=false",
    },
      {
        title: "Cute Depressed",
        src: "https://widget.deezer.com/widget/dark/track/2690400322?tracklist=false",
      },
    ],
  },
  {
    name: "Hardstyle",
    tracks: [
      {
        title: "Bubblegum Bitch/We Fell Apart (Hardtyle)",
        src: "https://widget.deezer.com/widget/dark/track/2703352612?tracklist=false",
      },
      {
        title: "Dark Aria <LV2> (Solo Leveling Hardstyle)",
        src: "https://widget.deezer.com/widget/dark/track/2669344762?tracklist=false",
      },
      {
        title: "Axel F (Hardstyle Version)",
        src: "https://widget.deezer.com/widget/dark/track/1805547187?tracklist=false",
      },
    ],
  },
  {
    name: "Russian Song",
    tracks: [
      {
        title: "Matushka Ultraphunk",
        src: "https://widget.deezer.com/widget/dark/track/3031381071?tracklist=false",
      },
      {
        title: "Katyusha (Hardstyle Remix)",
        src: "https://widget.deezer.com/widget/dark/track/2649702402?tracklist=false",
      },
      {
        title: "Masha Ultraphunk",
        src: "https://widget.deezer.com/widget/dark/track/2725790281?tracklist=false",
      },
    ],
  },
  {
    name: "Aggressive music",
    tracks: [
      {
        title: "I Love You So Jumpstyle (Slowed)",
        src: "https://widget.deezer.com/widget/auto/track/3321696391?tracklist=false",
      },
        {
            title: "Untitled #13",
            src: "https://widget.deezer.com/widget/dark/track/2221818577?tracklist=false",
        },
        {
            title: "X-Slide",
            src: "https://widget.deezer.com/widget/dark/track/2789783962?tracklist=false",
        },

    ],
  },
  {
    name: "Slow Bass",
    tracks: [
      {
        title: "Miserere Allegri",
        src: "https://widget.deezer.com/widget/dark/track/2168301537?tracklist=false",
      },
      {
        title: "Space",
        src: "https://widget.deezer.com/widget/dark/track/2299939395?tracklist=false",
      },
      {
        title: "Lovely Bastards",
        src: "https://widget.deezer.com/widget/dark/track/2430479605",
      },
    ],
  },
  {
    name: "Good Vibes",
    tracks: [
      {
        title: "The Days (Notion Remix)",
        src: "https://widget.deezer.com/widget/dark/track/3069116671?tracklist=false",
      },
      {
        title: "I Ain't Worried (Slowed Remix)",
        src: "https://widget.deezer.com/widget/dark/track/1809096217?tracklist=false",
      },
      {
        title: "Dancin (Is What To Do, Get Up on The Floor)[Speed Up Krono Remix]",
        src: "https://widget.deezer.com/widget/dark/track/2159532927?tracklist=false",
      },
    ],
  },
  {
    name: "TheFatRat",
    tracks: [
      {
        title: "The Storm",
        src: "https://widget.deezer.com/widget/dark/track/2845196872?tracklist=false",
      },
      {
        title: "Xenogenesis",
        src: "https://widget.deezer.com/widget/dark/track/376222271?tracklist=false",
      },
      {
        title: "Stronger",
        src: "https://widget.deezer.com/widget/dark/track/699625722?tracklist=false",
      },
    ],
  },
  {
    name: "Trinix",
    tracks: [
      {
        title: "Emorio",
        src: "https://widget.deezer.com/widget/dark/track/2234892777?tracklist=false",
      },
      {
        title: "Sweet Dreams",
        src: "https://widget.deezer.com/widget/dark/track/881151882?tracklist=false",
      },
      {
        title: "Beautiful Day (Thank You For Sunshine)",
        src: "https://widget.deezer.com/widget/dark/track/2113795997?tracklist=false",
      },
    ],
  },
  {
    name: "Chill Music",
    tracks: [
      {
        title: "Resonance",
        src: "https://widget.deezer.com/widget/dark/track/2492444631?tracklist=false",
      },
      {
        title: "I Ain't Worried (Slowed Remix)",
        src: "https://widget.deezer.com/widget/dark/track/1809096217?tracklist=false",
      },
      {
        title: "Metamorphosis",
        src: "https://widget.deezer.com/widget/dark/track/1655692952?tracklist=false",
      },
    ],
  },
  {
    name: "Sleepy Music",
    tracks: [
      {
        title: "Interstellar",
        src: "https://widget.deezer.com/widget/dark/track/2180717977?tracklist=false",
      },
      {
        title: "Je Te Laisserai Des Mots (Cover)",
        src: "https://widget.deezer.com/widget/dark/track/1478747712?tracklist=false",
      },
      {
        title: "Rises The Moon",
        src: "https://widget.deezer.com/widget/dark/track/660437132?tracklist=false",
      },
    ],
  },
  {
    name: "Sad Songs",
    tracks: [
      {
        title: "Snowfall",
        src: "https://widget.deezer.com/widget/dark/track/1596890022?tracklist=false",
      },
      {
        title: "In This Shirt",
        src: "https://widget.deezer.com/widget/dark/track/1698747197?tracklist=false",
      },
      {
        title: "Space Song",
        src: "https://widget.deezer.com/widget/dark/track/106380372?tracklist=false",
      },
      {
        title: "Credits Song For My Death But Im The Final Boss",
        src: "https://widget.deezer.com/widget/dark/track/2857669422?tracklist=false",
      },
      {
        title: "Solitude (Felsmann + Tiley Reinterpretation)",
        src: "https://widget.deezer.com/widget/dark/track/940594572?tracklist=false",
      },
      {
        title: "Shootout",
        src: "https://widget.deezer.com/widget/dark/track/1811152957?tracklist=false",
      },
    ],
  },
  {
    name: "WTF Songs",
    tracks: [
      {
        title: "Erika Hardstyle",
        src: "https://widget.deezer.com/widget/dark/track/2534071061?tracklist=false",
      },
      {
        title: "Flikker Op",
        src: "https://widget.deezer.com/widget/dark/track/638949472?tracklist=false",
      },
      {
        title: "Cuando Se Te Moja La Tarea 2 (Super Slowed)",
        src: "https://widget.deezer.com/widget/dark/track/2855137832?tracklist=false",
      },
    ],
  },
  {
    name: "No Category",
    tracks: [
      {
        title: "We Are All Sleeping",
        src: "https://widget.deezer.com/widget/dark/track/2652313942?tracklist=false",
      },
      {
        title: "Minecraft (Phonk Version)",
        src: "https://widget.deezer.com/widget/dark/track/2323633965?tracklist=false",
      },
      {
        title: "Fairytale (Extended Mix)",
        src: "https://widget.deezer.com/widget/dark/track/2128612167?tracklist=false",
      },
    ],
  },
];

function Music() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h2 className="text-center mb-4 music-section-title">
          My favorites tracks
        </h2>
        {musicCategories.map((cat, idx) => (
          <div key={cat.name} className="mb-5">
            <h3 className="mb-3 music-category-title">{cat.name}</h3>
            <Row>
              {cat.tracks.map((track, tIdx) => (
                <Col md={6} lg={4} className="mb-4" key={track.title + tIdx}>
                  <Card className="music-card">
                    <Card.Body>
                      <iframe
                        title={track.title}
                        src={track.src}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allowTransparency="true"
                        allow="encrypted-media; clipboard-write"
                        style={{ borderRadius: "14px", border: "none" }}
                      ></iframe>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Music;