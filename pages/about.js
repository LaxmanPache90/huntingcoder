import React from 'react'
import styles from '../styles/About.module.css'
const About = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2>Introduction</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat possimus eius natus eveniet inventore, ea qui, iusto laboriosiosam adipisci pariatur aut totam libero atque eos repellendus dolore molestiae, earum consequuntur explicabo, incidunt dignissimos numquam, consequatur aliquid! </p>

      <h2>Services offer</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat possimus eius natus eveniet inventore, ea qui, iusto laboradipisci pariatur aut totam libero atque eos repellendus dolore molestiae, earum consequuntur explicabo, incidunt dignissimos numquam, consequatur aliquid!
        we offerd following services </p>
      <ul>
        <li>servicer1</li>
        <li>servicer1</li>
        <li>servicer1</li>
        <li>servicer1</li>
        <li>servicer1</li>
      </ul>

      <h2>contact us</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam repellat possimus eius natus eveniet inventore, ea qui, iusto laboriosam </p>
    </div>
  )
}

export default About