import React from 'react';
import './Article.css';

export default function WelcomeArang() {
  return (
    <div className="article">
      <h1>Welcome Arang to the Zoo!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/orangutan.jpg`}
        alt="Welcome Arang"
        className="article-image small"
      />
      <p>
        We’re delighted to introduce Arang, a young and spirited orangutan who has recently joined
        our zoo family. Arang’s journey to our zoo is part of an international conservation
        partnership aimed at preserving endangered species and ensuring their survival in the wild.
      </p>

      <h2>Arang’s Personality</h2>
      <p>
        Arang is a bundle of energy and curiosity. Whether he's swinging from the ropes in his
        enclosure or enjoying a snack, his playful nature captivates everyone. His inquisitive
        eyes and heartwarming expressions make him an instant favorite among visitors and staff.
      </p>

      <h2>Orangutan Conservation</h2>
      <p>
        Orangutans are critically endangered due to habitat loss and poaching. By providing a safe
        and enriched environment for Arang, we’re contributing to global efforts to preserve these
        incredible primates. Every visit to our zoo supports this mission and helps fund vital
        conservation projects.
      </p>

      <h2>Interactive Exhibits</h2>
      <p>
        Come see Arang in our immersive primate exhibit! You can watch him solve puzzles during
        feeding times or swing across his custom-designed jungle gym. Want to know more? Our
        dedicated zoo staff are always ready to share fascinating facts about orangutans and their
        natural habitats.
      </p>

      <h2>Fun Facts About Orangutans</h2>
      <ul>
        <li>Orangutans share 97% of their DNA with humans!</li>
        <li>They are incredibly intelligent and can use tools to forage for food.</li>
        <li>The name "orangutan" comes from the Malay words "orang" (person) and "hutan" (forest),
            meaning "person of the forest."</li>
      </ul>

      <h2>Visit Arang Today!</h2>
      <p>
        Don’t miss the chance to meet Arang and learn about the incredible work being done to
        protect his species. Plan your visit to the primate enclosure and witness the magic of
        connecting with one of nature’s most intelligent creatures.
      </p>

      <a className="cta-button" href="/tickets">Visit Arang</a>
    </div>
  );
}
