import React, { useEffect, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  Heart,
  Music2,
  Pause,
  Sparkles as SparklesIcon,
  Star,
  Coffee,
  Utensils,
  Film,
  Plane,
  Camera,
  Moon,
} from "lucide-react";


// ============================================================
// DATA
// ============================================================

const reasons = [
  {
    icon: "🫶🏻",
    title: "You understand me.",
    text: "You somehow understand the things I don't always know how to explain.",
  },
  {
    icon: "🤍",
    title: "You respect me.",
    text: "You make me feel heard, valued, and comfortable being exactly who I am.",
  },
  {
    icon: "🍳",
    title: "You cook for me.",
    text: "And somehow food tastes even better when I know you made it for me. ❤️",
  },
  {
    icon: "✨",
    title: "You remember everything.",
    text: "The tiny details I mention once and forget about... you remember them.",
  },
  {
    icon: "👀",
    title: "You notice everything.",
    text: "You notice little changes, little moods, and the things I don't say out loud.",
  },
  {
    icon: "💗",
    title: "You make me feel cared for.",
    text: "Maybe that is what slowly made my heart stop being unsure.",
  },
  {
    icon: "🌷",
    title: "You make ordinary moments special.",
    text: "Somehow the simplest conversations and little moments stay with me.",
  },
  {
    icon: "🥹",
    title: "You make me feel seen.",
    text: "There is something beautiful about feeling noticed without having to ask.",
  },
  {
    icon: "🏡",
    title: "You feel like comfort.",
    text: "Being around you has this quiet feeling of being understood and at ease.",
  },
  {
    icon: "🌙",
    title: "You bring me peace.",
    text: "And I didn't realize how much I needed that until you became part of my life.",
  },
];

const futureThings = [
  {
    icon: <Coffee size={24} />,
    title: "Random dates",
    text: "The kind where we somehow end up talking and eating for hours.",
  },
  {
    icon: <Utensils size={24} />,
    title: "Cooking together",
    text: "Although I'm pretty sure you'll still do most of the cooking. 😂",
  },
  {
    icon: <Film size={24} />,
    title: "Movie nights",
    text: "Blankets, snacks, and arguments about what to watch.",
  },
  {
    icon: <Plane size={24} />,
    title: "Little adventures",
    text: "Places we've never seen and memories we've never made.",
  },
  {
    icon: <Camera size={24} />,
    title: "Silly pictures",
    text: "The good ones, the terrible ones, and everything between.",
  },
  {
    icon: <Moon size={24} />,
    title: "Long conversations",
    text: "The kind that make two hours feel like twenty minutes.",
  },
];


// ============================================================
// HELPERS
// ============================================================

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
}


// ============================================================
// FLOATING HEARTS
// ============================================================

function FloatingHearts({ count = 25 }) {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="floating-heart"
          style={{
            left: `${(i * 37) % 100}%`,
            animationDelay: `${(i % 10) * 0.7}s`,
            animationDuration: `${7 + (i % 6)}s`,
            fontSize: `${12 + (i % 5) * 5}px`,
          }}
        >
          {["♡", "♥", "❤", "💕", "✦", "·"][i % 6]}
        </span>
      ))}
    </div>
  );
}


// ============================================================
// PETALS
// ============================================================

function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: `${(i * 41) % 100}%`,
            animationDelay: `${(i % 9) * 0.9}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        >
          {["✿", "❀", "♡", "·"][i % 4]}
        </span>
      ))}
    </div>
  );
}


// ============================================================
// SPARKLES
// ============================================================

function Sparkles({ count = 35 }) {
  return (
    <div className="sparkles" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="sparkle"
          style={{
            left: `${(i * 43) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animationDelay: `${(i % 9) * 0.4}s`,
          }}
        >
          {i % 4 === 0 ? "✦" : "·"}
        </span>
      ))}
    </div>
  );
}


// ============================================================
// HEART EXPLOSION
// ============================================================

function HeartExplosion() {
  return (
    <div className="heart-explosion" aria-hidden="true">
      {Array.from({ length: 100 }).map((_, i) => (
        <span
          key={i}
          style={{
            "--x": `${
              Math.cos((i / 100) * Math.PI * 2) *
              (100 + (i % 7) * 35)
            }px`,
            "--y": `${
              Math.sin((i / 100) * Math.PI * 2) *
              (100 + (i % 7) * 35)
            }px`,
            "--delay": `${(i % 12) * 0.025}s`,
          }}
        >
          {["❤️", "💗", "💕", "💖", "♡", "✨"][i % 6]}
        </span>
      ))}
    </div>
  );
}


