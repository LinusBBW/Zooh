import React from 'react';
import './Article.css';

export default function NewOtters() {
  return (
    <div className="article">
      <h1>Welcome the New Otters to Our Zoo!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/otters.jpg`}
        alt="New Otters"
        className="article-image"
      />
      <p>
        Our Zoo family has grown! We are thrilled to announce the arrival of three playful otters
        who are already charming visitors with their antics. These adorable creatures have been
        carefully relocated to their brand-new habitat, which replicates the lush waterways they
        naturally thrive in.
      </p>

      <h2>About the Otters</h2>
      <p>
        Otters are known for their intelligence, playful behavior, and remarkable adaptability. These
        semi-aquatic mammals are native to rivers and coasts, using their webbed feet to navigate
        effortlessly through the water. They are exceptional swimmers and can hold their breath
        underwater for up to 8 minutes!
      </p>
      <p>
        The otters in our care are part of a global conservation initiative to protect endangered
        species. They are ambassadors for their wild counterparts, helping raise awareness about
        habitat destruction and pollution affecting water ecosystems worldwide.
      </p>

      <h2>Interactive Features</h2>
      <p>
        Don't just watch them swim! Our otter enclosure features an underwater viewing area, where
        you can see these incredible animals in action. Their agile movements and coordinated dives
        are sure to leave you spellbound.
      </p>

      <h2>Fun Facts</h2>
      <ul>
        <li>Otters can use tools! They often use rocks to crack open shellfish.</li>
        <li>They have dense fur with up to 1 million hair strands per square inch.</li>
        <li>A group of otters is called a "raft" — and we guarantee their teamwork is as adorable
            as it sounds!</li>
      </ul>

      <h2>Visit the Otters Today!</h2>
      <p>
        Whether you’re a first-time visitor or a zoo regular, the otters are sure to bring a smile to
        your face. Plan your visit today and don’t forget to stop by the gift shop for exclusive otter
        plush toys and merchandise. Every purchase supports our ongoing conservation efforts.
      </p>

      <a className="cta-button" href="/tickets">Plan Your Visit</a>
    </div>
  );
}
