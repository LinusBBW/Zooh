import React from 'react';
import './Article.css';

export default function NewHabitat() {
  return (
    <div className="article">
      <h1>We’re Building a New Habitat!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/habitat.jpg`}
        alt="New Habitat"
        className="article-image small"
      />
      <p>
        Big changes are coming to the zoo! Construction is underway on a groundbreaking new habitat
        that promises to revolutionize the way visitors experience wildlife. Designed with animal
        welfare and visitor engagement in mind, this habitat will set a new standard for zoos around
        the world.
      </p>

      <h2>What Makes This Habitat Special?</h2>
      <p>
        The new habitat incorporates cutting-edge features to ensure our animals live in an
        environment that mimics their natural surroundings. From lush vegetation and flowing
        streams to open spaces for roaming and climbing, this habitat is a sanctuary where our
        animals can truly thrive.
      </p>
      <p>
        For visitors, the habitat offers unique, up-close views of the animals through glass walls,
        observation decks, and even hidden pathways that let you feel like part of the environment.
      </p>

      <h2>Sustainability at the Core</h2>
      <p>
        This project is not just about creating a home for our animals — it’s about protecting the
        planet. The habitat is being constructed with sustainable materials and features eco-friendly
        designs, such as solar panels and rainwater harvesting systems, to minimize our
        environmental footprint.
      </p>

      <h2>Species Moving In</h2>
      <p>
        Once complete, the habitat will be home to a variety of animals, including:
      </p>
      <ul>
        <li>Majestic lions, ruling their domain from rocky outcroppings.</li>
        <li>Playful meerkats, digging and exploring to their hearts’ content.</li>
        <li>Colorful birds, flying freely in an aviary filled with tropical plants.</li>
      </ul>

      <h2>Timeline for Completion</h2>
      <p>
        Construction began earlier this year and is expected to be completed within the next 12
        months. Stay tuned for updates on our progress — and be among the first to explore this
        exciting new space when it opens!
      </p>

      <h2>Support the Project</h2>
      <p>
        Your support makes projects like this possible. Consider donating or adopting an animal to
        help us create a world-class environment for our beloved creatures.
      </p>

      <a className="cta-button" href="/tickets">Support the Habitat</a>
    </div>
  );
}