// ============================================================
// HERO
// ============================================================

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-orb orb-three" />

      <FloatingHearts />
      <Petals />
      <Sparkles count={22} />

      <div className="hero-ring ring-one" />
      <div className="hero-ring ring-two" />

      <div className="hero-content">
        <div className="hero-heart">
          <Heart size={18} fill="currentColor" />
        </div>

        <p className="eyebrow">
          A little answer, from my heart
        </p>

        <h1>
          For my
          <em>Chinnoda</em>
        </h1>

        <div className="hero-divider">
          <span />
          <Heart size={13} fill="currentColor" />
          <span />
        </div>

        <p className="hero-text">
          You asked me a question.
          <br />
          I took my time before answering...
          <br />
          because I wanted my answer to be something
          <br />
          I could give you with my whole heart.
        </p>

        <button
          className="primary-button hero-button"
          onClick={() => scrollToId("why")}
        >
          I have something to tell you
          <Heart size={17} fill="currentColor" />
        </button>

        <p className="hero-note">
          Please read it till the end. 🤍
        </p>
      </div>

      <button
        className="scroll-hint"
        onClick={() => scrollToId("why")}
      >
        SCROLL WITH ME
        <ArrowDown size={15} />
      </button>
    </section>
  );
}


// ============================================================
// WHY I WAITED
// ============================================================

function WhyIWaited() {
  return (
    <section className="section why-section" id="why">
      <div className="giant-number">01</div>

      <div className="why-card">
        <div className="mini-decoration">
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
        </div>

        <p className="eyebrow">
          Why I waited
        </p>

        <h2>
          I wasn't
          <em> saying no.</em>
        </h2>

        <p className="large-copy">
          I just wanted to understand what my heart
          was saying before I gave you an answer.
        </p>

        <p className="small-copy">
          And somewhere between all the little
          conversations, all the things you remember,
          and all the ways you care for me...
        </p>

        <div className="realization">
          <Heart size={18} fill="currentColor" />
          <span>I realized that I already knew.</span>
        </div>

        <p className="realized-text">
          <em>My heart had already answered.</em>
        </p>

        <button
          className="outline-button"
          onClick={() => scrollToId("things")}
        >
          What made me realize?
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}


// ============================================================
// THINGS I LOVE
// ============================================================

function ThingsILove() {
  return (
    <section className="section things-section" id="things">
      <div className="content-width">
        <div className="section-heading">
          <div className="section-number">02</div>

          <p className="eyebrow">
            It's the little things
          </p>

          <h2>
            The things I
            <em> love about you.</em>
          </h2>

          <p className="section-intro">
            Maybe it isn't one giant reason.
            <br />
            Maybe it's all these tiny reasons together.
          </p>
        </div>

        <div className="reason-grid">
          {reasons.map((reason, i) => (
            <article
              className="reason-card"
              key={reason.title}
              style={{
                "--delay": `${i * 80}ms`,
              }}
            >
              <div className="reason-number">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

              <Heart
                className="card-heart"
                size={16}
                fill="currentColor"
              />
            </article>
          ))}
        </div>

        <div className="center-button">
          <button
            className="primary-button"
            onClick={() => scrollToId("little-things")}
          >
            There is more I never say
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}


// ============================================================
// LITTLE THINGS / FLIP CARDS
// ============================================================

function LittleThings() {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      front: "Something I don't always say...",
      back: "I notice when you care about me. Even when you think I don't.",
      icon: "🤍",
    },
    {
      front: "Something I secretly love...",
      back: "The tiny details you remember about me.",
      icon: "✨",
    },
    {
      front: "Something that makes me smile...",
      back: "When you do something thoughtful without making a big deal about it.",
      icon: "🥹",
    },
    {
      front: "Something I realized...",
      back: "Being understood by someone feels like a kind of home.",
      icon: "🏡",
    },
  ];

  return (
    <section
      className="section little-things-section"
      id="little-things"
    >
      <div className="content-width">
        <div className="section-heading">
          <div className="section-number">03</div>

          <p className="eyebrow">
            Things I don't always say
          </p>

          <h2>
            But maybe you
            <em> should know.</em>
          </h2>

          <p className="section-intro">
            Tap the cards. I have a few little confessions.
          </p>
        </div>

        <div className="flip-grid">
          {cards.map((card, index) => (
            <button
              key={index}
              className={`flip-card ${
                openCard === index ? "flipped" : ""
              }`}
              onClick={() =>
                setOpenCard(
                  openCard === index ? null : index
                )
              }
            >
              <div className="flip-inner">
                <div className="flip-front">
                  <span className="flip-icon">
                    {card.icon}
                  </span>

                  <span>{card.front}</span>

                  <small>
                    tap to reveal ✦
                  </small>
                </div>

                <div className="flip-back">
                  <Heart size={25} fill="currentColor" />

                  <span>{card.back}</span>

                  <small>♡</small>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="center-button">
          <button
            className="outline-button"
            onClick={() => scrollToId("feeling")}
          >
            There is one more thing...
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}


// ============================================================
// FEELING
// ============================================================

function FeelingSection() {
  const feelings = [
    "understood",
    "safe",
    "happy",
    "cared for",
    "peaceful",
    "comfortable",
    "seen",
    "loved",
  ];

  return (
    <section className="feeling-section" id="feeling">
      <Sparkles count={45} />
      <FloatingHearts count={20} />

      <div className="feeling-content">
        <div className="section-number light-number">
          04
        </div>

        <p className="eyebrow light">
          How you make me feel
        </p>

        <h2>
          You make me feel...
        </h2>

        <div className="feeling-cloud">
          {feelings.map((feeling, i) => (
            <span
              key={feeling}
              className={`feeling-word word-${i}`}
            >
              {feeling}
            </span>
          ))}
        </div>

        <div className="feeling-final">
          <Heart size={21} fill="currentColor" />
          <span>Loved.</span>
          <Heart size={21} fill="currentColor" />
        </div>

        <button
          className="glass-button"
          onClick={() => scrollToId("answer")}
        >
          I think you're ready for my answer
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}


// ============================================================
// ANSWER
// ============================================================

function AnswerReveal() {
  const [revealed, setRevealed] = useState(false);
  const [countdown, setCountdown] = useState(null);

  function reveal() {
    setCountdown(3);
  }

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setRevealed(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((value) => value - 1);
    }, 900);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <section
      className={`answer-section ${
        revealed ? "is-revealed" : ""
      }`}
      id="answer"
    >
      <Sparkles count={50} />

      <div className="answer-orb answer-orb-one" />
      <div className="answer-orb answer-orb-two" />

      <div className="answer-content">
        <div className="section-number light-number">
          05
        </div>

        <p className="eyebrow light">
          Chinnoda, you waited long enough.
        </p>

        {!revealed && countdown === null && (
          <>
            <h2>
              Do you know what
              <em> my answer is?</em>
            </h2>

            <p className="answer-tease">
              Take a breath.
              <br />
              Then open it.
            </p>

            <button
              className="primary-button reveal-button"
              onClick={reveal}
            >
              Open my answer
              <Heart size={17} fill="currentColor" />
            </button>
          </>
        )}

        {!revealed && countdown !== null && (
          <div className="countdown">
            <span>{countdown}</span>
          </div>
        )}

        {revealed && (
          <>
            <HeartExplosion />

            <p className="count-text">
              I finally have my answer...
            </p>

            <div className="yes-text">
              YES
            </div>

            <div className="yes-divider">
              <span />
              <Heart size={18} fill="currentColor" />
              <span />
            </div>

            <div className="love-reveal">
              I love you, Chinnoda.
              <Heart size={25} fill="currentColor" />
            </div>

            <p className="answer-after">
              And yes...
              <br />
              <strong>It's you.</strong>
            </p>

            <button
              className="primary-button continue-button"
              onClick={() => scrollToId("letter")}
            >
              There is more...
              <ArrowRight size={17} />
            </button>
          </>
        )}
      </div>
    </section>
  );
}


// ============================================================
// LOVE LETTER
// ============================================================

function LoveLetter() {
  return (
    <section className="section letter-section" id="letter">
      <div className="letter-shadow-heart">
        <Heart size={280} fill="currentColor" />
      </div>

      <div className="letter">
        <div className="letter-decoration">
          <span>♡</span>
          <span>✦</span>
          <span>♡</span>
        </div>

        <p className="eyebrow">
          To my Chinnoda
        </p>

        <h2>
          My answer
          <em> is yes.</em>
        </h2>

        <div className="letter-line" />

        <p>
          I took my time because you matter to me
          enough that I didn't want to say something
          just because the moment was beautiful.
          I wanted to know that I meant it.
        </p>

        <p className="letter-highlight">
          And now I do.
        </p>

        <p>
          I love the way you understand me.
          I love the respect you give me.
          I love that you remember the smallest
          things about me, notice things I don't
          even notice, and somehow always find
          little ways to make me feel cared for.
        </p>

        <p>
          You make me feel seen.
          You make me feel comfortable.
          You make me feel like I don't have to
          explain every little thing for it to be
          understood.
        </p>

        <p>
          And yes...
          I absolutely love being spoiled with
          your delicious food too. 🥹❤️
        </p>

        <p>
          So if you were still waiting for my answer...
          <br />
          <strong>here it is, finally.</strong>
        </p>

        <div className="signature">
          <span>Yes, Chinnoda.</span>
          <strong>It's you. ❤️</strong>
        </div>

        <p className="letter-small">
          Written with a very full heart.
        </p>

        <button
          className="primary-button"
          onClick={() => scrollToId("future")}
        >
          Let's talk about the future
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}


// ============================================================
// FUTURE
// ============================================================

function FutureSection() {
  return (
    <section className="future-section" id="future">
      <Sparkles count={45} />

      <div className="future-glow" />

      <div className="future-content">
        <div className="section-number light-number">
          06
        </div>

        <p className="eyebrow light">
          Things I want to experience with you
        </p>

        <h2>
          We haven't made
          <em> these memories yet.</em>
        </h2>

        <p className="future-intro">
          And somehow, that's my favourite part.
          <br />
          There is still so much waiting for us.
        </p>

        <div className="future-grid">
          {futureThings.map((item) => (
            <div
              className="future-card"
              key={item.title}
            >
              <div className="future-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="glass-button"
          onClick={() => scrollToId("forever")}
        >
          Keep this forever
          <Heart size={16} fill="currentColor" />
        </button>
      </div>
    </section>
  );
}


// ============================================================
// FOREVER
// ============================================================

function Forever() {
  return (
    <section className="forever-section" id="forever">
      <div className="night-stars">
        {Array.from({ length: 110 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 47) % 100}%`,
              top: `${(i * 31) % 100}%`,
              animationDelay: `${(i % 9) * 0.35}s`,
              animationDuration: `${2 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="moon">
        <Moon size={38} />
      </div>

      <div className="forever-content">
        <Sparkles count={30} />

        <div className="section-number light-number">
          07
        </div>

        <p className="eyebrow light">
          And this is only the beginning
        </p>

        <h2>
          Maybe this isn't
          <em> the end.</em>
        </h2>

        <p className="page-one">
          Maybe this is
        </p>

        <div className="page-one-big">
          page one.
        </div>

        <p className="forever-copy">
          There are so many memories we haven't made
          yet, so many little moments waiting for us,
          and so many pages left to write.
        </p>

        <div className="forever-divider">
          <span />
          <Heart size={18} fill="currentColor" />
          <span />
        </div>

        <p className="forever-small">
          But one thing is written already.
        </p>

        <div className="choose-you">
          I choose you.
          <Heart size={30} fill="currentColor" />
        </div>

        <p className="forever-tiny">
          Today. Tomorrow. And all the little days
          in between.
        </p>

        <div className="final-signature">
          <span>For my</span>
          <strong>Chinnoda ❤️</strong>
        </div>

        <button
          className="back-top"
          onClick={() => scrollToId("home")}
        >
          <ArrowDown size={15} />
          Start again
        </button>

        <p className="made-with-love">
          Made with a very full heart · Forever yours
        </p>
      </div>
    </section>
  );
}


// ============================================================
// MUSIC
// ============================================================

function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(
    () => new Audio("/music.mp3")
  );

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.55;
    audio.preload = "auto";

    return () => {
      audio.pause();
    };
  }, [audio]);

  async function toggleMusic() {
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.log(
          "Music needs a user interaction first."
        );
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <button
      className={`music-button ${
        playing ? "playing" : ""
      }`}
      onClick={toggleMusic}
      aria-label={
        playing ? "Pause music" : "Play music"
      }
      title={
        playing ? "Pause music" : "Play music"
      }
    >
      {playing ? (
        <Pause size={19} />
      ) : (
        <Music2 size={19} />
      )}

      <span>
        {playing ? "Playing" : "Music"}
      </span>
    </button>
  );
}


// ============================================================
// APP
// ============================================================

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max =
        doc.scrollHeight - doc.clientHeight;

      setProgress(
        max > 0
          ? (window.scrollY / max) * 100
          : 0
      );
    };

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        onScroll
      );
    };
  }, []);

  useEffect(() => {
    document.title = "For my Chinnoda ❤️";
  }, []);

  return (
    <>
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />

      <main>
        <Hero />
        <WhyIWaited />
        <ThingsILove />
        <LittleThings />
        <FeelingSection />
        <AnswerReveal />
        <LoveLetter />
        <FutureSection />
        <Forever />
      </main>

      <MusicButton />
    </>
  );
}